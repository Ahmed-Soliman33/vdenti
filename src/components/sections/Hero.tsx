import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { IMAGES } from "@/lib/constants";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { CONTENT } from "@/lib/content";

const Hero = () => {
  const { scrollToSection } = useSmoothScroll();

  const stats = [
    {
      number: CONTENT.hero.stats.patients.number,
      label: CONTENT.hero.stats.patients.label,
    },
    {
      number: CONTENT.hero.stats.experience.number,
      label: CONTENT.hero.stats.experience.label,
    },
    {
      number: CONTENT.hero.stats.rating.number,
      label: CONTENT.hero.stats.rating.label,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent pt-32 pb-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-right"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="mb-6 bg-primary/10 font-inter text-sm text-primary">
                {CONTENT.hero.badge}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-inter mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl"
            >
              {CONTENT.hero.title}{" "}
              <span className="text-primary">{CONTENT.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-inter mb-8 text-lg leading-relaxed text-gray-600 md:text-xl"
            >
              {CONTENT.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-primary font-inter text-lg hover:bg-primary/90"
              >
                {CONTENT.hero.cta}
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {IMAGES.avatars.map((avatar, index) => (
                  <Avatar key={index} className="h-10 w-10 border-2 border-white">
                    <AvatarImage src={avatar} alt={`Patient ${index + 1}`} />
                    <AvatarFallback>P{index + 1}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <p className="font-inter text-sm text-gray-600">
                {CONTENT.hero.trustedBy}
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={IMAGES.hero.doctor}
                alt="VDenti Doctor"
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -right-6 -top-6 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-6 -left-6 -z-10 h-64 w-64 rounded-full bg-accent/50 blur-3xl" />
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 gap-6 rounded-2xl bg-white p-8 shadow-xl md:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="font-inter mb-2 text-4xl font-bold text-primary">
                {stat.number}
              </div>
              <div className="font-inter text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
