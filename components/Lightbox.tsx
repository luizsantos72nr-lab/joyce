import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  src: string | null;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ src, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!src) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        <X className="w-8 h-8" />
      </button>
      <img 
        src={src} 
        alt="Resultado ampliado" 
        className="max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};