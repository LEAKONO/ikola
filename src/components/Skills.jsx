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
    <section id="skills" className="py-20 bg-gradient-to-b from-primary-navy to-gray-900">
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
              <FaCogs className="text-white text-xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Skills & <span className="text-primary-gold">Competencies</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise in diplomacy, security, leadership, and strategic governance
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.2, duration: 0.6 }}
              className="glass-card p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <div className="text-white text-2xl">
                    {category.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  <p className="text-gray-400">{category.skills.length} core competencies</p>
                </div>
              </div>

              {/* Skills Progress Bars */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, width: 0 }}
                    animate={inView ? { opacity: 1, width: '100%' } : {}}
                    transition={{ delay: (catIndex * 0.2) + (skillIndex * 0.1) + 0.3, duration: 1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-gold font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
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
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Professional <span className="text-primary-gold">Soft Skills</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + (index * 0.1), duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-primary-gold/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-gold/20 to-primary-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary-gold text-xl">
                        {skill.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{skill.name}</h4>
                      <div className="text-2xl font-bold text-primary-gold">{skill.level}%</div>
                    </div>
                  </div>

                  {/* Circular Progress */}
                  <div className="relative w-24 h-24 mx-auto">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="40"
                        strokeWidth="8"
                        stroke="rgba(255,255,255,0.1)"
                        fill="none"
                      />
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        r="40"
                        strokeWidth="8"
                        stroke="url(#gradient)"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: '0 251' }}
                        animate={inView ? { strokeDasharray: `${(skill.level / 100) * 251} 251` } : {}}
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
                      <span className="text-2xl font-bold text-white">{skill.level}%</span>
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
          className="glass-card p-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <FaChartLine className="text-primary-gold text-3xl" />
            <div>
              <h3 className="text-3xl font-bold text-white">Competency Matrix</h3>
              <p className="text-gray-400">Expertise distribution across key professional domains</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={matrixIndex} className="space-y-4">
                <h4 className="text-xl font-bold text-white mb-4">{matrix.title}</h4>
                {matrix.competencies.map((comp, compIndex) => (
                  <div key={compIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{comp.name}</span>
                      <span className="text-primary-gold font-bold">{comp.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${comp.level}%` } : {}}
                        transition={{ delay: 1.7 + (matrixIndex * 0.2) + (compIndex * 0.1), duration: 1 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary-gold to-yellow-600"
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
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <FaLightbulb className="text-primary-gold text-3xl" />
            <h4 className="text-2xl font-bold text-white">Skill Development Philosophy</h4>
          </div>
          <p className="text-xl text-gray-300">
            "Continuous skill development is essential in dynamic fields like diplomacy and security. I believe in combining foundational expertise with adaptive learning to address evolving global challenges effectively."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;