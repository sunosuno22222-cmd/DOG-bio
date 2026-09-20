import React from 'react';

interface AlbumCoverProps {
  coverUrl: string;
}

export const AlbumCover: React.FC<AlbumCoverProps> = ({ coverUrl }) => {
  return (
    <div id="album-cover-wrapper" className="relative w-full max-w-[320px] aspect-square mx-auto my-3 px-2 z-10 flex items-center justify-center">
      {/* Album Cover Frame */}
      <div className="relative w-full h-full rounded-md overflow-hidden bg-black shadow-2xl shadow-black/95 ring-1 ring-white/10 flex items-center justify-center">
        <img
          id="album-cover-image"
          src={coverUrl}
          alt="Capa do Álbum"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center select-none"
        />
      </div>
    </div>
  );
};
