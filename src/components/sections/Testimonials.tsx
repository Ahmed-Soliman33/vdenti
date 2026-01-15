import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialCard from "@/components/shared/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";
import { CONTENT } from "@/lib/content";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-8"
    >
      {/* Container with beige background and rounded corners - matching About section */}
      <div className="mx-auto my-8 overflow-hidden rounded-[2rem] bg-[#fff] px-4 pt-8 pb-12 md:max-w-[95%] md:px-6 lg:rounded-[3rem] lg:px-20">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="bg-primary/10 font-cairo text-primary inline-block rounded-full px-4 py-2 text-sm font-medium">
            {CONTENT.testimonials.badge}
          </span>
          <h2 className="font-cairo mt-4 text-3xl font-extrabold text-[#222222] md:text-4xl">
            {CONTENT.testimonials.title}
          </h2>
          <p className="font-cairo mx-auto mt-4 max-w-2xl text-base text-[#666666]">
            {CONTENT.testimonials.subtitle}
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="mx-auto mt-12 max-w-7xl">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="testimonials-swiper !pb-16"
            dir="rtl"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard
                  name={testimonial.name}
                  initial={testimonial.initial}
                  rating={testimonial.rating}
                  text={testimonial.text}
                  service={testimonial.service}
                  index={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
