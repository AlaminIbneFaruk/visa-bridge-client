import PropTypes from "prop-types";

const SectionContent = ({ title, subtitle, description }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="inline-flex my-12 items-center px-4 py-2 border-2 border-neutral rounded-md bg-base-100">
        <span className="text-red-600 text-xl mr-2">»</span>
        <h3 className="font-bold text-2xl">{subtitle}</h3>
      </div>
      <h2 className="font-bold text-4xl max-w-lg mx-auto text-center border-y-4 py-4">
        {title}
      </h2>
      <p className="text-base mt-12 max-w-3xl mx-auto">{description}</p>
    </div>
  );
};

SectionContent.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default SectionContent;
