import { useEffect, useRef, useState } from 'react';
import Feature from './Feature';
import { FaList, FaClock, FaUsers } from 'react-icons/fa';

const FeaturesSection = () => {
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
      className={`py-20 bg-gradient-to-br from-blue-50 to-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to manage your tasks effectively and stay productive every day
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature 
            icon={<FaList />} 
            title="Smart Organization" 
            description="Organize your tasks with custom categories, tags, and priority levels for maximum efficiency"
            delay={100}
            isParentVisible={isVisible}
          />
          <Feature 
            icon={<FaClock />} 
            title="Time Tracking" 
            description="Track time spent on tasks and get insights into your productivity patterns with detailed analytics"
            delay={120}
            isParentVisible={isVisible}
          />
          <Feature 
            icon={<FaUsers />} 
            title="Team Collaboration" 
            description="Work together seamlessly with your team using real-time updates, comments, and file sharing"
            delay={140}
            isParentVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
