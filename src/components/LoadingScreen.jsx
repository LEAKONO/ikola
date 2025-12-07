import { motion } from 'framer-motion';
import { FaAward, FaShieldAlt, FaUserTie, FaGlobe } from 'react-icons/fa';
import { useState } from 'react';

const LoadingScreen = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  
  const icons = [
    { icon: <FaAward />, delay: 0 },
    { icon: <FaShieldAlt />, delay: 0.2 },
    { icon: <FaUserTie />, delay: 0.4 },
    { icon: <FaGlobe />, delay: 0.6 }
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo - Using logo1.jpeg */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="relative mb-8 mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full blur-xl opacity-30"></div>
          
          <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
            {/* Loading screen logo - using logo1.jpeg */}
            <img 
              src="/logo1.jpeg" 
              alt="Dr. Israel Ikola Logo"
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                logoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setLogoLoaded(true)}
              onError={(e) => {
                e.target.style.display = 'none';
                // Show fallback initials
                const fallback = e.target.nextElementSibling;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            
            {/* Fallback initials (shown if logo fails to load) */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center"
              style={{ display: logoLoaded ? 'none' : 'flex' }}
            >
              <span className="text-white font-bold text-2xl">II</span>
            </div>
          </div>
        </motion.div>

        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Dr. Israel <span className="text-yellow-500">Ikola</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-400 mb-12"
        >
          Loading professional portfolio...
        </motion.p>

        {/* Animated Icons */}
        <div className="flex justify-center gap-6">
          {icons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 0, opacity: 0.5 }}
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                delay: item.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-yellow-500 text-2xl"
            >
              {item.icon}
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600"
            />
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-2 h-2 bg-yellow-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 1,
                delay: dot * 0.2,
                repeat: Infinity
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;