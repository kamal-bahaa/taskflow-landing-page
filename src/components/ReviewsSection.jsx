import { useEffect, useRef, useState } from 'react';
import Review from './Review';

const ReviewsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Loved by Thousands
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join our community of productive professionals who transformed their workflow
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Review 
            name="Ahmed Bahaa" 
            role="Product Manager" 
            review="TaskFlow has completely transformed how I manage my daily tasks. The interface is intuitive and the features are exactly what I needed!"
            delay={70}
            isParentVisible={isVisible}
          />
          <Review 
            name="Kareem mohamed" 
            role="Software Developer" 
            review="As a developer, I appreciate how efficient and fast TaskFlow is. It integrates perfectly with my workflow and helps me stay organized."
            delay={80}
            isParentVisible={isVisible}
          />
          <Review 
            name="Youssef Ragab" 
            role="Marketing Director" 
            review="Our team's productivity has increased by 40% since we started using TaskFlow. The collaboration features are outstanding!"
            delay={90}
            isParentVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
