import { Link } from 'react-router-dom'
import {
  FileText,
  Download,
  Bell,
  FolderOpen,
  ShieldCheck,
  Archive,
  ArrowRight,
} from 'lucide-react'
import documentsData from '../data/documentsData'
import noticesData from '../data/noticesData'

const recordHighlights = [
  {
    id: 1,
    title: 'Document Access',
    description:
      'Important society documents can be organized and made accessible in one structured location.',
    icon: FolderOpen,
  },
  {
    id: 2,
    title: 'Notice Visibility',
    description:
      'Recent notices, circulars, and updates can be reviewed in a cleaner and more centralized format.',
    icon: Bell,
  },
  {
    id: 3,
    title: 'Structured Records',
    description:
      'The records page is designed to support better clarity around society information and updates.',
    icon: Archive,
  },
  {
    id: 4,
    title: 'Reliable Reference',
    description:
      'Members and visitors can use this section as a practical reference point for formal society material.',
    icon: ShieldCheck,
  },
]

function DocumentsPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#3b82f6_0%,_#1d4ed8_35%,_#0b1b49_100%)] pt-32 text-white">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-cyan-300 blur-3xl" />
          <div className="absolute right-[10%] top-[5%] h-80 w-80 rounded-full bg-blue-300 blur-3xl" />
        </div>

        <div className="container-custom relative grid min-h-[62vh] items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur">
              Records & Notices
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-[1.05] sm:text-6xl">
              Society Records
            </h1>

            <p className="mt-6 text-[17px] leading-8 text-slate-200">
              This page presents key society documents, formal records, and notice
              archive items in a cleaner and more accessible structure.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-semibold shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
                style={{ color: '#0f172a' }}
              >
                View Society Page
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center rounded-xl border border-white/25 bg-blue-700 px-6 py-3 font-semibold shadow-md transition hover:bg-blue-800"
                style={{ color: '#ffffff' }}
              >
                Contact Society
              </Link>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-xl backdrop-blur sm:col-span-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <FileText size={26} className="text-white" />
              </div>
              <div className="mt-6 text-4xl font-bold">{documentsData.length}</div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                Core Documents
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-xl backdrop-blur">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Bell size={26} className="text-white" />
              </div>
              <div className="mt-6 text-4xl font-bold">{noticesData.length}</div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                Notices Listed
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-xl backdrop-blur">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Archive size={26} className="text-white" />
              </div>
              <div className="mt-6 text-4xl font-bold">1</div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                Records Section
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              Important Documents
            </div>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Core society files and downloadable records
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {documentsData.map((doc) => (
              <div
                key={doc.id}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <FileText size={24} className="text-blue-700" />
                </div>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {doc.title}
                </h3>

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
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              Notice Archive
            </div>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Notices, circulars, and society updates
            </h2>
          </div>

          <div className="mt-12 grid gap-6">
            {noticesData.map((notice) => (
              <div
                key={notice.id}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                      {notice.date}
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-slate-900">
                      {notice.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-slate-600">
                      {notice.description}
                    </p>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                    <Bell size={24} className="text-blue-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              Records Highlights
            </div>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Why this section matters
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {recordHighlights.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.id}
                  className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                    <Icon size={22} className="text-blue-700" />
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

      <section className="section-padding bg-[linear-gradient(180deg,#020f3c_0%,#020923_100%)] text-white">
        <div className="container-custom grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Next Step
            </div>
            <h2 className="mt-4 text-4xl font-bold leading-tight">
              Need further clarification or society contact details?
            </h2>
            <p className="mt-5 text-[17px] leading-8 text-slate-300">
              Use the contact page for official communication, society-related
              queries, or reference to the latest available information.
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

export default DocumentsPage