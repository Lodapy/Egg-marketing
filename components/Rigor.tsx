import React from 'react';
import { Icons } from './Icons';

const Rigor: React.FC = () => {
  return (
    <section id="vision" className="py-24 bg-corporate-900 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-corporate-accent font-sans text-xs font-bold tracking-widest uppercase mb-4 block">
              Garantía de Calidad
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Mitigación de riesgo mediante excelencia operativa.
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Icons.Shield className="w-6 h-6 text-corporate-muted" />
                </div>
                <div>
                  <h4 className="text-white font-sans font-medium mb-2 uppercase tracking-wide text-sm">Cumplimiento Normativo</h4>
                  <p className="text-corporate-muted font-light text-sm leading-relaxed">
                    Gestión legal integral y permisos sanitarios al día. Nuestra estructura garantiza la continuidad operativa frente a auditorías regulatorias.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Icons.Chart className="w-6 h-6 text-corporate-muted" />
                </div>
                <div>
                  <h4 className="text-white font-sans font-medium mb-2 uppercase tracking-wide text-sm">Eficiencia Financiera</h4>
                  <p className="text-corporate-muted font-light text-sm leading-relaxed">
                    Control estricto de costos de producción y alimento. Proyección financiera basada en datos reales del mercado avícola 2024-2025.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-full min-h-[400px] border border-corporate-border bg-corporate-800/30 p-8 flex items-center justify-center overflow-hidden">
             {/* Abstract Visualization of Logic/Data */}
             <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-px opacity-10">
                {[...Array(36)].map((_, i) => (
                    <div key={i} className="bg-corporate-muted/20 w-full h-full"></div>
                ))}
             </div>
             <div className="relative z-10 text-center">
                <div className="inline-flex flex-col items-center justify-center p-8 border border-corporate-accent/30 bg-corporate-900/80 backdrop-blur-sm">
                    <span className="text-4xl font-serif text-corporate-accent mb-2">24%</span>
                    <span className="text-xs uppercase tracking-widest text-corporate-muted">TIR Proyectada</span>
                </div>
                <div className="mt-8 flex justify-center gap-4">
                     <span className="h-2 w-2 bg-corporate-accent rounded-full animate-pulse"></span>
                     <span className="text-xs text-corporate-muted uppercase tracking-widest">Market Analysis Active</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rigor;