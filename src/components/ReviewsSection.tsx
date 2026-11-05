import React from 'react';
import { ExternalLink, CheckCircle2, MessageSquarePlus } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantData';

interface ReviewsSectionProps {
  config: RestaurantConfig;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ config }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#111111] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF6B24] block mb-2">
            CUSTOMER TRUST & TRANSPARENCY
          </span>
          <h2 className="font-['Oswald'] font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
            REAL EXPERIENCES. REAL CUSTOMERS.
          </h2>
          <p className="mt-3 text-[#B8B8B8] text-base leading-relaxed">
            We value genuine community feedback. In accordance with our customer transparency policy, all customer reviews are verified directly on our Google Business Profile.
          </p>
        </div>

        {/* Verified Google Business Profile Review Block */}
        <div className="max-w-3xl mx-auto bg-[#171717] rounded-2xl border border-white/10 p-6 sm:p-10 text-center shadow-xl relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF6B24]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex p-3 bg-[#FF6B24]/10 rounded-full text-[#FF6B24] mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h3 className="font-['Oswald'] font-bold text-2xl uppercase tracking-wide text-white mb-3">
            VERIFIED GOOGLE BUSINESS PROFILE
          </h3>

          <p className="text-[#B8B8B8] text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
            BURGER BITE is listed on Google Maps for Mian Gujar, Peshawar. We do not publish fabricated testimonials. Visit our authentic Google listing to read real customer ratings, check photos, and share your own feedback after your visit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={config.business.googleMaps.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#FF6B24] hover:bg-[#E65312] text-[#111111] hover:text-white px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-md group cursor-pointer"
            >
              <span>View Google Maps Reviews</span>
              <ExternalLink className="w-4 h-4 text-[#111111] group-hover:text-white transition-colors" />
            </a>

            <a
              href={`https://wa.me/${config.business.whatsapp.number}?text=${encodeURIComponent(
                'Hello Burger Bite! I would like to share feedback about my recent order.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#202020] hover:bg-[#282828] text-white hover:text-[#FF6B24] px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors border border-white/10"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#FF6B24]" />
              <span>Share Feedback on WhatsApp</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 text-xs text-[#B8B8B8]/70">
            <span>BURGER BITE · Main Adda, Mian Gujar, Peshawar · Direct WhatsApp: +92 311 9598182</span>
          </div>
        </div>
      </div>
    </section>
  );
};
