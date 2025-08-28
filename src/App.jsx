import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(255,0,0,0.25),transparent_60%)]" />
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
