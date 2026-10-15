import { company } from '../data/siteData'

function CompanyDetails() {
  return (
    <section id="company" className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="overflow-hidden rounded-3xl bg-teal-950 text-teal-50">
        <div className="grid lg:grid-cols-2">
          <div className="space-y-5 p-8 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-300">
              Corporate profile
            </p>
            <h2 className="text-3xl font-extrabold text-white">{company.legalName}</h2>
            <p className="text-teal-100">
              A pharmaceutical company manufacturing and distributing tablets, syrups, balms and
              wellness products. Listed publicly as a manufacturer since {company.since} in Palghar
              / Vasai-Virar, Maharashtra.
            </p>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="font-bold text-white">Nature of business</dt>
                <dd>{company.nature}</dd>
              </div>
              <div>
                <dt className="font-bold text-white">Registered / works address</dt>
                <dd>{company.address}</dd>
              </div>
              <div>
                <dt className="font-bold text-white">Phone</dt>
                <dd>{company.phone}</dd>
              </div>
              <div>
                <dt className="font-bold text-white">Email</dt>
                <dd>{company.email}</dd>
              </div>
              <div>
                <dt className="font-bold text-white">Office hours</dt>
                <dd>{company.hours}</dd>
              </div>
              <div>
                <dt className="font-bold text-white">Official website</dt>
                <dd>
                  <a href={company.website} className="underline">
                    {company.website}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="bg-teal-900 p-8 sm:p-12">
            <h3 className="text-xl font-extrabold text-white">What we manufacture</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-teal-100">
              <li>Ayurvedic tablets and syrups for liver, cough, digestion and immunity</li>
              <li>Allopathic tablets and syrups for fever, allergy, acidity and pain</li>
              <li>Yes Pain Balm in 10 g and 20 g packs</li>
              <li>Wholesale supply through authorised distributors in 8+ states</li>
              <li>Medical representative coverage for doctors and retail chemists</li>
            </ul>
            <div id="enquiry" className="mt-8 rounded-2xl bg-white p-5 text-slate-800">
              <h4 className="font-bold">Stockist / trade enquiry</h4>
              <div className="mt-3 grid gap-3">
                <input
                  type="text"
                  defaultValue="Firm name"
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-500"
                />
                <input
                  type="tel"
                  defaultValue="+91 "
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-500"
                />
                <input
                  type="text"
                  defaultValue="City / state"
                  className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-500"
                />
                <button
                  type="button"
                  className="rounded-xl bg-teal-700 py-2.5 text-sm font-bold text-white"
                >
                  Send enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyDetails
