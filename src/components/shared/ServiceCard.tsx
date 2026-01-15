import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const ServiceCard = ({
  title,
  description,
  image,
  index,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <CardContent className="p-6">
          <h3 className="font-inter mb-3 text-2xl font-bold text-primary">
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

export default ServiceCard;
