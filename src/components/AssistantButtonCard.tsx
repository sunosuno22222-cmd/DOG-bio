import React from 'react';
import { ChevronRight } from 'lucide-react';

const DOG_AI_URL = "https://aidog-lovat.vercel.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAUcDwNwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp075oVQBuOhdQy01dgUky_CbRBzeh-U8OPNeaJPJUYwxc0nAXyiKeZ2soON__aem_yuekM3ZsfAfF2i4FXS21Sg";

export const AssistantButtonCard: React.FC = () => {
  return (
    <a
      href={DOG_AI_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full max-w-xs mx-auto bg-gradient-to-r from-white/10 via-white/5 to-white/10 hover:from-white/20 hover:via-white/10 hover:to-white/20 border border-white/20 hover:border-white/30 active:scale-[0.98] rounded-2xl px-4 py-2.5 flex items-center justify-between text-left shadow-lg backdrop-blur-xl transition-all duration-200 cursor-pointer group relative overflow-hidden block"
    >
      <div className="flex flex-col min-w-0 pr-3">
        <span className="text-xs font-bold text-white tracking-wider uppercase font-mono">
          Dog AI
        </span>
        <p className="text-[11px] text-white/70 truncate leading-snug font-light mt-0.5">
          Assistente pessoal de conversa, geração de código e dúvidas gerais
        </p>
      </div>

      <ChevronRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all flex-shrink-0" />
    </a>
  );
};
