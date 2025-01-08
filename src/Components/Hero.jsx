
const Hero = () => {
  return (
    <div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full h-auto">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-20 right-20 top-4 md:top-1/4 text-white text-sm md:text-2xl lg:text-4xl font-bold bg-opacity-60 bg-black p-4">
      <p>Explore the serene beauty of this tropical paradise. Traveling to these places made easy—book your dream getaway today and experience ultimate relaxation.</p>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full h-auto">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-20 right-20 top-4 md:top-1/4 text-white text-sm md:text-2xl lg:text-4xl font-bold bg-opacity-60 bg-black p-4">
      <p>Embark on an unforgettable journey through stunning landscapes and vibrant cultures. Booking your next adventure has never been easier.</p>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full h-auto">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-20 right-20 top-4 md:top-1/4 text-white text-sm md:text-2xl lg:text-4xl font-bold bg-opacity-60 bg-black p-4">
      <p>Discover hidden gems and exclusive destinations. Plan your escape with ease and create memories that last a lifetime.</p>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full h-auto">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-20 right-20 top-4 md:top-1/4 text-white text-sm md:text-2xl lg:text-4xl font-bold bg-opacity-60 bg-black p-4">
      <p>Your next adventure is just a click away. Let us guide you to the best travel spots with ease and comfort.</p>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
    </div>
  );
};

export default Hero;