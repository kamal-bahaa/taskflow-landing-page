import { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className={`text-2xl font-bold transition-colors duration-300 ${
            scrolled ? 'text-blue-600' : 'text-white'
          }`}>
            OrgaEasy
          </h1>
          <button className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 transform ${
            scrolled 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-white text-blue-600 hover:bg-gray-100'
          }`}>
            Sign In
          </button>
        </div>
      </nav>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Organize Your Life,
          <br />
          <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
            Amplify Your Productivity
          </span>
        </h2>
        <p className={`text-xl md:text-2xl text-blue-100 mb-10 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          OrgaEasy helps you manage tasks effortlessly with smart features designed for modern professionals
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2 hover:scale-105 transform">
            Get Started Free
            <FaArrowRight />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-105 transform">
            Watch Demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
