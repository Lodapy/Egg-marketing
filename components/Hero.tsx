import React from 'react';
import { Icons } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-corporate-900">
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-corporate-accent/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-amber-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-block py-1 px-3 border border-corporate-border rounded-full bg-corporate-800/50 backdrop-blur text-corporate-accent text-xs font-sans tracking-[0.2em] mb-8 uppercase">
            Plan de Negocio 2025 • Confidencial
          </span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-white mb-8 tracking-tight">
            Huevos Granjeros <br />
            <span className="italic font-light text-corporate-muted">Strategic Roadmap</span>
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-corporate-muted max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            Estructuración integral del proyecto agroindustrial. Desde la gestión legal y permisos hasta la comercialización masiva y eficiencia operativa.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="#access" className="group relative px-8 py-4 bg-white text-black font-sans text-xs font-bold tracking-widest uppercase hover:bg-corporate-accent transition-colors duration-300">
              Ver Plan Maestro
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black group-hover:border-black transition-all"></span>
            </a>
            <a href="#structure" className="group flex items-center gap-2 text-corporate-muted hover:text-white transition-colors font-sans text-xs tracking-widest uppercase">
              <span className="border-b border-transparent group-hover:border-white transition-all pb-1">Explorar Pilares</span>
              <Icons.ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-50">
        <span className="text-[10px] uppercase tracking-widest text-corporate-muted">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-corporate-muted to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;