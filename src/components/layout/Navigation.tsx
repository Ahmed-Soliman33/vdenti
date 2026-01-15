import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { CONTENT } from "@/lib/content";
import Logo from "@/components/shared/Logo";
import BurgerMenu from "@/components/header/side-menu/BurgerMenu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const { scrollToSection } = useSmoothScroll();
  const activeSection = useScrollSpy([
    "home",
    "services",
    "about",
    "features",
    "testimonials",
    "faq",
  ]);

  const navLinks = [
    { id: "home", label: CONTENT.nav.home },
    { id: "services", label: CONTENT.nav.services },
    { id: "about", label: CONTENT.nav.about },
    { id: "features", label: CONTENT.nav.features },
    { id: "testimonials", label: CONTENT.nav.testimonials },
    { id: "faq", label: CONTENT.nav.faq },
  ];

  useEffect(() => {
    let ticking: boolean = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;

          // Check if scrolled for background change
          setIsScrolled(currentY > 50);

          // Hide/show header logic
          if (currentY > lastScrollY.current && currentY > 60) {
            setShowHeader(false); // scrolling down
          } else {
            setShowHeader(true); // scrolling up
          }
          lastScrollY.current = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };
  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/15 shadow-md backdrop-blur-sm" : "bg-transparent"
      } ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        {/* Mobile Navigation */}
        <motion.div
          className="flex h-20 items-center justify-between lg:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Logo size="xs" clickable onClick={() => handleNavClick("home")} />
          <div className="flex items-center gap-4">
            <BurgerMenu isScrolled={isScrolled} />
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden h-26 items-center justify-between pt-2 lg:flex"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Left Group: Logo + Nav Links */}
          <div className="flex items-center gap-18">
            <Logo size="md" clickable onClick={() => handleNavClick("home")} />

            {/* Nav Links */}
            <div className="flex items-center gap-5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`font-cairo relative text-[.97rem] font-normal transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-primary"
                      : isScrolled
                        ? "hover:text-primary text-[#000]"
                        : "hover:text-primary text-[#fff]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Enhanced Contact Button */}
          <motion.button
            onClick={() => handleNavClick("contact")}
            className="font-cairo bg-primary relative overflow-hidden rounded-lg px-7 py-2.5 text-base font-normal text-white shadow-lg transition-all duration-300 hover:shadow-xl"
            // style={{
            //   boxShadow:
            //     "0 10px 25px -5px rgba(25, 26, 51, 0.3), 0 0 15px rgba(25, 26, 51, 0.2)",
            // }}
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
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;
