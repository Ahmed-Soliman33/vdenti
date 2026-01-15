import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  number: string;
  label: string;
  index: number;
}

const StatCard = ({ number, label, index }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="border-none bg-white shadow-lg">
        <CardContent className="p-6 text-center">
          <div className="font-inter mb-2 text-4xl font-bold text-primary">
            {number}
          </div>
          <div className="font-inter text-sm text-gray-600">{label}</div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default StatCard;
