import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { backdrop } from "./anim";
import BurgerButton from "./BurgerButton";
import Menu from "./Menu";

export default function BurgerMenu({ isScrolled }: { isScrolled?: boolean }) {
  const [isActive, setIsActive] = useState(false);

  // Scroll lock when menu is open
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isActive]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isActive) {
        setIsActive(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isActive]);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {/* Burger Button */}
      <BurgerButton
        isActive={isActive}
        onClick={handleToggle}
        isScrolled={isScrolled}
      />

      {/* Backdrop and Menu */}
      <AnimatePresence mode="wait">
        {isActive && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdrop}
              initial="initial"
              animate="enter"
              exit="exit"
              className="fixed inset-0 z-30 h-screen w-full bg-black/50"
              onClick={handleToggle}
            />

            {/* Menu */}
            <Menu onClose={handleToggle} />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
