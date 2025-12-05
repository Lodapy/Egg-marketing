import React from 'react';
import { Icons } from './Icons';

const Formats: React.FC = () => {
  return (
    <section className="py-24 bg-corporate-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-corporate-muted font-sans text-xs font-bold tracking-widest uppercase mb-4 block">
            Formatos de Entrega
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-white">Consumo de Información Adaptativo</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Narrative Doc */}
          <div className="group bg-corporate-800 border border-corporate-border p-8 hover:border-corporate-accent/50 transition-colors duration-500">
            <div className="h-48 mb-6 bg-corporate-900 flex items-center justify-center border border-corporate-border group-hover:bg-corporate-900/50">
                <Icons.File className="w-12 h-12 text-corporate-muted group-hover:text-corporate-accent transition-colors duration-500" />
            </div>
            <h3 className="text-lg font-serif text-white mb-2">Investment Memo</h3>
            <p className="text-sm text-corporate-muted font-light leading-relaxed mb-6">
              Documento narrativo extenso. La fuente de la verdad para decisiones profundas. Sin simplificaciones.
            </p>
            <div className="flex items-center gap-2 text-xs text-corporate-accent uppercase tracking-widest font-bold">
                <span>Lectura: 45 min</span>
            </div>
          </div>

          {/* PDF Editorial */}
          <div className="group bg-corporate-800 border border-corporate-border p-8 hover:border-corporate-accent/50 transition-colors duration-500 relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-corporate-accent text-corporate-900 text-[10px] font-bold px-2 py-1 uppercase tracking-widest">Recomendado</div>
            <div className="h-48 mb-6 bg-corporate-900 flex items-center justify-center border border-corporate-border group-hover:bg-corporate-900/50">
                 <div className="w-24 h-32 border border-corporate-muted/30 bg-corporate-800 flex flex-col p-2">
                    <div className="w-full h-1/2 border-b border-corporate-muted/20 mb-2"></div>
                    <div className="space-y-1">
                        <div className="w-full h-1 bg-corporate-muted/20"></div>
                        <div className="w-3/4 h-1 bg-corporate-muted/20"></div>
                        <div className="w-full h-1 bg-corporate-muted/20"></div>
                    </div>
                 </div>
            </div>
            <h3 className="text-lg font-serif text-white mb-2">Executive PDF</h3>
            <p className="text-sm text-corporate-muted font-light leading-relaxed mb-6">
              Diseño tipo revista financiera. Gráficos de alta fidelidad y jerarquía visual optimizada.
            </p>
             <div className="flex items-center gap-2 text-xs text-corporate-accent uppercase tracking-widest font-bold">
                <span>Lectura: 15 min</span>
            </div>
          </div>

          {/* Audio Overview */}
          <div className="group bg-corporate-800 border border-corporate-border p-8 hover:border-corporate-accent/50 transition-colors duration-500">
            <div className="h-48 mb-6 bg-corporate-900 flex items-center justify-center border border-corporate-border group-hover:bg-corporate-900/50 relative">
                {/* Visualizer bars simulation */}
                <div className="flex gap-1 items-end h-16">
                    <div className="w-1 bg-corporate-muted/40 h-8 group-hover:h-12 transition-all duration-300"></div>
                    <div className="w-1 bg-corporate-muted/40 h-12 group-hover:h-6 transition-all duration-500"></div>
                    <div className="w-1 bg-corporate-accent h-16 animate-pulse"></div>
                    <div className="w-1 bg-corporate-muted/40 h-10 group-hover:h-14 transition-all duration-300"></div>
                    <div className="w-1 bg-corporate-muted/40 h-6 group-hover:h-8 transition-all duration-500"></div>
                </div>
            </div>
            <h3 className="text-lg font-serif text-white mb-2">Audio Overview</h3>
            <p className="text-sm text-corporate-muted font-light leading-relaxed mb-6">
              Podcast generado por IA. Discusión estratégica entre dos expertos sintéticos sobre los puntos críticos.
            </p>
             <div className="flex items-center gap-2 text-xs text-corporate-accent uppercase tracking-widest font-bold">
                <span>Escucha: 12 min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formats;