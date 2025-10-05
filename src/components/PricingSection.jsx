import { useEffect, useRef, useState } from 'react';
import PricingCard from './PricingCard';

const PricingSection = () => {
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
      className={`py-20 bg-gradient-to-br from-purple-50 to-blue-50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Flexible pricing options for individuals and teams of all sizes
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard 
            title="Free" 
            price="$0" 
            features={[
              "Up to 10 tasks",
              "Basic task organization",
              "Mobile app access",
              "Email support"
            ]}
            delay={100}
            isParentVisible={isVisible}
          />
          <PricingCard 
            title="Pro" 
            price="$12" 
            featured={true}
            features={[
              "Unlimited tasks",
              "Advanced analytics",
              "Priority support",
              "Team collaboration",
              "Custom integrations"
            ]}
            delay={200}
            isParentVisible={isVisible}
          />
          <PricingCard 
            title="Team" 
            price="$29" 
            features={[
              "Everything in Pro",
              "Up to 50 team members",
              "Admin dashboard",
              "Advanced security",
              "Dedicated account manager"
            ]}
            delay={300}
            isParentVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
