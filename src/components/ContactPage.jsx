import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send 
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 text-center border-b-2 border-gray-800 pb-6">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-blue-500" size={36} />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">talaganarajesh@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="text-green-500" size={36} />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-300">9698544425</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="text-red-500" size={36} />
                <div>
                  <p className="font-semibold">Studio Location</p>
                  <p className="text-gray-300">Berhampur, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-black p-3 rounded-md text-white"
                  required
                />
                <input 
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-black p-3 rounded-md text-white"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-black p-3 rounded-md text-white"
                />
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="bg-black p-3 rounded-md text-white"
                >
                  <option value="">Select Service</option>
                  <option value="portrait">Portrait Session</option>
                  <option value="event">Event Photography</option>
                  <option value="commercial">Commercial Shoot</option>
                </select>
              </div>
              
              <textarea 
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-black p-3 rounded-md text-white"
                required
              />
              
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-full flex items-center justify-center space-x-2 transition duration-300"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;