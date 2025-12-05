import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaQuoteLeft, 
  FaQuoteRight, 
  FaStar, 
  FaUserTie,
  FaBuilding,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      quote: "Dr. Ikola's expertise in diplomatic protocol and international relations is exceptional. His coordination of state visits significantly enhanced our bilateral engagements.",
      author: "Senior Diplomat",
      position: "Ministry of Foreign Affairs",
      organization: "Government of Kenya",
      rating: 5,
      category: "diplomacy"
    },
    {
      quote: "As a security analyst, Dr. Ikola provided invaluable intelligence insights that shaped our national security policies. His risk assessments were comprehensive and actionable.",
      author: "National Security Official",
      position: "Office of the National Security Advisor",
      organization: "Kenya Government",
      rating: 5,
      category: "security"
    },
    {
      quote: "Strategic leadership at its best. Dr. Ikola's guidance on youth empowerment programs transformed our approach and increased impact significantly.",
      author: "Youth Development Expert",
      position: "UNDP Programme Coordinator",
      organization: "United Nations",
      rating: 5,
      category: "leadership"
    },
    {
      quote: "His honorary doctorates are well-deserved recognition of his contributions to leadership and governance. A true inspiration in the field.",
      author: "Academic Leader",
      position: "University Professor",
      organization: "International University",
      rating: 5,
      category: "academic"
    },
    {
      quote: "Working with Dr. Ikola on security regulatory matters demonstrated his deep understanding of both policy and practical implementation challenges.",
      author: "Regulatory Expert",
      position: "Board Member",
      organization: "Private Security Authority",
      rating: 5,
      category: "governance"
    },
    {
      quote: "A visionary leader who combines strategic thinking with practical execution. His contributions to peacebuilding initiatives have been transformative.",
      author: "Peacebuilding Specialist",
      position: "International NGO Director",
      organization: "Global Peace Initiative",
      rating: 5,
      category: "peacebuilding"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, currentSlide]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-600"}
      />
    ));
  };

  const categories = [
    { id: 'all', label: 'All Testimonials', count: testimonials.length },
    { id: 'diplomacy', label: 'Diplomacy', count: testimonials.filter(t => t.category === 'diplomacy').length },
    { id: 'security', label: 'Security', count: testimonials.filter(t => t.category === 'security').length },
    { id: 'leadership', label: 'Leadership', count: testimonials.filter(t => t.category === 'leadership').length },
    { id: 'governance', label: 'Governance', count: testimonials.filter(t => t.category === 'governance').length }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-primary-navy to-gray-900">
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
              <FaQuoteLeft className="text-white text-xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Testimonials & <span className="text-primary-gold">Endorsements</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            What colleagues and partners say about working with Dr. Israel Ikola
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentSlide(0);
                setAutoplay(false);
              }}
              className={`px-5 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
                activeCategory === category.id
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
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setAutoplay(false)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-primary-gold to-yellow-600 text-primary-navy flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            onMouseEnter={() => setAutoplay(false)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-primary-gold to-yellow-600 text-primary-navy flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl"
          >
            <FaChevronRight />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12"
            >
              <div className="text-center">
                {/* Quote Icons */}
                <div className="flex justify-center mb-8">
                  <FaQuoteLeft className="text-primary-gold/30 text-4xl mr-4" />
                  <FaQuoteRight className="text-primary-gold/30 text-4xl ml-4" />
                </div>

                {/* Quote */}
                <p className="text-2xl md:text-3xl text-gray-300 italic mb-12 leading-relaxed">
                  "{filteredTestimonials[currentSlide % filteredTestimonials.length].quote}"
                </p>

                {/* Rating */}
                <div className="flex justify-center mb-8">
                  <div className="flex gap-1">
                    {renderStars(filteredTestimonials[currentSlide % filteredTestimonials.length].rating)}
                  </div>
                </div>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-gold to-yellow-600 flex items-center justify-center mb-4">
                    <FaUserTie className="text-white text-2xl" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {filteredTestimonials[currentSlide % filteredTestimonials.length].author}
                  </h4>
                  
                  <div className="flex items-center gap-3 text-gray-400 mb-2">
                    <FaUserTie className="text-primary-gold" />
                    <span>{filteredTestimonials[currentSlide % filteredTestimonials.length].position}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-primary-gold">
                    <FaBuilding />
                    <span className="font-semibold">
                      {filteredTestimonials[currentSlide % filteredTestimonials.length].organization}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index);
                  setAutoplay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide % filteredTestimonials.length
                    ? 'bg-primary-gold w-8'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Autoplay Control */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <span className="text-gray-400">Autoplay</span>
          <button
            onClick={() => setAutoplay(!autoplay)}
            className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 ${
              autoplay ? 'bg-primary-gold' : 'bg-gray-700'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                autoplay ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            More <span className="text-primary-gold">Endorsements</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + (index * 0.1), duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-primary-gold/50 transition-all duration-300">
                  {/* Category Badge */}
                  <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/5 text-gray-300 text-sm">
                    {testimonial.category}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 mb-6 line-clamp-4">
                    "{testimonial.quote}"
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-gold/20 to-primary-gold/10 flex items-center justify-center">
                      <FaUserTie className="text-primary-gold" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.author}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '100%', label: 'Positive Feedback' },
              { value: '50+', label: 'Professional Endorsements' },
              { value: '15+', label: 'Years of Trust' },
              { value: '5★', label: 'Average Rating' }
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h4 className="text-2xl font-bold text-white mb-2">Ready to Collaborate?</h4>
                <p className="text-gray-300">Join distinguished professionals who have worked with Dr. Ikola</p>
              </div>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary-gold to-yellow-600 text-primary-navy font-bold hover:shadow-lg hover:shadow-primary-gold/30 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;