import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Honors from './components/Honors';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('light', savedTheme === 'light');
    
    // Generate particles
    const particlesArray = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      size: Math.random() * 10 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1
    }));
    setParticles(particlesArray);

    // Simulate loading with minimum time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
    
    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('themeChange', { detail: newTheme }));
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
  };

  // Show loading screen
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 ${theme}`}>
        {/* Theme Toggle Floating Button */}
        <div className="fixed bottom-8 right-8 z-40">
          <ThemeToggle />
        </div>

        <Navigation theme={theme} onThemeChange={handleThemeChange} />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Profile />
              <Education />
              <Experience />
              <Skills />
              <Honors />
              <Leadership />
              <Testimonials />
              <Contact />
            </>
          } />
          
          {/* Additional Routes */}
          <Route path="/about" element={
            <div className="pt-24 min-h-screen">
              <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-white">About Dr. Israel Ikola</h1>
                {/* Add about page content */}
              </div>
            </div>
          } />
          
          <Route path="/media" element={
            <div className="pt-24 min-h-screen">
              <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-white">Media & Publications</h1>
                {/* Add media page content */}
              </div>
            </div>
          } />
          
          <Route path="/speaking" element={
            <div className="pt-24 min-h-screen">
              <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold text-white">Speaking Engagements</h1>
                {/* Add speaking engagements content */}
              </div>
            </div>
          } />
          
          <Route path="/contact-direct" element={
            <div className="pt-24 min-h-screen">
              <Contact />
            </div>
          } />
          
          <Route path="*" element={
            <div className="pt-24 min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-primary-gold mb-4">404</h1>
                <p className="text-2xl text-white mb-8">Page Not Found</p>
                <a 
                  href="/" 
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary-gold to-yellow-600 text-primary-navy font-bold hover:shadow-lg hover:shadow-primary-gold/30 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Return Home
                </a>
              </div>
            </div>
          } />
        </Routes>
        
        <Footer />
        
        {/* Enhanced Background Particles */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle absolute"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.x}vw`,
                top: `${particle.y}vh`,
                background: `radial-gradient(circle, 
                  rgba(212, 175, 55, ${particle.opacity}) 0%, 
                  transparent 70%)`,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
                filter: `blur(${Math.random() * 2}px)`
              }}
            />
          ))}
          
          {/* Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.02] bg-[size:100px_100px] bg-[linear-gradient(to_right,#d4af37_1px,transparent_1px),linear-gradient(to_bottom,#d4af37_1px,transparent_1px)]"></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-gold/5 to-primary-crimson/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary-crimson/5 to-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="fixed top-0 left-0 right-0 h-1 z-50">
          <div 
            className="h-full bg-gradient-to-r from-primary-gold to-yellow-600 transition-all duration-300"
            style={{ width: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%` }}
          />
        </div>

        {/* Quick Action Buttons */}
        <div className="fixed bottom-32 right-8 z-40 flex flex-col gap-4">
          <a 
            href="#contact" 
            className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-gold to-yellow-600 text-primary-navy flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
            title="Quick Contact"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          
          <a 
            href="tel:+254110006454" 
            className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
            title="Call Now"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>

        {/* Notification System */}
        <div className="fixed top-24 right-6 z-50 space-y-4">
          {/* Example notification - you can make this dynamic */}
          <div className="notification max-w-sm bg-gradient-to-r from-primary-gold/10 to-yellow-600/10 backdrop-blur-sm border border-primary-gold/30 rounded-lg p-4 transform translate-x-full animate-slide-in">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-gold/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-white">Welcome to Dr. Israel Ikola's Portfolio</p>
                <p className="text-xs text-gray-400">Explore achievements and expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;