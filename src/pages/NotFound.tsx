import { Link } from "react-router-dom";
import SEOHelmet from "@/components/SEOHelmet";
import { CONTENT } from "@/lib/content";

const NotFound = () => {
  return (
    <>
      <SEOHelmet
        title={CONTENT.notFound.subtitle}
        description={CONTENT.notFound.description}
        url={typeof window !== "undefined" ? window.location.href : ""}
        type="website"
      />
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#010202] to-[#0B1A2E] px-6 text-center">
        <h1 className="font-inter mb-4 text-9xl font-bold text-primary">
          {CONTENT.notFound.title}
        </h1>
        <h2 className="font-inter mb-6 text-3xl font-semibold text-gray-100 md:text-4xl">
          {CONTENT.notFound.subtitle}
        </h2>
        <p className="font-inter mb-8 max-w-md text-lg text-gray-400">
          {CONTENT.notFound.description}
        </p>
        <Link
          to="/"
          className="font-inter rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
        >
          {CONTENT.notFound.button}
        </Link>
      </div>
    </>
  );
};

export default NotFound;
