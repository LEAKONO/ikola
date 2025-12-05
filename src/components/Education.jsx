import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGraduationCap, 
  FaUniversity, 
  FaBook, 
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const educationTimeline = [
    {
      degree: 'Ph.D (Diploma) – International Studies',
      institution: 'University of Nairobi',
      icon: <FaGraduationCap />,
      color: 'from-purple-600 to-pink-600',
      year: 'Doctoral Studies',
      description: 'Advanced research in international relations and diplomatic studies',
      highlights: ['International Relations', 'Diplomatic Studies', 'Research Methodology']
    },
    {
      degree: 'Master of Arts in Diplomacy, Intelligence & Security (MDIS)',
      institution: 'Strathmore University',
      icon: <FaUniversity />,
      color: 'from-blue-600 to-cyan-600',
      year: 'Master\'s Degree',
      description: 'Specialized in diplomacy, intelligence analysis, and security management',
      highlights: ['Diplomacy', 'Intelligence Analysis', 'Security Management']
    },
    {
      degree: 'Master of Criminology & Criminal Justice',
      institution: 'Egerton University',
      icon: <FaBook />,
      color: 'from-red-600 to-orange-600',
      year: 'Master\'s Degree',
      description: 'Advanced studies in criminology and criminal justice systems',
      highlights: ['Criminology', 'Criminal Justice', 'Law Enforcement']
    },
    {
      degree: 'Diploma in Peace & Conflict Studies',
      institution: 'Daystar University',
      icon: <FaAward />,
      color: 'from-green-600 to-emerald-600',
      year: 'Diploma',
      description: 'Conflict resolution, peacebuilding, and mediation techniques',
      highlights: ['Peacebuilding', 'Conflict Resolution', 'Mediation']
    },
    {
      degree: 'Public Administration, Policy & Governance',
      institution: 'Kenya School of Government',
      icon: <FaUniversity />,
      color: 'from-yellow-600 to-amber-600',
      year: 'Professional Course',
      description: 'Public administration, policy formulation, and governance structures',
      highlights: ['Public Administration', 'Policy Formulation', 'Governance']
    },
    {
      degree: 'Organizational Leadership',
      institution: 'Regent University, USA',
      icon: <FaGraduationCap />,
      color: 'from-indigo-600 to-purple-600',
      year: 'Leadership Program',
      description: 'Executive leadership and organizational management',
      highlights: ['Leadership', 'Management', 'Strategic Planning']
    }
  ];

  const additionalCertifications = [
    'Kenya Military Academy (Cadet) – KMA Lanet',
    'Diploma in Gender & Development Management – CORAT Africa',
    'Diploma in Marriage & Family Therapy – Africa International University',
    'Security Risk Management Professional (SRMP)',
    'Registered Criminologist (RCrim)',
    'Certified Fraud & Security Director (CFrsDi)'
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-primary-navy to-gray-900">
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
              <FaGraduationCap className="text-white text-xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Education & <span className="text-primary-gold">Qualifications</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced academic credentials and professional qualifications supporting diplomatic and security expertise
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-gold via-primary-crimson to-transparent hidden lg:block"></div>

          {educationTimeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative mb-12 lg:w-1/2 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}
            >
              {/* Timeline Dot */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-primary-gold to-yellow-600 border-4 border-gray-900 z-10 hidden lg:block"></div>

              <div className="relative group">
                {/* Card Shadow */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${item.color} rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <div className="text-white text-2xl">
                        {item.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white">
                          {item.degree}
                        </h3>
                        <span className="px-4 py-1 bg-primary-gold/20 text-primary-gold rounded-full text-sm font-semibold">
                          {item.year}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-gray-400 mb-4">
                        <FaUniversity className="text-primary-gold" />
                        <span className="text-lg">{item.institution}</span>
                      </div>

                      <p className="text-gray-300 mb-6">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-sm bg-white/5 rounded-full text-gray-300 border border-white/10"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20"
        >
          <div className="glass-card p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-gold to-yellow-600 flex items-center justify-center">
                <FaAward className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">Additional Certifications</h3>
                <p className="text-gray-400">Professional qualifications and specialized training</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalCertifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.2 + (index * 0.05) }}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-primary-gold/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-gold/20 flex items-center justify-center">
                      <FaAward className="text-primary-gold text-sm" />
                    </div>
                    <span className="text-gray-300">{cert}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <FaBook className="text-primary-gold text-2xl" />
              <h4 className="text-2xl font-bold text-white">Educational Philosophy</h4>
            </div>
            <p className="text-xl text-gray-300">
              "Continuous learning and professional development are cornerstones of effective leadership in diplomacy and security. Each qualification represents a commitment to excellence and a deeper understanding of global governance challenges."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;