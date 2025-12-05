import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-corporate-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
        <div className="text-xs font-sans text-corporate-muted tracking-widest uppercase mb-4 md:mb-0">
          © 2025 Luminar Capital Partners
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-xs font-sans text-corporate-muted hover:text-white transition-colors">Aviso Legal</a>
          <a href="#" className="text-xs font-sans text-corporate-muted hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="text-xs font-sans text-corporate-muted hover:text-white transition-colors">Contacto IR</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;