import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHome, 
  FaUser, 
  FaGraduationCap, 
  FaBriefcase, 
  FaAward, 
  FaUsers, 
  FaEnvelope,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
  FaDownload,
  FaNewspaper,
  FaMicrophone
} from 'react-icons/fa';

const Navigation = ({ theme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: <FaHome />, path: '/#home' },
    { name: 'Profile', icon: <FaUser />, path: '/#profile' },
    { name: 'Education', icon: <FaGraduationCap />, path: '/#education' },
    { name: 'Experience', icon: <FaBriefcase />, path: '/#experience' },
    { name: 'Honors', icon: <FaAward />, path: '/#honors' },
    { name: 'Leadership', icon: <FaUsers />, path: '/#leadership' },
    { name: 'Contact', icon: <FaEnvelope />, path: '/#contact' },
  ];

  const additionalPages = [
    { name: 'Media', icon: <FaNewspaper />, path: '/media' },
    { name: 'Speaking', icon: <FaMicrophone />, path: '/speaking' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    if (sectionId.startsWith('#')) {
      const element = document.querySelector(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleDownloadCV = () => {
    // Trigger CV download
    const link = document.createElement('a');
    link.href = '/cv/dr-israel-ikola-cv.pdf';
    link.download = 'Dr-Israel-Ikola-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Analytics event
    window.gtag?.('event', 'cv_download', {
      event_category: 'engagement',
      event_label: 'CV Download'
    });
  };

  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    onThemeChange(newTheme);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-primary-navy/95 backdrop-blur-lg shadow-xl py-2 border-b border-white/10' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3"
            >
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-gold to-primary-crimson flex items-center justify-center">
                  <span className="text-white font-bold text-lg">II</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">
                    Dr. Israel <span className="text-primary-gold">Ikola</span>
                  </h1>
                  <p className="text-xs text-gray-400">OGW, CBS, F.MEL</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.path)}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
                    location.hash === item.path.replace('/#', '#')
                      ? 'bg-primary-gold/20 text-primary-gold'
                      : 'text-gray-300 hover:text-primary-gold hover:bg-white/5'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </motion.button>
              ))}

              {/* Additional Pages Dropdown */}
              <div className="relative group ml-2">
                <button className="px-4 py-2 rounded-lg flex items-center space-x-2 text-gray-300 hover:text-primary-gold hover:bg-white/5 transition-all duration-300">
                  <span>More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className="absolute right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-lg rounded-lg shadow-xl border border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {additionalPages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.path}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-primary-gold hover:bg-white/5 transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {page.icon}
                      <span>{page.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleThemeToggle}
                className="ml-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              >
                {theme === 'dark' ? (
                  <FaSun className="text-yellow-400 text-lg" />
                ) : (
                  <FaMoon className="text-gray-700 text-lg" />
                )}
              </motion.button>

              {/* Download CV Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="ml-4 px-6 py-2 rounded-lg bg-gradient-to-r from-primary-gold to-yellow-600 text-primary-navy font-bold flex items-center space-x-2 hover:shadow-lg hover:shadow-primary-gold/30 transition-all duration-300"
              >
                <FaDownload />
                <span>Download CV</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <FaTimes className="text-white text-2xl" />
              ) : (
                <FaBars className="text-white text-2xl" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-gradient-to-b from-primary-navy to-gray-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-gold to-primary-crimson flex items-center justify-center">
                      <span className="text-white font-bold text-xl">II</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Dr. Israel Ikola</h2>
                      <p className="text-sm text-gray-400">Diplomat & Security Expert</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <FaTimes className="text-white text-xl" />
                  </button>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-6 space-y-1 overflow-y-auto h-[calc(100vh-200px)]">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.path);
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-primary-gold hover:bg-white/5 transition-colors"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}

                {/* Additional Pages */}
                <div className="pt-4 mt-4 border-t border-white/10">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 px-4">More Pages</p>
                  {additionalPages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.path}
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-primary-gold hover:bg-white/5 transition-colors"
                    >
                      <span className="text-lg">{page.icon}</span>
                      <span className="font-medium">{page.name}</span>
                    </Link>
                  ))}
                </div>

                {/* Theme Toggle Mobile */}
                <div className="pt-4 mt-4 border-t border-white/10">
                  <button
                    onClick={handleThemeToggle}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-300 hover:text-primary-gold hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {theme === 'dark' ? (
                        <FaSun className="text-lg" />
                      ) : (
                        <FaMoon className="text-lg" />
                      )}
                      <span className="font-medium">Theme</span>
                    </div>
                    <span className="text-sm text-gray-400">
                      {theme === 'dark' ? 'Light' : 'Dark'}
                    </span>
                  </button>
                </div>

                {/* Download CV Mobile */}
                <button
                  onClick={handleDownloadCV}
                  className="w-full mt-6 px-4 py-3 rounded-lg bg-gradient-to-r from-primary-gold to-yellow-600 text-primary-navy font-bold flex items-center justify-center space-x-2"
                >
                  <FaDownload />
                  <span>Download CV</span>
                </button>
              </div>

              {/* Contact Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                <div className="space-y-3">
                  <a 
                    href="tel:+254110006454"
                    className="flex items-center space-x-3 text-gray-400 hover:text-primary-gold transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <span className="text-primary-gold">📱</span>
                    </div>
                    <div>
                      <p className="text-sm">Phone</p>
                      <p className="font-medium">+254 110 006454</p>
                    </div>
                  </a>
                  <a 
                    href="mailto:israelikola@gmail.com"
                    className="flex items-center space-x-3 text-gray-400 hover:text-primary-gold transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <span className="text-primary-gold">✉️</span>
                    </div>
                    <div>
                      <p className="text-sm">Email</p>
                      <p className="font-medium">israelikola@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;