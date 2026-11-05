import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'horizontal' | 'stacked' | 'iconOnly';
}

export const BurgerBiteLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'horizontal'
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const BurgerIcon = (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconSizes[size]} shrink-0`}
      aria-hidden="true"
    >
      {/* Top Bun */}
      <path
        d="M6 18C6 11.3726 12.268 6 20 6C27.732 6 34 11.3726 34 18H6Z"
        fill="#FF6B24"
      />
      {/* Sesame Seeds */}
      <circle cx="15" cy="11" r="1" fill="#FFFFFF" opacity="0.9" />
      <circle cx="21" cy="9.5" r="1" fill="#FFFFFF" opacity="0.9" />
      <circle cx="26" cy="12" r="1" fill="#FFFFFF" opacity="0.9" />

      {/* Fresh Lettuce / Wave */}
      <path
        d="M4 20C7 19 9 21 13 20C17 19 19 21 23 20C27 19 29 21 33 20C35 19.5 36 20 36 21H4V20Z"
        fill="#FFFFFF"
        opacity="0.95"
      />

      {/* Savory Patty */}
      <rect x="5" y="23" width="30" height="4.5" rx="2.25" fill="#E65312" />

      {/* Melted Cheese Slice Accent */}
      <path
        d="M8 25L20 28L32 25"
        stroke="#FF6B24"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Bottom Bun */}
      <path
        d="M7 29.5H33C33 33.0899 27.1797 36 20 36C12.8203 36 7 33.0899 7 29.5Z"
        fill="#FF6B24"
      />
    </svg>
  );

  if (variant === 'iconOnly') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {BurgerIcon}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      {BurgerIcon}
      <div className="flex flex-col leading-none">
        <span
          className={`font-['Oswald'] font-bold uppercase tracking-wider text-white ${textSizes[size]}`}
        >
          BURGER <span className="text-[#FF6B24]">BITE</span>
        </span>
        {size !== 'sm' && (
          <span className="text-[10px] uppercase font-['Inter'] font-semibold tracking-[0.2em] text-[#B8B8B8] mt-0.5">
            Peshawar · Mian Gujar
          </span>
        )}
      </div>
    </div>
  );
};
