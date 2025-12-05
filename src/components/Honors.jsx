import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaAward, 
  FaMedal, 
  FaUniversity, 
  FaTrophy,
  FaStar,
  FaCrown,
  FaRibbon,
  FaGlobe,
  FaHandshake,
  FaLightbulb
} from 'react-icons/fa';
import { useState } from 'react';

const Honors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const nationalOrders = [
    {
      title: 'Order of the Grand Warrior (OGW)',
      issuer: 'President Uhuru Kenyatta',
      year: 'National Honor',
      description: 'Highest recognition for distinguished service to the nation',
      icon: <FaCrown />,
      color: 'from-yellow-600 to-amber-600',
      category: 'national'
    },
    {
      title: 'Chief of the Order of the Burning Spear (CBS)',
      issuer: 'President Uhuru Kenyatta',
      year: 'National Honor',
      description: 'Recognition for outstanding service to Kenya',
      icon: <FaMedal />,
      color: 'from-red-600 to-orange-600',
      category: 'national'
    },
    {
      title: 'Uhodari Medal of Kenya',
      issuer: 'Republic of Kenya',
      year: 'Medal of Honor',
      description: 'Award for exceptional bravery and service',
      icon: <FaStar />,
      color: 'from-green-600 to-emerald-600',
      category: 'national'
    }
  ];

  const honoraryDoctorates = [
    {
      title: 'Doctor of Humanitarian Studies',
      university: 'Brigham Young University – Hawaii',
      year: 'Honorary Doctorate',
      description: 'Awarded for humanitarian contributions and leadership',
      icon: <FaUniversity />,
      color: 'from-blue-600 to-cyan-600',
      category: 'doctorate'
    },
    {
      title: 'Honorary Doctorate',
      university: 'Heart Bible International University – Florida',
      year: 'Honorary Doctorate',
      description: 'Recognition for spiritual leadership and community service',
      icon: <FaUniversity />,
      color: 'from-purple-600 to-pink-600',
      category: 'doctorate'
    },
    {
      title: 'Doctor of Science Honoris Causa',
      university: 'European American University, Commonwealth of Dominica',
      year: 'Honorary Doctorate',
      description: 'Leadership & Corporate Governance',
      icon: <FaUniversity />,
      color: 'from-indigo-600 to-violet-600',
      category: 'doctorate'
    },
    {
      title: 'Doctorate of Leadership & Development',
      university: 'ILMMD',
      year: 'Honoris Causa',
      description: 'Recognition for leadership in development initiatives',
      icon: <FaUniversity />,
      color: 'from-teal-600 to-cyan-600',
      category: 'doctorate'
    }
  ];

  const awards = [
    {
      title: 'World Vision Kenya – Ambassador Award',
      category: 'humanitarian',
      icon: <FaHandshake />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'TEAR Fund – Global Award for Most Inspiring Individuals',
      category: 'international',
      icon: <FaGlobe />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Sikh\'s International Man of Peace Award',
      category: 'international',
      icon: <FaRibbon />,
      color: 'from-yellow-500 to-amber-500'
    },
    {
      title: 'International Entrepreneur of the Year',
      category: 'business',
      icon: <FaTrophy />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'National Entrepreneur Lifetime Achievement Award',
      category: 'business',
      icon: <FaAward />,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Kenya Achievers Award – Best Book Designer',
      category: 'creative',
      icon: <FaStar />,
      color: 'from-indigo-500 to-violet-500'
    },
    {
      title: 'Young Achievers Award – 2022',
      category: 'youth',
      icon: <FaLightbulb />,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Prison Fellowship Kenya Award',
      category: 'humanitarian',
      icon: <FaHandshake />,
      color: 'from-gray-500 to-blue-500'
    }
  ];

  const filteredAwards = activeFilter === 'all' 
    ? awards 
    : awards.filter(award => award.category === activeFilter);

  const categories = [
    { id: 'all', label: 'All Awards', count: awards.length },
    { id: 'international', label: 'International', count: awards.filter(a => a.category === 'international').length },
    { id: 'humanitarian', label: 'Humanitarian', count: awards.filter(a => a.category === 'humanitarian').length },
    { id: 'business', label: 'Business', count: awards.filter(a => a.category === 'business').length },
    { id: 'youth', label: 'Youth', count: awards.filter(a => a.category === 'youth').length },
    { id: 'creative', label: 'Creative', count: awards.filter(a => a.category === 'creative').length }
  ];

  return (
    <section id="honors" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-950">
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
              <FaAward className="text-white text-lg sm:text-xl" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Honors & <span className="text-yellow-500">Recognition</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Nationally and internationally recognized through prestigious awards, honors, and honorary doctorates
          </p>
        </motion.div>

        {/* National Orders */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-12">
            National <span className="text-yellow-500">Orders & Honors</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {nationalOrders.map((order, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="relative p-4 sm:p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700">
                  {/* Ribbon */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full text-gray-900 font-bold text-xs sm:text-sm">
                      National Honor
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl bg-gradient-to-br ${order.color} flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                    <div className="text-white text-2xl sm:text-3xl">
                      {order.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center mb-2 sm:mb-3">
                    {order.title}
                  </h4>
                  
                  <div className="text-center mb-3 sm:mb-4">
                    <p className="text-yellow-500 text-base sm:text-lg font-semibold">{order.issuer}</p>
                    <p className="text-gray-400 text-sm sm:text-base">{order.year}</p>
                  </div>

                  <p className="text-gray-300 text-center text-sm sm:text-base">
                    {order.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Honorary Doctorates */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-12">
            Honorary <span className="text-yellow-500">Doctorates</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {honoraryDoctorates.map((doctorate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + (index * 0.1), duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full p-4 sm:p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl sm:rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
                  <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${doctorate.color} flex items-center justify-center flex-shrink-0`}>
                      <div className="text-white text-xl sm:text-2xl">
                        {doctorate.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                        {doctorate.title}
                      </h4>
                      
                      <div className="mb-3 sm:mb-4">
                        <p className="text-yellow-500 text-base sm:text-lg font-semibold">{doctorate.university}</p>
                        <p className="text-gray-400 text-sm sm:text-base">{doctorate.year}</p>
                      </div>

                      <p className="text-gray-300 text-sm sm:text-base">
                        {doctorate.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="mb-6 sm:mb-8 md:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              International <span className="text-yellow-500">Awards</span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">Recognition from global organizations and institutions</p>
          </div>

          {/* Filter Buttons - Mobile Scrollable */}
          <div className="mb-6 sm:mb-8">
            <div className="overflow-x-auto pb-2 -mx-4 px-4">
              <div className="flex space-x-2 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-3 sm:px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-sm ${
                      activeFilter === category.id
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <span>{category.label}</span>
                    <span className="px-2 py-1 text-xs bg-white/20 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {filteredAwards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + (index * 0.05), duration: 0.6 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="group"
              >
                <div className="h-full p-3 sm:p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg sm:rounded-xl border border-gray-700 hover:border-yellow-500/30 transition-all duration-300">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${award.color} flex items-center justify-center mb-3 sm:mb-4`}>
                    <div className="text-white text-base sm:text-lg">
                      {award.icon}
                    </div>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white mb-2 line-clamp-2">
                    {award.title}
                  </h4>

                  <div className="flex items-center justify-between mt-3 sm:mt-4">
                    <span className="px-2 py-1 text-xs bg-white/5 rounded-full text-gray-300">
                      {award.category}
                    </span>
                    <FaAward className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recognition Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 sm:mt-12 md:mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6 md:p-8">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <FaStar className="text-yellow-500 text-xl sm:text-2xl md:text-3xl" />
              <h4 className="text-xl sm:text-2xl font-bold text-white">Recognition Philosophy</h4>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6">
              "Every award and honor represents not just personal achievement, but a commitment to service, leadership, and making a positive impact. These recognitions inspire continued dedication to excellence in diplomacy, security, and governance."
            </p>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              <div className="px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30">
                <span className="text-yellow-500 font-bold text-sm sm:text-base">12+</span>
                <span className="text-gray-300 text-xs sm:text-sm ml-1">International Awards</span>
              </div>
              <div className="px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30">
                <span className="text-yellow-500 font-bold text-sm sm:text-base">4</span>
                <span className="text-gray-300 text-xs sm:text-sm ml-1">Honorary Doctorates</span>
              </div>
              <div className="px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30">
                <span className="text-yellow-500 font-bold text-sm sm:text-base">3</span>
                <span className="text-gray-300 text-xs sm:text-sm ml-1">National Honors</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Honors;