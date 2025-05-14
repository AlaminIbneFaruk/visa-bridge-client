import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      title: "Tropical Paradise Awaits",
      description: "Explore the serene beauty of tropical destinations. Book your dream getaway today and experience ultimate relaxation.",
      buttonText: "Book Now",
      link: "/all-visas"
    },
    {
      id: 2,
      image: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
      title: "Adventure Awaits",
      description: "Embark on an unforgettable journey through stunning landscapes and vibrant cultures. Your next adventure is just a click away.",
      buttonText: "Explore Tours",
      link: "/all-visas"
    },
    {
      id: 3,
      image: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
      title: "Discover Hidden Gems",
      description: "Plan your escape to exclusive destinations and create lifelong memories. Discover unique places with our expert guidance.",
      buttonText: "Discover More",
      link: "/all-visas"
    },
    {
      id: 4,
      image: "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
      title: "Your Next Journey",
      description: "Let us guide you to the best travel spots with comfort and ease. Start planning your next adventure today.",
      buttonText: "Start Your Journey",
      link: "/all-visas",
    },
  ];

  return (
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        dynamicHeight={false}
        swipeable
        className="overflow-hidden shadow-lg "
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-auto ">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[60vh] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent bg-opacity-50 flex items-center justify-start p-8">
              <div className="text-left text-white space-y-4 px-8">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold border-l-4 border-t-4 pl-3 border-red-600">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-lg lg:text-xl max-w-xl">
                  {slide.description}
                </p>
                <Link to={slide.link} className="btn mt-4 px-6 py-2 bg-primary text-white rounded hover:bg-primary transition">
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
