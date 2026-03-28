import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Society', path: '/about' },
  { label: 'Records', path: '/documents' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#07214a_0%,#03132f_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(135deg,transparent_0%,transparent_35%,#60a5fa_35%,transparent_36%,transparent_45%,#60a5fa_45%,transparent_46%,transparent_55%,#60a5fa_55%,transparent_56%,transparent_100%)]" />
      </div>

      <img
        src="/footerbuilding2.png"
        alt="Building Outline"
        className="pointer-events-none absolute bottom-15 left-0 z-0 w-[550px] max-w-none opacity-[0.30] animate-footerFloat select-none"
      />

      <div className="container-custom relative z-10 section-padding grid gap-12 lg:grid-cols-[1.15fr_0.75fr_0.9fr]">
        <div>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 text-lg font-bold text-white shadow-lg shadow-blue-500/20">
              DS
            </div>
            <div>
              <div className="text-2xl font-bold">Dwarka Society</div>
              <div className="text-sm text-slate-400">Established Since 1990</div>
            </div>
          </div>

          <p className="mt-8 max-w-md text-[15px] leading-8 text-slate-300">
            Charkop (1) Dwarka Co-op Housing Society Limited, Plot No. 243,
            Sector 2, Charkop, Kandivali (West), Mumbai - 400067.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Explore
          </div>

          <div className="mt-6 flex flex-col gap-4">
            {footerLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-[15px] text-slate-300 transition hover:translate-x-1 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Society Info
          </div>

          <div className="mt-6 space-y-4 text-[15px] leading-7 text-slate-300">
            <p>Registration No. BOM (W/R) HSG (TR) 4988/89-90</p>
            <p>Established Since 1990</p>
            <p>Total Members: 35</p>
            <p>Kandivali (West), Mumbai</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="container-custom py-5 text-center text-sm text-slate-400">
          © 2026 Dwarka Society. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer