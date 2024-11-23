import React from 'react';
import { 
  Camera, 
  Image, 
  Video, 
  Star, 
  CheckCircle 
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Camera className="text-blue-500" size={48} />,
      title: 'Portrait Sessions',
      description: 'Professional photoshoot capturing your unique personality',
      details: [
        'Up to 2-hour session',
        '50 professionally edited images',
        'Studio or outdoor location',
        'High-resolution digital files'
      ]
    },
    {
      icon: <Video className="text-green-500" size={48} />,
      title: 'Event Photography',
      description: 'Comprehensive coverage for weddings, corporate events, and special occasions',
      details: [
        'Full day event coverage',
        'Multiple photographers',
        'Highlight album',
        'Online gallery sharing'
      ]
    },
    {
      icon: <Image className="text-purple-500" size={48} />,
      title: 'Commercial & Brand',
      description: 'Professional imagery for businesses and marketing needs',
      details: [
        'Product and lifestyle shoots',
        'Branding consultation',
        'Unlimited commercial usage rights',
        'Customized image packages'
      ]
    }
  ];

  const pricingPlans = [
    {
      title: 'Basic',
      price: 299,
      features: [
        'Standard Photoshoot',
        '30 Edited Images',
        'Digital Delivery',
        '1 Location'
      ],
      highlight: false
    },
    {
      title: 'Professional',
      price: 599,
      features: [
        'Extended Photoshoot',
        '75 Edited Images',
        'Studio & Location',
        'Professional Editing',
        'Online Gallery'
      ],
      highlight: true
    },
    {
      title: 'Premium',
      price: 999,
      features: [
        'Full Day Coverage',
        '150 Edited Images',
        'Multiple Locations',
        'Albums & Prints',
        'Personal Consultation'
      ],
      highlight: false
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-16 pt-4 text-center border-b-2 border-gray-800 pb-6">
          Our Photography Services
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-8 rounded-lg text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2 text-gray-400">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center justify-center space-x-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-16">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-lg transition-all duration-300 ${
                  plan.highlight 
                    ? 'bg-blue-900 border-2 border-blue-600 scale-105 shadow-2xl' 
                    : 'bg-gray-900'
                }`}
              >
                {plan.highlight && (
                  <div className="flex justify-center mb-4">
                    <Star className="text-yellow-500" size={32} />
                  </div>
                )}
                <h3 className="text-3xl font-bold mb-4">{plan.title}</h3>
                <p className="text-5xl font-bold text-blue-500 mb-6">${plan.price}</p>
                <ul className="space-y-3 text-gray-300 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle size={20} className="text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
                  plan.highlight 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;