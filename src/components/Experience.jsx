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
  FaMedal
} from 'react-icons/fa';
import { useState } from 'react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeTab, setActiveTab] = useState('diplomacy');

  const experienceCategories = [
    { id: 'diplomacy', label: 'Diplomacy', icon: <FaGlobe />, count: 4 },
    { id: 'security', label: 'Security', icon: <FaShieldAlt />, count: 3 },
    { id: 'leadership', label: 'Leadership', icon: <FaUsers />, count: 3 },
    { id: 'advisory', label: 'Advisory', icon: <FaUserTie />, count: 2 }
  ];

  const experiences = [
    {
      id: 'diplomacy',
      title: 'Director, Political and Diplomatic Protocol',
      organization: 'Ministry of Foreign Affairs',
      period: 'Senior Leadership Role',
      icon: <FaGlobe />,
      color: 'from-blue-600 to-cyan-500',
      achievements: [
        'Coordinated over 50 state visits and diplomatic engagements',
        'Led planning and execution of 10+ international conferences',
        'Streamlined operational procedures for protocol management',
        'Managed interdepartmental teams for high-level events',
        'Advised senior officials on diplomatic protocol strategies'
      ],
      stats: [
        { label: 'State Visits', value: '50+' },
        { label: 'Conferences', value: '10+' },
        { label: 'Teams Managed', value: '8+' }
      ]
    },
    {
      id: 'security',
      title: 'Corporate Affairs & Intelligence Analyst',
      organization: 'Office of the National Security Advisor',
      period: 'Security & Intelligence Role',
      icon: <FaShieldAlt />,
      color: 'from-red-600 to-orange-500',
      achievements: [
        'Produced actionable intelligence reports for national security policies',
        'Conducted strategic risk assessments for critical infrastructure',
        'Established streamlined intelligence reporting system',
        'Coordinated interagency information sharing',
        'Supported senior officials in analyzing geopolitical developments'
      ],
      stats: [
        { label: 'National Projects', value: '3' },
        { label: 'Key Installations', value: '5' },
        { label: 'Reports Generated', value: '100+' }
      ]
    },
    {
      id: 'advisory',
      title: 'Advisor & Personal Secretary',
      organization: 'Senior Government Officials',
      period: 'Executive Advisory Role',
      icon: <FaUserTie />,
      color: 'from-purple-600 to-pink-500',
      achievements: [
        'Provided strategic advice impacting 20+ government programs',
        'Coordinated 100+ official engagements with stakeholders',
        'Drafted speeches, policy briefs, and reports',
        'Facilitated communication between ministries and departments',
        'Promoted youth and gender inclusion in governance programs'
      ],
      stats: [
        { label: 'Government Programs', value: '20+' },
        { label: 'Official Engagements', value: '100+' },
        { label: 'Policy Documents', value: '50+' }
      ]
    },
    {
      id: 'security',
      title: 'Security & Risk Management Leadership',
      organization: 'Multiple Major Organizations',
      period: 'Strategic Security Role',
      icon: <FaShieldAlt />,
      color: 'from-green-600 to-emerald-500',
      achievements: [
        'Managed country-wide security for Kengen, UN HQ Kenya, NIS, NCRC',
        'Oversaw security team of 8 and KES 70M annual budget',
        'Designed security systems for KES 500M warehouses',
        'Led security for high-profile state and presidential functions',
        'Developed long-term risk management strategies'
      ],
      stats: [
        { label: 'Annual Budget', value: 'KES 70M' },
        { label: 'Warehouse Value', value: 'KES 500M' },
        { label: 'Team Size', value: '8+' }
      ]
    }
  ];

  const filteredExperiences = experiences.filter(exp => 
    activeTab === 'all' ? true : exp.id === activeTab
  );

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-primary-navy">
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
              <FaBriefcase className="text-white text-xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Professional <span className="text-primary-gold">Experience</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Senior leadership roles in government, diplomacy, and security management with measurable impact
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-primary-gold to-yellow-600 text-primary-navy font-bold'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            <FaBriefcase />
            <span>All Experience</span>
            <span className="px-2 py-1 text-xs bg-white/20 rounded-full">12</span>
          </button>

          {experienceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-primary-gold to-yellow-600 text-primary-navy font-bold'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
              <span className="px-2 py-1 text-xs bg-white/20 rounded-full">{category.count}</span>
            </button>
          ))}
        </motion.div>

        {/* Experience Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="h-full p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-primary-gold/50 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}>
                    <div className="text-white text-2xl">
                      {exp.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <span className="px-4 py-1 bg-primary-gold/20 text-primary-gold rounded-full text-sm font-semibold">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <FaBuilding className="text-primary-gold" />
                      <span className="text-lg">{exp.organization}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                    <FaMedal className="text-primary-gold" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + (index * 0.1) + (idx * 0.05) }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {exp.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="text-center p-4 rounded-xl bg-white/5"
                    >
                      <div className="text-2xl font-bold text-primary-gold mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Line */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-primary-gold to-transparent transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20"
        >
          <div className="glass-card p-8">
            <div className="flex items-center gap-4 mb-8">
              <FaChartLine className="text-primary-gold text-3xl" />
              <div>
                <h3 className="text-3xl font-bold text-white">Career Impact Metrics</h3>
                <p className="text-gray-400">Quantifiable achievements across professional roles</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '50+', label: 'State Visits Coordinated', icon: <FaGlobe /> },
                { value: '100+', label: 'Official Engagements', icon: <FaHandshake /> },
                { value: 'KES 70M', label: 'Security Budget Managed', icon: <FaShieldAlt /> },
                { value: '20+', label: 'Government Programs', icon: <FaChartLine /> }
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-6 rounded-xl bg-gray-800/30">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-gold/20 to-primary-gold/10 flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary-gold text-2xl">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
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
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <FaUserTie className="text-primary-gold text-3xl" />
            <h4 className="text-2xl font-bold text-white">Leadership Philosophy</h4>
          </div>
          <p className="text-xl text-gray-300">
            "Effective leadership combines strategic vision with operational excellence. Through diplomatic engagement, security intelligence, and policy advisory, I've consistently delivered results that strengthen governance and enhance international relations."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;