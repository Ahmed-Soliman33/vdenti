import { motion } from "framer-motion";
import CountUp from "react-countup";

interface StatCardProps {
  number: string;
  label: string;
  index: number;
}

const StatCard = ({ number, label, index }: StatCardProps) => {
  // Extract numeric value from number string (e.g., "100" -> 100)
  const numericValue = parseInt(number.replace(/[^0-9]/g, ""));

  return (
    <motion.div
      className="rounded-2xl bg-[#F3EFE9] p-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Animated Number - Gold Color with Inter font for clean numerals */}
      <div className="font-inter text-5xl font-bold text-[#C1A077] md:text-6xl">
        <CountUp
          end={numericValue}
          duration={2.5}
          suffix="+"
          enableScrollSpy={true}
          scrollSpyOnce={true}
        />
      </div>

      {/* Label - Gray Color with Cairo font for Arabic */}
      <p className="mt-2 font-cairo text-sm text-[#4A4A4A]">{label}</p>
    </motion.div>
  );
};

export default StatCard;
