import { ceo, company } from '../data/siteData'

function AboutCeo() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 lg:col-span-2">
          <img
            src={ceo.photo}
            alt={`${ceo.name}, ${ceo.title}`}
            className="h-[420px] w-full object-cover object-top"
          />
          <div className="p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
              From the CEO’s desk
            </p>
            <h2 className="text-2xl font-extrabold text-slate-900">{ceo.name}</h2>
            <p className="font-medium text-teal-800">{ceo.title}</p>
            <p className="mt-2 text-sm text-slate-500">{company.legalName}</p>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            About the company
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">{company.legalName}</h2>
          <p className="mt-2 text-sm font-medium text-teal-800">{company.tagline}</p>
          <p className="mt-5 leading-relaxed text-slate-600">{company.about}</p>
          <p className="mt-5 leading-relaxed text-slate-600">{ceo.message}</p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {company.stats.map((item) => (
              <div key={item.label} className="rounded-2xl bg-mint p-4 text-center">
                <p className="text-2xl font-extrabold text-teal-800">{item.value}</p>
                <p className="text-xs font-semibold text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCeo
