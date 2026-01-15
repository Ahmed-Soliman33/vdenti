import { motion } from "framer-motion";
import { FaCheck, FaClock } from "react-icons/fa";

interface WorkCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  results: readonly string[];
  duration: string;
  index: number;
}

const WorkCard = ({
  image,
  category,
  title,
  description,
  results,
  duration,
  index,
}: WorkCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl"
    >
      {/* Image Section with Zoom Effect */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={`${title} - نتائج العلاج`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Dark Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Category Badge */}
        <div className="absolute right-4 top-4 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-white">
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-4 bg-white p-6">
        {/* Title */}
        <h3 className="font-inter text-xl font-bold text-gray-900">
          {title}
        </h3>

        {/* Description */}
        <p className="font-inter text-gray-600 leading-relaxed">
          {description}
        </p>

        {/* Results List */}
        <div className="space-y-2">
          {results.map((result, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
              <FaCheck className="text-primary flex-shrink-0" />
              <span className="font-inter">{result}</span>
            </div>
          ))}
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 border-t border-gray-100 pt-4 text-sm text-gray-500">
          <FaClock className="text-gray-400" />
          <span className="font-inter">{duration}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
