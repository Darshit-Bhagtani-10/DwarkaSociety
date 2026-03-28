import { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Send,
  MessageSquare,
} from 'lucide-react'
import societyInfo from '../data/societyInfo'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#3b82f6_0%,_#1d4ed8_35%,_#0b1b49_100%)] pt-32 text-white">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-cyan-300 blur-3xl" />
          <div className="absolute right-[10%] top-[5%] h-80 w-80 rounded-full bg-blue-300 blur-3xl" />
        </div>

        <div className="container-custom relative grid min-h-[55vh] items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur">
              Official Communication
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-[1.05] sm:text-6xl">
              Contact Society
            </h1>

            <p className="mt-6 text-[17px] leading-8 text-slate-200">
              For society-related communication, document reference, notices, or
              general enquiries, use the details below or send a message through
              the contact form.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-xl backdrop-blur sm:col-span-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <MapPin size={26} className="text-white" />
              </div>
              <div className="mt-6 text-2xl font-bold">{societyInfo.shortName}</div>
              <div className="mt-3 text-sm leading-7 text-blue-100">
                {societyInfo.address}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-xl backdrop-blur">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Phone size={26} className="text-white" />
              </div>
              <div className="mt-6 text-xl font-bold">{societyInfo.phone}</div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-blue-100">
                Contact Number
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-xl backdrop-blur">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Mail size={26} className="text-white" />
              </div>
              <div className="mt-6 text-xl font-bold break-all">{societyInfo.email}</div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-blue-100">
                Email Address
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              Contact Information
            </div>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Reach the society through the following details
            </h2>

            <div className="mt-10 space-y-5">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
                    <Phone size={22} className="text-blue-700" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Phone</div>
                    <div className="mt-2 text-xl font-semibold text-slate-900">
                      {societyInfo.phone}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
                    <Mail size={22} className="text-blue-700" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <div className="mt-2 text-xl font-semibold break-all text-slate-900">
                      {societyInfo.email}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
                    <MapPin size={22} className="text-blue-700" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Address</div>
                    <div className="mt-2 text-xl font-semibold leading-8 text-slate-900">
                      {societyInfo.address}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100">
                    <Clock3 size={22} className="text-blue-700" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Office Hours</div>
                    <div className="mt-2 text-xl font-semibold text-slate-900">
                      Monday to Saturday
                    </div>
                    <div className="mt-1 text-sm text-slate-600">
                      10:00 AM to 6:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              Message Form
            </div>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Send a message
            </h2>

            <div className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                    rows="6"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500"
                  />
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-6 py-3 font-semibold shadow-md transition hover:bg-blue-800"
                  style={{ color: '#ffffff' }}
                >
                  <Send size={18} />
                  Send Message
                </button>

                <p className="text-sm leading-7 text-slate-500">
                  This form UI is ready. Later, you can connect it to Formspree so
                  submissions come directly to your email without needing a backend.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              Society Location
            </div>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Address and map view
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <iframe
              title="Dwarka Society Location"
              src="https://www.google.com/maps?q=Charkop%20Sector%202%20Kandivali%20West%20Mumbai&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-[linear-gradient(180deg,#020f3c_0%,#020923_100%)] text-white">
        <div className="container-custom grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300">
              Communication
            </div>
            <h2 className="mt-4 text-4xl font-bold leading-tight">
              Society communication in a clearer digital format
            </h2>
            <p className="mt-5 text-[17px] leading-8 text-slate-300">
              For notices, record references, and society-related queries, use the
              contact information above or the contact form section.
            </p>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
            <MessageSquare size={28} className="text-white" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage