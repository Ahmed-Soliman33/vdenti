import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({
  badge,
  title,
  titleHighlight,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : "text-right"}`}
    >
      {badge && (
        <Badge
          variant="secondary"
          className={`mb-4 font-inter text-sm ${light ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}
        >
          {badge}
        </Badge>
      )}
      <h2 className={`font-inter mb-4 text-3xl font-bold md:text-4xl lg:text-5xl ${light ? "text-white" : "text-gray-900"}`}>
        {title}{" "}
        {titleHighlight && (
          <span className={light ? "text-white/90" : "text-primary"}>{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className={`font-inter mx-auto max-w-2xl text-lg ${light ? "text-white/90" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
