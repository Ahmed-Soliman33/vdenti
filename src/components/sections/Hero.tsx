import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

const Hero = memo(() => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Static content (Arabic)
  const headline = "ابتسامتك المثالية تبدأ ";
  const headlineHighlight = "معنا!";
  const description =
    "في V-Denti، نقدم رعاية أسنان شاملة ومتطورة من خلال فريق من الخبراء وتقنيات حديثة. اكتشف تجربة علاج فريدة وابتسامة مشرقة تدوم مدى الحياة.";
  const buttonText = "احجز موعدك";
  const posterUrl = "/hero-banner.webp";

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.8, staggerChildren: 0.3 },
      },
    }),
    [],
  );

  const textVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" as const },
      },
    }),
    [],
  );

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.img
        src={posterUrl}
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: isMobile ? "center" : "center" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        fetchPriority="high"
      />

      {/* Dark Overlay for text readability */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ zIndex: 10 }}
      />

      {/* Centered Content Container */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="px-6 text-center md:max-w-3xl lg:max-w-4xl">
          {/* Headline */}
          <motion.h1
            className="text-3xl leading-tight font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: "Cairo" }}
            variants={textVariants}
            dir="rtl"
          >
            {headline}
            <span className="text-primary">{headlineHighlight}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg lg:text-xl"
            style={{ fontFamily: "Cairo" }}
            variants={textVariants}
            dir="rtl"
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={textVariants} className="mt-8">
            <button
              className="rounded-full bg-white px-8 py-3 text-base font-semibold text-[#191A33] transition-all duration-300 hover:bg-white/90 hover:shadow-lg md:px-10 md:py-4 md:text-lg"
              style={{ fontFamily: "Cairo" }}
              dir="rtl"
            >
              {buttonText}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
