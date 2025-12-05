import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaBriefcase, 
  FaBuilding, 
  FaUserTie, 
  FaShieldAlt,
  FaUsers,
  FaCalendarAlt,
  FaChartLine,
  FaHandshake,
  FaGlobe,
  FaMedal,
  FaGraduationCap,
  FaUniversity,
  FaComments,
  FaCrown,
  FaLandmark,
  FaProjectDiagram
} from 'react-icons/fa';
import { useState } from 'react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeTab, setActiveTab] = useState('all');

  const experienceCategories = [
    { id: 'all', label: 'All Experience', icon: <FaBriefcase />, count: 12 },
    { id: 'diplomacy', label: 'Diplomacy', icon: <FaGlobe />, count: 1 },
    { id: 'security', label: 'Security', icon: <FaShieldAlt />, count: 2 },
    { id: 'leadership', label: 'Leadership', icon: <FaUsers />, count: 5 },
    { id: 'advisory', label: 'Advisory', icon: <FaUserTie />, count: 4 }
  ];

  const experiences = [
    // DIPLOMACY
    {
      id: 'diplomacy',
      title: 'Director, Political and Diplomatic Protocol',
      organization: 'Ministry of Foreign Affairs',
      period: 'Senior Leadership Role',
      icon: <FaGlobe />,
      color: 'from-blue-600 to-cyan-500',
      achievements: [
        'Coordinated over 50 state visits and diplomatic engagements',
        'Led planning of 10+ international conferences and official delegations',
        'Streamlined operational procedures for protocol management',
        'Managed interdepartmental teams for high-level events',
        'Advised senior officials on diplomatic protocol'
      ],
      stats: [
        { label: 'State Visits', value: '50+' },
        { label: 'Conferences', value: '10+' },
        { label: 'Teams Managed', value: '8+' }
      ]
    },
    
    // SECURITY ROLES
    {
      id: 'security',
      title: 'Corporate Affairs & Intelligence Analyst',
      organization: 'Office of the National Security Advisor',
      period: 'Intelligence & Analysis',
      icon: <FaShieldAlt />,
      color: 'from-red-600 to-orange-500',
      achievements: [
        'Produced actionable intelligence reports for national security policies',
        'Conducted strategic risk assessments for critical infrastructure',
        'Established streamlined intelligence reporting system',
        'Coordinated interagency information sharing',
        'Analyzed geopolitical developments and emerging threats'
      ],
      stats: [
        { label: 'National Projects', value: '3' },
        { label: 'Key Installations', value: '5' },
        { label: 'Intelligence Reports', value: '100+' }
      ]
    },
    {
      id: 'security',
      title: 'Security Operations Manager',
      organization: 'Kengen, UN HQ Kenya, NIS, NCRC, KPC, CAK',
      period: 'Multi-Organization Security',
      icon: <FaShieldAlt />,
      color: 'from-green-600 to-emerald-500',
      achievements: [
        'Managed country-wide security operations for major organizations',
        'Oversaw security team of 8 personnel and KES 70M annual budget',
        'Designed comprehensive security systems for warehouses valued at KES 500M',
        'Led security operations for high-profile state functions',
        'Developed long-term risk management strategies'
      ],
      stats: [
        { label: 'Annual Budget', value: 'KES 70M' },
        { label: 'Warehouse Value', value: 'KES 500M' },
        { label: 'Organizations', value: '6+' }
      ]
    },
    
    // ADVISORY ROLES
    {
      id: 'advisory',
      title: 'Advisor & Personal Secretary',
      organization: 'Dr. Eng. Karanja Kibicho - Ministry of Interior',
      period: 'Senior Government Advisor',
      icon: <FaUserTie />,
      color: 'from-purple-600 to-pink-500',
      achievements: [
        'Provided strategic advice to support policy formulation',
        'Coordinated high-level meetings with stakeholders',
        'Drafted speeches, policy briefs, and reports',
        'Facilitated communication between ministries',
        'Impacted over 20 government programs'
      ],
      stats: [
        { label: 'Government Programs', value: '20+' },
        { label: 'Policy Briefs', value: '50+' },
        { label: 'Official Engagements', value: '100+' }
      ]
    },
    // ... (keep other experience objects but shorten descriptions for mobile)
  ];

  const filteredExperiences = activeTab === 'all' 
    ? experiences.slice(0, 4) // Show only 4 for mobile
    : experiences.filter(exp => exp.id === activeTab).slice(0, 4);

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-950">
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
              <FaBriefcase className="text-white text-lg sm:text-xl" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Professional <span className="text-yellow-500">Experience</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Comprehensive leadership roles across government, diplomacy, security, and governance sectors
          </p>
        </motion.div>

        {/* Category Tabs - Mobile Scrollable */}
        <div className="mb-8 sm:mb-12">
          <div className="overflow-x-auto pb-2 -mx-4 px-4">
            <div className="flex space-x-2 min-w-max">
              {experienceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-sm ${
                    activeTab === category.id
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {category.icon}
                  <span>{category.label}</span>
                  <span className="px-2 py-1 text-xs bg-white/20 rounded-full">{category.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={`${exp.id}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full p-4 sm:p-6 md:p-8 bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6 md:mb-8">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}>
                    <div className="text-white text-xl sm:text-2xl">
                      {exp.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 sm:mb-3">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate">{exp.title}</h3>
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 text-gray-400">
                      <FaBuilding className="text-yellow-500 text-sm" />
                      <span className="text-sm sm:text-base md:text-lg truncate">{exp.organization}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center gap-2 sm:gap-3">
                    <FaMedal className="text-yellow-500" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {exp.achievements.slice(0, 3).map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + (index * 0.1) + (idx * 0.05) }}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm sm:text-base">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  {exp.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="text-center p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl bg-white/5"
                    >
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-500 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button for Mobile */}
        {filteredExperiences.length > 0 && (
          <div className="mt-6 sm:mt-8 text-center">
            <button className="px-6 py-2 bg-yellow-500/20 text-yellow-500 rounded-full hover:bg-yellow-500/30 transition-colors text-sm">
              View More Experiences
            </button>
          </div>
        )}

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 sm:mt-16"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <FaChartLine className="text-yellow-500 text-2xl sm:text-3xl" />
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Career Impact Summary</h3>
                <p className="text-gray-400 text-sm sm:text-base">Quantifiable achievements across all professional roles</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[
                { value: '12+', label: 'Professional Roles', icon: <FaBriefcase /> },
                { value: '50+', label: 'State Visits', icon: <FaGlobe /> },
                { value: 'KES 70M', label: 'Security Budget', icon: <FaShieldAlt /> },
                { value: '100+', label: 'Policy Documents', icon: <FaChartLine /> }
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl bg-gray-800/30">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <div className="text-yellow-500 text-lg sm:text-xl md:text-2xl">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Career Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 sm:mt-12 md:mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <FaUserTie className="text-yellow-500 text-2xl sm:text-3xl" />
            <h4 className="text-xl sm:text-2xl font-bold text-white">Professional Philosophy</h4>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            "Strategic leadership requires a balance of diplomatic finesse, security intelligence, and governance excellence. Through diverse roles across government, international organizations, and advisory positions, I've consistently delivered measurable impact."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;