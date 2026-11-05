/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { initialRestaurantData, RestaurantConfig, MenuItem } from './config/restaurantData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { FeaturedMenu } from './components/FeaturedMenu';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { FoodGallery } from './components/FoodGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MenuPage } from './components/MenuPage';
import { AboutPage } from './components/AboutPage';
import { GalleryPage } from './components/GalleryPage';
import { ContactPage } from './components/ContactPage';
import { MobileStickyBar } from './components/MobileStickyBar';
import { OrderBuilderDrawer, OrderItem } from './components/OrderBuilderDrawer';
import { OwnerCustomizerModal } from './components/OwnerCustomizerModal';
import { LightboxModal } from './components/LightboxModal';
import { Sliders } from 'lucide-react';

export default function App() {
  const [config, setConfig] = useState<RestaurantConfig>(initialRestaurantData);
  const [activePage, setActivePage] = useState<string>('home');
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState<boolean>(false);
  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState<boolean>(false);

  // Single item quick preview lightbox
  const [previewItem, setPreviewItem] = useState<MenuItem | null>(null);

  // Add item to WhatsApp order builder
  const handleAddToCart = (item: MenuItem) => {
    setOrderItems((prev) => {
      const existing = prev.find((entry) => entry.item.id === item.id);
      if (existing) {
        return prev.map((entry) =>
          entry.item.id === item.id
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    setIsOrderDrawerOpen(true);
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setOrderItems((prev) => prev.filter((entry) => entry.item.id !== itemId));
    } else {
      setOrderItems((prev) =>
        prev.map((entry) =>
          entry.item.id === itemId ? { ...entry, quantity: newQuantity } : entry
        )
      );
    }
  };

  const handleClearOrder = () => {
    setOrderItems([]);
  };

  const totalCartCount = orderItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleOpenPage = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col font-['Inter'] selection:bg-[#FF6B24] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        config={config}
        activePage={activePage}
        setActivePage={handleOpenPage}
        onOpenOrderModal={() => setIsOrderDrawerOpen(true)}
        cartItemCount={totalCartCount}
      />

      {/* Main Page Routing */}
      <main className="flex-1 pb-14 md:pb-0">
        {activePage === 'home' && (
          <>
            <Hero
              config={config}
              onExploreMenu={() => handleOpenPage('menu')}
              onOpenOrderModal={() => setIsOrderDrawerOpen(true)}
            />
            <TrustSection config={config} />
            <FeaturedMenu
              config={config}
              onViewAllMenu={() => handleOpenPage('menu')}
              onAddToCart={handleAddToCart}
              onImageClick={(item) => setPreviewItem(item)}
            />
            <WhyChooseUs />
            <AboutSection
              config={config}
              onExploreMenu={() => handleOpenPage('menu')}
            />
            <FoodGallery config={config} />
            <ReviewsSection config={config} />
            <FAQSection config={config} />
            <FinalCTA
              config={config}
              onOpenOrderModal={() => setIsOrderDrawerOpen(true)}
            />
          </>
        )}

        {activePage === 'menu' && (
          <MenuPage
            config={config}
            onAddToCart={handleAddToCart}
            onImageClick={(item) => setPreviewItem(item)}
            onOpenOrderModal={() => setIsOrderDrawerOpen(true)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            config={config}
            onExploreMenu={() => handleOpenPage('menu')}
            onNavigateToContact={() => handleOpenPage('contact')}
          />
        )}

        {activePage === 'gallery' && (
          <GalleryPage config={config} />
        )}

        {activePage === 'contact' && (
          <ContactPage config={config} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        config={config}
        setActivePage={handleOpenPage}
        onOpenOwnerCustomizer={() => setIsOwnerModalOpen(true)}
      />

      {/* Mobile Sticky Action Bar (<15% mobile viewport cap) */}
      <MobileStickyBar
        config={config}
        onOpenOrderModal={() => setIsOrderDrawerOpen(true)}
        cartCount={totalCartCount}
      />

      {/* WhatsApp Order Builder Slide-over */}
      <OrderBuilderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        orderItems={orderItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearOrder={handleClearOrder}
        config={config}
        onQuickAddItem={handleAddToCart}
      />

      {/* Owner Demo Data Customizer Modal */}
      <OwnerCustomizerModal
        isOpen={isOwnerModalOpen}
        onClose={() => setIsOwnerModalOpen(false)}
        config={config}
        onSaveConfig={(newConfig) => setConfig(newConfig)}
      />

      {/* Single Menu Item Image Lightbox */}
      {previewItem && (
        <LightboxModal
          items={[
            {
              id: previewItem.id,
              title: previewItem.name,
              category: previewItem.category === 'burgers' ? 'Burgers' : previewItem.category === 'shawarma' ? 'Shawarma' : 'Fries',
              image: previewItem.image,
              alt: previewItem.name,
              caption: `${previewItem.description} (${previewItem.isDemo ? 'Demo Menu Photo' : ''})`,
              isDemoImage: previewItem.isDemo
            }
          ]}
          currentIndex={0}
          isOpen={!!previewItem}
          onClose={() => setPreviewItem(null)}
          onNext={() => {}}
          onPrev={() => {}}
        />
      )}

      {/* Floating Demo Control Trigger (Discreet helper for presenting to client) */}
      <div className="fixed bottom-16 sm:bottom-6 left-4 z-30">
        <button
          onClick={() => setIsOwnerModalOpen(true)}
          title="Open Owner Demo Controls"
          className="flex items-center gap-2 bg-[#171717]/90 hover:bg-[#202020] text-[#B8B8B8] hover:text-[#FF6B24] px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10 shadow-lg backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-95"
        >
          <Sliders className="w-3.5 h-3.5 text-[#FF6B24]" />
          <span className="hidden sm:inline">Owner Demo Controls</span>
        </button>
      </div>
    </div>
  );
}
