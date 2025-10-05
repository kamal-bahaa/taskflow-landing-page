import PropTypes from 'prop-types';

const Feature = ({ icon, title, description, delay = 0, isParentVisible }) => {
  return (
    <div 
      className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 ${
        isParentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transitionDelay: isParentVisible ? `${delay}ms` : '0ms'
      }}
    >
      <div className="text-blue-600 text-4xl mb-6 flex justify-center items-center w-16 h-16 bg-blue-50 rounded-xl mx-auto hover:bg-blue-100 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-center">
        {description}
      </p>
    </div>
  );
};

Feature.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delay: PropTypes.number,
  isParentVisible: PropTypes.bool
};

export default Feature;
