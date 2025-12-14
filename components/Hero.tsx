import React from 'react';
import { Button } from './Button';
import { EXPERT_PHOTO_HERO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-12 lg:pt-12 bg-gradient-to-b from-stone-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
            <div className="inline-block px-4 py-1.5 mb-4 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wider uppercase">
              Cirurgiã-Dentista em Claudio-MG
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
              Eu sou a <span className="text-primary block md:inline">Dra. Joyce Guimarães</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
              Especialista em transformar sorrisos com segurança. Habilitada em sedação consciente para oferecer o tratamento tranquilo que você merece.
            </p>
            
            <Button fullWidth className="md:w-auto" />
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
             {/* Decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative mx-auto w-64 h-80 md:w-80 md:h-[30rem] lg:w-96 lg:h-[32rem]">
                <img 
                src={EXPERT_PHOTO_HERO} 
                alt="Dra. Joyce Guimarães" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};