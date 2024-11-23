
import React, { useState, useRef } from 'react'
import logo from '../assets/fslogo2.png'
import video from '../assets/homevideo.mp4'

import { ChevronLeft, ChevronRight, Contact, X } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { cn } from "@/lib/utils"
import AnimatedShinyText from "@/components/ui/animated-shiny-text"
import { NeonGradientCard } from "@/components/ui/neon-gradient-card"
import SparklesText from "@/components/ui/sparkles-text"
import { MarqueeDemo } from './ReviewCard'
import Contactus from './Contact'

const images = [
  "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1731752806730-c0bcadb7e531?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://docs.material-tailwind.com/img/team-3.jpg",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
]

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null)
  const heroRef = useRef(null)
  const galleryRef = useRef(null)
  const servicesRef = useRef(null)
  const testimonialsRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const galleryInView = useInView(galleryRef, { once: true })
  const servicesInView = useInView(servicesRef, { once: true })
  const testimonialsInView = useInView(testimonialsRef, { once: true })

  const openModal = (index) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    if (selectedImage === null) return
    const newIndex = direction === 'prev' 
      ? (selectedImage - 1 + images.length) % images.length 
      : (selectedImage + 1) % images.length
    setSelectedImage(newIndex)
  }

  return (
    <div className='bg-black'>
      <motion.div 
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ duration: 4 }}
        className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center"
      >
        <video
          src={video}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-b-3xl"
          loop
          muted
          autoPlay
        ></video>
        <img src={logo} alt="logo" className="relative bg-transparent w-80" />
        {/* <h1 className='text-yellow-400 font-extrabold bg-transparent relative text-3xl'>The Lemon Studio</h1> */}

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={heroInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="z-10 flex items-center justify-center bg-transparent mt-5"
        >
          <div className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
          )}>
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span className='bg-transparent px-2'>✨ Get in Touch</span>
              <ChevronRight className="ml-1 size-3 bg-transparent text-black transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        ref={galleryRef}
        initial={{ opacity: 0, y: 50 }}
        animate={galleryInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h1 className='text-white text-center font-bold text-3xl mt-32'>Image Gallery</h1>
        <h3 className='text-slate-400 text-center mt-2'>We capture all your best moments</h3>

        <div className="columns-2 md:columns-4 gap-4 mt-10 p-10">
          {images.map((src, index) => (
            <motion.div 
              key={index} 
              className="mb-4 scroll-m-12"
              initial={{ opacity: 0, y: 20 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img
                className="w-full rounded-lg object-cover object-center cursor-pointer transition-transform hover:scale-105"
                src={src}
                alt={`gallery-photo-${index}`}
                onClick={() => openModal(index)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full h-full max-w-4xl max-h-4xl p-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={images[selectedImage]}
              alt={`Full size gallery photo ${selectedImage + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="absolute rounded-lg px-5 py-2 bottom-4 left-1/2 bg-transparent transform -translate-x-1/2 flex space-x-9">
              <button
                className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full transition-colors"
                onClick={() => navigateImage('prev')}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-10 h-10 text-black bg-transparent"/>
              </button>
              <button
                className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full transition-colors"
                onClick={() => navigateImage('next')}
                aria-label="Next image"
              >
                <ChevronRight className="w-10 h-10 text-black bg-transparent"/>
              </button>
            </div>
          </div>
        </div>
      )}

      <motion.div
        ref={servicesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-white text-center font-bold text-3xl mt-40'>Our Services</h1>
        <h3 className='text-slate-400 text-center mt-2 mb-14'>We provide the best services for you</h3>

        <div className='flex flex-row gap-16 p-10 justify-center pb-20'>
          {['Wedding Photography', 'Baby Photoshoot', 'Fashion Photography'].map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={servicesInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <NeonGradientCard className="max-w-sm items-center justify-center text-center">
                <span className="pointer-events-none font-bold z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#030203] from-35% to-[#ed8484] bg-clip-text text-center text-6xl leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                  <SparklesText text={service} className="text-black" />
                </span>
              </NeonGradientCard>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={testimonialsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h1 className='text-white text-center bg-black font-bold text-3xl pt-20'>Testimonials</h1>
        <h2 className='bg-black text-gray-400 text-center pb-16 pt-2'>What Our Clients Say About Us</h2>

        <MarqueeDemo />
      </motion.div>

      <Contactus />

    </div>
  )
}