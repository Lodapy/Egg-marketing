import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import Rigor from './components/Rigor';
import Formats from './components/Formats';
import Access from './components/Access';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-corporate-900 text-corporate-text selection:bg-corporate-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Methodology />
        <Rigor />
        <Formats />
        <Access />
      </main>
      <Footer />
    </div>
  );
}

export default App;