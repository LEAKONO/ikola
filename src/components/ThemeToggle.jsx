import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.className = initialTheme;
      localStorage.setItem('theme', initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.className = newTheme;
    
    // Dispatch event for components that need to know
    window.dispatchEvent(new CustomEvent('themechange', { detail: newTheme }));
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/20 dark:border-gray-700 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? (
        <FaSun className="text-yellow-400 text-xl" />
      ) : (
        <FaMoon className="text-gray-700 text-xl" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;