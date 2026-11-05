import React from 'react';
import { MapPin, MessageSquare, Flame } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Local Convenience',
      description:
        'Centrally situated at Main Adda, Mian Gujar, Peshawar. Quick counter takeaway for residents and commuters passing through the main road.',
      icon: MapPin
    },
    {
      title: 'Easy Ordering',
      description:
        'Order seamlessly over WhatsApp or phone call. Share your preferred bites and pick them up warm without unnecessary waiting.',
      icon: MessageSquare
    },
    {
      title: 'Fast-Food Favourites',
      description:
        'Focused menu centered on street-style burgers, wrapped chicken shawarma, and freshly fried seasoned french fries.',
      icon: Flame
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#171717] border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF6B24] block mb-2">
            WHY VISIT BURGER BITE
          </span>
          <h2 className="font-['Oswald'] font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
            MADE FOR YOUR CRAVINGS.
          </h2>
          <p className="mt-3 text-[#B8B8B8] text-base leading-relaxed">
            Your friendly neighbourhood spot for fast-food in Mian Gujar, Peshawar.
          </p>
        </div>

        {/* 3 Premium Icon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="bg-[#202020] p-8 rounded-2xl border border-white/5 hover:border-[#FF6B24]/40 transition-all duration-300 flex flex-col items-start group shadow-md"
              >
                <div className="p-4 bg-[#FF6B24]/10 rounded-xl text-[#FF6B24] mb-6 group-hover:scale-110 group-hover:bg-[#FF6B24] group-hover:text-[#111111] transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-['Oswald'] font-bold text-2xl uppercase tracking-wide text-white mb-3 group-hover:text-[#FF6B24] transition-colors">
                  {point.title}
                </h3>
                <p className="text-[#B8B8B8] text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
