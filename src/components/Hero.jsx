// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMedal, FaAward } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-navy via-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-gold rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-crimson rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Titles with Animation */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              DR. <span className="text-primary-gold">ISRAEL IKOLA</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <span className="px-4 py-2 bg-primary-gold/20 text-primary-gold rounded-full text-sm font-semibold animate-pulse-gold">OGW</span>
              <span className="px-4 py-2 bg-primary-crimson/20 text-primary-cream rounded-full text-sm font-semibold">CBS</span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">F.MEL</span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold">F.ISRM</span>
            </div>
          </motion.div>

          {/* Career Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              Expert in Diplomacy, International Security & Strategic Governance. 
              Senior Government & Diplomatic Leader. Honorary Doctorate Recipient. 
              Nationally & Internationally Recognized Professional.
            </p>
          </motion.div>

          {/* Contact & Honors Badge */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-primary-gold/30 animate-glow">
              <div className="flex items-center gap-4 mb-4">
                <FaPhone className="text-primary-gold text-xl" />
                <a href="tel:+254110006454" className="text-white hover:text-primary-gold transition-colors">
                  +254 110 006454
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-primary-gold text-xl" />
                <a href="mailto:israelikola@gmail.com" className="text-white hover:text-primary-gold transition-colors">
                  israelikola@gmail.com
                </a>
              </div>
            </div>

            {/* Honors Badge */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-gold to-primary-crimson rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative px-8 py-6 bg-primary-navy rounded-lg">
                <div className="flex items-center gap-3">
                  <FaMedal className="text-primary-gold text-3xl" />
                  <div>
                    <h3 className="text-white font-bold">National Honors</h3>
                    <p className="text-primary-gold text-sm">Order of the Grand Warrior</p>
                    <p className="text-primary-cream text-sm">Chief of Burning Spear</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-primary-gold rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary-gold rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;