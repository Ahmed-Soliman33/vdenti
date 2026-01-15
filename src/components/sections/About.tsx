import SectionHeading from "@/components/shared/SectionHeading";
import StatCard from "@/components/shared/StatCard";
import { IMAGES } from "@/lib/constants";
import { CONTENT } from "@/lib/content";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";

const About = () => {
  const stats = [
    {
      number: CONTENT.about.stats.patients.number,
      label: CONTENT.about.stats.patients.label,
      icon: CONTENT.about.stats.patients.icon,
    },
    {
      number: CONTENT.about.stats.experience.number,
      label: CONTENT.about.stats.experience.label,
      icon: CONTENT.about.stats.experience.icon,
    },
    {
      number: CONTENT.about.stats.doctors.number,
      label: CONTENT.about.stats.doctors.label,
      icon: CONTENT.about.stats.doctors.icon,
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20"
    >
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blob 1 - Top Right */}
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        {/* Blob 2 - Bottom Left */}
        <div className="absolute -bottom-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Heading */}
        <SectionHeading
          badge={CONTENT.about.badge}
          title={CONTENT.about.title}
          titleHighlight={CONTENT.about.titleHighlight}
          subtitle={CONTENT.about.subtitle}
        />

        {/* Main Content Grid */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT COLUMN: Layered Image Composition */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Team Image */}
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={IMAGES.about.team}
                alt="VDenti Team"
                className="h-auto w-full object-cover"
              />

              {/* Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Team Member Avatars - Mobile Safe Positioning */}
            <div className="absolute -bottom-8 -right-8 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-2xl max-md:-bottom-4 max-md:left-1/2 max-md:right-auto max-md:-translate-x-1/2 max-md:scale-90">
              {/* Avatar Stack */}
              <div className="flex -space-x-3">
                {IMAGES.avatars.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`Team member ${i + 1}`}
                    className="h-12 w-12 rounded-full border-2 border-white object-cover"
                    initial={{ opacity: 0, scale: 0.8, x: -20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 + 0.6 }}
                  />
                ))}
              </div>

              {/* Team Label */}
              <div className="pr-2">
                <p className="font-cairo text-sm font-bold text-primary">
                  فريق طبي محترف
                </p>
                <p className="text-xs text-gray-600">25+ متخصص</p>
              </div>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-3xl border-4 border-primary/20 max-md:hidden" />

            {/* Quality Badge (Floating) - Mobile Safe */}
            <motion.div
              className="absolute right-6 top-6 rounded-full bg-white px-6 py-3 shadow-xl max-md:right-4 max-md:top-4 max-md:scale-90"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-xl text-green-500" />
                <span className="font-cairo text-sm font-bold text-primary">
                  ISO معتمد
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Content + Enhanced Stats */}
          <motion.div
            className="space-y-8 text-right"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Description */}
            <p className="whitespace-pre-line font-cairo text-lg leading-relaxed text-gray-600">
              {CONTENT.about.description}
            </p>

            {/* Enhanced Stats Grid */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  number={stat.number}
                  label={stat.label}
                  icon={stat.icon}
                  index={index}
                />
              ))}
            </div>

            {/* Optional: CTA Button */}
            <motion.button
              className="group/btn mt-8 inline-flex items-center gap-3 rounded-2xl bg-primary px-8 py-4 font-cairo font-medium text-white shadow-xl transition-all hover:bg-primary/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span>{CONTENT.about.cta}</span>
              <FaArrowLeft className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
