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
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    document.documentElement.classList.toggle('light');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-primary-navy flex items-center justify-center">
        <div className="text-center">
          <div className="loading-dots mx-auto mb-4">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className="text-primary-gold animate-pulse">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className={theme}>
        <Navigation theme={theme} toggleTheme={toggleTheme} />
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
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
        
        {/* Background Particles */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`,
                background: `radial-gradient(circle, rgba(212, 175, 55, ${Math.random() * 0.3 + 0.1}) 0%, transparent 70%)`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;