import React, { useState } from 'react';
import { ChevronDown, Info } from 'lucide-react';

export const InfoCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const infoItems = [
    { label: 'Nicknames', value: 'zafe/xzafe' },
    { label: 'Age', value: '15y' },
    { label: 'City', value: 'Paragominas/Pa' },
    { label: 'Height', value: '1.72' },
    { label: 'Gender/sexuality', value: 'male/pansexual' },
    { label: 'Preference', value: 'women' },
    { label: 'Favorite thing', value: 'talking' },
    { label: 'Dream', value: 'to be a programmer' },
    { label: 'Programming language', value: 'Python/JavaScript' },
  ];

  return (
    <div className="w-full max-w-xs mx-auto mt-2.5 transition-all duration-300">
      {/* Header Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-3.5 py-2 flex items-center justify-between backdrop-blur-md active:scale-[0.98] transition-all cursor-pointer group"
      >
        <div className="flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-white/40 group-hover:text-white/70 transition-colors" />
          <span className="text-xs font-medium text-white/70 tracking-wide">
            info
          </span>
        </div>

        <ChevronDown
          className={`w-3.5 h-3.5 text-white/40 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-white/70' : ''
          }`}
        />
      </button>

      {/* Expanded Content */}
      {isOpen && (
        <div className="mt-1.5 bg-black/30 border border-white/10 rounded-xl p-3 backdrop-blur-xl space-y-1.5 animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="divide-y divide-white/5">
            {infoItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-1.5 px-1 text-[11px]"
              >
                <span className="text-white/50 font-normal">{item.label}</span>
                <span className="text-white/80 font-medium font-mono text-right ml-2">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
