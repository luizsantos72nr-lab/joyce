import React from 'react';
import { Check } from 'lucide-react';
import { EXPERT_PHOTO_ABOUT } from '../constants';

export const About: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          
          <div className="w-full md:w-1/2 relative">
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-dots-pattern opacity-20"></div>
             <img 
              src={EXPERT_PHOTO_ABOUT} 
              alt="Dra. Joyce no consultório" 
              className="w-full rounded-2xl shadow-xl aspect-[4/5] object-cover"
             />
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">
              Não sou apenas uma dentista, sou sua parceira.
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Olá! Sou a Dra. Joyce Guimarães. Meu objetivo é fazer com que você se sinta em casa no meu consultório. Sei que muitas pessoas têm medo de dentista, e é por isso que me especializei em tratamentos humanizados.
            </p>
            
            <ul className="space-y-3 mt-4">
              {[
                "Habilitada em Sedação com Óxido Nitroso",
                "Especializanda em Ortodontia",
                "Atendimento sem pressa",
                "Foco no seu bem-estar"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};