import React, { useRef, useState } from 'react';

interface ProgressBarProps {
  currentTimeSeconds: number;
  durationSeconds: number;
  onSeek?: (seconds: number) => void;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentTimeSeconds,
  durationSeconds,
  onSeek,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const remainingSeconds = Math.max(0, durationSeconds - currentTimeSeconds);
  const progressPercent = durationSeconds > 0 ? (currentTimeSeconds / durationSeconds) * 100 : 0;

  const handleBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !onSeek) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    onSeek(percentage * durationSeconds);
  };

  return (
    <div id="spotify-progress-bar-container" className="w-full px-6 pt-2 pb-1 z-20">
      {/* Interactive Bar */}
      <div
        ref={progressBarRef}
        onClick={handleBarClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative w-full h-3 flex items-center cursor-pointer group py-1"
      >
        {/* Track Background Line */}
        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
          {/* Active Filled Progress Line */}
          <div
            className={`h-full rounded-full transition-colors ${
              isHovering ? 'bg-[#1ed760]' : 'bg-white'
            }`}
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Thumb Dot indicator */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md transform -translate-x-1/2 transition-opacity duration-150 ${
            isHovering ? 'opacity-100 scale-110' : 'opacity-0 group-hover:opacity-100'
          }`}
          style={{ left: `${progressPercent}%` }}
        ></div>
      </div>

      {/* Time labels below bar */}
      <div className="flex items-center justify-between text-[11px] font-normal text-white/60 tracking-tight font-sans mt-0.5">
        <span>{formatTime(currentTimeSeconds)}</span>
        <span>{formatTime(remainingSeconds)}</span>
      </div>
    </div>
  );
};
