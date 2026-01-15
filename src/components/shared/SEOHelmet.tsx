import { useEffect } from "react";
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
  title = "VDenti - عيادة أسنان متخصصة في المملكة العربية السعودية",
  description = "عيادة VDenti هي وجهتك الأولى للعناية بصحة الفم والأسنان. نقدم خدمات تجميل، علاج، وزراعة الأسنان بأحدث التقنيات.",
  keywords = "عيادة أسنان، تجميل الأسنان، زراعة الأسنان، تقويم الأسنان، السعودية، VDenti",
  author = "VDenti",
  image = SEO_CONFIG.images.default,
  url = typeof window !== "undefined" ? window.location.href : buildUrl(),
  type = "website",
}: SEOHelmetProps) => {
  const currentLang = "ar";

  // Set html lang and dir attributes using useEffect
  // React 19's native metadata support doesn't handle <html> attributes
  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = "rtl";
  }, [currentLang]);

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
      <meta property="og:site_name" content="V-Denti" />
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
