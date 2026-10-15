import { distributors } from '../data/siteData'

function Distributors() {
  return (
    <section id="distributors" className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
        Wholesale network
      </p>
      <h2 className="text-3xl font-extrabold text-slate-900">Our distributors</h2>
      <p className="mt-2 max-w-3xl text-slate-600">
        Wholesale medicine dealer partners listed by YES HEALTHCARE across Maharashtra, Gujarat,
        Uttar Pradesh, Bihar and Karnataka.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {distributors.map((item) => (
          <article
            key={item.firm}
            className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Super stockist / C&F
            </p>
            <h3 className="mt-1 text-lg font-extrabold text-slate-900">{item.firm}</h3>
            <p className="mt-2 text-sm font-semibold text-slate-700">{item.person}</p>
            <p className="text-sm text-slate-500">{item.place}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Distributors
