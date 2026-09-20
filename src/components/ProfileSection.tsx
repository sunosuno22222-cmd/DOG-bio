import React from 'react';
import { User } from 'lucide-react';

interface ProfileSectionProps {
  username?: string;
  avatarUrl?: string;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  username = 'dog._xml',
  avatarUrl = 'https://raw.githubusercontent.com/b9791076-design/ICONS/main/90d59cc1dbdf4afacad1a14104a3262e.jpg',
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-2 select-none z-10">
      {/* Profile Circle */}
      <div className="relative group">
        <div className="w-28 h-28 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl transition-all duration-300 hover:border-white/70 overflow-hidden">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={username}
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-12 h-12 text-white/30 stroke-[1.5]" />
          )}
        </div>
      </div>

      {/* Username underneath */}
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-xl font-bold text-white tracking-wider font-mono bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70">
          {username}
        </h2>
      </div>
    </div>
  );
};
