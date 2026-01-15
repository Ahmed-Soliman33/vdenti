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
    },
    {
      title: CONTENT.services.items.treatment.title,
      description: CONTENT.services.items.treatment.description,
      image: IMAGES.services.orthodontics,
    },
    {
      title: CONTENT.services.items.surgery.title,
      description: CONTENT.services.items.surgery.description,
      image: IMAGES.services.implants,
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
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
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
