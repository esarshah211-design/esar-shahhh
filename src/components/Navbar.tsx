import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BurgerBiteLogo } from './BurgerBiteLogo';
import { RestaurantConfig } from '../config/restaurantData';

interface NavbarProps {
  config: RestaurantConfig;
  activePage: string;
  setActivePage: (page: string) => void;
  onOpenOrderModal: () => void;
  cartItemCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  activePage,
  setActivePage,
  onOpenOrderModal,
  cartItemCount = 0
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#111111]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      {/* Slim Announcement Bar */}
      <div className="bg-[#FF6B24] text-[#111111] px-4 py-1.5 text-xs font-semibold text-center tracking-wide flex items-center justify-center gap-2">
        <span>{config.announcements.topBar}</span>
        {config.announcements.promotionalBannerEnabled && (
          <span className="hidden sm:inline bg-[#171717] text-white px-2 py-0.5 rounded text-[11px] font-bold">
            {config.announcements.promotionalBannerText}
          </span>
        )}
      </div>

      {/* Main Top Bar (Strict 3-zone contract: Brand — 4-5 nav links — 1 primary action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B24] rounded-lg"
          aria-label="Burger Bite Home"
        >
          <BurgerBiteLogo size="md" />
        </button>

        {/* Zone 2: 4-5 Clean Nav Links */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-[#B8B8B8]"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap cursor-pointer hover:text-white py-1 relative ${
                  isActive ? 'text-white font-semibold' : ''
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6B24] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenOrderModal}
            className="hidden sm:inline-flex items-center gap-2 bg-[#FF6B24] hover:bg-[#E65312] text-[#111111] hover:text-white px-5 py-2.5 rounded-lg text-sm font-bold tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-orange-500/20 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order Now</span>
            {cartItemCount > 0 && (
              <span className="bg-[#111111] text-white text-xs px-2 py-0.5 rounded-full font-bold ml-1">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B24]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF6B24]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#171717] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium transition-colors text-left ${
                    isActive
                      ? 'bg-[#202020] text-[#FF6B24] font-bold border-l-2 border-[#FF6B24]'
                      : 'text-[#B8B8B8] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs uppercase tracking-wider text-[#FF6B24]">Active</span>}
                </button>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#FF6B24] hover:bg-[#E65312] text-[#111111] py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp</span>
              {cartItemCount > 0 && (
                <span className="bg-[#111111] text-white text-xs px-2 py-0.5 rounded-full ml-1 font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>

            <a
              href={config.business.phone.tel}
              className="w-full flex items-center justify-center gap-2 bg-[#202020] hover:bg-[#282828] text-white py-2.5 rounded-lg font-medium text-sm transition-colors border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#FF6B24]" />
              <span>Call: {config.business.phone.display}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
