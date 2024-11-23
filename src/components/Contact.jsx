import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { MagicCard } from './ui/magic-card'
import { useTheme } from "next-themes";
import ShimmerButton from "@/components/ui/shimmer-button";


export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const { theme } = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the form data to your backend
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 pb-4 pt-32 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold text-center mb-12"
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <MagicCard
            gradientColor={theme === "dark" ? "#33cbb1" : "#7633cb7a"} 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="cursor-pointer border-none bg-gradient-to-br from-indigo-950 to-violet-950 p-8 rounded-2xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 text-white bg-gray-200 opacity-50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 text-white bg-gray-200 opacity-50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-200 opacity-50 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                ></textarea>
              </div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-4 py-3 bg-gradient-to-r from-blue-800 to-red-600 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-150 ease-in-out"
                >
                  <Send className="w-5 h-5 mr-2" />
                  
                  Send Message
                </button>
            </form>
          </MagicCard>

          {/* Google Map and Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-900 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-64 md:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60246.47406116811!2d84.76697113998117!3d19.308240508308163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1732202719350!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>123 Business Ave, New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>contact@example.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}