import { FaTooth } from "react-icons/fa";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const Logo = ({ size = "md", className = "", onClick }: LogoProps) => {
  const sizeConfig = {
    sm: {
      icon: "text-2xl",
      text: "text-xl",
      gap: "gap-2",
    },
    md: {
      icon: "text-3xl",
      text: "text-2xl",
      gap: "gap-3",
    },
    lg: {
      icon: "text-4xl",
      text: "text-3xl",
      gap: "gap-4",
    },
  };

  const currentSize = sizeConfig[size];

  return (
    <div
      className={`flex items-center ${currentSize.gap} ${className} ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-center rounded-full bg-primary p-2">
        <FaTooth className={`${currentSize.icon} text-white`} />
      </div>
      <span
        className={`font-inter ${currentSize.text} font-bold text-primary`}
      >
        VDenti
      </span>
    </div>
  );
};

export default Logo;
