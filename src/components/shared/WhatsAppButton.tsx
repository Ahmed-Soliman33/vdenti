import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl } from "@/content/contact-data";
import { CONTENT } from "@/lib/content";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = getWhatsAppUrl("ar");

  return (
    <div
      className="fixed bottom-4 right-4 z-40 flex items-center gap-3 lg:bottom-8 lg:right-8 rtl:left-4 rtl:right-auto lg:rtl:left-8 lg:rtl:right-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip Bar */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="rounded-full bg-white px-5 py-3 shadow-lg rtl:order-2"
          >
            <span className="whitespace-nowrap text-base font-medium text-gray-900">
              {CONTENT.whatsapp.tooltip}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={CONTENT.whatsapp.tooltip}
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-shadow duration-300 lg:h-16 lg:w-16 rtl:order-1"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 10px 30px rgba(73, 230, 112, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Custom WhatsApp SVG Icon */}
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 lg:h-16 lg:w-16"
        >
          <path
            d="M34.8914 69.7828C54.1614 69.7828 69.7828 54.1614 69.7828 34.8914C69.7828 15.6214 54.1614 0 34.8914 0C15.6214 0 0 15.6214 0 34.8914C0 54.1614 15.6214 69.7828 34.8914 69.7828Z"
            fill="#49E670"
          />
          <path
            d="M46.5622 41.4098C46.0611 42.6038 44.0567 43.7979 42.5533 44.0366C41.5511 44.2755 40.0479 44.5142 35.538 42.6038C29.5247 40.2158 25.7665 34.4846 25.516 34.2458C25.2654 33.7682 23.261 31.1414 23.261 28.5146C23.261 25.8878 24.7643 24.455 25.2654 23.9774C25.7665 23.4998 26.5181 23.261 27.2698 23.261C27.5203 23.261 27.7709 23.261 28.0214 23.261C28.5225 23.261 29.0237 23.261 29.2742 24.2162C29.7753 25.4102 31.028 28.037 31.028 28.2758C31.2786 28.5146 31.2786 28.9922 31.028 29.231C30.7775 29.7086 30.7775 29.7086 30.2764 30.1862C30.0258 30.425 29.7753 30.6638 29.5247 31.1414C29.2742 31.3802 29.0237 31.8578 29.2742 32.3354C29.5247 32.813 30.7775 34.7234 32.5313 36.1562C34.7863 38.0666 36.5401 38.5442 37.2918 39.0218C37.7929 39.2606 38.294 39.2607 38.7951 38.783C39.2962 38.3054 39.7973 37.589 40.2984 36.8726C40.7995 36.395 41.3007 36.1562 41.8017 36.395C42.3028 36.6338 45.3094 37.8278 45.8105 38.3054C46.3116 38.5442 46.8128 38.783 46.8128 39.0218C46.8128 39.0218 46.8128 40.2158 46.5622 41.4098Z"
            fill="#FAFAFA"
          />
          <path
            d="M14.3102 55.7681L14.1925 56.1113L14.5367 55.9966L23.8781 52.8829C27.2876 54.9642 30.9599 56.0058 34.8914 56.0058C46.5048 56.0058 56.0058 46.5048 56.0058 34.8914C56.0058 23.2781 46.5048 13.7771 34.8914 13.7771C23.2781 13.7771 13.7771 23.2781 13.7771 34.8914C13.7771 39.0841 15.0775 43.2762 17.4211 46.6947L14.3102 55.7681ZM24.5043 49.6471L24.4391 49.6144L24.3696 49.6365L18.9488 51.3614L20.669 46.2007L20.7041 46.0956L20.6256 46.0171L20.1149 45.5063C18.0436 42.394 16.7529 38.7698 16.7529 34.8914C16.7529 24.7848 24.7848 16.7529 34.8914 16.7529C44.998 16.7529 53.0301 24.7848 53.0301 34.8914C53.0301 44.998 44.998 53.0301 34.8914 53.0301C31.2631 53.0301 27.8988 51.9937 25.053 49.924L25.0409 49.9154L25.0277 49.9088L24.5043 49.6471Z"
            fill="white"
            stroke="white"
            strokeWidth="0.358974"
          />
        </svg>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
