import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaUserTie, 
  FaGlobe, 
  FaShieldAlt, 
  FaUsers, 
  FaChartLine,
  FaHandshake,
  FaLightbulb,
  FaRocket
} from 'react-icons/fa';

const Profile = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const profileStats = [
    { icon: <FaUserTie />, value: '15+', label: 'Years Experience', color: 'from-blue-500 to-cyan-500' },
    { icon: <FaGlobe />, value: '30+', label: 'Countries Engaged', color: 'from-green-500 to-emerald-500' },
    { icon: <FaShieldAlt />, value: '100+', label: 'Security Projects', color: 'from-red-500 to-orange-500' },
    { icon: <FaUsers />, value: '50+', label: 'Team Members Led', color: 'from-purple-500 to-pink-500' }
  ];

  const coreCompetencies = [
    {
      title: 'Diplomacy & Protocol',
      description: 'Expertise in coordinating international engagements and state visits',
      icon: <FaHandshake />,
      skills: ['State Visits', 'Bilateral Relations', 'Protocol Management']
    },
    {
      title: 'Strategic Policy',
      description: 'Skilled in developing policies impacting national governance',
      icon: <FaChartLine />,
      skills: ['Policy Formulation', 'Strategic Planning', 'Governance']
    },
    {
      title: 'Security Intelligence',
      description: 'Proficient in assessing geopolitical risks and intelligence',
      icon: <FaShieldAlt />,
      skills: ['Risk Assessment', 'Intelligence Analysis', 'Crisis Management']
    },
    {
      title: 'Leadership',
      description: 'Leading interdepartmental teams and complex operations',
      icon: <FaUsers />,
      skills: ['Team Management', 'Strategic Leadership', 'Stakeholder Engagement']
    }
  ];

  return (
    <section id="profile" className="py-20 bg-gradient-to-b from-gray-900 to-primary-navy">
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
              <FaUserTie className="text-white text-xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Career <span className="text-primary-gold">Profile</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Senior leader with expertise in diplomacy, international security, and strategic governance
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {profileStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 mx-auto`}>
                  <div className="text-white text-2xl">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Profile Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="glass-card p-8 mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Professional <span className="text-primary-gold">Summary</span>
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  My expertise in diplomacy, international security, and strategic governance is supported by a Ph.D. in International Studies, dual master's degrees, and specialized diplomas in peacebuilding, conflict management, gender, and leadership.
                </p>
                <p className="text-lg leading-relaxed">
                  I have held senior government and diplomatic roles, including Director of Political and Diplomatic Protocol at the Ministry of Foreign Affairs, Corporate Affairs & Intelligence Analyst at the Office of the National Security Advisor, and Advisor to senior government officials.
                </p>
                <p className="text-lg leading-relaxed">
                  Recognized nationally and internationally through honors, awards, and honorary doctorates, I have also contributed to youth empowerment, corporate advisory, and multilateral initiatives.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-gold/20 to-primary-crimson/20 rounded-3xl blur-xl"></div>
              <div className="relative p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <FaLightbulb className="text-primary-gold text-3xl" />
                  <h4 className="text-2xl font-bold text-white">Core Approach</h4>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FaRocket className="text-primary-gold mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Combining analytical depth with operational leadership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaRocket className="text-primary-gold mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Driving innovative solutions in global governance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaRocket className="text-primary-gold mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Shaping policy formulation and strategic security initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaRocket className="text-primary-gold mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Advancing peacebuilding and multilateral cooperation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Competencies */}
        <div>
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Core <span className="text-primary-gold">Competencies</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCompetencies.map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-primary-gold/50 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-gold/20 to-primary-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary-gold text-2xl">
                      {competency.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">
                    {competency.title}
                  </h4>
                  
                  <p className="text-gray-400 mb-6">
                    {competency.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {competency.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-white/5 rounded-full text-gray-300 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-primary-gold/10 to-primary-crimson/10 border border-primary-gold/30">
            <span className="text-gray-300">Available for:</span>
            <div className="flex gap-3">
              <span className="px-4 py-2 bg-primary-gold/20 text-primary-gold rounded-full text-sm">Consultancy</span>
              <span className="px-4 py-2 bg-primary-crimson/20 text-primary-cream rounded-full text-sm">Speaking</span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">Advisory</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;