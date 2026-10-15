function ProductCard({ product }) {
  return (
    <article className="card-lift overflow-hidden rounded-2xl border border-slate-100 bg-white">
      <div className="relative h-44 bg-slate-100">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-teal-800">
          {product.pack}
        </span>
      </div>
      <div className="space-y-2 p-4">
        <h3 className="font-bold text-slate-900">{product.name}</h3>
        <p className="text-sm text-slate-600">{product.use}</p>
        <p className="text-xs leading-relaxed text-slate-500">
          <span className="font-semibold text-slate-700">Composition: </span>
          {product.composition}
        </p>
        <div className="flex items-center gap-2 pt-1">
          <span className="text-lg font-extrabold text-teal-800">{product.price}</span>
          <span className="text-sm text-slate-400 line-through">{product.mrp}</span>
          <span className="text-[11px] font-semibold text-slate-400">MRP display</span>
        </div>
        <a
          href="#enquiry"
          className="btn-shine mt-2 block rounded-xl bg-teal-700 py-2.5 text-center text-sm font-bold text-white hover:bg-teal-800"
        >
          Trade enquiry
        </a>
      </div>
    </article>
  )
}

export default ProductCard
