import SectionContent from "./SectionContent";
import { motion } from "framer-motion";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
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
  return (
    <div className="p-8 rounded-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        <SectionContent title="Testimonials" subtitle="What Our Clients Say" />
      </h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
        centeredSlides={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination]}
        className="p-4 rounded-2xl flex gap-2"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, scale: isActive ? 1.02 : 0.6 }}
                transition={{ duration: 0.5 }}
                className={`card shadow-lg shadow-neutral-content bg-neutral-content text-neutral p-4 rounded-2xl mb-12 flex flex-col items-center mx-4 mt-4 lg:h-[24vh] ${
                  isActive ? "scale-125" : "scale-90"
                }`}
              >
                <p className="text-lg mb-2">
                  &quot;{testimonial.message}&quot;
                </p>
                <h3 className="text-xl font-semibold">
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
