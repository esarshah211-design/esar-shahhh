import React, { useState } from 'react';
import { Search, AlertCircle, Coffee, MessageCircle } from 'lucide-react';
import { MenuItem, RestaurantConfig } from '../config/restaurantData';
import { MenuCard } from './MenuCard';

interface MenuPageProps {
  config: RestaurantConfig;
  onAddToCart: (item: MenuItem) => void;
  onImageClick: (item: MenuItem) => void;
  onOpenOrderModal: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({
  config,
  onAddToCart,
  onImageClick,
  onOpenOrderModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'burgers', label: 'Burgers' },
    { id: 'shawarma', label: 'Shawarma' },
    { id: 'fries', label: 'French Fries' },
    { id: 'drinks', label: 'Drinks & Beverages' }
  ];

  const filteredItems = config.menu.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#111111] min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF6B24] block mb-2">
            OUR FAST FOOD SELECTION
          </span>
          <h1 className="font-['Oswald'] font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
            BURGER BITE MENU
          </h1>
          <p className="text-[#B8B8B8] text-base sm:text-lg leading-relaxed">
            Fresh street-style burgers, juicy spiced chicken shawarma rolls, and hot seasoned fries prepared in Mian Gujar, Peshawar.
          </p>
        </div>

        {/* Demo Notice Banner */}
        <div className="mb-10 p-4 bg-[#171717] rounded-xl border border-amber-500/30 flex items-start sm:items-center gap-3 text-xs sm:text-sm text-[#B8B8B8]">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
          <div className="flex-1">
            <strong className="text-amber-400">Notice for BURGER BITE Owner:</strong> The menu items, descriptions, and prices below are illustrative demo placeholders. As soon as the official paper or digital menu card is confirmed, all names and exact prices will be updated instantly in the centralized data file.
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#FF6B24] text-[#111111]'
                      : 'bg-[#202020] text-[#B8B8B8] hover:text-white hover:bg-[#282828] border border-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#B8B8B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search burgers, shawarma..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#202020] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-[#B8B8B8] focus:outline-none focus:border-[#FF6B24] transition-colors"
            />
          </div>
        </div>

        {/* Menu Items Grid or Empty State */}
        {activeCategory === 'drinks' ? (
          /* Dedicated Empty State for Drinks (as required: only show when confirmed) */
          <div className="bg-[#171717] rounded-2xl border border-white/10 p-12 text-center max-w-2xl mx-auto my-12">
            <div className="w-16 h-16 bg-[#202020] text-[#FF6B24] rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/5">
              <Coffee className="w-8 h-8" />
            </div>
            <h3 className="font-['Oswald'] font-bold text-2xl uppercase tracking-wide text-white mb-2">
              DRINKS & BEVERAGES
            </h3>
            <p className="text-[#B8B8B8] text-sm leading-relaxed mb-6">
              Beverage brands and chilled soft drink varieties (e.g. Cola, Lemon-Lime, Dew, Mineral Water) will be activated as soon as the owner confirms available stock and refrigeration lines at the restaurant counter.
            </p>
            <a
              href={`https://wa.me/${config.business.whatsapp.number}?text=${encodeURIComponent(
                'Hello Burger Bite! What cold drinks and beverages are currently in stock today?'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF6B24] hover:bg-[#E65312] text-[#111111] hover:text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire Drinks on WhatsApp</span>
            </a>
          </div>
        ) : filteredItems.length === 0 ? (
          /* Generic Empty State if Search yield 0 */
          <div className="bg-[#171717] rounded-2xl border border-white/10 p-12 text-center max-w-md mx-auto my-12">
            <p className="text-base font-semibold text-white mb-2">No menu items found</p>
            <p className="text-sm text-[#B8B8B8] mb-6">
              No results matched your search "{searchQuery}". Try searching for burgers, shawarma, or fries.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="bg-[#202020] hover:bg-[#282828] text-white px-4 py-2 rounded-lg text-xs font-bold uppercase transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                item={item}
                config={config}
                onAddToCart={onAddToCart}
                onImageClick={onImageClick}
              />
            ))}
          </div>
        )}

        {/* Bottom Banner for Custom Orders */}
        <div className="mt-16 bg-[#171717] p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-['Oswald'] font-bold text-2xl uppercase tracking-wide text-white mb-1">
              HAVE A SPECIAL CRAVING OR BULK ORDER?
            </h3>
            <p className="text-sm text-[#B8B8B8]">
              Connect with Burger Bite directly to enquire about customization, group takeaways, or counter availability.
            </p>
          </div>
          <button
            onClick={onOpenOrderModal}
            className="bg-[#FF6B24] hover:bg-[#E65312] text-[#111111] hover:text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shrink-0 shadow-md"
          >
            Start WhatsApp Order
          </button>
        </div>
      </div>
    </div>
  );
};
