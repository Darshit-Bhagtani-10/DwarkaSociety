import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Society', path: '/about' },
  { label: 'Records', path: '/documents' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="container-custom flex h-24 items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 text-lg font-bold text-white shadow-lg shadow-blue-500/20">
            DS
          </div>

          <div>
            <div className="text-[1.35rem] font-bold leading-tight text-slate-900">
              Dwarka Society
            </div>
            <div className="text-sm text-slate-500">Established Since 1990</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group relative text-[15px] font-medium transition ${
                  isActive ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative inline-flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'scale-100 bg-blue-600 shadow-md shadow-blue-500/40'
                        : 'scale-0 bg-blue-600 group-hover:scale-100'
                    }`}
                  />
                  {item.label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-sm lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-custom flex flex-col py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header