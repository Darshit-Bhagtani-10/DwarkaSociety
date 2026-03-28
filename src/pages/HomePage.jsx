import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Files,
  Building2,
  Download,
  MapPin,
  Route,
  Store,
  TrainFront,
  ShoppingBag,
  Trees,
  ArrowRight,
} from 'lucide-react'
import AnimatedCounter from '../components/common/AnimatedCounter'
import societyInfo from '../data/societyInfo'
import statsData from '../data/statsData'
import committeeData from '../data/committeeData'
import noticesData from '../data/noticesData'
import documentsData from '../data/documentsData'

const featureCards = [
  {
    id: 1,
    title: 'Transparent Governance',
    description:
      'Committee-led communication, structured records, and better clarity for members.',
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: 'Document Visibility',
    description:
      'Important records, notices, and core society information displayed in an organized format.',
    icon: Files,
  },
  {
    id: 3,
    title: 'Community Structure',
    description:
      'A long-standing cooperative residential framework with stable member coordination.',
    icon: Building2,
  },
]

const localityCards = [
  {
    id: 1,
    title: 'Charkop, Kandivali (West)',
    description:
      'A stable suburban residential setting within Mumbai’s western corridor.',
    icon: MapPin,
  },
  {
    id: 2,
    title: 'Residential Access',
    description:
      'Convenient access to transport routes, daily-use services, and neighborhood infrastructure.',
    icon: Route,
  },
  {
    id: 3,
    title: 'Urban Convenience',
    description:
      'Practical city living with civic, retail, and local support systems nearby.',
    icon: Store,
  },
  {
    id: 4,
    title: 'Transit & Connectivity',
    description:
      'The broader locality supports movement through suburban roads and public access routes.',
    icon: TrainFront,
  },
  {
    id: 5,
    title: 'Daily Essentials',
    description:
      'Residents benefit from access to local daily-needs services and routine convenience points.',
    icon: ShoppingBag,
  },
  {
    id: 6,
    title: 'Community Setting',
    description:
      'The neighborhood supports a practical and stable cooperative residential environment.',
    icon: Trees,
  },
]

function HomePage() {
  const latestNotices = noticesData.slice(0, 3)

  return (
    <div>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#3b82f6_0%,_#1d4ed8_35%,_#0b1b49_100%)] pt-32 text-white">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-cyan-300 blur-3xl" />
          <div className="absolute right-[10%] top-[5%] h-80 w-80 rounded-full bg-blue-300 blur-3xl" />
          <div className="absolute bottom-[-10%] left-[35%] h-96 w-96 rounded-full bg-slate-500 blur-3xl" />
        </div>

        <div className="container-custom relative grid min-h-[90vh] items-center gap-14 pb-20 lg:grid-cols-[1fr_1.05fr]">
          <div className="max-w-xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur">
              Registered Co-op Housing Society
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              Dwarka Society
            </h1>

            <p className="mt-5 text-2xl font-medium leading-snug text-blue-100">
              {societyInfo.name}
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-200">
              A structured cooperative housing society in Charkop, Kandivali
              (West), with a focus on community coordination, documented records,
              and practical residential management.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-semibold shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
                style={{ color: '#0f172a' }}
              >
                Explore Society
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center rounded-xl border border-white/25 bg-blue-700 px-6 py-3 font-semibold shadow-md transition hover:bg-blue-800"
                style={{ color: '#ffffff' }}
              >
                Contact Society
              </Link>
            </div>

            <div className="mt-10 grid gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <div className="text-sm text-blue-100">Registered Address</div>
                <div className="mt-2 text-lg font-semibold leading-7">
                  {societyInfo.address}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <div className="text-sm text-blue-100">Registration Number</div>
                  <div className="mt-2 text-lg font-semibold leading-7">
                    {societyInfo.registrationNumber}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                  <div className="text-sm text-blue-100">Established Since</div>
                  <div className="mt-2 text-lg font-semibold">
                    {societyInfo.established}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-8 hidden h-40 w-40 rounded-full border border-white/10 bg-white/5 blur-2xl lg:block" />

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/15 lg:col-span-2">
                <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent opacity-60" />
                <div className="relative">
                  <div className="text-6xl font-bold tracking-tight">
                    <AnimatedCounter value={statsData[0].value} />
                  </div>
                  <div className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-100">
                    {statsData[0].label}
                  </div>
                </div>
              </div>

              {statsData.slice(1).map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent opacity-60" />
                  <div className="relative">
                    <div className="text-5xl font-bold tracking-tight">
                      <AnimatedCounter value={item.value} />
                    </div>
                    <div className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-300/15 via-white/8 to-slate-900/20 p-0 shadow-2xl lg:col-span-2">
                <div className="grid min-h-[290px] lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.25),_transparent_55%)]" />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-100/20 to-blue-200/5" />
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950/70 to-transparent" />
                    <div className="absolute bottom-5 left-5 rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-slate-800 backdrop-blur">
                      Society Visual Panel
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-7">
                    <div className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
                      Society Overview
                    </div>
                    <h3 className="mt-3 text-2xl font-bold leading-tight text-white">
                      Clear, structured, and community-oriented residential management
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-200">
                      A cleaner digital presentation of the society’s identity,
                      records, notices, and management structure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              Society Overview
            </div>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900">
              Clear, structured, and professionally presented society information
            </h2>

            <p className="mt-6 text-[17px] leading-8 text-slate-600">
              Dwarka Society is a cooperative housing society located in Charkop,
              Kandivali (West), with an emphasis on orderly residential
              management, documented records, and community-led administration.
            </p>

            <p className="mt-4 text-[17px] leading-8 text-slate-600">
              This platform is meant to present the society’s identity, records,
              committee structure, and notices in a more accessible and organized
              format.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center rounded-xl bg-blue-700 px-6 py-3 font-semibold shadow-md transition hover:bg-blue-800"
              style={{ color: '#ffffff' }}
            >
              Read More About Society
            </Link>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="text-sm text-slate-500">Official Name</div>
              <div className="mt-2 text-2xl font-semibold leading-8 text-slate-900">
                {societyInfo.name}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="text-sm text-slate-500">Address</div>
              <div className="mt-2 text-2xl font-semibold leading-8 text-slate-900">
                {societyInfo.address}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="text-sm text-slate-500">Total Members</div>
                <div className="mt-3 text-4xl font-bold text-slate-900">35</div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="text-sm text-slate-500">Established</div>
                <div className="mt-3 text-4xl font-bold text-slate-900">1990</div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="text-sm text-slate-500">25 Sq. Mt. Units</div>
                <div className="mt-3 text-4xl font-bold text-slate-900">29</div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="text-sm text-slate-500">40 Sq. Mt. Units</div>
                <div className="mt-3 text-4xl font-bold text-slate-900">6</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,#eaf4ff_0%,#f8fbff_100%)]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_45%)]" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              Main Features
            </div>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Better presented society highlights
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-blue-100 bg-white/70 p-8 shadow-sm backdrop-blur">
              <div className="text-[17px] leading-8 text-slate-600">
                The website structure is intended to support better visibility for
                society information, records, notices, and the overall committee-led
                management framework.
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="text-5xl font-bold text-slate-900">35</div>
                  <div className="mt-2 text-sm font-medium text-slate-500">
                    Total Members
                  </div>
                </div>

                <div>
                  <div className="text-5xl font-bold text-slate-900">1990</div>
                  <div className="mt-2 text-sm font-medium text-slate-500">
                    Established
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {featureCards.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.id}
                    className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-700 hover:bg-blue-700"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-white/15">
                      <Icon
                        size={26}
                        className="text-blue-700 transition group-hover:text-white"
                      />
                    </div>

                    <h3 className="mt-5 text-2xl font-bold text-slate-900 transition group-hover:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-7 text-slate-600 transition group-hover:text-blue-50">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                Committee
              </div>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Society leadership and management
              </h2>
            </div>

            <Link
              to="/about"
              className="font-semibold text-blue-700 transition hover:text-blue-800"
            >
              View Society Details
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {committeeData.map((member) => (
              <div
                key={member.id}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-700 to-blue-500 text-lg font-bold text-white shadow-lg shadow-blue-500/20">
                  {member.name
                    .split(' ')
                    .map((word) => word[0])
                    .join('')
                    .slice(0, 2)}
                </div>

                <div className="mt-5 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                  {member.role}
                </div>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {member.name}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              Documents
            </div>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Important society records
            </h2>

            <div className="mt-10 space-y-4">
              {documentsData.map((doc) => (
                <div
                  key={doc.id}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="text-2xl font-semibold text-slate-900">
                    {doc.title}
                  </div>

                  <div className="mt-5">
                    <a
                      href={doc.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-2 text-sm font-semibold transition hover:bg-blue-100"
                      style={{ color: '#1d4ed8' }}
                    >
                      <Download size={15} />
                      PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/documents"
              className="mt-6 inline-flex items-center rounded-xl bg-blue-700 px-6 py-3 font-semibold shadow-md transition hover:bg-blue-800"
              style={{ color: '#ffffff' }}
            >
              Go to Records
            </Link>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              Notice Board
            </div>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Recent updates and communication
            </h2>

            <div className="mt-10 space-y-4">
              {latestNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                    {notice.date}
                  </div>
                  <div className="mt-4 text-2xl font-bold text-slate-900">
                    {notice.title}
                  </div>
                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    {notice.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/notice-board"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-3 font-semibold transition hover:bg-blue-50"
              style={{ color: '#1d4ed8' }}
            >
              View All Notices
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                Location & Nearby Access
              </div>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Residential context and locality overview
              </h2>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {localityCards.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.id}
                  className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                    <Icon size={26} className="text-blue-700" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                Gallery Preview
              </div>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Society premises and visual highlights
              </h2>
            </div>

            <Link
              to="/gallery"
              className="font-semibold text-blue-700 hover:text-blue-800"
            >
              Open Gallery
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-100 via-slate-100 to-slate-200 shadow-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 backdrop-blur transition group-hover:bg-blue-600 group-hover:text-white">
                  Society View {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[linear-gradient(180deg,#020f3c_0%,#020923_100%)] text-white">
        <div className="container-custom grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Contact
            </div>
            <h2 className="mt-4 text-4xl font-bold leading-tight">
              Reach the society for official communication
            </h2>
            <p className="mt-5 text-[17px] leading-8 text-slate-300">
              For society-related communication, notices, documentation, or coordination,
              please refer to the contact section of the website.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-semibold shadow-lg transition hover:bg-slate-100"
            style={{ color: '#0f172a' }}
          >
            Go to Contact Page
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage