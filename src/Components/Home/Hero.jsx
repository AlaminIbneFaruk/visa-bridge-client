import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="w-full relative">
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        dynamicHeight={false}
        swipeable
        className="overflow-hidden shadow-lg"
      >
        <div className="relative min-h-[60vh] lg:min-h-screen">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            alt="Tropical Paradise Awaits"
            className="w-full min-h-[60vh] lg:min-h-screen object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-base-100/80 to-transparent bg-opacity-50 flex items-center justify-start p-8">
            <div className="text-left text-neutral-content space-y-4 px-8">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold border-l-4 border-t-4 pl-3 border-red-600">
                Tropical Paradise Awaits
              </h2>
              <p className="text-sm md:text-lg lg:text-xl max-w-xl">
                Explore the serene beauty of tropical destinations. Book your
                dream getaway today and experience ultimate relaxation.
              </p>
              <Link
                to="/all-visas"
                className="btn mt-4 px-6 py-2 btn-info text-white rounded hover:bg-primary transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
        <div className="relative min-h-[60vh] lg:min-h-screen">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            alt="Adventure Awaits"
            className="w-full min-h-[60vh] lg:min-h-screen object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-base-100/80 to-transparent bg-opacity-50 flex items-center justify-start p-8">
            <div className="text-left text-neutral-content space-y-4 px-8">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold border-l-4 border-t-4 pl-3 border-red-600">
                Adventure Awaits
              </h2>
              <p className="text-sm md:text-lg lg:text-xl max-w-xl">
                Embark on an unforgettable journey through stunning landscapes
                and vibrant cultures. Your next adventure is just a click away.
              </p>
              <Link
                to="/all-visas"
                className="btn mt-4 px-6 py-2 btn-info text-white rounded hover:bg-primary transition"
              >
                Explore Tours
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
      <div className="absolute bottom-10 right-0 left-0 z-50 flex flex-col items-center">
        <a className="btn btn-circle outline btn-primary outline-4 bg-transparent animate-bounce hidden lg:block">
          <FaArrowDown className=" font-bold text-2xl text-center"/>

        </a>
        <p className="text-white/60 max-w-40 text-center my-2 backdrop-blur-sm hidden lg:block">Scroll Down For More Content</p>
      </div>
    </div>
  );
};

export default Hero;
