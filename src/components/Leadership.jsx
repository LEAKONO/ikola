import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaUsers, 
  FaChartLine, 
  FaHandshake, 
  FaGlobe,
  FaBuilding,
  FaUserTie,
  FaShieldAlt,
  FaLightbulb,
  FaBalanceScale,
  FaUniversity
} from 'react-icons/fa';

const Leadership = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const leadershipRoles = [
    {
      title: 'Chairperson',
      organization: 'National Youth Council (NYC)',
      period: 'Current',
      icon: <FaUsers />,
      color: 'from-blue-600 to-cyan-500',
      responsibilities: [
        'Strategic leadership of national youth development initiatives',
        'Policy formulation for youth empowerment programs',
        'Oversight of council operations and budget management',
        'Representation in national and international youth forums'
      ],
      impact: 'Led initiatives impacting 5M+ Kenyan youth'
    },
    {
      title: 'Corporate Advisory Board Member',
      organization: 'USAID Yes Youth Can (YYC)',
      period: 'Advisory Role',
      icon: <FaChartLine />,
      color: 'from-green-600 to-emerald-500',
      responsibilities: [
        'Strategic guidance on youth entrepreneurship programs',
        'Policy advisory for USAID-funded initiatives',
        'Monitoring and evaluation of program impact',
        'Stakeholder engagement and partnership development'
      ],
      impact: 'Advised programs with $50M+ funding'
    },
    {
      title: 'Programme Coordinator & Advocacy Director',
      organization: 'UNDP Kenya',
      period: 'Coordination Role',
      icon: <FaGlobe />,
      color: 'from-purple-600 to-pink-500',
      responsibilities: [
        'Coordination of UNDP governance programs',
        'Advocacy for sustainable development goals',
        'Partnership building with government and NGOs',
        'Program monitoring and reporting'
      ],
      impact: 'Coordinated 20+ development programs'
    },
    {
      title: 'Board Member',
      organization: 'Private Security Regulatory Authority (PSRA)',
      period: 'Regulatory Role',
      icon: <FaShieldAlt />,
      color: 'from-red-600 to-orange-500',
      responsibilities: [
        'Regulatory oversight of private security industry',
        'Policy formulation for security standards',
        'Compliance monitoring and enforcement',
        'Stakeholder engagement and industry development'
      ],
      impact: 'Regulated 500,000+ security personnel'
    }
  ];

  const additionalBoards = [
    {
      title: 'Former Board Member',
      organizations: ['Multiple Kenyan Government Agencies', 'International NGOs', 'Corporate Boards'],
      icon: <FaBuilding />,
      description: 'Served on various boards providing governance oversight'
    },
    {
      title: 'International Council Member',
      organizations: ['Global Security Councils', 'Diplomatic Forums', 'Peacebuilding Initiatives'],
      icon: <FaGlobe />,
      description: 'Participated in international governance and security councils'
    },
    {
      title: 'Advisory Committee Chair',
      organizations: ['Policy Advisory Groups', 'Technical Committees', 'Review Panels'],
      icon: <FaUserTie />,
      description: 'Chaired multiple advisory committees on policy and governance'
    }
  ];

  const governancePrinciples = [
    {
      principle: 'Strategic Vision',
      description: 'Developing and implementing long-term strategic plans',
      icon: <FaLightbulb />
    },
    {
      principle: 'Ethical Leadership',
      description: 'Upholding highest standards of integrity and accountability',
      icon: <FaBalanceScale />
    },
    {
      principle: 'Stakeholder Engagement',
      description: 'Inclusive decision-making with all stakeholders',
      icon: <FaHandshake />
    },
    {
      principle: 'Innovative Governance',
      description: 'Implementing modern governance practices',
      icon: <FaUniversity />
    }
  ];

  return (
    <section id="leadership" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-950">
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
              <FaUsers className="text-white text-lg sm:text-xl" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Leadership & <span className="text-yellow-500">Governance</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Strategic leadership roles in national and international governance bodies
          </p>
        </motion.div>

        {/* Current Leadership Roles */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-12">
            Current <span className="text-yellow-500">Leadership Roles</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {leadershipRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full p-4 sm:p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center flex-shrink-0`}>
                      <div className="text-white text-xl sm:text-2xl">
                        {role.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 sm:mb-3">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate">{role.title}</h3>
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                          {role.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-gray-400">
                        <FaBuilding className="text-yellow-500 text-sm" />
                        <span className="text-sm sm:text-base md:text-lg truncate">{role.organization}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center gap-2 sm:gap-3">
                      <FaChartLine className="text-yellow-500" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {role.responsibilities.map((responsibility, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: (index * 0.2) + (idx * 0.1) + 0.3 }}
                          className="flex items-start gap-2 sm:gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm sm:text-base">{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <FaChartLine className="text-yellow-500" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-400">Key Impact</p>
                        <p className="text-white font-semibold text-sm sm:text-base">{role.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Board Memberships */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
              <FaBuilding className="text-yellow-500 text-xl sm:text-2xl md:text-3xl" />
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Additional Board Memberships</h3>
                <p className="text-gray-400 text-sm sm:text-base">Former and current board positions</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {additionalBoards.map((board, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 + (index * 0.1), duration: 0.6 }}
                  whileHover={{ y: -3 }}
                  className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gray-800/30 border border-gray-700 hover:border-yellow-500/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 flex items-center justify-center mb-3 sm:mb-4">
                    <div className="text-yellow-500 text-lg sm:text-xl">
                      {board.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{board.title}</h4>
                  
                  <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">{board.description}</p>
                  
                  <div className="space-y-1 sm:space-y-2">
                    {board.organizations.map((org, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                        <span className="text-gray-400 text-xs sm:text-sm">{org}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Governance Principles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-12">
            Governance <span className="text-yellow-500">Principles</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {governancePrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + (index * 0.1), duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-yellow-500 text-xl sm:text-2xl">
                    {principle.icon}
                  </div>
                </div>
                
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">{principle.principle}</h4>
                <p className="text-gray-300 text-xs sm:text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { value: '15+', label: 'Years Leadership Experience' },
              { value: '20+', label: 'Board Positions Held' },
              { value: '50+', label: 'Governance Programs' },
              { value: '5M+', label: 'Youth Impacted' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8, duration: 1 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6 md:p-8">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-6">
              <FaUserTie className="text-yellow-500 text-xl sm:text-2xl md:text-3xl" />
              <h4 className="text-xl sm:text-2xl font-bold text-white">Leadership Philosophy</h4>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6">
              "Effective leadership combines strategic vision with practical implementation. Through collaborative governance, transparent decision-making, and inclusive stakeholder engagement, I drive meaningful impact in national development and international cooperation."
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 rounded-full text-xs sm:text-sm">Strategic Vision</span>
              <span className="px-3 py-1 bg-yellow-600/10 text-yellow-400 rounded-full text-xs sm:text-sm">Ethical Governance</span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-full text-xs sm:text-sm">Stakeholder Engagement</span>
              <span className="px-3 py-1 bg-green-500/10 text-green-300 rounded-full text-xs sm:text-sm">Sustainable Impact</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;