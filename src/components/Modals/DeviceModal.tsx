import React from 'react';
import { X, Smartphone, Laptop, Speaker, Wifi } from 'lucide-react';

interface DeviceModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeDevice: string;
  onSelectDevice: (deviceName: string) => void;
}

export const DeviceModal: React.FC<DeviceModalProps> = ({
  isOpen,
  onClose,
  activeDevice,
  onSelectDevice,
}) => {
  if (!isOpen) return null;

  const devices = [
    { name: 'Smartphone (Este dispositivo)', type: 'mobile', icon: Smartphone },
    { name: 'Notebook de Estúdio', type: 'laptop', icon: Laptop },
    { name: 'Caixa de Som Bluetooth', type: 'speaker', icon: Speaker },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-xs p-0 sm:p-4 animate-fadeIn">
      <div className="w-full max-w-sm bg-[#181818] text-white rounded-t-2xl sm:rounded-2xl p-6 border border-white/10 shadow-2xl space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Wifi className="w-5 h-5 text-[#1ed760]" />
            <h3 className="font-bold text-base">Tocar em um dispositivo</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-white/60 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Devices */}
        <div className="space-y-2">
          {devices.map((d, idx) => {
            const Icon = d.icon;
            const isSelected = activeDevice === d.name;
            return (
              <button
                key={idx}
                onClick={() => {
                  onSelectDevice(d.name);
                  onClose();
                }}
                className={`w-full p-3.5 rounded-xl flex items-center justify-between transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#1ed760]/20 text-[#1ed760] border border-[#1ed760]/40'
                    : 'bg-white/5 hover:bg-white/10 text-white/90'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5" />
                  <div className="text-left">
                    <p className="text-sm font-semibold">{d.name}</p>
                    <p className="text-[11px] text-white/50">Spotify Connect</p>
                  </div>
                </div>
                {isSelected && (
                  <span className="text-xs bg-[#1ed760] text-black px-2 py-0.5 rounded-full font-bold">
                    Ativo
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
