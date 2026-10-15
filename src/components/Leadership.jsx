import { leadership } from '../data/siteData'

function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">Our teams</p>
      <h2 className="mb-6 text-3xl font-extrabold text-slate-900">Board & leadership</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {leadership.map((person) => (
          <article
            key={person.name}
            className="card-lift overflow-hidden rounded-2xl border border-slate-100 bg-white text-center"
          >
            <img src={person.photo} alt={person.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-slate-900">{person.name}</h3>
              <p className="text-sm text-teal-700">{person.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Leadership
