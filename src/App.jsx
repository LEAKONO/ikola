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
import Footer from './components/Footer';
import Contact from './components/Contact'
import LoadingScreen from './components/LoadingScreen';
import Testimonials from './components/Testimonials';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="App min-h-screen overflow-x-hidden">
        <Navigation />
        
        <main className="overflow-x-hidden">
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
                <Footer />
              </>
            } />
            
            <Route path="*" element={
              <div className="pt-24 min-h-screen flex items-center justify-center px-4">
                <div className="text-center max-w-sm">
                  <h1 className="text-5xl sm:text-6xl font-bold text-yellow-500 mb-4">404</h1>
                  <p className="text-xl sm:text-2xl text-white mb-8">Page Not Found</p>
                  <a 
                    href="/" 
                    className="inline-block px-6 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold hover:shadow-lg hover:shadow-yellow-500/30 transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base"
                  >
                    Return Home
                  </a>
                </div>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;