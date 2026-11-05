import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { GalleryItem } from '../config/restaurantData';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-[#202020] text-white hover:text-[#FF6B24] hover:bg-[#282828] transition-colors border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF6B24]"
        aria-label="Close image modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#202020]/80 text-white hover:text-[#FF6B24] hover:bg-[#202020] transition-colors border border-white/10 hidden sm:flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#FF6B24]"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#202020]/80 text-white hover:text-[#FF6B24] hover:bg-[#202020] transition-colors border border-white/10 hidden sm:flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#FF6B24]"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image & Caption Container */}
      <div
        className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#171717] w-full flex items-center justify-center">
          <img
            src={currentItem.image}
            alt={currentItem.alt}
            className="max-h-[68vh] w-auto max-w-full object-contain"
            referrerPolicy="no-referrer"
          />

          {/* Demo tag */}
          {currentItem.isDemoImage && (
            <div className="absolute top-4 left-4 bg-[#111111]/90 text-amber-300 text-xs px-3 py-1 rounded-md border border-amber-500/30 flex items-center gap-1.5 font-medium">
              <Info className="w-3.5 h-3.5" />
              <span>DEMO PRESENTATION PHOTO</span>
            </div>
          )}
        </div>

        {/* Caption strip */}
        <div className="w-full mt-4 bg-[#171717] p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs uppercase font-bold text-[#FF6B24] tracking-wider block">
              {currentItem.category} · {currentIndex + 1} of {items.length}
            </span>
            <h4 className="font-['Oswald'] font-bold text-lg text-white uppercase mt-0.5">
              {currentItem.title}
            </h4>
            <p className="text-xs text-[#B8B8B8] mt-1">{currentItem.caption}</p>
          </div>

          <div className="flex sm:hidden items-center justify-end gap-3 pt-2 border-t border-white/5">
            <button
              onClick={onPrev}
              className="px-3 py-1.5 bg-[#242424] text-white text-xs rounded-lg"
            >
              Prev
            </button>
            <button
              onClick={onNext}
              className="px-3 py-1.5 bg-[#FF6B24] text-[#111111] font-bold text-xs rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
