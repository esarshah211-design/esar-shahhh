import React, { useState } from 'react';
import { ChevronDown, HelpCircle, AlertCircle } from 'lucide-react';
import { RestaurantConfig } from '../config/restaurantData';

interface FAQSectionProps {
  config: RestaurantConfig;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ config }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#171717] border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF6B24] block mb-2">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-['Oswald'] font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
            HAVE QUESTIONS? WE’VE GOT ANSWERS.
          </h2>
          <p className="mt-3 text-[#B8B8B8] text-base leading-relaxed">
            Everything you need to know about visiting Burger Bite, ordering fast food, and our Peshawar location.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {config.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl overflow-hidden bg-[#202020] border border-white/5 transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:text-[#FF6B24] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B24] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#FF6B24] shrink-0" />
                    <span className="font-['Oswald'] font-semibold text-lg sm:text-xl text-white tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#B8B8B8] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#FF6B24]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#B8B8B8] leading-relaxed border-t border-white/5">
                    <p>{faq.answer}</p>
                    {faq.isOwnerReviewRequired && (
                      <div className="mt-3 flex items-center gap-2 text-xs text-amber-400 bg-[#171717] p-2.5 rounded-lg border border-amber-500/20">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>This detail is pending owner review and confirmation.</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional help strip */}
        <div className="mt-10 p-5 rounded-xl bg-[#202020] border border-white/5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-[#B8B8B8]">
            Have a question not listed here? Contact us directly.
          </span>
          <a
            href={`https://wa.me/${config.business.whatsapp.number}?text=${encodeURIComponent(
              'Hello Burger Bite! I have a question about your menu and services.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF6B24] hover:bg-[#E65312] text-[#111111] hover:text-white px-5 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
