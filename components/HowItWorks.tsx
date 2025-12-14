import React from 'react';
import { STEPS } from '../constants';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-sm">Passo a Passo</span>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mt-2">
            Como funciona a Primeira Consulta?
          </h2>
          <p className="text-gray-600 mt-2">É simples, rápido e sem compromisso.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

          {STEPS.map((step) => (
            <div key={step.step} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-primary/20 flex items-center justify-center text-3xl font-serif font-bold text-primary shadow-lg mb-6">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};