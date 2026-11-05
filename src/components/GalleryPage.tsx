import React, { useState } from 'react';
import { Maximize2, AlertCircle, Sparkles } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantData';
import { LightboxModal } from './LightboxModal';

interface GalleryPageProps {
  config: RestaurantConfig;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ config }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const filters = ['All', 'Burgers', 'Shawarma', 'Fries', 'Kitchen'];

  const filteredGallery =
    selectedFilter === 'All'
      ? config.gallery
      : config.gallery.filter((item) => item.category === selectedFilter);

  const handleOpenLightbox = (index: number) => {
    setLightboxIdx(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#111111] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF6B24] block mb-2">
            VISUAL SHOWCASE
          </span>
          <h1 className="font-['Oswald'] font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
            FOOD & RESTAURANT GALLERY
          </h1>
          <p className="text-[#B8B8B8] text-base sm:text-lg leading-relaxed">
            Feast your eyes on the fast-food creations inspired by BURGER BITE in Peshawar.
          </p>
        </div>

        {/* Demo Notice Banner */}
        <div className="max-w-3xl mx-auto mb-10 p-4 bg-[#171717] rounded-xl border border-amber-500/30 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-[#B8B8B8]">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
          <div>
            <strong className="text-amber-400">Notice for Restaurant Owner:</strong> These high-resolution images are presentation demo assets showcasing what your official photography will look like in the live gallery layout. We will substitute in your authentic food and kitchen shots whenever ready.
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#FF6B24] text-[#111111]'
                    : 'bg-[#202020] text-[#B8B8B8] hover:text-white hover:bg-[#282828] border border-white/5'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-[#202020] border border-white/10 aspect-4/3 cursor-pointer shadow-xl hover:border-[#FF6B24]/60 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Demo Badge */}
              {item.isDemoImage && (
                <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-semibold text-amber-300 border border-amber-500/30">
                  DEMO ASSET
                </div>
              )}

              {/* Zoom Action Icon */}
              <div className="absolute top-3 right-3 p-2.5 bg-[#171717]/85 backdrop-blur-md rounded-xl text-white group-hover:text-[#FF6B24] border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption and category */}
              <div className="absolute bottom-0 inset-x-0 p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B24] block mb-1">
                  {item.category}
                </span>
                <h3 className="font-['Oswald'] font-bold text-xl text-white uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs text-[#B8B8B8] mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Owner Image Submission Prompt Box */}
        <div className="mt-16 bg-[#171717] rounded-2xl border border-white/10 p-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex p-3 bg-[#FF6B24]/10 rounded-full text-[#FF6B24] mb-3">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-['Oswald'] font-bold text-2xl uppercase tracking-wide text-white mb-2">
            HAVE REAL KITCHEN & FOOD PHOTOS?
          </h3>
          <p className="text-sm text-[#B8B8B8] leading-relaxed mb-6">
            Simply send high-resolution photos of your burgers, shawarma wraps, and storefront directly to your web developer or via WhatsApp to have them integrated into this gallery.
          </p>
          <a
            href={`https://wa.me/${config.business.whatsapp.number}?text=${encodeURIComponent(
              'Hello! I would like to submit authentic photos of BURGER BITE for the website gallery.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#202020] hover:bg-[#282828] text-white hover:text-[#FF6B24] px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-white/10"
          >
            Send Photos on WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <LightboxModal
        items={filteredGallery}
        currentIndex={lightboxIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIdx((prev) => (prev + 1) % filteredGallery.length)}
        onPrev={() => setLightboxIdx((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length)}
      />
    </div>
  );
};
