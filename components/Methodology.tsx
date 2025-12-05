import React from 'react';
import { Icons } from './Icons';

const StepCard: React.FC<{ 
  number: string; 
  title: string; 
  desc: string; 
  icon: React.ReactNode; 
  isLast?: boolean 
}> = ({ number, title, desc, icon, isLast }) => (
  <div className="relative flex flex-col items-start p-6 group">
    {!isLast && (
      <div className="hidden lg:block absolute top-12 left-full w-full h-[1px] bg-gradient-to-r from-corporate-border to-transparent -ml-6 z-0" />
    )}
    <div className="z-10 bg-corporate-900 border border-corporate-border p-4 mb-6 text-corporate-accent group-hover:border-corporate-accent group-hover:bg-corporate-accent/5 transition-all duration-500 rounded-sm">
      {icon}
    </div>
    <span className="text-corporate-muted font-display text-4xl opacity-20 absolute top-4 right-6 pointer-events-none group-hover:opacity-40 transition-opacity">
      {number}
    </span>
    <h3 className="text-xl font-serif text-white mb-3">{title}</h3>
    <p className="text-sm font-sans text-corporate-muted leading-relaxed font-light">
      {desc}
    </p>
  </div>
);

const Methodology: React.FC = () => {
  return (
    <section id="structure" className="py-24 bg-corporate-800 border-t border-corporate-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-corporate-border pb-8">
          <div>
            <span className="text-corporate-accent font-sans text-xs font-bold tracking-widest uppercase mb-2 block">Estructura del Proyecto</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white">Pilares de Ejecución</h2>
          </div>
          <p className="text-corporate-muted font-sans font-light max-w-md text-sm mt-4 md:mt-0">
            Desglose táctico de las 5 áreas críticas definidas en el plan maestro para asegurar viabilidad y retorno.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StepCard 
            number="01"
            title="Gestión Legal y Permisos"
            desc="Marco regulatorio, permisos sanitarios (SENASA/Agencia Local), zonificación y estructura societaria del negocio."
            icon={<Icons.Shield className="w-6 h-6" />}
          />
          <StepCard 
            number="02"
            title="Infraestructura"
            desc="Diseño de galpones automatizados, sistemas de climatización, comederos y tecnología de recolección."
            icon={<Icons.Layers className="w-6 h-6" />}
          />
          <StepCard 
            number="03"
            title="Operaciones y Producción"
            desc="Ciclos de postura, protocolos de bioseguridad, gestión de insumos y optimización de la cadena de suministro."
            icon={<Icons.Cpu className="w-6 h-6" />}
          />
          <StepCard 
            number="04"
            title="Comercialización"
            desc="Estrategia de marca, canales de distribución (B2B/B2C), fijación de precios y logística de entrega."
            icon={<Icons.Chart className="w-6 h-6" />}
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Methodology;