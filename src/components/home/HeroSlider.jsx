import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: 'Summer Sale!',
      subtitle: 'Get up to 50% off on selected items',
      bg: 'linear-gradient(135deg, #6C63FF 0%, #4A47A3 100%)',
      cta: 'Shop Now →',
      image: '🛍️'
    },
    {
      id: 2,
      title: 'New Arrivals',
      subtitle: 'Discover the latest trends in fashion',
      bg: 'linear-gradient(135deg, #FF6B6B 0%, #FF4757 100%)',
      cta: 'Explore →',
      image: '👗'
    },
    {
      id: 3,
      title: 'Electronics Sale',
      subtitle: 'Best deals on gadgets and accessories',
      bg: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
      cta: 'Shop Electronics →',
      image: '💻'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ background: slide.bg }}
          >
            <div className="slide-content">
              <div className="slide-icon">{slide.image}</div>
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button className="cta-button">{slide.cta}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="slider-arrow prev" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className="slider-arrow next" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      {/* Dots Indicator */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;