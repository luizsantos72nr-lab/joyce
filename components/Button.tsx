import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

interface ButtonProps {
  text?: string;
  subtext?: string;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  text = "Agendar primeira consulta gratuita", 
  subtext = "Resposta rápida • Sem compromisso",
  className = "",
  fullWidth = false
}) => {
  return (
    <div className={`flex flex-col items-center ${fullWidth ? 'w-full' : ''}`}>
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          group relative flex items-center justify-center gap-3
          bg-primary hover:bg-[#b09239] text-white
          py-4 px-8 rounded-full font-bold text-lg shadow-lg hover:shadow-xl
          transition-all duration-300 transform hover:-translate-y-1
          ${fullWidth ? 'w-full max-w-md' : ''}
          ${className}
        `}
      >
        <MessageCircle className="w-6 h-6 animate-pulse" />
        <span>{text}</span>
      </a>
      {subtext && (
        <span className="text-xs text-gray-500 mt-2 font-medium tracking-wide uppercase">
          {subtext}
        </span>
      )}
    </div>
  );
};