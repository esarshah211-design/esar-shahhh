import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink, Settings } from 'lucide-react';
import { BurgerBiteLogo } from './BurgerBiteLogo';
import { RestaurantConfig } from '../config/restaurantData';

interface FooterProps {
  config: RestaurantConfig;
  setActivePage: (page: string) => void;
  onOpenOwnerCustomizer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  setActivePage,
  onOpenOwnerCustomizer
}) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${config.business.whatsapp.number}?text=${encodeURIComponent(
    config.business.whatsapp.defaultMessage
  )}`;

  return (
    <footer className="bg-[#171717] text-[#B8B8B8] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="flex flex-col items-start">
            <BurgerBiteLogo size="lg" className="mb-4" />
            <p className="text-sm leading-relaxed mb-6 text-[#B8B8B8]">
              Your local fast-food destination in Mian Gujar, Main Adda, Peshawar. Freshly prepared burgers, chicken shawarma, and golden french fries made for your cravings.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF6B24] hover:bg-[#E65312] text-[#111111] hover:text-white px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Ordering</span>
            </a>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-['Oswald'] font-bold text-base uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-[#FF6B24] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('menu')}
                  className="hover:text-[#FF6B24] transition-colors cursor-pointer"
                >
                  Food Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-[#FF6B24] transition-colors cursor-pointer"
                >
                  About Burger Bite
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('gallery')}
                  className="hover:text-[#FF6B24] transition-colors cursor-pointer"
                >
                  Food Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-[#FF6B24] transition-colors cursor-pointer"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div>
            <h4 className="font-['Oswald'] font-bold text-base uppercase tracking-wider text-white mb-4">
              Contact & Hours
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6B24] shrink-0 mt-0.5" />
                <a
                  href={config.business.phone.tel}
                  className="hover:text-white transition-colors"
                >
                  {config.business.phone.display}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FF6B24] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{config.business.openingHours.display}</p>
                  <p className="text-[11px] text-amber-400/90 mt-0.5">
                    (Hours pending owner verification)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6B24] shrink-0 mt-0.5" />
                <span>Main Adda, Mian Gujar, Peshawar, KP</span>
              </div>
            </div>
          </div>

          {/* Col 4: Location & Social Note */}
          <div>
            <h4 className="font-['Oswald'] font-bold text-base uppercase tracking-wider text-white mb-4">
              Find Us On Maps
            </h4>
            <p className="text-xs text-[#B8B8B8] leading-relaxed mb-4">
              Locate our exact branch on Google Maps for real-time traffic and walking directions.
            </p>
            <a
              href={config.business.googleMaps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#202020] hover:bg-[#282828] text-white hover:text-[#FF6B24] px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors border border-white/10 mb-4"
            >
              <Navigation className="w-3.5 h-3.5 text-[#FF6B24]" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3 text-[#B8B8B8]" />
            </a>

            {/* Social media note (No fake profiles) */}
            <div className="pt-2 text-[11px] text-[#B8B8B8]/70">
              <span className="font-semibold text-white block mb-0.5">Social Channels:</span>
              {config.business.socialLinks.isDemoNotice}
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Owner Demo Access */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B8B8B8]">
          <p>© {currentYear} BURGER BITE. All rights reserved. Peshawar, Pakistan.</p>

          <div className="flex items-center gap-4">
            <span className="text-[#B8B8B8]/60">Client Demo Presentation</span>
            <button
              onClick={onOpenOwnerCustomizer}
              className="inline-flex items-center gap-1.5 text-xs text-[#FF6B24] hover:text-[#E65312] underline decoration-dotted cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Owner Demo Controls</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
