import { motion } from "framer-motion";
import { menuSlide } from "./anim";
import Nav from "./Nav";

interface MenuProps {
  onClose: () => void;
}

export default function Menu({ onClose }: MenuProps) {
  return (
    <motion.div
      variants={menuSlide("rtl")}
      initial="initial"
      animate="enter"
      exit="exit"
      className={`fixed top-0 z-40 h-screen w-full bg-gradient-to-br from-[#f8f4ef] to-[#ffffff] md:w-[480px] lg:w-[520px] ${"left-0"}`}
    >
      {/* Brand-colored decorative blur blob */}
      <div className="pointer-events-none absolute bottom-[-45%] left-[50%] h-[498px] w-[402px] translate-x-[-50%] translate-y-[-50%] rounded-full bg-primary opacity-20 blur-[255.6px]" />

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />

      <div className="relative z-10 h-full">
        <Nav onClose={onClose} />
      </div>
    </motion.div>
  );
}
