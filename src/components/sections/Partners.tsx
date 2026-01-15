import { motion } from "framer-motion";
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
    <section className="relative overflow-hidden bg-white py-16">
      {/* Container with beige background and rounded corners - matching other sections */}
      <div className="mx-auto my-8 max-w-[95%] overflow-hidden rounded-[2rem] bg-[#FDFBF7] px-6 py-16 lg:rounded-[3rem] lg:px-20">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-[#C1A077]/10 px-4 py-2 font-cairo text-sm font-medium text-[#C1A077]">
            {CONTENT.partners.badge}
          </span>
          <h2 className="mt-4 font-cairo text-3xl font-extrabold text-[#222222] md:text-4xl lg:text-5xl">
            {CONTENT.partners.title}{" "}
            <span className="text-[#C1A077]">{CONTENT.partners.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-cairo text-base text-[#666666] md:text-lg">
            {CONTENT.partners.subtitle}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center rounded-2xl bg-[#F8F5F0] p-6 shadow-sm transition-all duration-300 hover:shadow-md"
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
