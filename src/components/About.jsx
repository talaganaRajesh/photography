import React from 'react';
import { 
  Camera, 
  Image, 
  Award, 
  MapPin, 
  Globe, 
  Mountain, 
  Aperture, 
  BookOpen 
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-14">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center border-b-2 border-gray-800 pb-10 tracking-tight">
          Sudhir Shivaram | Visual Storyteller
        </h1>
        
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-8">
            <div className="flex items-center space-x-5">
              <Camera className="text-blue-500" size={52} />
              <h2 className="text-3xl font-semibold">My Photographic Journey</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Born in Barcelona and inspired by the vibrant landscapes of Catalonia, my journey 
              into photography began as a child wandering through medieval streets and coastal 
              landscapes. What started as a curious exploration with my grandfather's vintage 
              Leica has transformed into a lifelong passion for capturing the nuanced stories 
              hidden in every moment.
            </p>
            <div className="flex space-x-4">
              <MapPin className="text-red-500" size={32} />
              <p className="text-gray-400">Barcelona, Spain | Global Expeditions</p>
            </div>
          </div>
          
          <div className="bg-gray-900 p-8 py-14 rounded-lg shadow-2xl space-y-6">
            <div className="flex items-center space-x-4 mb-4">
              <Image className="text-green-500" size={48} />
              <h3 className="text-2xl font-semibold">Photographic Specialties</h3>
            </div>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li className="flex items-center space-x-3">
                <Mountain size={24} className="text-purple-500" />
                <span>Landscape & Nature Photography</span>
              </li>
              <li className="flex items-center space-x-3">
                <Aperture size={24} className="text-yellow-500" />
                <span>Fine Art Portrait Sessions</span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe size={24} className="text-blue-400" />
                <span>Travel & Documentary Projects</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-gray-900 p-8 rounded-lg">
            <div className="flex justify-center mb-6">
              <Award className="text-yellow-500" size={64} />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-center">Awards & Recognition</h2>
            <ul className="space-y-4 text-gray-300">
              <li>• International Photographer of the Year, 2022</li>
              <li>• National Geographic Emerging Photographer Award</li>
              <li>• Sony World Photography Awards - Landscape Category</li>
            </ul>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg">
            <div className="flex justify-center mb-6">
              <BookOpen className="text-indigo-500" size={64} />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-center">Education & Philosophy</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Formally trained at the Barcelona School of Photography, my approach 
              blends technical precision with emotional storytelling. I believe 
              photographs are more than images—they are windows into human experience, 
              capturing the poetry of everyday moments.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-900 p-10 rounded-lg text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Create Something Extraordinary</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
            Whether you're seeking personal portraits, documentary work, or want to 
            collaborate on a creative project, I'm passionate about bringing unique 
            visual narratives to life.
          </p>
          <button className="bg-gradient-to-r from-violet-950 to-violet-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;