import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMedal, 
  FaDownload,
  FaExternalLinkAlt
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

  // Function to handle CV view/download
  const handleViewCV = () => {
    // Open CV in a new tab
    window.open('https://drive.google.com/file/d/1sTuNGbKQ4E5NU7jhzuMPCyE8cpernrBl/view?usp=sharing', '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-gradient-to-r from-yellow-500/5 to-red-600/5 rounded-full animate-spin-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[size:30px_30px] sm:bg-[size:50px_50px] bg-[linear-gradient(to_right,#d4af37_1px,transparent_1px),linear-gradient(to_bottom,#d4af37_1px,transparent_1px)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 pb-12 sm:pt-24 sm:pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Mobile First: Image at the top, content below */}
          <div className="flex flex-col-reverse lg:flex-row lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Image Section - Comes first on mobile, second on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:hidden order-first mb-8 sm:mb-12"
            >
              {/* Mobile: Image at the top */}
              <div className="relative mx-auto max-w-xs sm:max-w-sm">
                {/* Decorative circles for mobile */}
                <div className="absolute -top-3 -left-3 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 opacity-20 blur-xl"></div>
                <div className="absolute -bottom-3 -right-3 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-red-600 to-red-700 opacity-20 blur-xl"></div>
                
                {/* Main Image Frame */}
                <div className="relative z-10">
                  <div className="absolute -inset-3 bg-gradient-to-br from-yellow-500 via-red-600 to-transparent rounded-2xl sm:rounded-3xl blur-xl opacity-30"></div>
                  
                  {/* Profile Image */}
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border-4 border-white/10 shadow-xl">
                    <div className="w-full h-[300px] sm:h-[400px] relative bg-gradient-to-br from-gray-900 to-gray-950">
                      {/* Your profile image */}
                      <img 
                        src="/images/profile.jpeg" 
                        alt="Dr. Israel Ikola - Diplomat & Security Expert"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.error('Image failed to load:', e.target.src);
                          // Fallback to initials if image fails
                          e.target.style.display = 'none';
                          const fallback = e.target.nextElementSibling;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      
                      {/* Fallback content (shown if image fails to load) */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center hidden"
                        style={{ display: 'none' }}
                      >
                        <div className="text-center p-6">
                          <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-yellow-500 to-red-600 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                            <span className="text-white text-4xl sm:text-6xl font-bold">II</span>
                          </div>
                          <p className="text-gray-300 text-base sm:text-lg">Dr. Israel Ikola</p>
                          <p className="text-yellow-500 text-xs sm:text-sm">Diplomat & Security Expert</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* OGW Awardee Badge for mobile */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6"
                  >
                    <div className="relative">
                      <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-yellow-500 to-red-600 rounded-full blur opacity-50"></div>
                      <div className="relative px-4 py-2 sm:px-6 sm:py-3 bg-gray-900/90 backdrop-blur-sm rounded-full border border-yellow-500/30">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <FaMedal className="text-yellow-500 text-sm sm:text-base" />
                          <span className="text-yellow-500 font-bold text-xs sm:text-sm">OGW Awardee</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Text Content - Comes second on mobile, first on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left w-full"
            >
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4"
              >
                <span className="block text-white">DR.</span>
                <span className="block bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                  ISRAEL IKOLA
                </span>
              </motion.h1>

              {/* Animated Typing Title */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mb-6 sm:mb-8 h-16 sm:h-20"
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
                  deletionSpeed={70}
                  repeat={Infinity}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 px-2"
                />
              </motion.div>

              {/* Career Summary */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mb-6 sm:mb-8"
              >
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed px-2 sm:px-0">
                  My expertise in diplomacy, international security, and strategic governance is supported by a Ph.D. in International Studies, dual master's degrees, and specialized diplomas. Recognized nationally and internationally through honors, awards, and honorary doctorates.
                </p>
              </motion.div>

              {/* Contact Info & CV Download */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mb-6 sm:mb-8"
              >
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0">
                  {/* Phone Button */}
                  <a 
                    href="tel:+254110006454" 
                    className="flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-white text-sm sm:text-lg" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-gray-400">Phone</p>
                      <p className="text-white font-semibold text-sm sm:text-base group-hover:text-yellow-500 transition-colors truncate">
                        +254 110 006454
                      </p>
                    </div>
                  </a>
                  
                  {/* Email Button */}
                  <a 
                    href="mailto:israelikola@gmail.com" 
                    className="flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-white text-sm sm:text-lg" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-gray-400">Email</p>
                      <p className="text-white font-semibold text-sm sm:text-base group-hover:text-yellow-500 transition-colors truncate">
                        israelikola@gmail.com
                      </p>
                    </div>
                  </a>
                </div>

                {/* View CV Button - Opens Google Drive link in new tab */}
                <motion.button
                  onClick={handleViewCV}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3 mt-4 sm:mt-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 group"
                >
                  <FaExternalLinkAlt className="text-sm sm:text-base" />
                  <span className="text-sm sm:text-base">Download CV</span>
                </motion.button>
                
                
              </motion.div>
            </motion.div>

            {/* Desktop Image - Hidden on mobile, shown on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden lg:block w-full"
            >
              <div className="relative mx-auto max-w-md">
                {/* Decorative circles for desktop */}
                <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-red-600 to-red-700 opacity-20 blur-xl"></div>
                
                {/* Main Image Frame */}
                <div className="relative z-10">
                  <div className="absolute -inset-4 bg-gradient-to-br from-yellow-500 via-red-600 to-transparent rounded-3xl blur-xl opacity-30"></div>
                  
                  {/* Profile Image */}
                  <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                    <div className="w-full h-[500px] relative bg-gradient-to-br from-gray-900 to-gray-950">
                      {/* Your profile image */}
                      <img 
                        src="/images/profile.jpeg" 
                        alt="Dr. Israel Ikola - Diplomat & Security Expert"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.error('Image failed to load:', e.target.src);
                          // Fallback to initials if image fails
                          e.target.style.display = 'none';
                          const fallback = e.target.nextElementSibling;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      
                      {/* Fallback content (shown if image fails to load) */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center hidden"
                        style={{ display: 'none' }}
                      >
                        <div className="text-center p-8">
                          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-500 to-red-600 flex items-center justify-center mx-auto mb-6">
                            <span className="text-white text-6xl font-bold">II</span>
                          </div>
                          <p className="text-gray-300 text-lg">Dr. Israel Ikola</p>
                          <p className="text-yellow-500 text-sm">Diplomat & Security Expert</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* OGW Awardee Badge for desktop */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute -top-6 -right-6"
                  >
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-red-600 rounded-full blur opacity-50"></div>
                      <div className="relative px-6 py-3 bg-gray-900/90 backdrop-blur-sm rounded-full border border-yellow-500/30">
                        <div className="flex items-center gap-2">
                          <FaMedal className="text-yellow-500" />
                          <span className="text-yellow-500 font-bold">OGW Awardee</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;