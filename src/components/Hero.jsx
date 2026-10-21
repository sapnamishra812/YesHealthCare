import { company } from "../data/siteData";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section id="home" className="px-4 py-8 lg:px-8">
      <div className="hero-glow mx-auto grid max-w-7xl overflow-hidden rounded-3xl text-white lg:grid-cols-2">
        <div className="fade-up space-y-6 p-8 sm:p-12 lg:p-16">
          <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            Since {company.since} · Palghar, Maharashtra
          </p>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
            {company.legalName}
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-teal-50">
            {company.tagline}
          </p>
          <p className="max-w-lg text-sm leading-relaxed text-teal-100">
            Ayurvedic and allopathic tablets, syrups and pain balm —
            manufactured and supplied through a national distributor network.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="product-catalog"
              className="btn-shine rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800"
            >
              View medicines
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              Meet the CEO
            </Link>
          </div>
        </div>
        <div className="relative min-h-[280px]">
          <img
            src={company.heroImage}
            alt="YES HEALTHCARE pharmaceutical facility visual"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
