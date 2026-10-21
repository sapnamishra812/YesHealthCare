import { company } from "../data/siteData";

function Footer() {
  return (
    <footer className="mt-8 border-t border-teal-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <img
            src={company.logo}
            alt=""
            className="mb-3 h-12 w-12 object-contain"
          />
          <h3 className="font-extrabold text-teal-800">{company.shortName}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {company.legalName}
          </p>
        </div>
        <div>
          <h4 className="font-bold">Catalogue</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a href="#ayurvedic-tablets">Ayurvedic tablets</a>
            </li>
            <li>
              <a href="#ayurvedic-syrup">Ayurvedic syrup</a>
            </li>
            <li>
              <a href="#allopathic-tablets">Allopathic tablets</a>
            </li>
            <li>
              <a href="#allopathic-syrup">Allopathic syrup</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Organisation</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <a href="#about">CEO</a>
            </li>
            <li>
              <a href="#leadership">Leadership</a>
            </li>
            <li>
              <a href="#marketing">Marketing team</a>
            </li>
            <li>
              <a href="#distributors">Distributors</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Contact</h4>
          <p className="mt-3 text-sm text-slate-600">{company.address}</p>
          <p className="mt-2 text-sm font-semibold text-slate-800">
            {company.phone}
          </p>
          <p className="text-sm text-slate-600">{company.email}</p>
        </div>
      </div>
      <p className="border-t border-slate-100 py-4 text-center text-xs text-slate-500">
        © 2026 {company.legalName}. UI catalogue. Medicines to be used as
        directed by a registered medical practitioner.
      </p>
    </footer>
  );
}

export default Footer;
