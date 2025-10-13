import { useEffect, useRef, useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className={`bg-gray-900 text-white py-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              OrgaEasy
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering professionals to achieve more through intelligent task management and seamless collaboration.
            </p>
          </div>

          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@OrgaEasy.com" 
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FaEnvelope className="mr-3" />
                kamalbahaa120@gmail.com
              </a>
              <a 
                href="tel:+1234567890" 
                className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FaPhone className="mr-3" />
                +20 10 2828 9561
              </a>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a 
                href="#facebook" 
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 transform"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a 
                href="#twitter" 
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all duration-300 hover:scale-110 transform"
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a 
                href="#instagram" 
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className={`border-t border-gray-800 pt-8 text-center transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-gray-400">
            © 2025 OrgaEasy. All rights reserved. Made with ❤️ for productivity enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
