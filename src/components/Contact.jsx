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

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center flex-shrink-0">
              <FaEnvelope className="text-white text-lg sm:text-xl" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Get In <span className="text-yellow-500">Touch</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Available for speaking engagements, consultations, and strategic advisory roles
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6 md:p-8 h-full">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                Contact <span className="text-yellow-500">Information</span>
              </h3>

              {/* Contact Cards */}
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10 md:mb-12">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                    whileHover={{ x: 5 }}
                    className="block group"
                  >
                    <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-lg sm:rounded-xl bg-gray-800/30 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                        <div className="text-white text-lg sm:text-xl md:text-2xl">
                          {info.icon}
                        </div>
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 truncate">{info.title}</h4>
                        <p className="text-gray-300 text-sm sm:text-base truncate">{info.details}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-8 sm:mb-10 md:mb-12">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Connect With Me</h4>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.7 + (index * 0.1), duration: 0.6 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white text-base sm:text-lg md:text-xl hover:shadow-lg hover:shadow-current/30 transition-all duration-300`}
                      aria-label={social.platform}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6 md:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                Send a <span className="text-yellow-500">Message</span>
              </h3>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-green-500/10 border border-green-500/30"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <FaCheckCircle className="text-green-500 text-base sm:text-xl" />
                    <div>
                      <p className="text-green-500 font-semibold text-sm sm:text-base">Message Sent Successfully!</p>
                      <p className="text-green-400 text-xs sm:text-sm">Thank you for your message. I'll respond soon.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-red-500/10 border border-red-500/30"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <FaCheckCircle className="text-red-500 text-base sm:text-xl" />
                    <div>
                      <p className="text-red-500 font-semibold text-sm sm:text-base">Message Failed to Send</p>
                      <p className="text-red-400 text-xs sm:text-sm">Please try again or contact directly via email.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm sm:text-base">
                      <div className="flex items-center gap-2">
                        <FaUser className="text-yellow-500 text-sm" />
                        <span>Your Name *</span>
                      </div>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition-all duration-300 text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm sm:text-base">
                      <div className="flex items-center gap-2">
                        <FaEnvelope className="text-yellow-500 text-sm" />
                        <span>Email Address *</span>
                      </div>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition-all duration-300 text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <FaBuilding className="text-yellow-500 text-sm" />
                      <span>Organization</span>
                    </div>
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Company / Institution"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <FaComment className="text-yellow-500 text-sm" />
                      <span>Subject *</span>
                    </div>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition-all duration-300 text-sm sm:text-base"
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
                  <label className="block text-gray-300 mb-2 text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <FaComment className="text-yellow-500 text-sm" />
                      <span>Message *</span>
                    </div>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold text-sm sm:text-base md:text-lg flex items-center justify-center gap-2 sm:gap-3 hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm sm:text-base" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* Form Disclaimer */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-800/30">
                <p className="text-xs sm:text-sm text-gray-400 text-center">
                  I typically respond within 24-48 hours for professional inquiries. For urgent matters, please call directly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Speaking Topics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 sm:mt-16 md:mt-20"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 flex items-center justify-center">
                <FaComment className="text-yellow-500 text-lg sm:text-xl" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Speaking Topics</h3>
                <p className="text-gray-400 text-sm sm:text-base">Expert areas for speaking engagements and workshops</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                'International Diplomacy & Protocol',
                'National Security & Intelligence',
                'Youth Empowerment & Leadership',
                'Strategic Governance & Policy',
                'Peacebuilding & Conflict Resolution',
                'Corporate Security & Risk Management'
              ].map((topic, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-800/30 border border-gray-700 hover:border-yellow-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <span className="text-gray-300 text-sm sm:text-base">{topic}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 sm:mt-12 md:mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Collaborate?</h4>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
              Whether you need a keynote speaker, strategic advisor, or consultation partner, I'm available for engagements that make a meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="mailto:israelikola@gmail.com"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 text-sm sm:text-base"
              >
                Email Directly
              </a>
              <a 
                href="tel:+254110006454"
                className="px-6 py-3 rounded-lg border-2 border-yellow-500 text-yellow-500 font-bold hover:bg-yellow-500/10 transition-all duration-300 text-sm sm:text-base"
              >
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;