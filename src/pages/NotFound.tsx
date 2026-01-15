import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SEOHelmet from "@/components/SEOHelmet";

const NotFound = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <SEOHelmet
        title={t("meta.notFound.title")}
        description={t("meta.notFound.description")}
        url={typeof window !== "undefined" ? window.location.href : ""}
        type="website"
      />
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#010202] to-[#0B1A2E] px-6 text-center">
        <h1 className="mb-4 text-9xl font-bold text-primary">404</h1>
        <h2 className="mb-6 text-3xl font-semibold text-gray-100 md:text-4xl">
          {t("meta.notFound.title")}
        </h2>
        <p className="mb-8 max-w-md text-lg text-gray-400">
          {t("meta.notFound.description")}
        </p>
        <Link
          to="/"
          className="rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
        >
          {t("nav.home")}
        </Link>
      </div>
    </>
  );
};

export default NotFound;
