import { FaMicroscope, FaUserMd, FaHeart } from "react-icons/fa";
import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/shared/FeatureCard";
import { CONTENT } from "@/lib/content";

const Features = () => {
  const features = [
    {
      icon: <FaMicroscope />,
      title: CONTENT.features.items.technology.title,
      description: CONTENT.features.items.technology.description,
    },
    {
      icon: <FaUserMd />,
      title: CONTENT.features.items.team.title,
      description: CONTENT.features.items.team.description,
    },
    {
      icon: <FaHeart />,
      title: CONTENT.features.items.comfort.title,
      description: CONTENT.features.items.comfort.description,
    },
  ];

  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge={CONTENT.features.badge}
          title={CONTENT.features.title}
          titleHighlight={CONTENT.features.titleHighlight}
          subtitle={CONTENT.features.subtitle}
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
