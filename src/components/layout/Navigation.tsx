import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../Logo";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const { t } = useTranslation("common");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { id: "home", label: t("nav.home") },
    { id: "services", label: t("nav.services") },
    { id: "about", label: t("nav.about") },
    { id: "features", label: t("nav.features") },
    { id: "testimonials", label: t("nav.testimonials") },
    { id: "faq", label: t("nav.faq") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Logo size="md" onClick={() => handleNavClick("home")} />

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-cairo text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("contact")}
              className="bg-primary font-cairo hover:bg-primary/90"
            >
              {t("nav.contact")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-3xl text-primary lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-20 bg-black/50 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-20 h-[calc(100vh-5rem)] w-full bg-white shadow-xl lg:hidden"
            >
              <div className="flex flex-col gap-2 p-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`rounded-lg p-4 text-right font-cairo text-lg transition-colors ${
                      activeSection === link.id
                        ? "bg-primary/10 text-primary"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  onClick={() => handleNavClick("contact")}
                  className="mt-4 bg-primary font-cairo hover:bg-primary/90"
                  size="lg"
                >
                  {t("nav.contact")}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
