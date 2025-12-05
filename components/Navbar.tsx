import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-corporate-900/90 backdrop-blur-md border-b border-corporate-border py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-corporate-accent rounded-sm opacity-90"></div>
          <span className="font-display font-semibold text-xl tracking-widest text-white">GRANJEROS</span>
        </div>
        
        <div className="hidden md:flex gap-8 items-center">
          <a href="#vision" className="text-sm font-sans text-corporate-muted hover:text-white transition-colors tracking-wide uppercase">Estrategia</a>
          <a href="#structure" className="text-sm font-sans text-corporate-muted hover:text-white transition-colors tracking-wide uppercase">Estructura</a>
          <a href="#access" className="px-6 py-2 border border-corporate-accent text-corporate-accent hover:bg-corporate-accent hover:text-black transition-all duration-300 font-sans text-xs tracking-widest uppercase font-semibold">
            Portal Inversores
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;