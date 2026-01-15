import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaUserDoctor, FaCalendarCheck, FaAward } from "react-icons/fa6";

interface StatCardProps {
  number: string;
  label: string;
  icon?: string;
  index: number;
}

// Icon mapping based on icon type
const getIconByType = (iconType?: string) => {
  const iconMap: { [key: string]: React.ReactElement } = {
    patients: <FaUserDoctor className="text-2xl" />,
    experience: <FaCalendarCheck className="text-2xl" />,
    doctors: <FaAward className="text-2xl" />,
  };
  return iconMap[iconType || "patients"] || <FaUserDoctor className="text-2xl" />;
};

const StatCard = ({ number, label, icon, index }: StatCardProps) => {
  // Extract numeric value from number string (e.g., "10,000+" -> 10000)
  const numericValue = parseInt(number.replace(/[^0-9]/g, ""));
  const hasPlusSign = number.includes("+");
  const hasComma = number.includes(",");

  return (
    <motion.div
      className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Icon Container */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
        {getIconByType(icon)}
      </div>

      {/* Animated Number */}
      <div className="text-5xl font-bold text-primary">
        <CountUp
          end={numericValue}
          duration={2.5}
          separator={hasComma ? "," : ""}
          suffix={hasPlusSign ? "+" : ""}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        />
      </div>

      {/* Label */}
      <p className="text-center text-sm tracking-wide text-gray-600">{label}</p>

      {/* Decorative Accent Bar */}
      <div className="mt-2 h-0.5 w-10 bg-primary" />
    </motion.div>
  );
};

export default StatCard;
