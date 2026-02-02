import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/20 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-cyan-400/50 relative overflow-hidden">
            <span className="relative z-10">B</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white text-glow">BUILD ME</span>
        </div>
        
        <div className="hidden md:flex gap-12">
          <a href="#portfolio" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium hover:text-glow">Portfolio</a>
          <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium hover:text-glow">Services</a>
          <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium hover:text-glow">About</a>
          <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium hover:text-glow">Contact</a>
        </div>
        
        <button className="glass-card px-6 py-2 text-white font-semibold hover:neon-glow transition-all duration-300 shadow-lg relative">
          <span className="relative z-10">Get Started</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
