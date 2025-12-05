import React, { useState } from 'react';
import { Icons } from './Icons';
import { generateExecutiveSummary } from '../services/geminiService';

const Access: React.FC = () => {
  const [accessCode, setAccessCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode.length > 3) {
      setIsAuthenticated(true);
      setError(null);
    } else {
      setError("Credenciales inválidas.");
    }
  };

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    setSummary(null);
    try {
      const apiKey = process.env.API_KEY; 
      
      if (!apiKey) {
        // Fallback for UI demo matching Huevos Granjeros context
        setTimeout(() => {
           setSummary(`
            <ul class="list-disc pl-5 space-y-2">
                <li><strong class="text-corporate-text">Infraestructura Crítica:</strong> Inversión prioritaria en automatización de galpones para asegurar control climático y reducir mortalidad.</li>
                <li><strong class="text-corporate-text">Estrategia Comercial:</strong> Mix de ventas 60% mayorista (volumen) y 40% marca propia (margen) para equilibrar flujo de caja.</li>
                <li><strong class="text-corporate-text">Indicadores Clave:</strong> TIR proyectada del 24% con recuperación de inversión en 18 meses. Gestión legal 100% compliant.</li>
            </ul>
           `);
           setIsLoading(false);
        }, 2000);
        return;
      }

      const text = await generateExecutiveSummary();
      setSummary(text);
    } catch (err) {
      console.error(err);
      setError("Error conectando con el sistema de análisis.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="access" className="py-24 bg-black border-t border-corporate-border">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {!isAuthenticated ? (
          <div className="bg-corporate-900 border border-corporate-border p-12 max-w-lg mx-auto relative overflow-hidden">
             {/* Decorative lock icon background */}
             <Icons.Lock className="absolute -right-6 -bottom-6 w-32 h-32 text-corporate-muted opacity-5" />
             
            <h2 className="text-2xl font-serif text-white mb-2">Acceso a Inversores</h2>
            <p className="text-corporate-muted text-sm mb-8 font-light">Ingrese su código de socio para visualizar el Plan de Negocio.</p>
            
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input 
                type="password" 
                placeholder="CÓDIGO DE ACCESO" 
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                className="bg-black border border-corporate-border text-center text-white py-3 px-4 focus:outline-none focus:border-corporate-accent transition-colors font-sans text-sm tracking-widest placeholder-corporate-muted/50"
              />
              <button 
                type="submit"
                className="bg-white text-black font-bold uppercase text-xs tracking-widest py-3 hover:bg-corporate-accent transition-colors"
              >
                Ingresar
              </button>
            </form>
            {error && <p className="text-red-900 text-xs mt-4">{error}</p>}
          </div>
        ) : (
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-serif text-white mb-2">Bienvenido, Socio.</h2>
            <p className="text-corporate-muted mb-12 font-light">Plan Estratégico "Huevos Granjeros" desbloqueado.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
               {/* Download Section */}
              <div className="border border-corporate-border p-8 text-left bg-corporate-900">
                <h3 className="text-white font-serif text-xl mb-6">Documentación</h3>
                <ul className="space-y-4">
                  <li>
                    <button className="w-full flex justify-between items-center group text-corporate-muted hover:text-white transition-colors">
                      <span className="flex items-center gap-3">
                        <Icons.File className="w-4 h-4" />
                        <span className="text-sm font-sans">Plan de Negocio Completo (PDF)</span>
                      </span>
                      <Icons.Download className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                  <li>
                    <button className="w-full flex justify-between items-center group text-corporate-muted hover:text-white transition-colors">
                      <span className="flex items-center gap-3">
                        <Icons.Chart className="w-4 h-4" />
                        <span className="text-sm font-sans">Modelo Financiero (XLSX)</span>
                      </span>
                      <Icons.Download className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                </ul>
              </div>

              {/* AI Insight Section */}
              <div className="border border-corporate-accent/30 p-8 text-left bg-corporate-900 relative">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-corporate-accent to-transparent"></div>
                 <h3 className="text-white font-serif text-xl mb-2 flex items-center gap-2">
                    <Icons.Cpu className="w-5 h-5 text-corporate-accent" />
                    AI Strategic Brief
                 </h3>
                 <p className="text-xs text-corporate-muted mb-6">
                    Generar highlights operativos con Gemini 2.5 Flash.
                 </p>
                 
                 {!summary && !isLoading && (
                    <button 
                        onClick={handleGenerateSummary}
                        className="w-full py-2 border border-corporate-accent text-corporate-accent text-xs font-bold uppercase tracking-widest hover:bg-corporate-accent hover:text-black transition-all"
                    >
                        Analizar Estrategia
                    </button>
                 )}

                 {isLoading && (
                    <div className="flex flex-col items-center justify-center py-4 space-y-3">
                        <div className="w-6 h-6 border-2 border-corporate-accent border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-xs text-corporate-muted animate-pulse">Auditando viabilidad comercial...</span>
                    </div>
                 )}

                 {summary && (
                    <div className="prose prose-invert prose-sm">
                        <div className="text-sm font-light text-corporate-muted" dangerouslySetInnerHTML={{ __html: summary }} />
                    </div>
                 )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Access;