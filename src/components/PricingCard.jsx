import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';

const PricingCard = ({ title, price, features, featured = false, delay = 0, isParentVisible }) => {
  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border-2 hover:-translate-y-2 ${
        featured 
          ? 'border-blue-500 scale-105 relative' 
          : 'border-gray-200 hover:border-blue-300'
      } ${
        isParentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transitionDelay: isParentVisible ? `${delay}ms` : '0ms'
      }}
    >
      {featured && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
          Most Popular
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className={`text-2xl font-bold mb-4 ${
          featured ? 'text-blue-600' : 'text-gray-800'
        }`}>
          {title}
        </h3>
        <div className="flex items-baseline justify-center">
          <span className={`text-5xl font-bold ${
            featured ? 'text-blue-600' : 'text-gray-800'
          }`}>
            {price}
          </span>
          <span className="text-gray-500 ml-2">/month</span>
        </div>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FaCheck className={`mt-1 mr-3 flex-shrink-0 ${
              featured ? 'text-blue-600' : 'text-green-500'
            }`} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button 
        className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
          featured 
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg' 
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        Get Started
      </button>
    </div>
  );
};

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  featured: PropTypes.bool,
  delay: PropTypes.number,
  isParentVisible: PropTypes.bool
};

export default PricingCard;
