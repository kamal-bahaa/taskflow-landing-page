import { useEffect, useRef, useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Subscribe to our newsletter and get the latest updates, tips, and exclusive offers delivered to your inbox
          </p>
          <form 
            onSubmit={handleSubmit} 
            className={`flex flex-col md:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <input 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg max-w-md"
            />
            <button 
              type="submit"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 hover:scale-105 transform"
            >
              Subscribe
              <FaPaperPlane className="text-sm" />
            </button>
          </form>
          <p className="text-blue-100 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
