import { Link } from 'react-router-dom'
import {
  Building2,
  FileBadge,
  Users,
  Landmark,
  ShieldCheck,
  MapPin,
  BadgeCheck,
  FolderOpen,
  UsersRound,
  Building,
} from 'lucide-react'
import societyInfo from '../data/societyInfo'
import committeeData from '../data/committeeData'
import societyHighlightsPageData from '../data/societyHighlightspageData'

const factCards = [
  {
    id: 1,
    label: 'Total Members',
    value: '35',
    icon: Users,
  },
  {
    id: 2,
    label: 'Established Since',
    value: '1990',
    icon: Landmark,
  },
  {
    id: 3,
    label: '25 Sq. Mt. Units',
    value: '29',
    icon: Building2,
  },
  {
    id: 4,
    label: '40 Sq. Mt. Units',
    value: '6',
    icon: Building2,
  },
]

const officialDetails = [
  {
    id: 1,
    title: 'Official Society Name',
    value: societyInfo.name,
    icon: FileBadge,
  },
  {
    id: 2,
    title: 'Registration Number',
    value: societyInfo.registrationNumber,
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: 'Registered Address',
    value: societyInfo.address,
    icon: MapPin,
  },
]

const highlightIcons = {
  1: BadgeCheck,
  2: FolderOpen,
  3: UsersRound,
  4: Building,
}

function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#3b82f6_0%,_#1d4ed8_35%,_#0b1b49_100%)] pt-32 text-white">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-cyan-300 blur-3xl" />
          <div className="absolute right-[10%] top-[5%] h-80 w-80 rounded-full bg-blue-300 blur-3xl" />
        </div>

        <div className="container-custom relative grid min-h-[68vh] items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur">
              Society Details
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-[1.05] sm:text-6xl">
              Society Overview
            </h1>

            <p className="mt-5 text-2xl font-medium leading-snug text-blue-100">
              {societyInfo.shortName}
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-200">
              This page presents the society’s official identity, registration,
              address, member structure, and management-related overview in a
              clean and organized format.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/documents"
                className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-semibold shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
                style={{ color: '#0f172a' }}
              >
                View Records
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
            {factCards.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.id}
                  className="rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-xl backdrop-blur"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                    <Icon size={26} className="text-white" />
                  </div>

                  <div className="mt-6 text-4xl font-bold">{item.value}</div>
                  <div className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                    {item.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              About the Society
            </div>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900">
              A structured cooperative housing society with a practical residential framework
            </h2>

            <p className="mt-6 text-[17px] leading-8 text-slate-600">
              Dwarka Society is a cooperative housing society located in Charkop,
              Kandivali (West), Mumbai. It represents a stable residential
              framework supported by member participation, structured committee
              administration, and documented society records.
            </p>

            <p className="mt-4 text-[17px] leading-8 text-slate-600">
              The purpose of this website is to make society information easier to
              access, better organized, and more professionally presented for
              members and visitors.
            </p>
          </div>

          <div className="grid gap-4">
            {officialDetails.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.id}
                  className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
                      <Icon size={22} className="text-blue-700" />
                    </div>

                    <div>
                      <div className="text-sm text-slate-500">{item.title}</div>
                      <div className="mt-2 text-xl font-semibold leading-8 text-slate-900">
                        {item.value}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              Key Highlights
            </div>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Core aspects of the society structure
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {societyHighlightsPageData.map((item) => {
              const Icon = highlightIcons[item.id]

              return (
                <div
                  key={item.id}
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                Committee
              </div>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">
                Current society leadership
              </h2>
            </div>

            <Link
              to="/contact"
              className="font-semibold text-blue-700 transition hover:text-blue-800"
            >
              Contact Society
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

      <section className="section-padding bg-[linear-gradient(180deg,#020f3c_0%,#020923_100%)] text-white">
        <div className="container-custom grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Next Step
            </div>
            <h2 className="mt-4 text-4xl font-bold leading-tight">
              Explore society records, notices, and documents
            </h2>
            <p className="mt-5 text-[17px] leading-8 text-slate-300">
              Proceed to the records section to access important society documents,
              notices, and structured information relevant to members and visitors.
            </p>
          </div>

          <Link
            to="/documents"
            className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-semibold shadow-lg transition hover:bg-slate-100"
            style={{ color: '#0f172a' }}
          >
            Go to Records
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutPage