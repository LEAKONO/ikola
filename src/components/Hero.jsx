import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMedal, 
  FaAward, 
  FaChevronDown,
  FaGlobe,
  FaShieldAlt,
  FaUserTie
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-navy via-gray-900 to-black"
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        transition: 'transform 0.3s ease-out'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-crimson rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-gold/5 to-primary-crimson/5 rounded-full animate-spin-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[size:50px_50px] bg-[linear-gradient(to_right,#d4af37_1px,transparent_1px),linear-gradient(to_bottom,#d4af37_1px,transparent_1px)]"></div>
      </div>

      {/* Floating Badges */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-10 right-10 hidden lg:block"
      >
        <div className="relative animate-float" style={{animationDelay: '1s'}}>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-gold to-primary-crimson rounded-full blur opacity-70"></div>
          <div className="relative px-6 py-3 bg-primary-navy/90 backdrop-blur-sm rounded-full border border-primary-gold/30">
            <span className="text-primary-gold font-bold">OGW Awardee</span>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Name with Glitch Effect */}
            <div className="relative mb-8">
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
              >
                <span className="block text-white">DR.</span>
                <span className="block gradient-text">ISRAEL IKOLA</span>
              </motion.h1>
              
              {/* Title Badges */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {['OGW', 'CBS', 'F.MEL', 'F.ISRM', 'SRMP', 'MDIS'].map((badge, idx) => (
                  <motion.span
                    key={badge}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 * idx, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-sm font-semibold text-white hover:border-primary-gold/50 hover:bg-primary-gold/10 transition-all duration-300"
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Animated Typing Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mb-12 h-24"
            >
              <TypeAnimation
                sequence={[
                  'Expert in Diplomacy & International Security',
                  2000,
                  'Senior Government & Diplomatic Leader',
                  2000,
                  'Honorary Doctorate Recipient',
                  2000,
                  'Nationally & Internationally Recognized',
                  2000,
                ]}
                wrapper="div"
                speed={50}
                repeat={Infinity}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300"
              />
            </motion.div>

            {/* Career Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="max-w-4xl mx-auto mb-16"
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                My expertise in diplomacy, international security, and strategic governance is supported by a Ph.D. in International Studies, dual master's degrees, and specialized diplomas. Recognized nationally and internationally through honors, awards, and honorary doctorates.
              </p>
            </motion.div>

            {/* Action Buttons & Contact */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20"
            >
              {/* Contact Card */}
              <div className="glass-card p-6 max-w-md">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* Phone */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-navy/50">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-gold to-yellow-600 flex items-center justify-center">
                      <FaPhone className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a 
                        href="tel:+254110006454" 
                        className="text-white font-semibold hover:text-primary-gold transition-colors"
                      >
                        +254 110 006454
                      </a>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-navy/50">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-crimson to-red-600 flex items-center justify-center">
                      <FaEnvelope className="text-white text-lg" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a 
                        href="mailto:israelikola@gmail.com" 
                        className="text-white font-semibold hover:text-primary-gold transition-colors"
                      >
                        israelikola@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: <FaGlobe />, value: '50+', label: 'State Visits' },
                  { icon: <FaShieldAlt />, value: '20+', label: 'Programs' },
                  { icon: <FaUserTie />, value: '100+', label: 'Engagements' },
                  { icon: <FaAward />, value: '10+', label: 'Awards' }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 + (idx * 0.1), type: "spring" }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm"
                  >
                    <div className="text-2xl text-primary-gold mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-primary-gold/50 rounded-full flex justify-center">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-1 h-3 bg-primary-gold rounded-full mt-2"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Medals */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-20 left-10 hidden lg:block"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-gold/20 to-transparent rounded-full blur-xl"></div>
          <div className="relative p-4 bg-primary-navy/50 backdrop-blur-sm rounded-2xl border border-primary-gold/30">
            <div className="flex items-center gap-3">
              <FaMedal className="text-primary-gold text-3xl" />
              <div>
                <h3 className="text-white font-bold">National Honors</h3>
                <p className="text-primary-gold text-sm">Order of the Grand Warrior</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;