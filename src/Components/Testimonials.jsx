import { useEffect, useState } from "react";
import SectionContent from "./SectionContent";
import { motion } from "framer-motion";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Doe",
    location: "Canada",
    message:
      "Visa Bridge made my migration process seamless and stress-free. Highly recommended!",
  },
  {
    name: "Maria Sanchez",
    location: "Spain",
    message: "I got my visa approved within weeks. Great service and support!",
  },
  {
    name: "Ahmed Khan",
    location: "UAE",
    message: "Professional and reliable. They guided me through every step.",
  },
  {
    name: "Ahmed Hossain",
    location: "Saudi Arabia",
    message:
      "Visa Bridge made my migration process seamless and stress-free. Highly recommended!",
  },
];

export default function Testimonials() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    function updateSlides() {
      const width = window.innerWidth;
      if (width >= 1024) setSlidesPerView(3);
      else if (width >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    }

    updateSlides(); // Set on mount

    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return (
    <div className="p-6 md:p-8 rounded-xl mx-auto max-w-7xl">
      <SectionContent title="Testimonials" subtitle="What Our Clients Say" />
      <Swiper
        spaceBetween={30}
        slidesPerView={slidesPerView}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        centeredSlides={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination, Autoplay]}
        className="mt-8"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, scale: isActive ? 1.05 : 0.85 }}
                transition={{ duration: 0.5 }}
                className={`card shadow-lg bg-neutral p-6 rounded-2xl flex flex-col items-center text-neutral-content mx-3`}
                style={{ minHeight: "18rem" }}
              >
                <p className="text-lg mb-4 text-center font-serif italic">
                  &quot;{testimonial.message}&quot;
                </p>
                <h3 className="text-xl font-semibold text-center">
                  - {testimonial.name}, {testimonial.location}
                </h3>
              </motion.div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
