import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaCogs, 
  FaShieldAlt, 
  FaUsers, 
  FaChartLine,
  FaHandshake,
  FaGlobe,
  FaLightbulb,
  FaProjectDiagram,
  FaCommentDots,
  FaSearch
} from 'react-icons/fa';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      category: 'Diplomacy & Protocol',
      icon: <FaGlobe />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'International Engagements', level: 95 },
        { name: 'Protocol Management', level: 90 },
        { name: 'Bilateral Relations', level: 88 },
        { name: 'State Visit Coordination', level: 92 }
      ]
    },
    {
      category: 'Security & Intelligence',
      icon: <FaShieldAlt />,
      color: 'from-red-500 to-orange-500',
      skills: [
        { name: 'Risk Assessment', level: 92 },
        { name: 'Intelligence Analysis', level: 90 },
        { name: 'Crisis Management', level: 88 },
        { name: 'Security Systems Design', level: 85 }
      ]
    },
    {
      category: 'Leadership & Management',
      icon: <FaUsers />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Team Leadership', level: 93 },
        { name: 'Strategic Planning', level: 90 },
        { name: 'Stakeholder Management', level: 88 },
        { name: 'Budget Management', level: 85 }
      ]
    },
    {
      category: 'Policy & Strategy',
      icon: <FaChartLine />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Policy Formulation', level: 91 },
        { name: 'Strategic Advisory', level: 89 },
        { name: 'Program Coordination', level: 87 },
        { name: 'Governance Planning', level: 86 }
      ]
    }
  ];

  const softSkills = [
    { name: 'Analytical Thinking', icon: <FaSearch />, level: 94 },
    { name: 'Strategic Communication', icon: <FaCommentDots />, level: 92 },
    { name: 'Problem Solving', icon: <FaLightbulb />, level: 90 },
    { name: 'Project Management', icon: <FaProjectDiagram />, level: 88 },
    { name: 'Negotiation', icon: <FaHandshake />, level: 91 },
    { name: 'Adaptability', icon: <FaCogs />, level: 89 }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-950">
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
              <FaCogs className="text-white text-lg sm:text-xl" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Skills & <span className="text-yellow-500">Competencies</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Comprehensive expertise in diplomacy, security, leadership, and strategic governance
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.2, duration: 0.6 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <div className="text-white text-xl sm:text-2xl">
                    {category.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{category.category}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{category.skills.length} core competencies</p>
                </div>
              </div>

              {/* Skills Progress Bars */}
              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, width: 0 }}
                    animate={inView ? { opacity: 1, width: '100%' } : {}}
                    transition={{ delay: (catIndex * 0.2) + (skillIndex * 0.1) + 0.3, duration: 1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="text-gray-300 font-medium text-sm sm:text-base">{skill.name}</span>
                      <span className="text-yellow-500 font-bold text-sm sm:text-base">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: (catIndex * 0.2) + (skillIndex * 0.1) + 0.5, duration: 1, type: "spring" }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-12">
            Professional <span className="text-yellow-500">Soft Skills</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + (index * 0.1), duration: 0.6 }}
                whileHover={{ y: -3 }}
                className="group"
              >
                <div className="h-full p-3 sm:p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <div className="text-yellow-500 text-sm sm:text-base">
                        {skill.icon}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-white truncate">{skill.name}</h4>
                      <div className="text-base sm:text-lg font-bold text-yellow-500">{skill.level}%</div>
                    </div>
                  </div>

                  {/* Circular Progress */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="30"
                        strokeWidth="6"
                        stroke="rgba(255,255,255,0.1)"
                        fill="none"
                      />
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="30"
                        strokeWidth="6"
                        stroke="url(#gradient)"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: '0 188' }}
                        animate={inView ? { strokeDasharray: `${(skill.level / 100) * 188} 188` } : {}}
                        transition={{ delay: 1 + (index * 0.1), duration: 1.5 }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#d4af37" />
                          <stop offset="100%" stopColor="#f7ef8a" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-base sm:text-lg font-bold text-white">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Competency Matrix */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
          className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6 md:p-8"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
            <FaChartLine className="text-yellow-500 text-xl sm:text-2xl md:text-3xl" />
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Competency Matrix</h3>
              <p className="text-gray-400 text-sm sm:text-base">Expertise distribution across key professional domains</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                title: 'Technical Expertise',
                competencies: [
                  { name: 'Diplomatic Protocol', level: 95 },
                  { name: 'Security Analysis', level: 92 },
                  { name: 'Policy Formulation', level: 90 },
                  { name: 'Risk Management', level: 88 }
                ]
              },
              {
                title: 'Leadership Skills',
                competencies: [
                  { name: 'Strategic Vision', level: 93 },
                  { name: 'Team Building', level: 90 },
                  { name: 'Decision Making', level: 91 },
                  { name: 'Crisis Leadership', level: 89 }
                ]
              },
              {
                title: 'Operational Excellence',
                competencies: [
                  { name: 'Project Coordination', level: 92 },
                  { name: 'Stakeholder Engagement', level: 90 },
                  { name: 'Budget Management', level: 87 },
                  { name: 'Performance Monitoring', level: 88 }
                ]
              }
            ].map((matrix, matrixIndex) => (
              <div key={matrixIndex} className="space-y-3 sm:space-y-4">
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-4">{matrix.title}</h4>
                {matrix.competencies.map((comp, compIndex) => (
                  <div key={compIndex} className="space-y-1 sm:space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm sm:text-base">{comp.name}</span>
                      <span className="text-yellow-500 font-bold text-sm sm:text-base">{comp.level}%</span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${comp.level}%` } : {}}
                        transition={{ delay: 1.7 + (matrixIndex * 0.2) + (compIndex * 0.1), duration: 1 }}
                        className="h-full rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skill Development Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 2, duration: 1 }}
          className="mt-8 sm:mt-12 md:mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-3 sm:mb-6">
            <FaLightbulb className="text-yellow-500 text-xl sm:text-2xl md:text-3xl" />
            <h4 className="text-xl sm:text-2xl font-bold text-white">Skill Development Philosophy</h4>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            "Continuous skill development is essential in dynamic fields like diplomacy and security. I believe in combining foundational expertise with adaptive learning to address evolving global challenges effectively."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;