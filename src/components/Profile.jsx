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
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center flex-shrink-0">
              <FaUserTie className="text-white text-lg sm:text-xl" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              About <span className="text-yellow-500">Me</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Senior leader with expertise in diplomacy, international security, and strategic governance
          </p>
        </motion.div>

        {/* Profile Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-6 sm:p-8 mb-12 sm:mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Professional <span className="text-yellow-500">Summary</span>
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-300">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  My expertise in diplomacy, international security, and strategic governance is supported by a Ph.D. in International Studies, dual master's degrees, and specialized diplomas in peacebuilding, conflict management, gender, and leadership.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  I have held senior government and diplomatic roles, including Director of Political and Diplomatic Protocol at the Ministry of Foreign Affairs, Corporate Affairs & Intelligence Analyst at the Office of the National Security Advisor, and Advisor to senior government officials.
                </p>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Recognized nationally and internationally through honors, awards, and honorary doctorates, I have also contributed to youth empowerment, corporate advisory, and multilateral initiatives.
                </p>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-yellow-500/20 to-red-600/20 rounded-xl sm:rounded-2xl blur-xl"></div>
              <div className="relative p-6 sm:p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl border border-gray-700">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <FaLightbulb className="text-yellow-500 text-2xl sm:text-3xl" />
                  <h4 className="text-xl sm:text-2xl font-bold text-white">Core Approach</h4>
                </div>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-3">
                    <FaRocket className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Combining analytical depth with operational leadership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaRocket className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Driving innovative solutions in global governance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaRocket className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Shaping policy formulation and strategic security initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaRocket className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">Advancing peacebuilding and multilateral cooperation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Competencies */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12">
            Core <span className="text-yellow-500">Competencies</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {coreCompetencies.map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full p-4 sm:p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-yellow-500 text-xl sm:text-2xl">
                      {competency.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                    {competency.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                    {competency.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {competency.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-white/5 rounded-full text-gray-300 border border-white/10"
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
      </div>
    </section>
  );
};

export default Profile;