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
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-600"}
      />
    ));
  };

  useEffect(() => {
    let interval;
    if (autoplay && testimonials.length > 1) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, currentSlide]);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-950">
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
              <FaQuoteLeft className="text-white text-lg sm:text-xl" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Testimonials & <span className="text-yellow-500">Endorsements</span>
            </h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            What colleagues and partners say about working with Dr. Israel Ikola
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                onMouseEnter={() => setAutoplay(false)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl"
              >
                <FaChevronLeft className="text-sm sm:text-base" />
              </button>

              <button
                onClick={nextSlide}
                onMouseEnter={() => setAutoplay(false)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl"
              >
                <FaChevronRight className="text-sm sm:text-base" />
              </button>
            </>
          )}

          {/* Testimonial Card */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6 md:p-8 lg:p-12"
          >
            <div className="text-center">
              {/* Quote Icons */}
              <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
                <FaQuoteLeft className="text-yellow-500/30 text-2xl sm:text-3xl md:text-4xl mr-2 sm:mr-4" />
                <FaQuoteRight className="text-yellow-500/30 text-2xl sm:text-3xl md:text-4xl ml-2 sm:ml-4" />
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 italic mb-6 sm:mb-8 md:mb-12 leading-relaxed">
                "{testimonials[currentSlide].quote}"
              </p>

              {/* Rating */}
              <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
                <div className="flex gap-1">
                  {renderStars(testimonials[currentSlide].rating)}
                </div>
              </div>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center mb-3 sm:mb-4">
                  <FaUserTie className="text-white text-lg sm:text-xl md:text-2xl" />
                </div>
                
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                  {testimonials[currentSlide].author}
                </h4>
                
                <div className="flex items-center gap-2 text-gray-400 mb-1 sm:mb-2">
                  <FaUserTie className="text-yellow-500 text-sm" />
                  <span className="text-sm sm:text-base">{testimonials[currentSlide].position}</span>
                </div>
                
                <div className="flex items-center gap-2 text-yellow-500">
                  <FaBuilding className="text-sm" />
                  <span className="font-semibold text-sm sm:text-base">
                    {testimonials[currentSlide].organization}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Slide Indicators */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setAutoplay(false);
                  }}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-yellow-500 w-4 sm:w-6'
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Autoplay Control */}
        {testimonials.length > 1 && (
          <div className="flex justify-center items-center gap-3 mt-4 sm:mt-6 md:mt-8">
            <span className="text-gray-400 text-sm sm:text-base">Autoplay</span>
            <button
              onClick={() => setAutoplay(!autoplay)}
              className={`relative inline-flex h-5 w-10 sm:h-6 sm:w-12 items-center rounded-full transition-colors duration-300 ${
                autoplay ? 'bg-yellow-500' : 'bg-gray-700'
              }`}
            >
              <span
                className={`inline-block h-3 w-3 sm:h-4 sm:w-4 transform rounded-full bg-white transition-transform duration-300 ${
                  autoplay ? 'translate-x-5 sm:translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;