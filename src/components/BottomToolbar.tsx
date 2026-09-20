import React from 'react';
import { MonitorSpeaker, Share2, ListMusic } from 'lucide-react';

interface BottomToolbarProps {
  onOpenDevices?: () => void;
  onOpenShare?: () => void;
  onOpenQueue?: () => void;
  activeDeviceName?: string;
}

export const BottomToolbar: React.FC<BottomToolbarProps> = ({
  onOpenDevices,
  onOpenShare,
  onOpenQueue,
  activeDeviceName = 'Smartphone',
}) => {
  return (
    <div id="spotify-bottom-toolbar" className="w-full px-6 py-2 z-20 flex items-center justify-between text-white/70">
      {/* Device Picker Icon */}
      <button
        id="btn-bottom-devices"
        onClick={onOpenDevices}
        className="flex items-center gap-1.5 hover:text-white transition-colors active:scale-95 cursor-pointer group"
        title={`Conectado a: ${activeDeviceName}`}
      >
        <MonitorSpeaker className="w-5 h-5 text-white/80 group-hover:text-white" />
        <span className="text-[10px] font-medium text-[#1ed760] hidden xs:inline-block">
          {activeDeviceName}
        </span>
      </button>

      {/* Share Icon */}
      <button
        id="btn-bottom-share"
        onClick={onOpenShare}
        className="hover:text-white transition-colors active:scale-95 cursor-pointer"
        title="Compartilhar música"
      >
        <Share2 className="w-5 h-5" />
      </button>

      {/* Queue Icon */}
      <button
        id="btn-bottom-queue"
        onClick={onOpenQueue}
        className="hover:text-white transition-colors active:scale-95 cursor-pointer"
        title="Fila de reprodução"
      >
        <ListMusic className="w-5 h-5" />
      </button>
    </div>
  );
};
