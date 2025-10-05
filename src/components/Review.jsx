import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

const Review = ({ name, role, review, delay = 0, isParentVisible }) => {
  return (
    <div 
      className={`bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-100 hover:border-purple-300 hover:-translate-y-2 ${
        isParentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transitionDelay: isParentVisible ? `${delay}ms` : '0ms'
      }}
    >
      <div className="flex mb-4 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="w-5 h-5" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic leading-relaxed">
        "{review}"
      </p>
      <div className="border-t border-purple-200 pt-4">
        <h4 className="font-bold text-gray-800 text-lg">
          {name}
        </h4>
        <p className="text-purple-600 text-sm">
          {role}
        </p>
      </div>
    </div>
  );
};

Review.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  delay: PropTypes.number,
  isParentVisible: PropTypes.bool
};

export default Review;
