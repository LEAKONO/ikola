import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGraduationCap, 
  FaUniversity, 
  FaBook, 
  FaAward,
  FaCalendarAlt
} from 'react-icons/fa';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const educationTimeline = [
    {
      degree: 'Doctor of Philosophy in International Studies (Ph.D)',
      institution: 'Department of Diplomacy and International Studies, University of Nairobi',
      icon: <FaGraduationCap />,
      color: 'text-purple-400',
      year: 'Doctoral Degree',
      description: 'Advanced research in international relations, diplomatic studies, and global governance at the Department of Diplomacy and International Studies',
      highlights: ['International Relations', 'Diplomatic Studies', 'Research Methodology', 'Global Governance', 'Foreign Policy Analysis']
    },
    {
      degree: 'Master of Arts in Diplomacy, Intelligence & Security (MDIS)',
      institution: 'Strathmore University',
      icon: <FaUniversity />,
      color: 'text-blue-400',
      year: 'Master\'s Degree',
      description: 'Specialized in diplomacy, intelligence analysis, and security management',
      highlights: ['Diplomacy', 'Intelligence Analysis', 'Security Management']
    },
    {
      degree: 'Master of Criminology & Criminal Justice',
      institution: 'Egerton University',
      icon: <FaBook />,
      color: 'text-red-400',
      year: 'Master\'s Degree',
      description: 'Advanced studies in criminology and criminal justice systems',
      highlights: ['Criminology', 'Criminal Justice', 'Law Enforcement']
    },
    {
      degree: 'Diploma in Peace & Conflict Studies',
      institution: 'Daystar University',
      icon: <FaAward />,
      color: 'text-green-400',
      year: 'Diploma',
      description: 'Conflict resolution, peacebuilding, and mediation techniques',
      highlights: ['Peacebuilding', 'Conflict Resolution', 'Mediation']
    },
    {
      degree: 'Public Administration, Policy & Governance',
      institution: 'Kenya School of Government',
      icon: <FaUniversity />,
      color: 'text-yellow-400',
      year: 'Professional Course',
      description: 'Public administration, policy formulation, and governance structures',
      highlights: ['Public Administration', 'Policy Formulation', 'Governance']
    },
    {
      degree: 'Organizational Leadership',
      institution: 'Regent University, USA',
      icon: <FaGraduationCap />,
      color: 'text-indigo-400',
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
    <section id="education" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 sm:mb-6">
            <FaGraduationCap className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 sm:mt-0">
              Education & <span className="text-yellow-500">Qualifications</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-2">
            Advanced academic credentials and professional qualifications supporting diplomatic and security expertise
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-yellow-500 via-red-600 to-transparent hidden md:block"></div>

          {educationTimeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative mb-6 sm:mb-8 md:mb-12 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8 md:mr-auto' : 'md:w-1/2 md:pl-8 md:ml-auto'}`}
            >

              {/* Mobile Indicator */}
              <div className={`absolute top-6 left-3 w-0.5 h-full bg-gradient-to-b from-yellow-500/50 to-transparent md:hidden ${index < educationTimeline.length - 1 ? 'block' : 'hidden'}`}></div>
              <div className="absolute top-6 left-3 transform -translate-x-1/2 w-2 h-2 rounded-full bg-yellow-500 border-2 border-gray-900 z-10 md:hidden"></div>

              <div className="ml-8 sm:ml-12 md:ml-0">
                <div className="relative p-4 sm:p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 hover:border-yellow-500/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 md:gap-6">
                    {/* Icon */}
                    <div className={`text-2xl sm:text-3xl md:text-4xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 w-full">
                      {/* Degree and Year */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white break-words">
                          {item.degree}
                        </h3>
                        <span className="px-2 py-1 sm:px-3 sm:py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs sm:text-sm font-semibold self-start sm:self-center">
                          {item.year}
                        </span>
                      </div>

                      {/* Institution */}
                      <div className="flex items-center gap-2 text-gray-400 mb-2 sm:mb-3 md:mb-4">
                        <FaUniversity className="text-yellow-500 text-sm" />
                        <span className="text-sm sm:text-base md:text-lg break-words">{item.institution}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {item.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs bg-white/5 rounded-full text-gray-300 border border-white/10 break-words"
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
          className="mt-8 sm:mt-12 md:mt-16"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
              <FaAward className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl flex-shrink-0" />
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Additional Certifications</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-1">Professional qualifications and specialized training</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {additionalCertifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.2 + (index * 0.05) }}
                  whileHover={{ scale: 1.02 }}
                  className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-800/30 border border-gray-700 hover:border-yellow-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <FaAward className={`text-xs sm:text-sm ${index % 6 === 0 ? 'text-purple-400' :
                      index % 6 === 1 ? 'text-blue-400' :
                      index % 6 === 2 ? 'text-red-400' :
                      index % 6 === 3 ? 'text-green-400' :
                      index % 6 === 4 ? 'text-yellow-400' :
                      'text-indigo-400'
                    }`} />
                    <span className="text-xs sm:text-sm md:text-base text-gray-300 break-words">{cert}</span>
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
          className="mt-8 sm:mt-12 md:mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto px-2">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3 sm:mb-4 md:mb-6">
              <FaBook className="text-yellow-500 text-lg sm:text-xl md:text-2xl" />
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Educational Philosophy</h4>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              "Continuous learning and professional development are cornerstones of effective leadership in diplomacy and security. Each qualification represents a commitment to excellence and a deeper understanding of global governance challenges."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;