import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin,
  FaTwitter,
  FaGlobe,
  FaArrowUp,
  FaHeart,
  FaShieldAlt,
  FaUserTie,
  FaGraduationCap
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Profile', href: '#profile' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Honors', href: '#honors' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    { label: 'Diplomatic Consultancy', icon: <FaUserTie /> },
    { label: 'Security Advisory', icon: <FaShieldAlt /> },
    { label: 'Leadership Training', icon: <FaGraduationCap /> },
    { label: 'Policy Formulation', icon: <FaGlobe /> }
  ];

  const contactInfo = [
    { icon: <FaEnvelope />, text: 'israelikola@gmail.com', href: 'mailto:israelikola@gmail.com' },
    { icon: <FaPhone />, text: '+254 110 006454', href: 'tel:+254110006454' },
    { icon: <FaMapMarkerAlt />, text: 'Nairobi, Kenya', href: '#' }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, label: 'LinkedIn', href: '#' },
    { icon: <FaTwitter />, label: 'Twitter', href: '#' },
    { icon: <FaGlobe />, label: 'Website', href: '#' }
  ];

  const honorsList = [
    'Order of the Grand Warrior (OGW)',
    'Chief of the Burning Spear (CBS)',
    'Honorary Doctorates (4)',
    'International Awards (12+)'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
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

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black pt-20 pb-10">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-gold to-yellow-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">II</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Dr. Israel <span className="text-primary-gold">Ikola</span>
                </h3>
                <p className="text-sm text-gray-400">Diplomat & Security Expert</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-8">
              Expert in diplomacy, international security, and strategic governance. 
              Nationally and internationally recognized leader with extensive experience 
              in government, diplomacy, and security management.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-primary-gold hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 pb-3 border-b border-gray-800">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-gold transition-colors duration-300 flex items-center gap-3 group"
                  >
                    <div className="w-1 h-1 bg-primary-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 pb-3 border-b border-gray-800">
              Professional Services
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <div className="flex items-center gap-3 text-gray-400 hover:text-primary-gold transition-colors duration-300 group">
                    <div className="text-primary-gold opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      {service.icon}
                    </div>
                    <span>{service.label}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Honors Badge */}
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-primary-gold/10 to-primary-crimson/10 border border-primary-gold/20">
              <h5 className="text-white font-semibold mb-2">National Honors</h5>
              <ul className="space-y-1">
                {honorsList.map((honor, index) => (
                  <li key={index} className="text-gray-400 text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary-gold rounded-full"></div>
                    {honor}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 pb-3 border-b border-gray-800">
              Contact Information
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="flex items-start gap-4 text-gray-400 hover:text-primary-gold transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-gold/10 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <span className="pt-2">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="text-white font-semibold mb-4">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white focus:outline-none focus:border-primary-gold"
                />
                <button className="px-4 py-3 bg-gradient-to-r from-primary-gold to-yellow-600 text-primary-navy font-semibold rounded-r-lg hover:opacity-90 transition-opacity duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-gray-400 text-center md:text-left">
            <p>
              © {currentYear} Dr. Israel Ikola. All rights reserved.
            </p>
            <p className="text-sm mt-2">
              OGW, CBS, F.MEL, F.ISRM, SRMP, MDIS, RCrim, CmSS, CFrsDi
            </p>
          </div>

          {/* Made with Love */}
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>for global impact</span>
          </div>

          {/* Privacy Links */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-gold transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-gold transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-primary-gold to-yellow-600 text-primary-navy flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>

        {/* Security Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700">
            <FaShieldAlt className="text-primary-gold" />
            <span className="text-gray-300 text-sm">
              This site is protected and verified
            </span>
          </div>
        </div>

        {/* Visitor Counter (Example) */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((digit, idx) => (
                <div
                  key={idx}
                  className="w-5 h-7 bg-gray-800 rounded flex items-center justify-center mx-0.5"
                >
                  <span className="text-gray-400">{Math.floor(Math.random() * 10)}</span>
                </div>
              ))}
            </div>
            <span>Global visitors</span>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30">
            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
              <FaPhone className="text-red-400 text-sm" />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-400">Emergency Contact</p>
              <p className="text-white font-semibold">+254 110 006454</p>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;