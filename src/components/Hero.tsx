import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated gradient orbs with glassmorphism */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-l from-cyan-500 to-transparent rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-pink-500 to-transparent rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <div className="glass-card p-12 md:p-16 mb-8 border-2">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight">
            Award-Winning <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-glow">Video Editing</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Elite post-production for commercials, music videos, and feature films. Trusted by Fortune 500 brands, streaming platforms, and award-winning directors worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="glass-card px-8 py-3 text-white font-bold hover:neon-glow transition-all duration-300 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 relative overflow-hidden group">
              <span className="relative z-10">View Portfolio</span>
            </button>
            <button className="glass-card px-8 py-3 text-white font-bold hover:neon-glow transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Schedule Consultation</span>
            </button>
          </div>
        </div>
        
        {/* Featured video card preview with enhanced glassmorphism */}
        <div className="glass-card overflow-hidden group cursor-pointer h-96 border-2 hover:border-cyan-400/50">
          <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
            {/* Placeholder gradient video thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="absolute inset-0 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-500"></div>
            
            {/* Play button with glass effect */}
            <div className="relative z-10 flex items-center justify-center w-24 h-24 glass-card group-hover:shadow-neon transition-all duration-300 group-hover:scale-110 border-2 border-white/20">
              <svg className="w-10 h-10 text-cyan-400 ml-1 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            
            <p className="absolute bottom-4 left-4 text-sm text-slate-300 z-10 glass-card px-4 py-2 rounded-lg">Featured Work - Click to view</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
