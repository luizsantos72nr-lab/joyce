import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Lightbox } from './Lightbox';
import { ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
            Resultados Reais
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja a transformação que realizamos no sorriso e na autoestima dos nossos pacientes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx}
              className="relative group aspect-square cursor-pointer overflow-hidden rounded-xl shadow-md bg-white"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`Resultado ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="text-white w-8 h-8 drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
           <p className="text-xs text-gray-500 italic">
            * As imagens são de pacientes reais. Os resultados podem variar de pessoa para pessoa e dependem das condições clínicas individuais.
           </p>
        </div>
      </div>

      <Lightbox 
        src={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </section>
  );
};