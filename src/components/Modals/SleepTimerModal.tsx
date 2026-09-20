import React from 'react';
import { X, Clock, Check } from 'lucide-react';

interface SleepTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMinutes: number | null;
  onSelectTimer: (minutes: number | null) => void;
}

export const SleepTimerModal: React.FC<SleepTimerModalProps> = ({
  isOpen,
  onClose,
  selectedMinutes,
  onSelectTimer,
}) => {
  if (!isOpen) return null;

  const options = [
    { label: '5 minutos', value: 5 },
    { label: '15 minutos', value: 15 },
    { label: '30 minutos', value: 30 },
    { label: '45 minutos', value: 45 },
    { label: '1 hora', value: 60 },
    { label: 'Fim da faixa', value: -1 },
    { label: 'Desativar timer', value: null },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-xs p-0 sm:p-4 animate-fadeIn">
      <div className="w-full max-w-sm bg-[#181818] text-white rounded-t-2xl sm:rounded-2xl p-6 border border-white/10 shadow-2xl space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#1ed760]" />
            <h3 className="font-bold text-base">Timer de Repouso</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/60 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options list */}
        <div className="space-y-1">
          {options.map((opt, idx) => {
            const isSelected = selectedMinutes === opt.value;
            return (
              <button
                key={idx}
                onClick={() => {
                  onSelectTimer(opt.value);
                  onClose();
                }}
                className={`w-full text-left px-4 py-3 rounded-xl flex items-center justify-between text-sm transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#1ed760]/20 text-[#1ed760] font-bold'
                    : 'text-white/80 hover:bg-white/10'
                }`}
              >
                <span>{opt.label}</span>
                {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
