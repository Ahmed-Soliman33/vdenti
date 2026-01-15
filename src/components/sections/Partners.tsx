import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { CONTENT } from "@/lib/content";

import partner1 from "@/assets/images/clients-logos/1.png";
import partner2 from "@/assets/images/clients-logos/2.png";
import partner3 from "@/assets/images/clients-logos/3.png";
import partner4 from "@/assets/images/clients-logos/4.png";

const Partners = () => {
  const partners = [
    { id: 1, logo: partner1, name: "شريك 1" },
    { id: 2, logo: partner2, name: "شريك 2" },
    { id: 3, logo: partner3, name: "شريك 3" },
    { id: 4, logo: partner4, name: "شريك 4" },
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

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center rounded-2xl bg-white p-6 shadow-sm"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto max-w-[140px] object-contain md:h-auto md:max-w-[170px]"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
