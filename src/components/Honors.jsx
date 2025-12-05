// src/components/Honors.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAward, FaMedal, FaUniversity, FaTrophy } from 'react-icons/fa';

const Honors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const nationalOrders = [
    {
      icon: <FaMedal />,
      title: "Order of the Grand Warrior (OGW)",
      issuer: "President Uhuru Kenyatta",
      color: "border-yellow-500"
    },
    {
      icon: <FaMedal />,
      title: "Chief of the Order of the Burning Spear (CBS)",
      issuer: "President Uhuru Kenyatta",
      color: "border-red-500"
    },
    {
      icon: <FaAward />,
      title: "Uhodari Medal of Kenya",
      issuer: "Republic of Kenya",
      color: "border-green-500"
    }
  ];

  const honoraryDoctorates = [
    {
      icon: <FaUniversity />,
      title: "Doctor of Humanitarian Studies",
      university: "Brigham Young University – Hawaii",
      color: "bg-gradient-to-r from-blue-500 to-purple-500"
    },
    {
      icon: <FaUniversity />,
      title: "Honorary Doctorate",
      university: "Heart Bible International University – Florida",
      color: "bg-gradient-to-r from-red-500 to-pink-500"
    },
    {
      icon: <FaUniversity />,
      title: "Doctor of Science Honoris Causa",
      university: "European American University",
      color: "bg-gradient-to-r from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="honors" className="py-20 bg-gradient-to-b from-primary-navy to-black">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Honors & <span className="text-primary-gold">Recognition</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nationally and internationally recognized through prestigious awards and honors
          </p>
        </motion.div>

        {/* National Orders */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-primary-gold mb-12">
            National Orders & Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nationalOrders.map((order, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className={`relative p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border-2 ${order.color} border-opacity-50`}
              >
                {/* Animated Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-gold/10 to-transparent rounded-2xl"></div>
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 mb-6">
                    <div className="text-3xl text-primary-gold">
                      {order.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{order.title}</h4>
                  <p className="text-gray-300">{order.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Honorary Doctorates */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-primary-gold mb-12">
            Honorary Doctorates
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {honoraryDoctorates.map((doctorate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-primary-gold/50 transition-all duration-300">
                  {/* Animated Ribbon */}
                  <div className="absolute top-0 right-0">
                    <div className="relative">
                      <div className="w-24 h-24 overflow-hidden">
                        <div className="absolute transform rotate-45 bg-primary-gold text-primary-navy text-xs font-bold py-1 text-center w-40 top-5 -right-12">
                          HONORIS CAUSA
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-full ${doctorate.color} flex items-center justify-center mx-auto mb-6`}>
                      <FaUniversity className="text-white text-2xl" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3">{doctorate.title}</h4>
                    <p className="text-primary-gold text-lg mb-4">{doctorate.university}</p>
                    <div className="text-gray-400 text-sm">
                      Awarded for exceptional contributions to leadership and governance
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards Gallery */}
        <div>
          <h3 className="text-3xl font-bold text-center text-primary-gold mb-12">
            International Awards
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              "World Vision Kenya – Ambassador Award",
              "TEAR Fund – Global Award for Most Inspiring Individuals",
              "Sikh's International Man of Peace Award",
              "International Entrepreneur of the Year",
              "National Entrepreneur Lifetime Achievement Award",
              "Kenya Achievers Award – Best Book Designer",
              "Young Achievers Award – 2022",
              "Prison Fellowship Kenya Award"
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                className="p-6 rounded-xl bg-gray-900/30 border border-gray-700 hover:border-primary-gold/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <FaTrophy className="text-primary-gold text-xl flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{award}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Honors;