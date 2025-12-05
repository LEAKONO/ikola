import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    document.documentElement.classList.toggle('light', savedTheme === 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.documentElement.classList.toggle('light', newTheme === 'light');
    
    // Dispatch theme change event for other components
    window.dispatchEvent(new CustomEvent('themeChange', { detail: newTheme }));
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-14 h-7 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-gold/30"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <motion.div
        className="absolute top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-primary-gold to-yellow-600 flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 2 : 26,
          transition: { type: 'spring', stiffness: 300, damping: 20 }
        }}
      >
        {theme === 'dark' ? (
          <FaMoon className="text-white text-xs" />
        ) : (
          <FaSun className="text-white text-xs" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;