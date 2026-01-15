import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MapPin, Twitter, Send, Linkedin, type LucideIcon } from "lucide-react";
import { useMemo, useCallback } from "react";
import Logo from "./Logo";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { socialSlide } from "./header/side-menu/anim";
import { motion } from "framer-motion";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/content/contact-data";
import { useHomePage } from "@/hooks/useHomePage";

// Types for footer data
interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  nameKey: string;
  icon: LucideIcon;
  href: string;
  ariaLabelKey: string;
}

const Footer = () => {
  const { t, i18n } = useTranslation("footer");
  const currentYear = new Date().getFullYear();
  const isRTL = i18n.dir() === "rtl";
  const dir = i18n.dir();
  const { data: homepage } = useHomePage();
  const currentLang = i18n.language as "en" | "ar";

  // Use API data when available, fallback to hardcoded translations
  const brandDescription =
    homepage?.footer?.brandInfo?.description?.[currentLang] ||
    t("brand.description");
  const email = homepage?.footer?.contactInfo?.email || CONTACT_INFO.email;
  const phone = homepage?.footer?.contactInfo?.phone || CONTACT_INFO.phone;
  const address =
    homepage?.footer?.contactInfo?.address?.[currentLang] ||
    CONTACT_INFO.address[i18n.language];

  // Quick Links from API or fallback
  const quickLinks = useMemo<FooterLink[]>(() => {
    if (homepage?.footer?.quickLinks && homepage.footer.quickLinks.length > 0) {
      return homepage.footer.quickLinks.map((link) => ({
        label: link.label[currentLang],
        href: link.href,
      }));
    }

    // Fallback to hardcoded links
    return [
      { label: t("nav.aboutUs"), href: "#about" },
      { label: t("nav.services"), href: "#services" },
      { label: t("nav.howWeWork"), href: "#how-we-work" },
      { label: t("nav.whySTORKWORK"), href: "#why-storkwork" },
      { label: t("nav.contactUs"), href: "#contact" },
    ];
  }, [homepage, currentLang, t]);

  // Social Media from API or fallback
  const socialMedia = useMemo(() => {
    if (
      homepage?.footer?.socialMedia &&
      homepage.footer.socialMedia.length > 0
    ) {
      return homepage.footer.socialMedia.sort((a, b) => a.order - b.order);
    }
    return null; // Use hardcoded SOCIAL_LINKS
  }, [homepage]);

  // Handle link click (supports both #section and external URLs)
  const handleLinkClick = useCallback((href: string, e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const sectionId = href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // For external URLs, let the default behavior handle it
  }, []);

  // Icon mapping for social platforms
  const ICON_MAP: Record<string, any> = {
    twitter: FaXTwitter,
    instagram: RiInstagramFill,
    linkedin: FaLinkedin,
    facebook: FaFacebookSquare,
  };

  return (
    <footer
      dir={dir}
      className="relative overflow-hidden border-t border-t-[#FFFFFF29] bg-[#080911] text-white"
      role="contentinfo"
      aria-label={t("sections.quickLinks")}
    >
      {/* top blur effects */}
      <div className="pointer-events-none absolute top-[-40%] left-[50%] z-10 hidden h-[302px] w-[773px] translate-x-[-50%] translate-y-[-50%] rounded-full bg-[#3094ca] opacity-80 blur-[736.3px] md:block" />
      <div className="pointer-events-none absolute top-[0%] right-[-80%] z-10 block h-[552px] w-[393px] translate-x-[-50%] translate-y-[-50%] rounded-full bg-[#3094ca] opacity-80 blur-[820.3px] md:hidden" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[2.8fr_2fr_2fr_2fr]">
            {/* Brand Column */}
            <div className="space-y-6 rtl:space-y-10">
              <Logo size="md" clickable />
              <p className="max-w-xs text-sm leading-relaxed text-[#DFDFDF]">
                {brandDescription}
              </p>
            </div>

            {/* Quick Links Column */}
            <nav aria-label={t("sections.quickLinks")}>
              <h3 className="mb-6 text-base font-semibold text-white">
                {t("sections.quickLinks")}
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(link.href, e)}
                      className="text-sm text-[#DFDFDF] transition-colors hover:text-white focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0A1A2F] focus:outline-none"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Location Column */}
            <div dir={dir}>
              <h3 className="mb-6 text-base font-semibold text-white">
                {t("sections.location")}
              </h3>
              <address className="not-italic">
                <div
                  className={`flex items-center gap-2 text-sm text-[#DFDFDF]`}
                >
                  <MapPin
                    className="mt-0.5 h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{address}</span>
                </div>
              </address>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="mb-6 text-base font-semibold text-white">
                {t("sections.contact")}
              </h3>
              <div className="space-y-4">
                {/* Email */}
                <div className={`flex items-start gap-2`}>
                  <span className="text-sm font-medium text-white">
                    {t("contact.emailLabel")}:
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm text-[#DFDFDF] transition-colors hover:text-white focus:ring-2 focus:ring-white/50 focus:outline-none"
                    dir="ltr"
                  >
                    {email}
                  </a>
                </div>

                {/* Phone */}
                <div className={`flex items-start gap-2`}>
                  <span className="text-sm font-medium text-white">
                    {t("contact.phoneLabel")}:
                  </span>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-sm text-[#DFDFDF] transition-colors hover:text-white focus:ring-2 focus:ring-white/50 focus:outline-none"
                    dir="ltr"
                  >
                    {phone}
                  </a>
                </div>

                {/* Social Icons */}
                <motion.div
                  variants={socialSlide}
                  className="mt-6 flex items-center justify-start gap-4"
                >
                  {(socialMedia || SOCIAL_LINKS).map((social, index) => {
                    const platform = socialMedia
                      ? social.platform.toLowerCase()
                      : social.platform;
                    const Icon = ICON_MAP[platform];
                    const url = socialMedia ? social.url : social.url;
                    const ariaLabel = socialMedia
                      ? social.ariaLabel[currentLang]
                      : t(social.ariaLabelKey);

                    if (!Icon) return null;

                    return (
                      <motion.a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={ariaLabel}
                        className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D6D6D6] bg-[#D6D6D61A] text-white transition-colors hover:border-white/40 hover:bg-white/10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="h-5.5 w-5.5" />
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
