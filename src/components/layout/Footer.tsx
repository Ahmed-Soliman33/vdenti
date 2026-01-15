import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { CONTENT } from "@/lib/content";
import Logo from "../shared/Logo";

const Footer = () => {
  const { scrollToSection } = useSmoothScroll();

  const quickLinks = [
    { id: "hero", label: CONTENT.footer.links.home },
    { id: "services", label: CONTENT.footer.links.services },
    { id: "about", label: CONTENT.footer.links.about },
    { id: "portfolio", label: CONTENT.footer.links.portfolio },
    { id: "testimonials", label: CONTENT.footer.links.testimonials },
    { id: "faq", label: CONTENT.footer.links.faq },
  ];

  const services = [
    { label: CONTENT.footer.services.cosmetic },
    { label: CONTENT.footer.services.treatment },
    { label: CONTENT.footer.services.surgery },
    { label: CONTENT.footer.services.consultation },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook />,
      href: "#",
      label: CONTENT.footer.social.facebook,
    },
    {
      icon: <FaTwitter />,
      href: "#",
      label: CONTENT.footer.social.twitter,
    },
    {
      icon: <FaInstagram />,
      href: "#",
      label: CONTENT.footer.social.instagram,
    },
    {
      icon: <FaLinkedin />,
      href: "#",
      label: CONTENT.footer.social.linkedin,
    },
  ];

  return (
    <footer className="bg-black pt-16 pb-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div>
            <Logo size="md" className="mb-4 brightness-0 invert" />
            <p className="font-inter mb-4 text-sm leading-relaxed text-white/80">
              {CONTENT.footer.brand.description}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg transition-colors hover:bg-white/20"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-inter mb-4 text-lg font-bold">
              {CONTENT.footer.sections.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="font-inter hover:text-primary text-sm text-white/80 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-inter mb-4 text-lg font-bold">
              {CONTENT.footer.sections.services}
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="font-inter text-sm text-white/80">
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-inter mb-4 text-lg font-bold">
              {CONTENT.footer.sections.contact}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaPhone className="text-lg" />
                <a
                  href={`tel:${CONTENT.footer.contact.phoneValue}`}
                  className="font-inter hover:text-primary text-sm text-white/80"
                  dir="ltr"
                >
                  {CONTENT.footer.contact.phoneValue}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-lg" />
                <a
                  href={`mailto:${CONTENT.footer.contact.emailValue}`}
                  className="font-inter hover:text-primary text-sm text-white/80"
                >
                  {CONTENT.footer.contact.emailValue}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-lg" />
                <span className="font-inter text-sm text-white/80">
                  {CONTENT.footer.contact.addressValue}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="mt-1 text-lg" />
                <span className="font-inter text-sm text-white/80">
                  {CONTENT.footer.contact.hoursValue}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-primary/30 mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-inter text-center text-sm text-white/60 md:text-right">
              {CONTENT.footer.legal.copyright.replace(
                "{year}",
                new Date().getFullYear().toString(),
              )}
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="font-inter hover:text-primary text-sm text-white/60 transition-colors"
              >
                {CONTENT.footer.legal.privacy}
              </a>
              <a
                href="#"
                className="font-inter hover:text-primary text-sm text-white/60 transition-colors"
              >
                {CONTENT.footer.legal.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
