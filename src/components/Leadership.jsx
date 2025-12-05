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
    <section id="leadership" className="py-20 bg-gradient-to-b from-primary-navy to-gray-900">
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
              <FaUsers className="text-white text-xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Leadership & <span className="text-primary-gold">Governance</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic leadership roles in national and international governance bodies
          </p>
        </motion.div>

        {/* Current Leadership Roles */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Current <span className="text-primary-gold">Leadership Roles</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {leadershipRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-primary-gold/50 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center flex-shrink-0`}>
                      <div className="text-white text-2xl">
                        {role.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-white">{role.title}</h3>
                        <span className="px-4 py-1 bg-primary-gold/20 text-primary-gold rounded-full text-sm font-semibold">
                          {role.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-400">
                        <FaBuilding className="text-primary-gold" />
                        <span className="text-lg">{role.organization}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                      <FaChartLine className="text-primary-gold" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {role.responsibilities.map((responsibility, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: (index * 0.2) + (idx * 0.1) + 0.3 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-primary-gold/10 to-primary-crimson/10 border border-primary-gold/20">
                    <div className="flex items-center gap-3">
                      <FaChartLine className="text-primary-gold" />
                      <div>
                        <p className="text-sm text-gray-400">Key Impact</p>
                        <p className="text-white font-semibold">{role.impact}</p>
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
          className="mb-20"
        >
          <div className="glass-card p-8">
            <div className="flex items-center gap-4 mb-8">
              <FaBuilding className="text-primary-gold text-3xl" />
              <div>
                <h3 className="text-3xl font-bold text-white">Additional Board Memberships</h3>
                <p className="text-gray-400">Former and current board positions</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {additionalBoards.map((board, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9 + (index * 0.1), duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-gray-800/30 border border-gray-700 hover:border-primary-gold/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-gold/20 to-primary-gold/10 flex items-center justify-center mb-4">
                    <div className="text-primary-gold text-xl">
                      {board.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{board.title}</h4>
                  
                  <p className="text-gray-300 mb-4">{board.description}</p>
                  
                  <div className="space-y-2">
                    {board.organizations.map((org, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary-gold rounded-full"></div>
                        <span className="text-gray-400 text-sm">{org}</span>
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
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Governance <span className="text-primary-gold">Principles</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {governancePrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2 + (index * 0.1), duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-gold/20 to-primary-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary-gold text-2xl">
                    {principle.icon}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3">{principle.principle}</h4>
                <p className="text-gray-300">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-center"
        >
          <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Years Leadership Experience' },
              { value: '20+', label: 'Board Positions Held' },
              { value: '50+', label: 'Governance Programs' },
              { value: '5M+', label: 'Youth Impacted' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <div className="glass-card p-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <FaUserTie className="text-primary-gold text-3xl" />
              <h4 className="text-2xl font-bold text-white">Leadership Philosophy</h4>
            </div>
            <p className="text-xl text-gray-300 mb-6">
              "Effective leadership combines strategic vision with practical implementation. Through collaborative governance, transparent decision-making, and inclusive stakeholder engagement, I drive meaningful impact in national development and international cooperation."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary-gold/10 text-primary-gold rounded-full">Strategic Vision</span>
              <span className="px-4 py-2 bg-primary-crimson/10 text-primary-cream rounded-full">Ethical Governance</span>
              <span className="px-4 py-2 bg-blue-500/10 text-blue-300 rounded-full">Stakeholder Engagement</span>
              <span className="px-4 py-2 bg-green-500/10 text-green-300 rounded-full">Sustainable Impact</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;