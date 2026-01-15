import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import StatCard from "@/components/shared/StatCard";
import { IMAGES } from "@/lib/constants";
import { CONTENT } from "@/lib/content";

const About = () => {
  const stats = [
    {
      number: CONTENT.about.stats.patients.number,
      label: CONTENT.about.stats.patients.label,
    },
    {
      number: CONTENT.about.stats.experience.number,
      label: CONTENT.about.stats.experience.label,
    },
    {
      number: CONTENT.about.stats.doctors.number,
      label: CONTENT.about.stats.doctors.label,
    },
  ];

  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge={CONTENT.about.badge}
          title={CONTENT.about.title}
          titleHighlight={CONTENT.about.titleHighlight}
          subtitle={CONTENT.about.subtitle}
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={IMAGES.about.team}
                alt="VDenti Team"
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -left-6 -top-6 -z-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-6 -right-6 -z-10 h-48 w-48 rounded-full bg-accent/50 blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-right"
          >
            <p className="font-inter mb-8 whitespace-pre-line text-lg leading-relaxed text-gray-600">
              {CONTENT.about.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  number={stat.number}
                  label={stat.label}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
