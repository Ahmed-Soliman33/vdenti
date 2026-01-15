import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SEO_CONFIG, buildUrl } from "@/lib/seo-constants";

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHelmet = ({
  title = "STORKWORK - Integrated Supply & Procurement Solutions",
  description = "Your trusted partner in supply and procurement solutions. Building and managing supply chains from design to delivery in Saudi Arabia and the Gulf.",
  keywords = "supply chain, procurement, sourcing, logistics, Saudi Arabia, STORKWORK",
  author = "STORKWORK",
  image = SEO_CONFIG.images.default,
  url = typeof window !== "undefined" ? window.location.href : buildUrl(),
  type = "website",
}: SEOHelmetProps) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  // Set html lang and dir attributes using useEffect
  // React 19's native metadata support doesn't handle <html> attributes
  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = i18n.dir();
  }, [currentLang, i18n]);

  // React 19 automatically hoists these metadata tags to <head>
  return (
    <>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta
        property="og:locale"
        content={currentLang === "ar" ? "ar_SA" : "en_US"}
      />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={SEO_CONFIG.social.twitterHandle} />
      <meta name="twitter:creator" content={SEO_CONFIG.social.twitterHandle} />

      {/* LinkedIn & WhatsApp Optimization */}
      <meta property="article:author" content={author} />
      <meta property="og:site_name" content="STORKWORK" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content={title} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />

      {/* Alternate Language Links for SEO */}
      <link
        rel="alternate"
        hrefLang="en"
        href={url.replace(/\/(ar|en)/, "/en")}
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href={url.replace(/\/(ar|en)/, "/ar")}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={url.replace(/\/(ar|en)/, "/en")}
      />
    </>
  );
};

export default SEOHelmet;
