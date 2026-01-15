import SectionHeading from "@/components/shared/SectionHeading";
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
    <section id="services" className="relative overflow-hidden bg-gray-50 py-20">
      {/* Decorative Background Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blob 1 - Top Left */}
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        {/* Blob 2 - Top Right */}
        <div className="absolute -right-32 top-12 h-80 w-80 rounded-full bg-primary/8 blur-3xl" />

        {/* Blob 3 - Bottom Center */}
        <div className="absolute -bottom-20 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
      </div>

      {/* Content (relative z-index to appear above blobs) */}
      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading
          badge={CONTENT.services.badge}
          title={CONTENT.services.title}
          titleHighlight={CONTENT.services.titleHighlight}
          subtitle={CONTENT.services.subtitle}
        />

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
    </section>
  );
};

export default Services;
