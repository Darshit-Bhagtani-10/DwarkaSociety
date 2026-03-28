import { useMemo, useState } from 'react'
import { X, Image as ImageIcon } from 'lucide-react'
import galleryData from '../data/galleryData'

const categories = ['All', 'Premises', 'Buildings', 'Open Spaces', 'Events']

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return galleryData
    return galleryData.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <div>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#3b82f6_0%,_#1d4ed8_35%,_#0b1b49_100%)] pt-32 text-white">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-cyan-300 blur-3xl" />
          <div className="absolute right-[10%] top-[5%] h-80 w-80 rounded-full bg-blue-300 blur-3xl" />
        </div>

        <div className="container-custom relative grid min-h-[55vh] items-center gap-10 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur">
              Society Gallery
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-[1.05] sm:text-6xl">
              Gallery
            </h1>

            <p className="mt-6 text-[17px] leading-8 text-slate-200">
              Explore selected views of the society premises, buildings, open
              spaces, and event-related moments through the gallery below.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-xl backdrop-blur sm:col-span-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <ImageIcon size={26} className="text-white" />
              </div>
              <div className="mt-6 text-4xl font-bold">{galleryData.length}</div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                Total Gallery Images
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-xl backdrop-blur">
              <div className="text-4xl font-bold">4</div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                Categories
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-7 shadow-xl backdrop-blur">
              <div className="text-4xl font-bold">
                {activeCategory === 'All' ? galleryData.length : filteredImages.length}
              </div>
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                Visible Images
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-blue-700 text-white shadow-md'
                      : 'border border-slate-200 bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredImages.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur">
                    {item.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                </div>
              </button>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="mt-12 rounded-[2rem] border border-slate-200 bg-slate-50 p-10 text-center text-slate-500">
              No images available in this category yet.
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              Gallery Notes
            </div>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              A visual overview of the society environment
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-slate-600">
              This gallery is intended to present selected views of the society’s
              premises, buildings, common areas, and community moments in a clean
              and structured visual format.
            </p>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <div className="w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="bg-slate-100">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-8">
                <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                  {selectedImage.category}
                </div>

                <h3 className="mt-5 text-3xl font-bold text-slate-900">
                  {selectedImage.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-slate-600">
                  This selected gallery image is part of the visual presentation of
                  the society premises and surroundings.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryPage