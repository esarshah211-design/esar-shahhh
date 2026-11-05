import React, { useState } from 'react';
import { X, Check, RotateCcw, Settings, ShieldCheck, Sparkles } from 'lucide-react';
import { RestaurantConfig, initialRestaurantData } from '../config/restaurantData';

interface OwnerCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: RestaurantConfig;
  onSaveConfig: (newConfig: RestaurantConfig) => void;
}

export const OwnerCustomizerModal: React.FC<OwnerCustomizerModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig
}) => {
  const [formData, setFormData] = useState({
    phoneDisplay: config.business.phone.display,
    whatsappNumber: config.business.whatsapp.number,
    hoursDisplay: config.business.openingHours.display,
    hoursNeedsConfirmation: config.business.openingHours.needsOwnerConfirmation,
    announcementTopBar: config.announcements.topBar,
    promoEnabled: config.announcements.promotionalBannerEnabled,
    promoText: config.announcements.promotionalBannerText,
    addressFull: config.business.address.full
  });

  const [savedFeedback, setSavedFeedback] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedConfig: RestaurantConfig = {
      ...config,
      business: {
        ...config.business,
        phone: {
          ...config.business.phone,
          display: formData.phoneDisplay,
          tel: `tel:${formData.phoneDisplay.replace(/[^\d+]/g, '')}`
        },
        whatsapp: {
          ...config.business.whatsapp,
          number: formData.whatsappNumber.replace(/[^\d]/g, '')
        },
        openingHours: {
          ...config.business.openingHours,
          display: formData.hoursDisplay,
          needsOwnerConfirmation: formData.hoursNeedsConfirmation
        },
        address: {
          ...config.business.address,
          full: formData.addressFull
        }
      },
      announcements: {
        ...config.announcements,
        topBar: formData.announcementTopBar,
        promotionalBannerEnabled: formData.promoEnabled,
        promotionalBannerText: formData.promoText
      }
    };

    onSaveConfig(updatedConfig);
    setSavedFeedback(true);
    setTimeout(() => {
      setSavedFeedback(false);
      onClose();
    }, 900);
  };

  const handleReset = () => {
    onSaveConfig(initialRestaurantData);
    setFormData({
      phoneDisplay: initialRestaurantData.business.phone.display,
      whatsappNumber: initialRestaurantData.business.whatsapp.number,
      hoursDisplay: initialRestaurantData.business.openingHours.display,
      hoursNeedsConfirmation: initialRestaurantData.business.openingHours.needsOwnerConfirmation,
      announcementTopBar: initialRestaurantData.announcements.topBar,
      promoEnabled: initialRestaurantData.announcements.promotionalBannerEnabled,
      promoText: initialRestaurantData.announcements.promotionalBannerText,
      addressFull: initialRestaurantData.business.address.full
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Owner demo configuration controls"
    >
      <div className="bg-[#171717] border border-white/10 rounded-2xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#111111]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#FF6B24]/10 rounded-lg text-[#FF6B24]">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-['Oswald'] font-bold text-xl uppercase tracking-wide text-white">
                OWNER DEMO CONTROLS
              </h2>
              <p className="text-xs text-[#B8B8B8]">
                Test live customizations for BURGER BITE presentation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#B8B8B8] hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-5 text-left text-xs sm:text-sm">
          <div className="p-3 bg-[#202020] rounded-xl border border-white/5 text-xs text-[#B8B8B8]">
            <ShieldCheck className="w-4 h-4 text-[#FF6B24] inline mr-1.5" />
            All data edits in this panel apply instantly to the live UI and originate from the centralized configuration source (`src/config/restaurantData.ts`).
          </div>

          {/* Business Phone & WhatsApp */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                Display Phone Number
              </label>
              <input
                type="text"
                value={formData.phoneDisplay}
                onChange={(e) => setFormData({ ...formData, phoneDisplay: e.target.value })}
                className="w-full bg-[#202020] border border-white/10 rounded-xl px-3.5 py-2 text-white text-xs focus:outline-none focus:border-[#FF6B24]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                WhatsApp Raw Number
              </label>
              <input
                type="text"
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                className="w-full bg-[#202020] border border-white/10 rounded-xl px-3.5 py-2 text-white text-xs focus:outline-none focus:border-[#FF6B24]"
              />
            </div>
          </div>

          {/* Opening Hours & Confirmation Toggle */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5">
              Opening Hours Description
            </label>
            <input
              type="text"
              value={formData.hoursDisplay}
              onChange={(e) => setFormData({ ...formData, hoursDisplay: e.target.value })}
              className="w-full bg-[#202020] border border-white/10 rounded-xl px-3.5 py-2 text-white text-xs focus:outline-none focus:border-[#FF6B24]"
            />
            <label className="flex items-center gap-2 mt-2 cursor-pointer text-xs text-[#B8B8B8]">
              <input
                type="checkbox"
                checked={formData.hoursNeedsConfirmation}
                onChange={(e) =>
                  setFormData({ ...formData, hoursNeedsConfirmation: e.target.checked })
                }
                className="rounded border-white/20 text-[#FF6B24] focus:ring-[#FF6B24]"
              />
              <span>Mark hours as "Pending owner confirmation"</span>
            </label>
          </div>

          {/* Announcement Top Bar */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5">
              Top Announcement Bar Message
            </label>
            <input
              type="text"
              value={formData.announcementTopBar}
              onChange={(e) => setFormData({ ...formData, announcementTopBar: e.target.value })}
              className="w-full bg-[#202020] border border-white/10 rounded-xl px-3.5 py-2 text-white text-xs focus:outline-none focus:border-[#FF6B24]"
            />
          </div>

          {/* Promotional Banner Toggle & Text */}
          <div className="p-4 bg-[#202020] rounded-xl border border-white/5 space-y-3">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-white font-bold uppercase tracking-wider">
              <input
                type="checkbox"
                checked={formData.promoEnabled}
                onChange={(e) => setFormData({ ...formData, promoEnabled: e.target.checked })}
                className="rounded border-white/20 text-[#FF6B24] focus:ring-[#FF6B24]"
              />
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6B24]" />
                Enable Promotional Announcement (Disabled until owner confirms offer)
              </span>
            </label>
            {formData.promoEnabled && (
              <input
                type="text"
                value={formData.promoText}
                onChange={(e) => setFormData({ ...formData, promoText: e.target.value })}
                placeholder="Enter confirmed offer details..."
                className="w-full bg-[#171717] border border-white/10 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-[#FF6B24]"
              />
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5">
              Full Address Display
            </label>
            <input
              type="text"
              value={formData.addressFull}
              onChange={(e) => setFormData({ ...formData, addressFull: e.target.value })}
              className="w-full bg-[#202020] border border-white/10 rounded-xl px-3.5 py-2 text-white text-xs focus:outline-none focus:border-[#FF6B24]"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-[#B8B8B8] hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-[#B8B8B8] hover:text-white transition-colors"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#FF6B24] hover:bg-[#E65312] text-[#111111] hover:text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                {savedFeedback ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Applied Live!</span>
                  </>
                ) : (
                  <span>Apply Changes</span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
