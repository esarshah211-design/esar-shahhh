import React from 'react';
import { MessageCircle, Plus, AlertCircle } from 'lucide-react';
import { MenuItem, RestaurantConfig } from '../config/restaurantData';

interface MenuCardProps {
  item: MenuItem;
  config: RestaurantConfig;
  onAddToCart?: (item: MenuItem) => void;
  onImageClick?: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({
  item,
  config,
  onAddToCart,
  onImageClick
}) => {
  // Pre-formatted WhatsApp enquiry message for this specific item
  const itemWhatsAppMessage = `Hello Burger Bite! I would like to enquire about the ${item.name} (${item.isDemo ? 'listed as demo item' : ''}) and place an order. Could you please confirm availability and current price?`;
  const itemWhatsAppUrl = `https://wa.me/${config.business.whatsapp.number}?text=${encodeURIComponent(
    itemWhatsAppMessage
  )}`;

  return (
    <div className="group flex flex-col bg-[#202020] rounded-xl overflow-hidden border border-white/10 hover:border-[#FF6B24]/40 hover:-translate-y-1 transition-all duration-300 shadow-lg">
      {/* Product Image Area with Fallback */}
      <div
        className="relative aspect-4/3 w-full overflow-hidden bg-[#171717] cursor-pointer"
        onClick={() => onImageClick && onImageClick(item)}
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#202020] via-transparent to-transparent pointer-events-none" />

        {/* Category Label (Quiet unboxed text) */}
        <div className="absolute top-3 left-3 bg-[#111111]/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider text-[#FF6B24] border border-white/10">
          {item.category}
        </div>

        {/* DEMO Notice Tag */}
        {item.isDemo && (
          <div className="absolute top-3 right-3 bg-amber-500/20 backdrop-blur-md text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>DEMO ITEM</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title and Price */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-['Oswald'] font-bold text-xl uppercase tracking-wide text-white group-hover:text-[#FF6B24] transition-colors">
              {item.name}
            </h3>
            <div className="text-right shrink-0">
              <span className="font-['Inter'] font-bold text-base text-[#FF6B24] tabular-nums">
                {item.price}
              </span>
              {item.isDemo && (
                <div className="text-[10px] text-[#B8B8B8] font-medium block">
                  DEMO PRICE
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-[#B8B8B8] leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Demo Item Disclaimer note if applicable */}
          {item.isDemo && (
            <div className="mb-4 text-[11px] text-amber-400/80 bg-[#171717] p-2 rounded border border-amber-500/10">
              {item.demoNote || 'Demo item & price pending owner verification.'}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="pt-3 border-t border-white/5 flex items-center gap-2">
          {/* Direct WhatsApp Enquiry */}
          <a
            href={itemWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FF6B24] hover:bg-[#E65312] text-[#111111] hover:text-white py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Enquire on WhatsApp</span>
          </a>

          {/* Add to Quick Order Drawer */}
          {onAddToCart && (
            <button
              onClick={() => onAddToCart(item)}
              title="Add to order builder"
              className="p-2.5 rounded-lg bg-[#282828] hover:bg-[#323232] text-white hover:text-[#FF6B24] transition-colors border border-white/10 shrink-0 cursor-pointer active:scale-95"
              aria-label={`Add ${item.name} to order`}
            >
              <Plus className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
