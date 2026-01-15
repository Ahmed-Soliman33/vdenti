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
  const testimonials = TESTIMONIALS.map((testimonial) => ({
    name: testimonial.name,
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=${testimonial.color.replace("#", "")}&color=fff&size=128`,
    rating: testimonial.rating,
    text: testimonial.text,
    service: "خدمة مميزة",
  }));

  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge={CONTENT.testimonials.badge}
          title={CONTENT.testimonials.title}
          titleHighlight={CONTENT.testimonials.titleHighlight}
          subtitle={CONTENT.testimonials.subtitle}
        />

        <div className="mx-auto max-w-6xl">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-14"
            dir="rtl"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  name={testimonial.name}
                  avatar={testimonial.avatar}
                  rating={testimonial.rating}
                  text={testimonial.text}
                  service={testimonial.service}
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
