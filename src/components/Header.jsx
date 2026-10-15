import { company } from '../data/siteData'

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-teal-100 bg-white/90 backdrop-blur-md">
      <div className="bg-teal-800 px-4 py-2 text-center text-xs font-medium tracking-wide text-teal-50 sm:text-sm">
        {company.legalName} · Pharmaceutical manufacturer · Wholesale medicine dealer
      </div>

      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <img src={company.logo} alt="YES HEALTHCARE logo" className="h-11 w-11 object-contain" />
          <span>
            <span className="block text-sm font-extrabold leading-tight text-slate-900 sm:text-base">
              Yes Health Care Products
            </span>
            <span className="text-xs font-medium text-teal-700">Private Limited</span>
          </span>
        </a>

        <nav className="ml-4 hidden items-center gap-5 text-sm font-semibold text-slate-600 xl:flex">
          <a href="#home" className="hover:text-teal-700">
            Home
          </a>
          <a href="#about" className="hover:text-teal-700">
            CEO
          </a>
          <a href="#leadership" className="hover:text-teal-700">
            Team
          </a>
          <a href="#products" className="hover:text-teal-700">
            Products
          </a>
          <a href="#distributors" className="hover:text-teal-700">
            Distributors
          </a>
          <a href="#company" className="hover:text-teal-700">
            Company
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href="#enquiry"
            className="rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
          >
            Trade enquiry
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
