import { motion } from "framer-motion";

interface BurgerButtonProps {
  isActive: boolean;
  onClick: () => void;
  isScrolled?: boolean;
}

export default function BurgerButton({
  isActive,
  onClick,
  isScrolled,
}: BurgerButtonProps) {
  const spanColor = isScrolled ? "#1a1a1a" : "#fff";
  return (
    <motion.button
      onClick={onClick}
      className={`group relative z-50 flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full transition-all duration-500`}
      style={{
        background: "transparent",
        border: isActive ? "2px solid #c8b398" : "1px solid transparent",
        willChange: "transform, background",
        marginTop: isActive ? "2rem" : undefined,
      }}
      whileHover={{
        scale: 1.05,
        background:
          "linear-gradient(135deg, rgba(200, 179, 152, 0.15) 0%, rgba(179, 154, 125, 0.1) 100%)",
        backdropFilter: "blur(8px)",
      }}
      whileTap={{ scale: 0.97 }}
      animate={{
        rotate: isActive ? 90 : 0,
      }}
      transition={{
        rotate: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      }}
      aria-label="Toggle menu"
    >
      {/* Premium pulsing glow when active */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background:
            "radial-gradient(circle, rgba(200, 179, 152, 0.25) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
        animate={{
          opacity: isActive ? [0.4, 0.7, 0.4] : 0,
        }}
        transition={{
          opacity: {
            duration: 2,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          },
        }}
      />

      {/* Burger lines container */}
      <div className="relative flex h-5 w-6 flex-col items-center justify-center">
        {/* Top line - Brand primary when active */}
        <motion.span
          className="absolute block h-0.5 w-6 rounded-full"
          style={{
            backgroundColor: spanColor,
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            willChange: "transform, background-color",
          }}
          animate={{
            rotate: isActive ? 45 : 0,
            y: isActive ? 0 : -5,
            backgroundColor: isActive ? "#1a1a1a" : spanColor,
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
            backgroundColor: { duration: 0.4 },
          }}
          whileHover={{
            backgroundColor: "#c8b398",
          }}
        />

        {/* Middle line - Fades out smoothly */}
        <motion.span
          className="absolute block h-0.5 w-6 rounded-full"
          style={{
            backgroundColor: spanColor,
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            willChange: "opacity, transform",
          }}
          animate={{
            opacity: isActive ? 0 : 1,
            x: isActive ? -10 : 0,
            scaleX: isActive ? 0.5 : 1,
          }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
          }}
          whileHover={{
            backgroundColor: "#c8b398",
          }}
        />

        {/* Bottom line - Brand primary when active */}
        <motion.span
          className="absolute block h-0.5 w-6 rounded-full"
          style={{
            backgroundColor: spanColor,
            boxShadow: isActive
              ? "0 0 8px rgba(200, 179, 152, 0.6)"
              : "0 1px 2px rgba(0, 0, 0, 0.1)",
            willChange: "transform, background-color",
          }}
          animate={{
            rotate: isActive ? -45 : 0,
            y: isActive ? 0 : 5,
            backgroundColor: isActive ? "#1a1a1a" : spanColor,
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
            backgroundColor: { duration: 0.4 },
          }}
          whileHover={{
            backgroundColor: "#c8b398",
          }}
        />
      </div>

      {/* Premium animated border with glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl border"
        style={{
          borderColor: isActive ? "rgba(200, 179, 152, 0.3)" : "transparent",
        }}
        animate={{
          borderColor: isActive ? "rgba(200, 179, 152, 0.3)" : "transparent",
          boxShadow: isActive ? "0 0 20px rgba(200, 179, 152, 0.2)" : "none",
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      />
    </motion.button>
  );
}
