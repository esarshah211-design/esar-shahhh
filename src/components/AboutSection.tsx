import React from 'react';
import { Navigation, Utensils, MapPin, Clock } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantData';

interface AboutSectionProps {
  config: RestaurantConfig;
  onExploreMenu: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  config,
  onExploreMenu
}) => {
  return (
    <section className="py-16 sm:py-24 bg-[#111111] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Image with Accent Badge (lg:col-span-5) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="/src/assets/images/restaurant_street_vibe_1793871475942.jpg"
                alt="Burger Bite fast food kitchen counter and street dining atmosphere"
                className="w-full h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 bg-[#171717]/90 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <p className="text-xs font-semibold text-[#FF6B24] uppercase tracking-wider">
                  Community Favourite
                </p>
                <p className="text-sm font-bold text-white font-['Oswald'] tracking-wide">
                  Main Adda, Mian Gujar, Peshawar
                </p>
              </div>
            </div>

            <p className="text-[11px] text-[#B8B8B8]/70 text-center mt-2">
              Demo presentation photo · Reflecting fast-food kitchen atmosphere
            </p>
          </div>

          {/* Right Column: Text & Directions (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF6B24] block mb-2">
              ABOUT OUR RESTAURANT
            </span>
            <h2 className="font-['Oswald'] font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white mb-6">
              YOUR LOCAL BURGER DESTINATION.
            </h2>

            <p className="text-[#B8B8B8] text-base sm:text-lg leading-relaxed mb-6">
              Welcome to Burger Bite, your local fast-food destination in Mian Gujar, Peshawar. Explore our food selection, discover your favourite flavours and connect with us for your next meal.
            </p>

            <p className="text-[#B8B8B8] text-sm sm:text-base leading-relaxed mb-8">
              Whether you are stopping by Main Adda for a quick takeaway burger, craving a savory chicken shawarma roll on your commute home, or sharing seasoned fries with friends, Burger Bite is here to serve your daily cravings.
            </p>

            {/* Practical Info List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 p-4 bg-[#171717] rounded-xl border border-white/5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF6B24] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">Location</h3>
                  <p className="text-xs text-[#B8B8B8] mt-0.5">Mian Gujar, Main Adda, Peshawar</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#FF6B24] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">Hours (Pending Owner Review)</h3>
                  <p className="text-xs text-[#B8B8B8] mt-0.5">{config.business.openingHours.display}</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={config.business.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF6B24] hover:bg-[#E65312] text-[#111111] hover:text-white px-6 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={onExploreMenu}
                className="inline-flex items-center gap-2 bg-[#202020] hover:bg-[#282828] text-white hover:text-[#FF6B24] px-6 py-3.5 rounded-xl text-sm font-semibold transition-colors border border-white/10 cursor-pointer"
              >
                <Utensils className="w-4 h-4 text-[#FF6B24]" />
                <span>Explore Food Menu</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
