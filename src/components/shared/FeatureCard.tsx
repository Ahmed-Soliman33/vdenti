import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({
  icon,
  title,
  description,
  index,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group h-full border-none bg-white shadow-md transition-all duration-300 hover:shadow-xl">
        <CardContent className="p-8 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-4xl text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            {icon}
          </div>
          <h3 className="font-inter mb-4 text-xl font-bold text-gray-900">
            {title}
          </h3>
          <p className="font-inter leading-relaxed text-gray-600">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FeatureCard;
