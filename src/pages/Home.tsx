import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Bot as Lotus, Phone, Mail, Send, Apple as WhatsApp } from 'lucide-react';
import { motion } from 'framer-motion';

interface Workshop {
  id: number;
  title: string;
  date: string;
  description: string;
  coverImage: string;
  images: string[];
}

interface WorkshopRequest {
  name: string;
  email: string;
  phone: string;
  workshopId: number;
}

const backgroundImages = [
  "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=2000",
  "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=2000",
  "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&w=2000",
];

const workshops: Workshop[] = [
  {
    id: 1,
    title: "Morning Flow Workshop",
    date: "March 15, 2024",
    description: "An energizing morning yoga session focusing on sun salutations and dynamic movements.",
    coverImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800"
    ]
  },
  {
    id: 2,
    title: "Mindful Meditation Retreat",
    date: "March 22, 2024",
    description: "A peaceful retreat combining gentle yoga with mindfulness meditation practices.",
    coverImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800",
    images: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800"
    ]
  },
  {
    id: 3,
    title: "Power Yoga Intensive",
    date: "March 29, 2024",
    description: "An advanced workshop focusing on strength, balance, and dynamic flows.",
    coverImage: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800",
    images: [
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=800"
    ]
  }
];

function Home() {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [formData, setFormData] = useState<WorkshopRequest>({
    name: '',
    email: '',
    phone: '',
    workshopId: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    if (selectedWorkshop) {
      setCurrentImageIndex((prev) => 
        prev === selectedWorkshop.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const previousImage = () => {
    if (selectedWorkshop) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedWorkshop.images.length - 1 : prev - 1
      );
    }
  };

  const handleWhatsAppRedirect = () => {
    const message = `Hi! I'm interested in joining the ${selectedWorkshop?.title} workshop on ${selectedWorkshop?.date}. My name is ${formData.name}.`;
    const whatsappUrl = `https://wa.me/+1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsAppRedirect();
  };

  return (
    <>
      {/* Background Slideshow */}
      <div className="fixed inset-0 -z-10">
        {backgroundImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBgIndex ? 'opacity-30' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-70" />
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Welcome to Time2Cure</h1>
          <p className="text-xl text-blue-300">Discover Our Transformative Workshops</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              onClick={() => {
                setSelectedWorkshop(workshop);
                setCurrentImageIndex(0);
                setFormData(prev => ({ ...prev, workshopId: workshop.id }));
              }}
              className="bg-blue-900/10 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:bg-blue-900/20"
            >
              <div className="relative h-64">
                <img
                  src={workshop.coverImage}
                  alt={workshop.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{workshop.title}</h3>
                <p className="text-sm text-blue-400 mb-2">{workshop.date}</p>
                <p className="text-gray-300">{workshop.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Request Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-blue-900/10 backdrop-blur-sm rounded-xl p-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Request to Join a Workshop</h2>
            <p className="text-gray-300 mb-8">Transform your practice with our specialized workshops. Fill out the form below to get started on your journey.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 text-left">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg bg-black/60 text-white border border-blue-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg bg-black/60 text-white border border-blue-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1 text-left">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-black/60 text-white border border-blue-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <WhatsApp className="h-5 w-5" />
                <span>Contact via WhatsApp</span>
              </button>
            </form>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm border-t border-blue-900 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Lotus className="h-8 w-8 text-blue-500" />
                <h2 className="text-xl font-bold text-white">Time2Cure</h2>
              </div>
              <p className="text-gray-400">Transform your life through the power of yoga and mindfulness.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-5 w-5" />
                  <span>info@time2cure.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-5 w-5" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <WhatsApp className="h-5 w-5" />
                  <span>WhatsApp Available</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
              <p className="text-gray-400">Stay connected with us on social media for daily inspiration and updates.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-900 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Time2Cure. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Slideshow Modal */}
      {selectedWorkshop && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-6xl mx-4">
            <button
              onClick={() => setSelectedWorkshop(null)}
              className="absolute top-4 right-4 text-white hover:text-blue-500 z-10"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="relative aspect-video">
              <img
                src={selectedWorkshop.images[currentImageIndex]}
                alt={`${selectedWorkshop.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
              />

              <button
                onClick={previousImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-75 p-2 rounded-full text-white hover:text-blue-500"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-75 p-2 rounded-full text-white hover:text-blue-500"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 px-4 py-2 rounded-full text-white">
                {currentImageIndex + 1} / {selectedWorkshop.images.length}
              </div>
            </div>

            <div className="text-center mt-4">
              <h2 className="text-2xl font-bold text-white">{selectedWorkshop.title}</h2>
              <p className="text-blue-500">{selectedWorkshop.date}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;