import React from 'react';

interface PhoneContainerProps {
  children: React.ReactNode;
  bgImageUrl: string;
}

export const PhoneContainer: React.FC<PhoneContainerProps> = ({
  children,
  bgImageUrl,
}) => {
  return (
    <div className="relative w-full min-h-screen bg-[#121212] overflow-x-hidden flex flex-col items-center justify-center">
      {/* Dynamic Blurred Glassmorphism Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={bgImageUrl}
          alt="Fundo Desfocado"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter blur-3xl opacity-40 scale-125 transform brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/95"></div>
      </div>

      {/* Main App Container */}
      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col justify-between min-h-screen py-2 px-1">
        {children}
      </div>
    </div>
  );
};

