import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantData';

interface MobileStickyBarProps {
  config: RestaurantConfig;
  onOpenOrderModal: () => void;
  cartCount?: number;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  config,
  onOpenOrderModal,
  cartCount = 0
}) => {
  const whatsappUrl = `https://wa.me/${config.business.whatsapp.number}?text=${encodeURIComponent(
    config.business.whatsapp.defaultMessage
  )}`;

  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#171717]/95 backdrop-blur-md border-t border-white/10 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl h-[52px]"
      role="region"
      aria-label="Mobile quick action bar"
    >
      {/* Click to Call */}
      <a
        href={config.business.phone.tel}
        className="flex-1 flex items-center justify-center gap-1.5 bg-[#202020] hover:bg-[#282828] active:bg-[#303030] text-white py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider border border-white/10 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-[#FF6B24]" />
        <span>Call</span>
      </a>

      {/* WhatsApp Order */}
      <button
        onClick={onOpenOrderModal}
        className="flex-2 flex items-center justify-center gap-1.5 bg-[#FF6B24] hover:bg-[#E65312] active:bg-[#cf470c] text-[#111111] py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md transition-colors"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>Order WhatsApp</span>
        {cartCount > 0 && (
          <span className="bg-[#111111] text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold ml-0.5">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
};
