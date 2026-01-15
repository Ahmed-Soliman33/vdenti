import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { CONTENT } from "@/lib/content";

const Partners = () => {
  // Partner logos as text for now (can be replaced with actual logos)
  const partners = [
    "وزارة الصحة",
    "الهيئة السعودية للتخصصات الصحية",
    "مجلس الضمان الصحي",
    "رؤية 2030",
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge={CONTENT.partners.badge}
          title={CONTENT.partners.title}
          titleHighlight={CONTENT.partners.titleHighlight}
          subtitle={CONTENT.partners.subtitle}
        />

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center rounded-xl bg-white p-8 shadow-md transition-shadow hover:shadow-lg"
            >
              <span className="font-inter text-center text-sm font-bold text-gray-600 md:text-base">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
