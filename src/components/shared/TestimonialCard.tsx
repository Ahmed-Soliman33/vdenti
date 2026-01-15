import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

interface TestimonialCardProps {
  name: string;
  initial: string;
  rating: number;
  text: string;
  service: string;
  index: number;
}

const TestimonialCard = ({
  name,
  initial,
  rating,
  text,
  service,
  index,
}: TestimonialCardProps) => {
  // Use real portrait photos from pravatar.cc for premium look
  // Grayscale filter applied via CSS to match team photo aesthetic
  const avatar = `https://i.pravatar.cc/150?img=${index + 1}`;

  return (
    <motion.div
      className="group relative h-full rounded-2xl bg-[#F8F5F0] p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Large Decorative Quote Mark - Top Left */}
      <FaQuoteLeft className="absolute left-6 top-6 text-5xl text-[#C1A077] opacity-20" />

      {/* Content Container */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Header: Avatar + Name + Rating */}
        <div className="mb-6 flex items-center gap-4">
          {/* Grayscale Avatar with Gold Border */}
          <div className="relative">
            <img
              src={avatar}
              alt={name}
              className="h-16 w-16 rounded-full border-2 border-[#C1A077] object-cover grayscale"
            />
          </div>

          {/* Name + Rating */}
          <div className="flex-1 text-right">
            <h4 className="mb-2 font-cairo text-lg font-bold text-[#222222]">
              {name}
            </h4>
            {/* Star Rating - Gold */}
            <div className="flex items-center justify-end gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-base ${
                    i < rating ? "text-[#C1A077]" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="mb-6 flex-1 font-cairo text-sm leading-loose text-[#666666]">
          "{text}"
        </p>

        {/* Footer: Service Badge + Verified */}
        <div className="flex items-center justify-between border-t border-[#C1A077]/20 pt-4">
          {/* Service Badge - Gold Theme */}
          <span className="rounded-lg bg-[#C1A077]/10 px-4 py-2 font-cairo text-xs font-medium text-[#C1A077]">
            {service}
          </span>

          {/* Verified Badge */}
          <span className="font-cairo text-xs text-gray-500">
            ✓ تجربة موثقة
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
