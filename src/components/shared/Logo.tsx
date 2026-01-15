import { motion } from "framer-motion";

interface LogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  clickable?: boolean;
  animated?: boolean;
  onClick?: (() => void) | null;
}

/**
 * Logo component for V-Denti.
 */
const Logo = ({
  size = "md",
  className = "",
  clickable = true,
  animated = true,
  onClick = null,
}: LogoProps) => {
  // Size configurations
  const sizeConfig = {
    xs: {
      image: "h-10 w-auto",
      title: "text-base",
      subtitle: "text-xs",
      gap: "gap-2",
    },
    sm: {
      image: "h-12 w-auto",
      title: "text-base",
      subtitle: "text-xs",
      gap: "gap-2",
    },
    md: {
      image: "h-13 w-auto",
      title: "text-xl",
      subtitle: "text-xs",
      gap: "gap-3",
    },
    lg: {
      image: "h-16",
      title: "text-2xl",
      subtitle: "text-sm",
      gap: "gap-4",
    },
    xl: {
      image: "h-18",
      title: "text-3xl",
      subtitle: "text-base",
      gap: "gap-4",
    },
  };

  // Get current size styles
  const currentSize = sizeConfig[size];

  // Hardcoded logo path and glow
  const logoImage = "/logo.webp";
  const logoGlow = "bg-primary/20";

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (clickable) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const logoContent = (
    <>
      {/* Logo Image */}
      <motion.div
        className="relative cursor-pointer"
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={handleClick}
      >
        <img
          src={logoImage}
          alt="VDenti Logo"
          className={`w-auto ${currentSize.image} hover:drop-shadow-lg`}
          loading="eager"
          decoding="async"
          width="150"
          height="50"
        />

        {/* Enhanced Glow effect */}
        {animated && (
          <div
            className={`absolute inset-0 scale-150 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-30 ${logoGlow}`}
          />
        )}
      </motion.div>
    </>
  );

  // Return non-clickable version if not clickable
  if (!clickable) {
    return (
      <div className={`flex items-center ${currentSize.gap} ${className}`}>
        {logoContent}
      </div>
    );
  }

  // Return clickable version
  return (
    <motion.button
      onClick={handleClick}
      className={`group flex items-center ${currentSize.gap} ${className}`}
      whileTap={animated ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2 }}
      aria-label="Back to homepage - V-Denti"
    >
      {logoContent}
    </motion.button>
  );
};

export default Logo;
