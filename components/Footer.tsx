import React from 'react';
import { Instagram, MapPin } from 'lucide-react';
import { ADDRESS, CRO, INSTAGRAM_LINK } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-4xl flex flex-col items-center text-center">
        <h3 className="font-serif text-2xl mb-2">Dra. Joyce Guimarães</h3>
        <p className="text-gray-400 mb-6">{CRO}</p>

        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-5 h-5 flex-shrink-0 text-primary" />
            <span>{ADDRESS}</span>
          </div>
          
          <a 
            href={INSTAGRAM_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>@dra.joyceeguimaraes</span>
          </a>
        </div>

        <div className="w-full h-px bg-gray-800 mb-6"></div>

        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Dra. Joyce Guimarães. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};