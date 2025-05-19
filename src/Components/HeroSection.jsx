import PropTypes from 'prop-types';

const HeroSection = ({ title, description, cta }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-12 px-6 rounded-2xl shadow-lg mb-8">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-6">{description}</p>
      <button className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100">{cta}</button>
    </div>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
};

export default HeroSection;