import StatCard from "@/components/shared/StatCard";
import { IMAGES } from "@/lib/constants";
import { CONTENT } from "@/lib/content";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    {
      number: CONTENT.about.stats.satisfied.number,
      label: CONTENT.about.stats.satisfied.label,
    },
    {
      number: CONTENT.about.stats.experience.number,
      label: CONTENT.about.stats.experience.label,
    },
    {
      number: CONTENT.about.stats.doctors.number,
      label: CONTENT.about.stats.doctors.label,
    },
    {
      number: CONTENT.about.stats.services.number,
      label: CONTENT.about.stats.services.label,
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-white py-16">
      {/* Container with beige background and rounded corners */}
      <div className="mx-auto my-8 max-w-[95%] overflow-hidden rounded-[2rem] bg-[#FDFBF7] px-6 py-16 lg:rounded-[3rem] lg:px-20">
        {/* 1. Stats Cards Row - TOP */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              index={index}
            />
          ))}
        </div>

        {/* 2. Heading - MIDDLE */}
        <motion.h2
          className="mt-16 text-center font-cairo text-4xl font-extrabold text-[#222222] md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {CONTENT.about.title}
        </motion.h2>

        {/* 3. Body Paragraph - MIDDLE */}
        <motion.p
          className="mx-auto mt-8 max-w-2xl text-center font-cairo text-sm leading-loose text-[#666666] md:text-base"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {CONTENT.about.description}
        </motion.p>

        {/* 4. CTA Button - MIDDLE */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="rounded-lg bg-[#C1A077] px-8 py-3 font-cairo font-bold text-white transition-colors hover:bg-[#B08E66]">
            {CONTENT.about.cta}
          </button>
        </motion.div>

        {/* 5. Team Photo - BOTTOM with gradient fade */}
        <div className="relative mt-12 flex justify-center">
          <div className="relative w-full max-w-5xl">
            <motion.img
              src={IMAGES.about.team}
              alt="VDenti Medical Team"
              className="w-full object-contain grayscale"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
            {/* Bottom fade gradient overlay for seamless blending */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FDFBF7] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
