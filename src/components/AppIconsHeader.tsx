import React from 'react';

export const AppIconsHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-5 w-full select-none mt-2">
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/5591984482209"
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
        className="flex flex-col items-center gap-1 group cursor-pointer transition-transform hover:scale-110 active:scale-95 outline-none"
      >
        <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366]/30 transition-colors shadow-lg">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.486 1.332 5.003L2 22l5.143-1.343a9.96 9.96 0 004.869 1.258h.004c5.506 0 9.99-4.478 9.99-9.985 0-2.667-1.039-5.176-2.927-7.062A9.92 9.92 0 0012.012 2zm5.727 14.126c-.244.688-1.42 1.312-1.954 1.393-.504.076-1.161.109-1.872-.118-.432-.138-.987-.322-1.705-.632-3.003-1.298-4.962-4.329-5.113-4.528-.15-.2-1.23-1.636-1.23-3.12 0-1.484.774-2.213 1.05-2.511.275-.298.599-.373.798-.373.199 0 .399.002.573.01.185.008.434-.07.68.52.247.595.843 2.057.917 2.207.074.15.123.324.024.521-.099.198-.148.322-.297.496-.148.174-.312.389-.446.523-.148.148-.303.31-.131.606.173.297.77 1.272 1.651 2.057 1.133 1.01 2.088 1.323 2.385 1.472.298.148.472.124.646-.075.174-.198.745-.867.943-1.165.198-.298.397-.248.67-.149.273.099 1.733.818 2.031.967.298.149.496.223.57.347.075.124.075.719-.169 1.407z" />
          </svg>
        </div>
        <span className="text-[10px] font-medium text-white/70 group-hover:text-white tracking-wide transition-colors">WhatsApp</span>
      </a>

      {/* Discord Icon */}
      <a
        href="https://discord.com/users/1318305172929384490"
        target="_blank"
        rel="noopener noreferrer"
        title="Discord"
        className="flex flex-col items-center gap-1 group cursor-pointer transition-transform hover:scale-110 active:scale-95 outline-none"
      >
        <div className="w-10 h-10 rounded-xl bg-[#5865F2]/20 flex items-center justify-center text-[#5865F2] group-hover:bg-[#5865F2]/30 transition-colors shadow-lg">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
        </div>
        <span className="text-[10px] font-medium text-white/70 group-hover:text-white tracking-wide transition-colors">Discord</span>
      </a>

      {/* Roblox Icon */}
      <a
        href="https://www.roblox.com/users/profile?username=3spocabucha"
        target="_blank"
        rel="noopener noreferrer"
        title="Roblox"
        className="flex flex-col items-center gap-1 group cursor-pointer transition-transform hover:scale-110 active:scale-95 outline-none"
      >
        <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-500 group-hover:bg-red-500/30 transition-colors shadow-lg">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.164 0L0 18.836L18.836 24L24 5.164L5.164 0ZM14.722 14.722L9.278 13.264L10.736 7.82L16.18 9.278L14.722 14.722Z"
            />
          </svg>
        </div>
        <span className="text-[10px] font-medium text-white/70 group-hover:text-white tracking-wide transition-colors">Roblox</span>
      </a>

      {/* Playlist Icon */}
      <a
        href="https://open.spotify.com/playlist/6HGfx8w8zTxPWlmfU0mQdz?si=czBM44n8T7KqJ6PmXB-2lw&utm_source=copy-link&pi=Q8oZx0udSKGfH"
        target="_blank"
        rel="noopener noreferrer"
        title="playlist"
        className="flex flex-col items-center gap-1 group cursor-pointer transition-transform hover:scale-110 active:scale-95 outline-none"
      >
        <div className="w-10 h-10 rounded-xl bg-[#1DB954]/20 flex items-center justify-center text-[#1DB954] group-hover:bg-[#1DB954]/30 transition-colors shadow-lg">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.02 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.62.54.3.72 1.02.42 1.56-.3.42-1.02.6-1.56.3z" />
          </svg>
        </div>
        <span className="text-[10px] font-medium text-white/70 group-hover:text-white tracking-wide transition-colors">playlist</span>
      </a>
    </div>
  );
};
