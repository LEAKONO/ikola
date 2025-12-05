import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin,
  FaTwitter,
  FaGlobe,
  FaArrowUp,
  FaHeart,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      platform: 'LinkedIn',
      icon: <FaLinkedin />,
      url: '#',
      color: 'hover:text-blue-400'
    },
    {
      platform: 'Twitter',
      icon: <FaTwitter />,
      url: '#',
      color: 'hover:text-cyan-400'
    },
    {
      platform: 'Website',
      icon: <FaGlobe />,
      url: '#',
      color: 'hover:text-purple-400'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Honors', href: '#honors' },
    { name: 'Leadership', href: '#leadership' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 md:pb-10">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10 md:mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-base sm:text-lg">II</span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Dr. Israel <span className="text-yellow-500">Ikola</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">Diplomat & Security Expert</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 max-w-lg">
              Expert in diplomacy, international security, and strategic governance. 
              Available for speaking engagements, consultations, and strategic advisory roles.
            </p>
            
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:bg-gray-700 transition-all duration-300 ${social.color} text-sm sm:text-base`}
                  aria-label={social.platform}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-3 sm:mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-3 sm:mb-4 md:mb-6">Contact Info</h4>
            <div className="space-y-3">
              <a 
                href="mailto:israelikola@gmail.com"
                className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-yellow-500 transition-colors duration-300 group text-sm sm:text-base"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 flex-shrink-0">
                  <FaEnvelope className="text-xs sm:text-sm" />
                </div>
                <span className="truncate">israelikola@gmail.com</span>
              </a>
              <a 
                href="tel:+254110006454"
                className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-yellow-500 transition-colors duration-300 group text-sm sm:text-base"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 flex-shrink-0">
                  <FaPhone className="text-xs sm:text-sm" />
                </div>
                <span>+254 110 006454</span>
              </a>
              <div className="flex items-center gap-2 sm:gap-3 text-gray-400 group text-sm sm:text-base">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-xs sm:text-sm" />
                </div>
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4 sm:mb-6 md:mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="text-gray-400 text-center md:text-left text-xs sm:text-sm">
            <p>© {currentYear} Dr. Israel Ikola. All rights reserved.</p>
            <p className="text-gray-500 mt-1">Diplomat | Security Expert | Strategic Advisor</p>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2 text-gray-400 text-xs sm:text-sm">
            <FaHeart className="text-red-500 animate-pulse text-xs sm:text-sm" />
            <span>Committed to Excellence</span>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 text-gray-900 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <FaArrowUp className="text-sm sm:text-base" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;