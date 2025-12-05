import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaPaperPlane,
  FaUser,
  FaBuilding,
  FaComment,
  FaCheckCircle,
  FaLinkedin,
  FaTwitter,
  FaGlobe
} from 'react-icons/fa';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: 'israelikola@gmail.com',
      link: 'mailto:israelikola@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: '+254 110 006454',
      link: 'tel:+254110006454',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      details: 'Nairobi, Kenya',
      link: '#',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const socialLinks = [
    {
      platform: 'LinkedIn',
      icon: <FaLinkedin />,
      url: '#',
      color: 'from-blue-600 to-blue-800'
    },
    {
      platform: 'Twitter',
      icon: <FaTwitter />,
      url: '#',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      platform: 'Website',
      icon: <FaGlobe />,
      url: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS integration
      await emailjs.send(
        'service_id', // Replace with your EmailJS service ID
        'template_id', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          organization: formData.organization,
          subject: formData.subject,
          message: formData.message
        },
        'public_key' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Email sending failed:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const speakingTopics = [
    'International Diplomacy & Protocol',
    'National Security & Intelligence',
    'Youth Empowerment & Leadership',
    'Strategic Governance & Policy',
    'Peacebuilding & Conflict Resolution',
    'Corporate Security & Risk Management'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-primary-navy">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-gold to-yellow-600 flex items-center justify-center">
              <FaEnvelope className="text-white text-xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Get In <span className="text-primary-gold">Touch</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Available for speaking engagements, consultations, and strategic advisory roles
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="glass-card p-8 h-full">
              <h3 className="text-3xl font-bold text-white mb-8">
                Contact <span className="text-primary-gold">Information</span>
              </h3>

              {/* Contact Cards */}
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                    whileHover={{ x: 10 }}
                    className="block group"
                  >
                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-800/30 border border-gray-700 hover:border-primary-gold/50 transition-all duration-300">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                        <div className="text-white text-2xl">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{info.title}</h4>
                        <p className="text-gray-300">{info.details}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-white mb-6">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.7 + (index * 0.1), duration: 0.6 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white text-xl hover:shadow-lg hover:shadow-current/30 transition-all duration-300`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Speaking Topics */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">Speaking Topics</h4>
                <div className="flex flex-wrap gap-3">
                  {speakingTopics.map((topic, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + (index * 0.05), duration: 0.6 }}
                      className="px-4 py-2 bg-white/5 rounded-full text-gray-300 border border-white/10 hover:border-primary-gold/50 hover:text-primary-gold transition-all duration-300 cursor-pointer"
                    >
                      {topic}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-3xl font-bold text-white mb-8">
                Send a <span className="text-primary-gold">Message</span>
              </h3>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30"
                >
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500 text-xl" />
                    <div>
                      <p className="text-green-500 font-semibold">Message Sent Successfully!</p>
                      <p className="text-green-400 text-sm">Thank you for your message. I'll respond soon.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30"
                >
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-red-500 text-xl" />
                    <div>
                      <p className="text-red-500 font-semibold">Message Failed to Send</p>
                      <p className="text-red-400 text-sm">Please try again or contact directly via email.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">
                      <div className="flex items-center gap-2">
                        <FaUser className="text-primary-gold" />
                        <span>Your Name *</span>
                      </div>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/30 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">
                      <div className="flex items-center gap-2">
                        <FaEnvelope className="text-primary-gold" />
                        <span>Email Address *</span>
                      </div>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/30 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    <div className="flex items-center gap-2">
                      <FaBuilding className="text-primary-gold" />
                      <span>Organization</span>
                    </div>
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/30 transition-all duration-300"
                    placeholder="Company / Institution"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    <div className="flex items-center gap-2">
                      <FaComment className="text-primary-gold" />
                      <span>Subject *</span>
                    </div>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/30 transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="Speaking Engagement">Speaking Engagement</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Strategic Advisory">Strategic Advisory</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    <div className="flex items-center gap-2">
                      <FaComment className="text-primary-gold" />
                      <span>Message *</span>
                    </div>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-gold focus:ring-2 focus:ring-primary-gold/30 transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-primary-gold to-yellow-600 text-primary-navy font-bold text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary-gold/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-navy border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* Form Disclaimer */}
              <div className="mt-6 p-4 rounded-xl bg-gray-800/30">
                <p className="text-sm text-gray-400 text-center">
                  I typically respond within 24-48 hours for professional inquiries. For urgent matters, please call directly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Availability Notice */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-6 px-8 py-6 rounded-2xl bg-gradient-to-r from-primary-gold/10 to-primary-crimson/10 border border-primary-gold/30">
            <div className="text-left">
              <h4 className="text-2xl font-bold text-white mb-2">Availability Status</h4>
              <p className="text-gray-300">Currently accepting:</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-primary-gold/20 text-primary-gold rounded-full font-semibold">
                Speaking Engagements
              </span>
              <span className="px-6 py-3 bg-primary-crimson/20 text-primary-cream rounded-full font-semibold">
                Strategic Consultations
              </span>
              <span className="px-6 py-3 bg-blue-500/20 text-blue-300 rounded-full font-semibold">
                Board Advisory
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;