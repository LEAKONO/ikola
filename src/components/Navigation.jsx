import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHome, 
  FaUser, 
  FaGraduationCap, 
  FaBriefcase, 
  FaAward, 
  FaUsers, 
  FaEnvelope,
  FaBars,
  FaTimes,
  FaPhone,
  FaCogs,
  FaTrophy
} from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', icon: <FaHome />, id: 'home' },
    { name: 'About', icon: <FaUser />, id: 'about' },
    { name: 'Education', icon: <FaGraduationCap />, id: 'education' },
    { name: 'Experience', icon: <FaBriefcase />, id: 'experience' },
    { name: 'Skills', icon: <FaCogs />, id: 'skills' },
    { name: 'Honors', icon: <FaTrophy />, id: 'honors' },
    { name: 'Leadership', icon: <FaUsers />, id: 'leadership' },
    { name: 'Contact', icon: <FaEnvelope />, id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
    }
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
            ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg py-2 border-b border-white/10' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm sm:text-base">II</span>
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">
                Israel Ikola
              </h1>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 text-sm ${
                    activeSection === item.id
                      ? 'bg-yellow-500/20 text-yellow-500'
                      : 'text-gray-300 hover:text-yellow-500 hover:bg-white/5'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <FaTimes className="text-white text-xl sm:text-2xl" />
              ) : (
                <FaBars className="text-white text-xl sm:text-2xl" />
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
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-xs bg-gradient-to-b from-gray-900 to-gray-950 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-4 sm:p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">II</span>
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-white">Israel Ikola</h2>
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
              <div className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-180px)]">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-sm sm:text-base ${
                      activeSection === item.id
                        ? 'bg-yellow-500/20 text-yellow-500'
                        : 'text-gray-300 hover:text-yellow-500 hover:bg-white/5'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
              </div>

              {/* Contact Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
                <div className="space-y-3">
                  <a 
                    href="tel:+254110006454"
                    className="flex items-center space-x-3 text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-yellow-500 text-sm" />
                    </div>
                    <div>
                      <p className="text-xs">Phone</p>
                      <p className="font-medium">+254 110 006454</p>
                    </div>
                  </a>
                  <a 
                    href="mailto:israelikola@gmail.com"
                    className="flex items-center space-x-3 text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-yellow-500 text-sm" />
                    </div>
                    <div>
                      <p className="text-xs">Email</p>
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