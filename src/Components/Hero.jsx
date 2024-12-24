
import { Link } from 'react-router-dom';
const Hero = () => {
  return (

    <div
      className="hero min-h-[50vh]"
      style={{
        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
        <h1 className="max-w-sm mx-auto mb-5 text-5xl font-bold text-transparent bg-gradient-to-r from-blue-500 via-sky-400 to-white bg-clip-text">
          Welcome to VISA BRIDGE
        </h1>
        <p className="mb-5 text-lg text-white">
            Simplifying your visa application process with detailed requirements and tracking features.
            Find all you need to know for a smooth journey.
          </p>
          <Link to="/login" className="btn btn-primary text-white">Get Started
          </Link>
        </div>
      </div>
    </div>
    
  );
};

export default Hero;