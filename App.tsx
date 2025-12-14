import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';
import { Button } from './components/Button';

// Global styles for sticky CTA
const StickyCTA: React.FC = () => (
  <div className="fixed bottom-4 left-0 right-0 z-40 px-4 md:hidden animate-fade-in-up">
    <Button fullWidth text="Agendar Consulta Grátis" subtext="" className="shadow-2xl border-2 border-white" />
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-20 md:pb-0">
      <Hero />
      <About />
      <Gallery />
      
      {/* Intermediate CTA */}
      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-serif mb-6">
            Dê o primeiro passo para o sorriso que você merece
          </h3>
          <div className="flex justify-center">
            <Button className="md:w-auto" />
          </div>
        </div>
      </section>

      <Features />
      <HowItWorks />

      {/* Final CTA Section */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Ainda tem dúvidas?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            A primeira consulta é 100% gratuita e sem compromisso. É a sua chance de conhecer nosso trabalho e entender como podemos te ajudar.
          </p>
          <div className="flex justify-center">
            <Button text="Quero Agendar Agora" />
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;