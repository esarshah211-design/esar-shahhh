import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Navigation, ExternalLink, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantData';

interface ContactPageProps {
  config: RestaurantConfig;
}

export const ContactPage: React.FC<ContactPageProps> = ({ config }) => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; phone?: string; message?: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name.';
    }
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanPhone || cleanPhone.length < 9) {
      newErrors.phone = 'Please enter a valid phone or WhatsApp number.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = 'Please enter a message of at least 5 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real client verification without fabricating a backend
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 600);
  };

  const handleWhatsAppForward = () => {
    const text = `Hello Burger Bite!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const url = `https://wa.me/${config.business.whatsapp.number}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleResetForm = () => {
    setFormData({ name: '', phone: '', message: '' });
    setSubmitSuccess(false);
    setErrors({});
  };

  const defaultWhatsAppUrl = `https://wa.me/${config.business.whatsapp.number}?text=${encodeURIComponent(
    config.business.whatsapp.defaultMessage
  )}`;

  return (
    <div className="bg-[#111111] min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF6B24] block mb-2">
            GET IN TOUCH
          </span>
          <h1 className="font-['Oswald'] font-bold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
            CONTACT & LOCATION
          </h1>
          <p className="text-[#B8B8B8] text-base sm:text-lg leading-relaxed">
            Have questions about today's menu, bulk takeaway orders, or directions to Main Adda? We are here to help.
          </p>
        </div>

        {/* Contact Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Phone */}
          <div className="bg-[#171717] p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-[#FF6B24]/40 transition-colors">
            <div>
              <div className="p-3 bg-[#FF6B24]/10 rounded-xl text-[#FF6B24] inline-block mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-['Oswald'] font-bold text-xl uppercase tracking-wide text-white mb-1">
                PHONE CALL
              </h3>
              <p className="text-xs text-[#B8B8B8] mb-4">
                Direct phone line for quick enquiries and order pickup.
              </p>
              <p className="text-lg font-bold text-white font-['Inter'] mb-6">
                {config.business.phone.display}
              </p>
            </div>
            <a
              href={config.business.phone.tel}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#202020] hover:bg-[#282828] text-white hover:text-[#FF6B24] py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#FF6B24]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-[#171717] p-6 rounded-2xl border border-[#FF6B24]/30 flex flex-col justify-between hover:border-[#FF6B24] transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#FF6B24] text-[#111111] text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              Recommended
            </div>
            <div>
              <div className="p-3 bg-[#FF6B24]/10 rounded-xl text-[#FF6B24] inline-block mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-['Oswald'] font-bold text-xl uppercase tracking-wide text-white mb-1">
                WHATSAPP CHAT
              </h3>
              <p className="text-xs text-[#B8B8B8] mb-4">
                Fastest way to order, receive updates, and customize items.
              </p>
              <p className="text-lg font-bold text-white font-['Inter'] mb-6">
                +{config.business.whatsapp.number}
              </p>
            </div>
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#FF6B24] hover:bg-[#E65312] text-[#111111] hover:text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
          </div>

          {/* Card 3: Location & Hours */}
          <div className="bg-[#171717] p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-[#FF6B24]/40 transition-colors">
            <div>
              <div className="p-3 bg-[#FF6B24]/10 rounded-xl text-[#FF6B24] inline-block mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-['Oswald'] font-bold text-xl uppercase tracking-wide text-white mb-1">
                RESTAURANT LOCATION
              </h3>
              <p className="text-xs text-[#B8B8B8] mb-2">
                Main Adda, Mian Gujar, Peshawar, KP, Pakistan.
              </p>
              <div className="flex items-center gap-2 text-xs text-amber-400 mb-6 bg-[#202020] p-2.5 rounded-lg border border-white/5">
                <Clock className="w-4 h-4 shrink-0 text-[#FF6B24]" />
                <span>
                  Hours: {config.business.openingHours.display}{' '}
                  <span className="text-[10px] text-amber-300/80">(Pending confirmation)</span>
                </span>
              </div>
            </div>
            <a
              href={config.business.googleMaps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#202020] hover:bg-[#282828] text-white hover:text-[#FF6B24] py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-white/10"
            >
              <Navigation className="w-4 h-4 text-[#FF6B24]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Enquiry Form (lg:col-span-6) */}
          <div className="lg:col-span-6 bg-[#171717] rounded-2xl border border-white/10 p-6 sm:p-8">
            <h2 className="font-['Oswald'] font-bold text-2xl uppercase tracking-wide text-white mb-2">
              SEND AN ENQUIRY
            </h2>
            <p className="text-xs sm:text-sm text-[#B8B8B8] mb-6">
              Fill in your details below. You can send this enquiry directly to BURGER BITE or forward it straight to WhatsApp.
            </p>

            {submitSuccess ? (
              <div className="bg-[#202020] rounded-xl p-6 border border-emerald-500/30 text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-['Oswald'] font-bold text-xl text-white uppercase mb-2">
                  Enquiry Prepared Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-[#B8B8B8] mb-6">
                  Thank you, <strong className="text-white">{formData.name}</strong>. For the fastest response, send your message directly to Burger Bite's official WhatsApp number with one tap below.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleWhatsAppForward}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FF6B24] hover:bg-[#E65312] text-[#111111] hover:text-white py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp Now</span>
                  </button>

                  <button
                    onClick={handleResetForm}
                    className="bg-[#282828] hover:bg-[#323232] text-white py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors border border-white/10"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Tariq Khan"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full bg-[#202020] border rounded-xl px-4 py-3 text-sm text-white placeholder-[#B8B8B8]/60 focus:outline-none transition-colors ${
                      errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-[#FF6B24]'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="e.g. 0311 9598182"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    className={`w-full bg-[#202020] border rounded-xl px-4 py-3 text-sm text-white placeholder-[#B8B8B8]/60 focus:outline-none transition-colors ${
                      errors.phone ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-[#FF6B24]'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5">
                    Your Message / Order Details *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="What would you like to enquire about or order?"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    className={`w-full bg-[#202020] border rounded-xl px-4 py-3 text-sm text-white placeholder-[#B8B8B8]/60 focus:outline-none transition-colors ${
                      errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-white/10 focus:border-[#FF6B24]'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#FF6B24] hover:bg-[#E65312] text-[#111111] hover:text-white py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Enquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: Verified Location Map (lg:col-span-6) */}
          <div className="lg:col-span-6 bg-[#171717] rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-['Oswald'] font-bold text-2xl uppercase tracking-wide text-white">
                  GOOGLE MAPS LOCATION
                </h2>
                <a
                  href={config.business.googleMaps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#FF6B24] hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-[#B8B8B8] mb-4">
                Located on the main road at Main Adda, Mian Gujar, Peshawar. Click below to launch navigation on your device.
              </p>

              {/* Map embed / iframe placeholder */}
              <div className="relative w-full aspect-16/10 rounded-xl overflow-hidden border border-white/10 bg-[#202020]">
                <iframe
                  title="BURGER BITE Peshawar Location Map"
                  src={config.business.googleMaps.embedSrc}
                  className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#B8B8B8]">
                <span className="font-semibold text-white block">Coordinates / Area:</span>
                Mian Gujar, Peshawar, Khyber Pakhtunkhwa
              </div>
              <a
                href={config.business.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#202020] hover:bg-[#282828] text-white hover:text-[#FF6B24] px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-white/10 inline-flex items-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5 text-[#FF6B24]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
