import { productSections } from '../data/siteData'
import ProductCard from './ProductCard'

function ProductCatalog() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">
          Product compartments
        </p>
        <h2 className="text-3xl font-extrabold text-slate-900">Company medicine catalogue</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          Ayurvedic and allopathic tablets, syrups and pain balm. Prices shown are catalogue MRP
          for this website UI. Always read the pack insert and follow a registered medical
          practitioner.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {productSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="rounded-full bg-white px-4 py-2 text-xs font-bold text-teal-800 ring-1 ring-teal-200 hover:bg-teal-700 hover:text-white"
            >
              {section.title.replace(' medicines', '')}
            </a>
          ))}
        </div>
      </div>

      {productSections.map((section) => (
        <div key={section.id} id={section.id} className="mb-12 scroll-mt-28">
          <div className="mb-5 rounded-2xl bg-teal-900 px-5 py-4 text-white">
            <h3 className="text-xl font-extrabold">{section.title}</h3>
            <p className="text-sm text-teal-100">{section.intro}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {section.items.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default ProductCatalog
