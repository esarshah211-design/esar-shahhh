import React from 'react';
import { MessageCircle, Utensils, MapPin, Clock, ArrowRight } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantData';

interface HeroProps {
  config: RestaurantConfig;
  onExploreMenu: () => void;
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  config,
  onExploreMenu,
  onOpenOrderModal
}) => {
  const whatsappUrl = `https://wa.me/${config.business.whatsapp.number}?text=${encodeURIComponent(
    config.business.whatsapp.defaultMessage
  )}`;

  return (
    <section className="relative overflow-hidden bg-[#111111] border-b border-white/5 py-12 lg:py-20">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF6B24]/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -bottom-10 left-10 w-[350px] h-[350px] bg-[#FF6B24]/5 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography and CTAs (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Small Label */}
            <div className="flex items-center gap-2 mb-4 text-[#FF6B24] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              <span className="w-8 h-[2px] bg-[#FF6B24]" />
              <span>YOUR LOCAL FAST FOOD DESTINATION</span>
            </div>

            {/* Main Heading in Oswald */}
            <h1 className="font-['Oswald'] font-bold text-4xl sm:text-5xl lg:text-7xl uppercase tracking-tight text-white leading-[1.08] mb-6">
              BIG BITES. <br />
              <span className="text-[#FF6B24]">BOLD FLAVOURS.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-[#B8B8B8] text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
              Craving something delicious? Explore Burger Bite's fast-food menu, discover your favourites and get in touch to place your order. Your next bite starts here in Mian Gujar, Peshawar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#FF6B24] hover:bg-[#E65312] text-[#111111] hover:text-white px-7 py-4 rounded-xl text-base font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-orange-600/20 active:scale-[0.98] group"
              >
                <MessageCircle className="w-5 h-5 text-[#111111] group-hover:text-white transition-colors" />
                <span>ORDER ON WHATSAPP</span>
              </a>

              <button
                onClick={onExploreMenu}
                className="inline-flex items-center justify-center gap-2 bg-[#202020] hover:bg-[#282828] text-white hover:text-[#FF6B24] px-7 py-4 rounded-xl text-base font-semibold transition-all duration-200 border border-white/10 cursor-pointer active:scale-[0.98] group"
              >
                <Utensils className="w-5 h-5 text-[#FF6B24]" />
                <span>EXPLORE MENU</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Local Trust & Hours Strip */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-[#B8B8B8]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF6B24] shrink-0" />
                <span>Main Adda, Mian Gujar, Peshawar</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF6B24] shrink-0" />
                <span>
                  {config.business.openingHours.display}{' '}
                  <span className="text-[11px] text-amber-400/90 font-medium">(Subject to owner verification)</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Burger Photography (lg:col-span-5) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none group">
              {/* Subtle orange aura glow */}
              <div className="absolute inset-0 bg-[#FF6B24]/20 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500" />

              {/* Main Image Container */}
              <div className="relative bg-[#202020] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/src/assets/images/hero_gourmet_burger_1793871472966.jpg"
                  alt="BURGER BITE signature crispy chicken and double cheese burger"
                  className="w-full h-auto aspect-4/3 sm:aspect-square lg:aspect-4/3 object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Bottom Card Strip on Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#171717]/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#FF6B24] font-semibold">
                      Freshly Prepared
                    </p>
                    <p className="text-sm font-bold text-white font-['Oswald'] tracking-wide">
                      BURGER BITE CLASSICS
                    </p>
                  </div>
                  <button
                    onClick={onOpenOrderModal}
                    className="bg-[#FF6B24] hover:bg-[#E65312] text-[#111111] hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase transition-colors"
                  >
                    Quick Order
                  </button>
                </div>
              </div>

              {/* Unambiguous Demo Photo Disclaimer Tag */}
              <div className="mt-2 text-center">
                <span className="text-[11px] text-[#B8B8B8]/70 tracking-wide">
                  Demo Presentation Photo · Awaiting Official Restaurant Photography
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
