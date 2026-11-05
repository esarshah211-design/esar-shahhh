import React from 'react';
import { MapPin, PhoneCall, ExternalLink, CheckCircle2 } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantData';

interface TrustSectionProps {
  config: RestaurantConfig;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ config }) => {
  return (
    <section className="bg-[#171717] border-y border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Indicator 1: Local Peshawar Location */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#202020]/60 border border-white/5 hover:border-[#FF6B24]/30 transition-colors">
            <div className="p-3 bg-[#FF6B24]/10 rounded-lg text-[#FF6B24] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-white font-['Oswald']">
                Local Peshawar Fast Food
              </h2>
              <p className="text-xs text-[#B8B8B8] mt-1 leading-relaxed">
                Mian Gujar, Main Adda, Peshawar. Easy counter pickup and local takeaway.
              </p>
            </div>
          </div>

          {/* Indicator 2: Direct Contact & WhatsApp */}
          <div className="flex items-start gap-4 p-4 rounded-xl bg-[#202020]/60 border border-white/5 hover:border-[#FF6B24]/30 transition-colors">
            <div className="p-3 bg-[#FF6B24]/10 rounded-lg text-[#FF6B24] shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-white font-['Oswald']">
                Direct Contact Line
              </h2>
              <p className="text-xs text-[#B8B8B8] mt-1">
                Reach us directly at <span className="text-white font-semibold">{config.business.phone.display}</span> for orders and enquiries.
              </p>
            </div>
          </div>

          {/* Indicator 3: Google Maps Verified Listing */}
          <a
            href={config.business.googleMaps.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-4 rounded-xl bg-[#202020]/60 border border-white/5 hover:border-[#FF6B24]/50 hover:bg-[#202020] transition-colors group cursor-pointer"
          >
            <div className="p-3 bg-[#FF6B24]/10 rounded-lg text-[#FF6B24] shrink-0 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold uppercase tracking-wider text-white font-['Oswald']">
                  Google Maps Listed
                </h2>
                <ExternalLink className="w-3.5 h-3.5 text-[#B8B8B8] group-hover:text-[#FF6B24] transition-colors" />
              </div>
              <p className="text-xs text-[#B8B8B8] mt-1 leading-relaxed">
                Verified Google Business listing. Click to view on Google Maps.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
