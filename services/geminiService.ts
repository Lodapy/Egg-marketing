import { GoogleGenAI } from "@google/genai";

// Mock content representing the "Huevos Granjeros Plan" logic
const MOCK_MEMO_CONTENT = `
PLAN DE NEGOCIO: HUEVOS GRANJEROS - RESUMEN EJECUTIVO 2025

1. GESTIÓN LEGAL Y PERMISOS
Estado: En proceso. Se ha completado el 80% de la tramitación de permisos de uso de suelo. La habilitación sanitaria está pre-aprobada bajo normativa vigente. Estructura legal constituida como S.A. para facilitar rondas de inversión.

2. INFRAESTRUCTURA Y EQUIPAMIENTO
Inversión Capex centrada en automatización. Galpones con control ambiental (temperatura/humedad) para maximizar la tasa de postura. Capacidad instalada inicial para 50,000 aves, escalable a 200,000 en fase 3.

3. OPERACIONES Y PRODUCCIÓN
Ciclo productivo optimizado de 80 semanas. Alianzas estratégicas con proveedores de alimento balanceado para fijar precios y reducir volatilidad de costos operativos (OpEx). Bioseguridad nivel 3 implementada.

4. COMERCIALIZACIÓN Y MARKETING
Estrategia dual: 
- Canal Mayorista (60%): Contratos futuros con cadenas de supermercados regionales.
- Canal Directo (40%): Marca premium "Granjeros" con margen superior, venta online y tiendas gourmet.

5. FINANZAS Y ADMINISTRACIÓN
TIR proyectada del 24% con un periodo de recuperación de la inversión (Payback) de 18 meses. Flujo de caja positivo estimado a partir del mes 9.
`;

export const generateExecutiveSummary = async (): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `
        Actúa como un Consultor de Agronegocios Senior.
        Analiza el siguiente texto (Plan de Negocio Avícola) y genera un "Investment Highlight" conciso para accionistas.
        
        TEXTO DEL PLAN:
        ${MOCK_MEMO_CONTENT}
        
        REQUISITOS DE SALIDA:
        - Tono: Sofisticado, enfocado en rentabilidad y seguridad operativa.
        - Formato: 3 puntos clave (bullet points) usando HTML tags simples (<ul>, <li>).
        - Idioma: Español.
        - No uses markdown, devuelve string HTML limpio.
        - Enfócate en: Escalabilidad, Control de Riesgos y Margen Comercial.
      `,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    return response.text || "<p>No se pudo generar el resumen estratégico.</p>";
  } catch (error) {
    console.error("Error generating summary:", error);
    throw new Error("Falló la conexión con el motor de análisis estratégico.");
  }
};