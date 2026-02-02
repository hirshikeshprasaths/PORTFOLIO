import React from 'react';

const About: React.FC = () => {
  const stats = [
    { number: "2,500+", label: "Projects Delivered" },
    { number: "32", label: "Industry Awards" },
    { number: "500+", label: "Global Clients" },
    { number: "14", label: "Years Excellence" },
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Build Me</span>
            </h2>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Build Me is an Emmy-nominated post-production studio specializing in high-end video editing, color grading, and visual effects. Since 2012, we've partnered with Fortune 500 brands, streaming giants, and award-winning filmmakers to create content that captivates global audiences.
            </p>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Our team of DaVinci Resolve certified colorists, Avid-certified editors, and VFX specialists deliver broadcast-quality content for theatrical releases, streaming platforms, and premium digital campaigns. With expertise across 8K RAW workflows, HDR mastering, and Dolby Atmos mixing, we bring feature-film quality to every project.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <p className="text-slate-300 text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            <button className="glass-card px-8 py-3 text-white font-bold hover:neon-glow transition-all duration-300">
              Learn More About Us
            </button>
          </div>

          {/* Right side - Visual showcase */}
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="glass-card p-6 hover:shadow-neon transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 glass-card rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-400 font-bold">0{item}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item === 1 ? "Premium Quality" : item === 2 ? "Fast Turnaround" : "Expert Team"}
                    </h3>
                    <p className="text-slate-300">
                      {item === 1 ? "We deliver 4K broadcast-quality content with meticulous attention to detail." : item === 2 ? "Quick turnaround times without compromising on quality or creativity." : "Experienced professionals dedicated to bringing your vision to life."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
