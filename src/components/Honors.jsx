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

  const allHonors = [...nationalOrders, ...honoraryDoctorates];
  
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
    <section id="honors" className="py-20 bg-gradient-to-b from-gray-900 to-primary-navy">
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
              <FaAward className="text-white text-xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Honors & <span className="text-primary-gold">Recognition</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nationally and internationally recognized through prestigious awards, honors, and honorary doctorates
          </p>
        </motion.div>

        {/* National Orders */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            National <span className="text-primary-gold">Orders & Honors</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {nationalOrders.map((order, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + (index * 0.1), duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                {/* Glowing Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary-gold to-primary-crimson rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                
                <div className="relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700">
                  {/* Ribbon */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="px-4 py-1 bg-gradient-to-r from-primary-gold to-yellow-600 rounded-full text-primary-navy font-bold text-sm">
                      National Honor
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${order.color} flex items-center justify-center mx-auto mb-6`}>
                    <div className="text-white text-3xl">
                      {order.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-2xl font-bold text-white text-center mb-3">
                    {order.title}
                  </h4>
                  
                  <div className="text-center mb-4">
                    <p className="text-primary-gold text-lg font-semibold">{order.issuer}</p>
                    <p className="text-gray-400">{order.year}</p>
                  </div>

                  <p className="text-gray-300 text-center">
                    {order.description}
                  </p>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shimmer"></div>
                  </div>
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
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Honorary <span className="text-primary-gold">Doctorates</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {honoraryDoctorates.map((doctorate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + (index * 0.1), duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-primary-gold/50 transition-all duration-300 relative overflow-hidden">
                  {/* Degree Ribbon */}
                  <div className="absolute top-0 right-0">
                    <div className="relative">
                      <div className="w-32 h-32 overflow-hidden">
                        <div className="absolute transform rotate-45 bg-gradient-to-r from-primary-gold to-yellow-600 text-primary-navy text-xs font-bold py-1 text-center w-48 top-8 -right-12">
                          HONORIS CAUSA
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${doctorate.color} flex items-center justify-center flex-shrink-0`}>
                      <div className="text-white text-2xl">
                        {doctorate.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white mb-2">
                        {doctorate.title}
                      </h4>
                      
                      <div className="mb-4">
                        <p className="text-primary-gold text-lg font-semibold">{doctorate.university}</p>
                        <p className="text-gray-400">{doctorate.year}</p>
                      </div>

                      <p className="text-gray-300">
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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h3 className="text-3xl font-bold text-white">
                International <span className="text-primary-gold">Awards</span>
              </h3>
              <p className="text-gray-400">Recognition from global organizations and institutions</p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-primary-gold to-yellow-600 text-primary-navy font-bold'
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

          {/* Awards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAwards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + (index * 0.05), duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="h-full p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-primary-gold/30 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${award.color} flex items-center justify-center mb-4`}>
                    <div className="text-white text-xl">
                      {award.icon}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 line-clamp-2">
                    {award.title}
                  </h4>

                  <div className="flex items-center justify-between mt-4">
                    <span className="px-3 py-1 text-xs bg-white/5 rounded-full text-gray-300">
                      {award.category}
                    </span>
                    <FaAward className="text-primary-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <div className="glass-card p-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <FaStar className="text-primary-gold text-3xl" />
              <h4 className="text-2xl font-bold text-white">Recognition Philosophy</h4>
            </div>
            <p className="text-xl text-gray-300">
              "Every award and honor represents not just personal achievement, but a commitment to service, leadership, and making a positive impact. These recognitions inspire continued dedication to excellence in diplomacy, security, and governance."
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-gold/10 to-primary-crimson/10 border border-primary-gold/30">
                <span className="text-primary-gold font-bold">12+</span>
                <span className="text-gray-300 ml-2">International Awards</span>
              </div>
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-gold/10 to-primary-crimson/10 border border-primary-gold/30">
                <span className="text-primary-gold font-bold">4</span>
                <span className="text-gray-300 ml-2">Honorary Doctorates</span>
              </div>
              <div className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-gold/10 to-primary-crimson/10 border border-primary-gold/30">
                <span className="text-primary-gold font-bold">3</span>
                <span className="text-gray-300 ml-2">National Honors</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Honors;