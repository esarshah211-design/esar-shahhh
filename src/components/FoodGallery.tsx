import React, { useState } from 'react';
import { Maximize2, AlertCircle } from 'lucide-react';
import { GalleryItem, RestaurantConfig } from '../config/restaurantData';
import { LightboxModal } from './LightboxModal';

interface FoodGalleryProps {
  config: RestaurantConfig;
}

export const FoodGallery: React.FC<FoodGalleryProps> = ({ config }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const categories = ['All', 'Burgers', 'Shawarma', 'Fries', 'Kitchen'];

  const filteredItems =
    activeCategory === 'All'
      ? config.gallery
      : config.gallery.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedIdx(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#171717] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF6B24] block mb-2">
            VISUAL SHOWCASE
          </span>
          <h2 className="font-['Oswald'] font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
            TAKE A LOOK AT THE GOODNESS.
          </h2>
          <p className="mt-3 text-[#B8B8B8] text-base leading-relaxed">
            From sizzling hot burgers and succulent chicken shawarma to crisp golden fries.
          </p>
        </div>

        {/* Demo Notice */}
        <div className="max-w-2xl mx-auto mb-8 p-3 bg-[#202020] rounded-xl border border-amber-500/20 text-center flex items-center justify-center gap-2 text-xs text-[#B8B8B8]">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong className="text-amber-400">Owner Demo Note:</strong> Gallery photos represent presentation placeholders until official BURGER BITE photos are submitted.
          </span>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#FF6B24] text-[#111111]'
                    : 'bg-[#202020] text-[#B8B8B8] hover:text-white hover:bg-[#282828] border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-xl overflow-hidden bg-[#202020] border border-white/10 aspect-4/3 sm:aspect-square cursor-pointer shadow-lg hover:border-[#FF6B24]/50 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 p-2 bg-[#111111]/80 rounded-lg text-white group-hover:text-[#FF6B24] transition-colors border border-white/10 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption & Category on card */}
              <div className="absolute bottom-0 inset-x-0 p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6B24] block mb-1">
                  {item.category}
                </span>
                <h3 className="font-['Oswald'] font-bold text-base text-white uppercase truncate">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredItems}
        currentIndex={selectedIdx}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setSelectedIdx((prev) => (prev + 1) % filteredItems.length)}
        onPrev={() => setSelectedIdx((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)}
      />
    </section>
  );
};
