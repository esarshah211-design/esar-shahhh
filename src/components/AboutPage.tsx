import React from 'react';
import { MapPin, Phone, MessageCircle, Utensils, CheckCircle2, Navigation } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantData';

interface AboutPageProps {
  config: RestaurantConfig;
  onExploreMenu: () => void;
  onNavigateToContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  config,
  onExploreMenu,
  onNavigateToContact
}) => {
  return (
    <div className="bg-[#111111] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF6B24] block mb-2">
            LOCAL STREET FAST FOOD
          </span>
          <h1 className="font-['Oswald'] font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
            ABOUT BURGER BITE
          </h1>
          <p className="text-[#B8B8B8] text-base sm:text-lg leading-relaxed">
            Your local fast-food destination in Mian Gujar, Main Adda, Peshawar. Bold street flavours crafted for your daily cravings.
          </p>
        </div>

        {/* Story & Introduction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B24] block mb-2">
              OUR STORY & MISSION
            </span>
            <h2 className="font-['Oswald'] font-bold text-3xl sm:text-4xl uppercase text-white mb-6">
              GROUNDED IN LOCAL COMMUNITY, DRIVEN BY FLAVOUR.
            </h2>
            <div className="space-y-4 text-[#B8B8B8] text-base leading-relaxed">
              <p>
                BURGER BITE was established with a clear goal: to serve delicious, satisfying, and accessible street fast-food to the people of Mian Gujar and surrounding Peshawar neighbourhoods.
              </p>
              <p>
                Conveniently located at Main Adda, our kitchen focuses on crowd favourites: seasoned crispy chicken burgers, loaded double beef burgers, savory spiced chicken shawarma wraps, and hot golden french fries.
              </p>
              <p>
                We believe in genuine food without pretension. Every order is freshly assembled upon your request, whether you are picking up dinner for the family, grabbing a quick lunch, or stopping by with friends.
              </p>
            </div>

            {/* Core Values / Brand Personality */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-[#171717] rounded-xl border border-white/5">
                <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wide font-['Oswald'] mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B24]" />
                  <span>Freshly Assembled</span>
                </div>
                <p className="text-xs text-[#B8B8B8]">
                  Food made warm upon order, not sitting for hours under lamps.
                </p>
              </div>

              <div className="p-4 bg-[#171717] rounded-xl border border-white/5">
                <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wide font-['Oswald'] mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B24]" />
                  <span>Accessible Pricing</span>
                </div>
                <p className="text-xs text-[#B8B8B8]">
                  Honest, community-friendly prices for quality street eats.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#202020] group">
              <img
                src="/src/assets/images/restaurant_street_vibe_1793871475942.jpg"
                alt="Burger Bite kitchen counter"
                className="w-full h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#111111]/90 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <p className="text-xs font-bold text-[#FF6B24] uppercase tracking-wider">
                  BURGER BITE · MAIN ADDA
                </p>
                <p className="text-xs text-[#B8B8B8] mt-1">
                  Mian Gujar, Peshawar, Khyber Pakhtunkhwa, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location & Visiting Card */}
        <div className="bg-[#171717] rounded-2xl border border-white/10 p-8 sm:p-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#FF6B24] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Location</span>
              </div>
              <h3 className="font-['Oswald'] font-bold text-xl uppercase text-white">
                Main Adda, Mian Gujar
              </h3>
              <p className="text-sm text-[#B8B8B8]">
                Peshawar, Khyber Pakhtunkhwa, Pakistan. Centrally positioned for convenient pickup.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#FF6B24] text-xs font-bold uppercase tracking-wider">
                <Phone className="w-4 h-4" />
                <span>Phone & WhatsApp</span>
              </div>
              <h3 className="font-['Oswald'] font-bold text-xl uppercase text-white">
                {config.business.phone.display}
              </h3>
              <p className="text-sm text-[#B8B8B8]">
                Call directly or send a message on WhatsApp to check today's specials and place an order.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#FF6B24] text-xs font-bold uppercase tracking-wider">
                <Navigation className="w-4 h-4" />
                <span>Opening Hours</span>
              </div>
              <h3 className="font-['Oswald'] font-bold text-xl uppercase text-white">
                {config.business.openingHours.display}
              </h3>
              <p className="text-xs text-amber-400">
                (Subject to final owner verification)
              </p>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="text-center max-w-xl mx-auto space-y-6">
          <h2 className="font-['Oswald'] font-bold text-3xl uppercase text-white">
            READY TO TASTE THE DIFFERENCE?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onExploreMenu}
              className="inline-flex items-center gap-2 bg-[#FF6B24] hover:bg-[#E65312] text-[#111111] hover:text-white px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-colors shadow-md"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore Food Menu</span>
            </button>

            <button
              onClick={onNavigateToContact}
              className="inline-flex items-center gap-2 bg-[#202020] hover:bg-[#282828] text-white hover:text-[#FF6B24] px-7 py-3.5 rounded-xl font-semibold text-sm transition-colors border border-white/10"
            >
              <MessageCircle className="w-4 h-4 text-[#FF6B24]" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
