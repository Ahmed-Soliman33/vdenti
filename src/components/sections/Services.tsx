import ServiceCard from "@/components/shared/ServiceCard";
import { IMAGES } from "@/lib/constants";
import { CONTENT } from "@/lib/content";

const Services = () => {
  const services = [
    {
      title: CONTENT.services.items.cosmetic.title,
      description: CONTENT.services.items.cosmetic.description,
      image: IMAGES.services.pediatric,
      category: CONTENT.services.items.cosmetic.category,
      benefits: CONTENT.services.items.cosmetic.benefits,
      ctaText: CONTENT.services.items.cosmetic.ctaText,
    },
    {
      title: CONTENT.services.items.treatment.title,
      description: CONTENT.services.items.treatment.description,
      image: IMAGES.services.orthodontics,
      category: CONTENT.services.items.treatment.category,
      benefits: CONTENT.services.items.treatment.benefits,
      ctaText: CONTENT.services.items.treatment.ctaText,
    },
    {
      title: CONTENT.services.items.surgery.title,
      description: CONTENT.services.items.surgery.description,
      image: IMAGES.services.implants,
      category: CONTENT.services.items.surgery.category,
      benefits: CONTENT.services.items.surgery.benefits,
      ctaText: CONTENT.services.items.surgery.ctaText,
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-white py-16">
      {/* Container with beige background and rounded corners - matching other sections */}
      <div className="mx-auto my-8 max-w-[95%] overflow-hidden rounded-[2rem] bg-[#FDFBF7] px-6 py-16 lg:rounded-[3rem] lg:px-20">
        {/* Content (relative z-index to appear above blobs) */}
        <div className="relative z-10">
          {/* Section Heading */}
          <div className="mb-12 text-center">
            <span className="font-cairo inline-block rounded-full bg-[#C1A077]/10 px-4 py-2 text-sm font-medium text-[#C1A077]">
              {CONTENT.services.badge}
            </span>
            <h2 className="font-cairo mt-4 text-3xl font-extrabold text-[#222222] md:text-4xl lg:text-5xl">
              {CONTENT.services.title}{" "}
              <span className="text-[#C1A077]">
                {CONTENT.services.titleHighlight}
              </span>
            </h2>
            <p className="font-cairo mx-auto mt-4 max-w-2xl text-base text-[#666666] md:text-lg">
              {CONTENT.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                category={service.category}
                benefits={service.benefits}
                ctaText={service.ctaText}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
