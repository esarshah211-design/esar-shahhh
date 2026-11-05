import React from 'react';
import { MessageCircle, Navigation } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantData';

interface FinalCTAProps {
  config: RestaurantConfig;
  onOpenOrderModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  config,
  onOpenOrderModal
}) => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#111111] border-b border-white/5">
      {/* Background with dark overlay & food atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/restaurant_street_vibe_1793871475942.jpg"
          alt="BURGER BITE kitchen vibe"
          className="w-full h-full object-cover object-center filter brightness-25 contrast-125"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/80 to-[#111111]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#FF6B24] block mb-3">
          SATISFY YOUR FAST FOOD CRAVING
        </span>

        <h2 className="font-['Oswald'] font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-6">
          READY FOR YOUR NEXT BITE?
        </h2>

        <p className="text-[#B8B8B8] text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Explore the menu and contact Burger Bite to plan your next meal.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FF6B24] hover:bg-[#E65312] text-[#111111] hover:text-white px-8 py-4 rounded-xl text-base font-bold uppercase tracking-wider transition-all duration-200 shadow-xl shadow-orange-600/25 active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>ORDER NOW</span>
          </button>

          <a
            href={config.business.googleMaps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#202020] hover:bg-[#282828] text-white hover:text-[#FF6B24] px-8 py-4 rounded-xl text-base font-semibold uppercase tracking-wider transition-colors border border-white/10"
          >
            <Navigation className="w-5 h-5 text-[#FF6B24]" />
            <span>GET DIRECTIONS</span>
          </a>
        </div>

        <div className="mt-10 text-xs text-[#B8B8B8]/80">
          📍 Main Adda, Mian Gujar, Peshawar · 📞 {config.business.phone.display} · 🕒 {config.business.openingHours.display}
        </div>
      </div>
    </section>
  );
};
