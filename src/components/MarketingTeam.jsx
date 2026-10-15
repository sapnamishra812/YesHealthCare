import { marketingTeam } from '../data/siteData'

function MarketingTeam() {
  return (
    <section id="marketing" className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
        Sales force
      </p>
      <h2 className="text-3xl font-extrabold text-slate-900">Marketing & field team</h2>
      <p className="mt-2 max-w-3xl text-slate-600">
        YES HEALTHCARE is known for an aggressive sales and marketing network that works with
        doctors, chemists and stockists across India. Leadership names above are from the company
        website. Field portraits here are layout photos for the marketing structure.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {marketingTeam.map((person) => (
          <article
            key={person.name}
            className="card-lift overflow-hidden rounded-2xl border border-slate-100 bg-white"
          >
            <img src={person.photo} alt={person.name} className="h-52 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-slate-900">{person.name}</h3>
              <p className="text-sm font-semibold text-teal-800">{person.role}</p>
              <p className="mt-1 text-xs text-slate-500">{person.zone}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default MarketingTeam
