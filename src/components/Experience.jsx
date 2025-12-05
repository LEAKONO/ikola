// src/components/Experience.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBuilding, FaUserTie, FaShieldAlt, FaUsers } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      icon: <FaBuilding className="text-3xl" />,
      title: "Director, Political and Diplomatic Protocol",
      organization: "Ministry of Foreign Affairs",
      achievements: [
        "Coordinated over 50 state visits and diplomatic engagements",
        "Led planning of 10+ international conferences and delegations",
        "Streamlined protocol management operations",
        "Managed interdepartmental teams for high-level events"
      ],
      color: "from-blue-600 to-cyan-500"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Corporate Affairs & Intelligence Analyst",
      organization: "Office of the National Security Advisor",
      achievements: [
        "Produced actionable intelligence reports for national security",
        "Conducted strategic risk assessments for critical infrastructure",
        "Est streamlined intelligence reporting system",
        "Coordinated interagency information sharing"
      ],
      color: "from-red-600 to-orange-500"
    },
    {
      icon: <FaUserTie className="text-3xl" />,
      title: "Advisor & Personal Secretary",
      organization: "Senior Government Officials",
      achievements: [
        "Provided strategic advice impacting 20+ government programs",
        "Coordinated 100+ official engagements with stakeholders",
        "Drafted speeches, policy briefs, and reports",
        "Facilitated inter-ministerial communication"
      ],
      color: "from-purple-600 to-pink-500"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Security & Risk Management Leadership",
      organization: "Multiple Major Organizations",
      achievements: [
        "Managed security for UN HQ, Kengen, NIS, etc.",
        "Oversaw KES 70M annual security budget",
        "Designed security systems for KES 500M warehouses",
        "Led security for state functions and major events"
      ],
      color: "from-green-600 to-emerald-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-primary-navy">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-primary-gold">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Senior leadership roles in government, diplomacy, and security management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-primary-gold/50 transition-all duration-300">
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white mb-6 transform group-hover:rotate-12 transition-transform duration-300`}>
                  {exp.icon}
                </div>

                {/* Title & Organization */}
                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-primary-gold text-lg mb-6">{exp.organization}</p>

                {/* Achievements List */}
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect Line */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-primary-gold to-transparent transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "50+", label: "State Visits Coordinated" },
            { value: "100+", label: "Official Engagements" },
            { value: "KES 70M", label: "Security Budget Managed" },
            { value: "20+", label: "Government Programs Impacted" }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-gold mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;