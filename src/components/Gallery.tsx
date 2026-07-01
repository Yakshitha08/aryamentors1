import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: 'https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Students attending classroom lecture',
  },
  {
    src: 'https://images.pexels.com/photos/4778626/pexels-photo-4778626.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Students taking notes during coaching session',
  },
  {
    src: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Writing practice at desks',
  },
  {
    src: 'https://images.pexels.com/photos/5905612/pexels-photo-5905612.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Group study and discussion',
  },
  {
    src: 'https://images.pexels.com/photos/4778666/pexels-photo-4778666.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Individual mentoring session',
  },
  {
    src: 'https://images.pexels.com/photos/5905498/pexels-photo-5905498.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Mock test preparation environment',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const open = (i: number) => setLightbox(i);
  const close = () => setLightbox(null);
  const next = () => setLightbox((prev) => (prev === null ? null : (prev + 1) % images.length));
  const prev = () => setLightbox((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-600" />
            Gallery
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            A Glimpse of <span className="text-primary-700">Our Institute</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Well-maintained classrooms and a focused learning environment that helps students prepare seriously.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => open(i)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary-800" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4" onClick={close}>
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[80vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
