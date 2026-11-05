import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, AlertTriangle, Phone } from 'lucide-react';
import { MenuItem, RestaurantConfig } from '../config/restaurantData';

export interface OrderItem {
  item: MenuItem;
  quantity: number;
}

interface OrderBuilderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems: OrderItem[];
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onClearOrder: () => void;
  config: RestaurantConfig;
  onQuickAddItem: (item: MenuItem) => void;
}

export const OrderBuilderDrawer: React.FC<OrderBuilderDrawerProps> = ({
  isOpen,
  onClose,
  orderItems,
  onUpdateQuantity,
  onClearOrder,
  config,
  onQuickAddItem
}) => {
  const [customerName, setCustomerName] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  if (!isOpen) return null;

  // Calculate numeric total based on parsed price
  const calculateTotal = () => {
    let sum = 0;
    for (const { item, quantity } of orderItems) {
      // Parse e.g. "Rs. 350" -> 350
      const numeric = parseInt(item.price.replace(/[^\d]/g, ''), 10) || 0;
      sum += numeric * quantity;
    }
    return sum;
  };

  const totalEstimate = calculateTotal();

  const handleSendToWhatsApp = () => {
    let orderText = `Hello Burger Bite Peshawar!\nI would like to place an order from your Mian Gujar branch:\n\n`;

    if (customerName.trim()) {
      orderText += `Customer Name: ${customerName.trim()}\n`;
    }

    if (orderItems.length > 0) {
      orderText += `ITEMS REQUESTED:\n`;
      orderItems.forEach(({ item, quantity }) => {
        orderText += `• ${quantity}x ${item.name} (${item.price} each - Demo)\n`;
      });
      orderText += `\nEstimated Demo Total: Rs. ${totalEstimate}\n`;
    } else {
      orderText += `I'd like to check your available menu items and daily specials.\n`;
    }

    if (orderNotes.trim()) {
      orderText += `Notes / Customization: ${orderNotes.trim()}\n`;
    }

    orderText += `\nPlease confirm item availability and current prices. Thank you!`;

    const url = `https://wa.me/${config.business.whatsapp.number}?text=${encodeURIComponent(
      orderText
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Order summary and WhatsApp checkout"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#171717] border-l border-white/10 flex flex-col shadow-2xl relative z-10">
          {/* Drawer Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#111111]">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#FF6B24]" />
              <h2 className="font-['Oswald'] font-bold text-xl uppercase tracking-wide text-white">
                WHATSAPP ORDER BUILDER
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#B8B8B8] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close order drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {/* Demo Notice */}
            <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/30 text-xs text-amber-300 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                <strong>Demo Notice:</strong> Orders are dispatched directly to Burger Bite's official WhatsApp (+92 311 9598182). Final prices and availability are verified upon receipt.
              </span>
            </div>

            {/* Selected Items List */}
            {orderItems.length === 0 ? (
              <div className="text-center py-8 bg-[#202020] rounded-xl border border-white/5 p-6">
                <p className="text-sm font-semibold text-white mb-2">Your order tray is empty</p>
                <p className="text-xs text-[#B8B8B8] mb-4">
                  Select items from our quick suggestions below or enquire on WhatsApp.
                </p>

                {/* Quick Add Suggestions */}
                <div className="mt-4 space-y-2 text-left">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B24] block">
                    Popular Items to Add:
                  </span>
                  {config.menu.slice(0, 3).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onQuickAddItem(item)}
                      className="w-full flex items-center justify-between p-2.5 rounded-lg bg-[#171717] hover:bg-[#282828] text-xs text-white border border-white/5 transition-colors cursor-pointer"
                    >
                      <div className="truncate text-left pr-2">
                        <span className="font-semibold block truncate">{item.name}</span>
                        <span className="text-[#B8B8B8] text-[10px]">{item.price} (Demo)</span>
                      </div>
                      <span className="text-[#FF6B24] font-bold flex items-center gap-1 shrink-0">
                        <Plus className="w-3.5 h-3.5" /> Add
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B8B8B8]">
                    Selected Items ({orderItems.length})
                  </span>
                  <button
                    onClick={onClearOrder}
                    className="text-xs text-rose-400 hover:text-rose-300 inline-flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear</span>
                  </button>
                </div>

                {orderItems.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="p-3 bg-[#202020] rounded-xl border border-white/5 flex items-center justify-between gap-3"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white font-['Oswald'] truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#FF6B24] font-semibold tabular-nums">
                        {item.price}{' '}
                        <span className="text-[10px] text-[#B8B8B8] font-normal">(Demo)</span>
                      </p>
                    </div>

                    {/* Steppers */}
                    <div className="flex items-center gap-2 bg-[#171717] rounded-lg p-1 border border-white/10 shrink-0">
                      <button
                        onClick={() => onUpdateQuantity(item.id, quantity - 1)}
                        className="p-1 rounded text-[#B8B8B8] hover:text-white transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold text-white w-5 text-center tabular-nums">
                        {quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                        className="p-1 rounded text-[#B8B8B8] hover:text-white transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Customer Information (Optional for smooth message) */}
            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Asad Khan"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#202020] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-[#B8B8B8]/60 focus:outline-none focus:border-[#FF6B24]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1">
                  Special Instructions / Preferences
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Extra spicy, no mayonnaise, takeaway pickup in 20 mins..."
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  className="w-full bg-[#202020] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-[#B8B8B8]/60 focus:outline-none focus:border-[#FF6B24]"
                />
              </div>
            </div>
          </div>

          {/* Drawer Footer & Checkout Button */}
          <div className="p-5 border-t border-white/10 bg-[#111111] space-y-4">
            {orderItems.length > 0 && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#B8B8B8]">Estimated Demo Subtotal:</span>
                <span className="text-lg font-bold text-[#FF6B24] font-['Inter'] tabular-nums">
                  Rs. {totalEstimate}
                </span>
              </div>
            )}

            <button
              onClick={handleSendToWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-[#FF6B24] hover:bg-[#E65312] text-[#111111] hover:text-white py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-lg shadow-orange-600/20 active:scale-[0.98] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Send Order via WhatsApp</span>
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-[#B8B8B8]">
              <span>Or call directly:</span>
              <a
                href={config.business.phone.tel}
                className="text-white hover:text-[#FF6B24] underline inline-flex items-center gap-1 font-semibold"
              >
                <Phone className="w-3 h-3 text-[#FF6B24]" />
                <span>{config.business.phone.display}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
