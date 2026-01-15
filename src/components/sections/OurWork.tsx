import { useState } from "react";
import { motion } from "framer-motion";
import WorkCard from "@/components/shared/WorkCard";
import { Button } from "@/components/ui/button";
import { CONTENT } from "@/lib/content";

const OurWork = () => {
  const [showAll, setShowAll] = useState(false);
  // Professional placeholder images from Unsplash (dental/medical theme)
  const WORK_IMAGES = {
    whitening:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    implants:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    aligners:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    smile:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
    gums: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    crowns:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
  };

  const workItems = [
    {
      image: WORK_IMAGES.whitening,
      category: CONTENT.ourWork.items.whitening.category,
      title: CONTENT.ourWork.items.whitening.title,
      description: CONTENT.ourWork.items.whitening.description,
      results: CONTENT.ourWork.items.whitening.results,
      duration: CONTENT.ourWork.items.whitening.duration,
    },
    {
      image: WORK_IMAGES.implants,
      category: CONTENT.ourWork.items.implants.category,
      title: CONTENT.ourWork.items.implants.title,
      description: CONTENT.ourWork.items.implants.description,
      results: CONTENT.ourWork.items.implants.results,
      duration: CONTENT.ourWork.items.implants.duration,
    },
    {
      image: WORK_IMAGES.aligners,
      category: CONTENT.ourWork.items.aligners.category,
      title: CONTENT.ourWork.items.aligners.title,
      description: CONTENT.ourWork.items.aligners.description,
      results: CONTENT.ourWork.items.aligners.results,
      duration: CONTENT.ourWork.items.aligners.duration,
    },
    {
      image: WORK_IMAGES.smile,
      category: CONTENT.ourWork.items.smile.category,
      title: CONTENT.ourWork.items.smile.title,
      description: CONTENT.ourWork.items.smile.description,
      results: CONTENT.ourWork.items.smile.results,
      duration: CONTENT.ourWork.items.smile.duration,
    },
    {
      image: WORK_IMAGES.gums,
      category: CONTENT.ourWork.items.gums.category,
      title: CONTENT.ourWork.items.gums.title,
      description: CONTENT.ourWork.items.gums.description,
      results: CONTENT.ourWork.items.gums.results,
      duration: CONTENT.ourWork.items.gums.duration,
    },
    {
      image: WORK_IMAGES.crowns,
      category: CONTENT.ourWork.items.crowns.category,
      title: CONTENT.ourWork.items.crowns.title,
      description: CONTENT.ourWork.items.crowns.description,
      results: CONTENT.ourWork.items.crowns.results,
      duration: CONTENT.ourWork.items.crowns.duration,
    },
  ];

  const displayedItems = showAll ? workItems : workItems.slice(0, 3);

  return (
    <section id="portfolio" className="relative overflow-hidden bg-white py-16">
      {/* Container with beige background and rounded corners - matching other sections */}
      <div className="mx-auto my-8 max-w-[95%] overflow-hidden rounded-[2rem] bg-[#FDFBF7] px-6 py-16 lg:rounded-[3rem] lg:px-20">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-[#C1A077]/10 px-4 py-2 font-cairo text-sm font-medium text-[#C1A077]">
            {CONTENT.ourWork.badge}
          </span>
          <h2 className="mt-4 font-cairo text-3xl font-extrabold text-[#222222] md:text-4xl lg:text-5xl">
            {CONTENT.ourWork.title}{" "}
            <span className="text-[#C1A077]">{CONTENT.ourWork.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-cairo text-base text-[#666666] md:text-lg">
            {CONTENT.ourWork.subtitle}
          </p>
        </div>

        {/* Work Items Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedItems.map((work, index) => (
            <WorkCard key={index} {...work} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && workItems.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              className="bg-[#C1A077] font-cairo text-white hover:bg-[#B08E66]"
            >
              عرض المزيد
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default OurWork;
