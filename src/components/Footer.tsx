import { Instagram, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm mt-auto py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-sage-green">Time2Cure</h3>
            <p className="text-gray-300">
              Supporting everyone in their healing journey through traditional Indian wisdom and mindfulness practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-sage-green">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:contact@time2cure.com" className="flex items-center gap-2 text-gray-300 hover:text-sage-green transition-colors">
                <Mail size={18} />
                <span>contact@time2cure.com</span>
              </a>
              <a href="https://instagram.com/time2cure" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-sage-green transition-colors">
                <Instagram size={18} />
                <span>@time2cure</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} />
                <span>Dehradun, Uttarakhand</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-sage-green">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Yoga Classes</li>
              <li>Wellness Workshops</li>
              <li>Panchkarma Therapy</li>
              <li>Marma Therapy</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Time2Cure. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}