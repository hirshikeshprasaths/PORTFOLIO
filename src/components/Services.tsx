import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "✂️",
      title: "Premium Video Editing",
      description: "Professional multi-cam editing on Premiere Pro & DaVinci Resolve. Broadcast-quality output for commercials, films, and corporate content."
    },
    {
      icon: "🎨",
      title: "Advanced Color Grading",
      description: "Cinema-grade color correction using DaVinci Resolve Studio. HDR mastering, LUT creation, and color-managed workflows for all formats."
    },
    {
      icon: "✨",
      title: "VFX & Compositing",
      description: "Professional visual effects using After Effects, Nuke, and Cinema 4D. Green screen keying, motion tracking, 3D integration, and particle effects."
    },
    {
      icon: "🔊",
      title: "Audio Post-Production",
      description: "Dolby Atmos mixing, ADR, foley recording, and sound design. Pro Tools certified for feature film and commercial audio delivery."
    },
    {
      icon: "🎬",
      title: "Motion Design",
      description: "2D/3D motion graphics, animated titles, and broadcast packages. Cinema 4D, After Effects, and Blender for TV, film, and digital media."
    },
    {
      icon: "📹",
      title: "8K Post-Production",
      description: "Full 8K RED, ARRI, and Sony RAW workflow. HDR10+ and Dolby Vision mastering. DCP creation for theatrical distribution."
    },
  ];

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Comprehensive video production and post-production solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:shadow-neon transition-all duration-500 group cursor-pointer"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-300 leading-relaxed">{service.description}</p>
              
              {/* Hover line */}
              <div className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-4 w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 glass-card p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready for Award-Winning Post-Production?</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Join Netflix, HBO, and Fortune 500 brands who trust Build Me for their most important projects. Professional service with feature-film quality.
          </p>
          <button className="glass-card px-8 py-3 text-white font-bold hover:neon-glow transition-all duration-300 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/40 hover:to-purple-500/40">
            Request Project Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
