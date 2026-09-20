import React from 'react';
import { Wifi, Battery, Moon } from 'lucide-react';

interface StatusBarProps {
  time?: string;
  batteryLevel?: number;
}

export const StatusBar: React.FC<StatusBarProps> = ({
  batteryLevel = 47,
}) => {
  return (
    <div id="phone-status-bar" className="w-full flex items-center justify-end px-6 pt-3 pb-2 text-xs text-white/90 select-none font-sans z-20">
      {/* Right side: Bluetooth, Crescent, Signal, WiFi, Battery */}
      <div className="flex items-center gap-2 text-[11px]">
        {/* Bluetooth icon symbol */}
        <span className="text-white/80 text-[10px] font-mono">ᛒ</span>
        
        {/* Do not disturb moon */}
        <Moon className="w-3 h-3 text-white/80 fill-white/20" />

        {/* Signal bars */}
        <div className="flex items-end gap-[1.5px] h-3">
          <div className="w-[2px] h-1 bg-white/90 rounded-xs"></div>
          <div className="w-[2px] h-1.5 bg-white/90 rounded-xs"></div>
          <div className="w-[2px] h-2 bg-white/90 rounded-xs"></div>
          <div className="w-[2px] h-2.5 bg-white/90 rounded-xs"></div>
        </div>

        {/* WiFi */}
        <Wifi className="w-3.5 h-3.5 text-white/90" />

        {/* Battery with percentage */}
        <div className="flex items-center gap-1">
          <span className="text-[10px] font-semibold">{batteryLevel}</span>
          <div className="relative w-5 h-2.5 border border-white/70 rounded-[3px] p-[1px] flex items-center">
            <div
              className="h-full bg-white rounded-[1px]"
              style={{ width: `${batteryLevel}%` }}
            ></div>
            <div className="absolute -right-1 w-0.5 h-1 bg-white/70 rounded-r-xs"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
