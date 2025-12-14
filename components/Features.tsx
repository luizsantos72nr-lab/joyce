import React from 'react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-serif text-3xl text-center text-gray-900 mb-10">
          Por que agendar comigo?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-gray-50/50">
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};