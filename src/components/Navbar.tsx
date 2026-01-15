import { useTranslation } from "react-i18next";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import BurgerMenu from "./header/side-menu/BurgerMenu";
import Logo from "./Logo";
import { useScrolled } from "@/hooks/useScrollPosition";
import { motion } from "framer-motion";

const Navbar = memo(() => {
  const { t, i18n } = useTranslation("common");
  const dir = i18n.dir();
  const [activeSection, setActiveSection] = useState("hero");

  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(window.scrollY);

  const navLinks = useMemo(
    () => [
      { to: "hero", label: t("nav.home") },
      { to: "about", label: t("nav.aboutUs") },
      { to: "services", label: t("nav.services") },
      { to: "contact", label: t("nav.contactUs") },
    ],
    [t],
  );
  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      // Find all intersecting sections
      const intersectingSections = entries.filter(
        (entry) => entry.isIntersecting,
      );

      if (intersectingSections.length > 0) {
        // Get the section that's most in view (highest intersection ratio)
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

    // Observe all sections
    navLinks.forEach((link) => {
      const element = document.getElementById(link.to);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [navLinks, observerCallback]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

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

  return (
    <nav
      dir={dir}
      className={`ransition-transform fixed top-0 right-0 left-0 z-50 px-0 pt-4 duration-300 lg:px-8 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Mobile Header */}
      <motion.div className="relative mx-auto h-16 w-full transition-all duration-300 lg:hidden">
        <div className="flex h-full items-center justify-between px-6">
          <div>
            <Logo size="xs" clickable />
          </div>
          <div className="flex items-center gap-4 rounded-full bg-[#FFFFFF]/8">
            <BurgerMenu />
          </div>
        </div>
      </motion.div>

      {/* Desktop Header: Floating Container */}
      <motion.div
        className="mx-auto hidden h-[85px] w-full max-w-[95%] transition-all duration-300 lg:flex xl:max-w-[95%] 2xl:max-w-[95%]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="grid h-full w-full grid-cols-4 items-center justify-between px-8">
          {/* Logo with white filter */}
          <motion.div
            className="flex items-center"
            animate={{ scale: isScrolled ? 1 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{ filter: "brightness(0) invert(1)" }}
          >
            <Logo size="sm" clickable />
          </motion.div>

          {/* PILL NAVIGATION CONTAINER - Key Visual Element */}
          <nav className="col-span-2 flex items-center self-center justify-self-center">
            <motion.div
              className="flex items-center gap-8 rounded-full px-8 py-3"
              style={{
                borderColor: isScrolled
                  ? "rgba(255, 255, 255, 0.2)"
                  : "rgba(255, 255, 255, 0.15)",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px) saturate(150%)",
                WebkitBackdropFilter: "blur(20px) saturate(150%)",
                boxShadow: isScrolled
                  ? "0 8px 32px rgba(0, 0, 0, 0.12)"
                  : "0 4px 16px rgba(0, 0, 0, 0.08)",
              }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.to)}
                  className={`group rtl:font-cairo relative text-[0.95rem] font-medium transition-all duration-300 hover:text-white rtl:pt-1 ${
                    activeSection === item.to ? "text-white" : "text-[#BDBDBD]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          </nav>

          {/* Language Switcher */}
          <div className="flex items-center justify-self-end">
            <LanguageSwitcher />
          </div>
        </div>
      </motion.div>
    </nav>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
