import { motion } from "framer-motion";
import { slide } from "./anim";
import { useState, useEffect, useCallback } from "react";
import { CONTENT } from "@/lib/content";
import Logo from "@/components/shared/Logo";

// Types
interface NavProps {
  onClose: () => void;
}

export default function Nav({ onClose }: NavProps) {
  const [activeSection, setActiveSection] = useState("home");
  const direction = "rtl";
  const navigationItems = [
    { name: CONTENT.nav.home, sectionId: "home" },
    { name: CONTENT.nav.about, sectionId: "about" },
    { name: CONTENT.nav.services, sectionId: "services" },
    { name: CONTENT.nav.portfolio, sectionId: "portfolio" },
    { name: CONTENT.nav.testimonials, sectionId: "testimonials" },
    { name: CONTENT.nav.faq, sectionId: "faq" },
  ];

  // Scroll to section function
  const scrollToSection = useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        onClose(); // Close menu after scrolling
      }
    },
    [onClose],
  );

  // Track active section using IntersectionObserver
  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const intersectingSections = entries.filter(
        (entry) => entry.isIntersecting,
      );
      if (intersectingSections.length > 0) {
        const mostVisible = intersectingSections.reduce((prev, current) => {
          return current.intersectionRatio > prev.intersectionRatio
            ? current
            : prev;
        });
        setActiveSection(mostVisible.target.id);
      }
    },
    [],
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    navigationItems.forEach((link) => {
      const element = document.getElementById(link.sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [navigationItems, observerCallback]);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };
  return (
    <div
      dir={direction}
      className="relative grid h-full grid-cols-1 grid-rows-3 items-center justify-between py-20"
    >
      {/* Top Section */}
      <div className="row-span-2 flex w-full flex-col items-center justify-center gap-12 text-center">
        {/* Logo */}
        <motion.div
          variants={slide}
          custom={0}
          className={`absolute top-8 flex justify-center ${direction === "rtl" ? "right-6" : "left-6"}`}
        >
          <Logo size="md" clickable={false} />
        </motion.div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-8 pt-10 pb-4">
          {navigationItems.map((item, index) => (
            <motion.div
              variants={slide}
              custom={index + 1}
              key={item.sectionId}
            >
              <button
                onClick={() => scrollToSection(item.sectionId)}
                className={`font-cairo text-[1.5rem] font-normal transition-all duration-200 ${
                  activeSection === item.sectionId
                    ? "text-primary font-semibold"
                    : "hover:text-primary text-gray-800"
                } ${direction === "rtl" ? "text-right" : "text-left"}`}
              >
                {item.name}
              </button>
            </motion.div>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-8 px-6">
        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-primary/30 mx-auto h-0.5 w-[94%] origin-center"
        />

        <motion.button
          onClick={() => handleNavClick("contact")}
          className="font-cairo bg-primary relative overflow-hidden rounded-lg px-7 py-2.5 text-base font-normal text-white shadow-lg transition-all duration-300 hover:shadow-xl"
          whileHover={{
            scale: 1.01,
            boxShadow:
              "0 20px 40px -5px rgba(15, 16, 31, 0.2), 0 0 25px rgba(25, 26, 51, 0.1)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          {CONTENT.nav.contact}

          {/* Subtle glow effect overlay */}
          <motion.div
            className="bg-primary-light from-primary-light to-primary absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 hover:opacity-20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.2 }}
          />
        </motion.button>
      </div>
    </div>
  );
}
