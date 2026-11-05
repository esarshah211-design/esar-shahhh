import React from 'react';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { MenuItem, RestaurantConfig } from '../config/restaurantData';
import { MenuCard } from './MenuCard';

interface FeaturedMenuProps {
  config: RestaurantConfig;
  onViewAllMenu: () => void;
  onAddToCart: (item: MenuItem) => void;
  onImageClick: (item: MenuItem) => void;
}

export const FeaturedMenu: React.FC<FeaturedMenuProps> = ({
  config,
  onViewAllMenu,
  onAddToCart,
  onImageClick
}) => {
  // Show popular items or one from each category for featured section
  const featuredItems = config.menu.filter((item) => item.popular).slice(0, 6);

  return (
    <section className="py-16 sm:py-24 bg-[#111111] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF6B24] block mb-2">
              FAST FOOD FAVOURITES
            </span>
            <h2 className="font-['Oswald'] font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
              FIND YOUR NEXT FAVOURITE BITE
            </h2>
            <p className="mt-3 text-[#B8B8B8] text-base leading-relaxed">
              Explore our available fast-food favourites. All items are freshly made for your orders at Main Adda, Mian Gujar.
            </p>
          </div>

          <button
            onClick={onViewAllMenu}
            className="inline-flex items-center gap-2 self-start md:self-auto bg-[#202020] hover:bg-[#282828] text-white hover:text-[#FF6B24] px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-colors border border-white/10 group cursor-pointer"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4 text-[#FF6B24] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Demo Notice Banner for Owner Transparency */}
        <div className="mb-8 p-3.5 bg-[#171717] rounded-xl border border-amber-500/20 flex items-center gap-3 text-xs sm:text-sm text-[#B8B8B8]">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
          <span>
            <strong className="text-amber-400">Owner Demo Note:</strong> Menu items and prices below are illustrative placeholders based on Burgers, Shawarma, and French Fries. Official items and rates will be updated upon owner confirmation.
          </span>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              config={config}
              onAddToCart={onAddToCart}
              onImageClick={onImageClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
