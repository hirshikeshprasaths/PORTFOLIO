import React, { useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Tech Giants Annual Report",
    category: "Corporate",
    description: "Fortune 500 corporate video featuring cinematic drone shots, motion graphics, and professional color grading. 4K HDR delivery.",
    thumbnail: "corporate"
  },
  {
    id: 2,
    title: "Rising Star - Music Video",
    category: "Music",
    description: "Multi-million view music video with complex VFX, 3D elements, and award-winning cinematography. Featured on MTV and Vevo.",
    thumbnail: "music"
  },
  {
    id: 3,
    title: "Climate Change Documentary",
    category: "Documentary",
    description: "Emmy-nominated 6-part documentary series. Advanced color science, archival restoration, and sound design for Netflix.",
    thumbnail: "documentary"
  },
  {
    id: 4,
    title: "Luxury Brand Campaign",
    category: "Commercial",
    description: "High-end commercial for luxury automotive brand. Shot on RED 8K, featuring advanced VFX and motion control cinematography.",
    thumbnail: "product"
  },
  {
    id: 5,
    title: "Destination Wedding Film",
    category: "Wedding",
    description: "Cinematic wedding film shot across 3 countries. Featuring drone aerials, slow-motion sequences, and emotional storytelling.",
    thumbnail: "wedding"
  },
  {
    id: 6,
    title: "Award-Winning Short Film",
    category: "Short Film",
    description: "Sundance Film Festival official selection. Complete post-production including color grading, VFX, sound design, and DCP mastering.",
    thumbnail: "film"
  },
];

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "Corporate", "Music", "Documentary", "Commercial", "Wedding", "Short Film"];
  
  const filteredItems = selectedCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Explore our collection of award-winning video productions and post-production work
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "glass-card neon-glow bg-cyan-500/20 border-cyan-400/50 text-white"
                  : "glass-card text-slate-300 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-card overflow-hidden group cursor-pointer h-80 transition-all duration-500 hover:shadow-neon"
            >
              <div className="relative w-full h-full bg-gradient-to-br flex items-center justify-center overflow-hidden">
                {/* Gradient backgrounds based on category */}
                <div className={`absolute inset-0 ${
                  item.category === "Corporate" ? "bg-gradient-to-br from-blue-600/40 via-slate-800 to-purple-900/40" :
                  item.category === "Music" ? "bg-gradient-to-br from-pink-600/40 via-slate-800 to-cyan-900/40" :
                  item.category === "Documentary" ? "bg-gradient-to-br from-amber-600/40 via-slate-800 to-green-900/40" :
                  item.category === "Commercial" ? "bg-gradient-to-br from-cyan-600/40 via-slate-800 to-blue-900/40" :
                  item.category === "Wedding" ? "bg-gradient-to-br from-rose-600/40 via-slate-800 to-purple-900/40" :
                  "bg-gradient-to-br from-purple-600/40 via-slate-800 to-cyan-900/40"
                }`}></div>

                {/* Play Button */}
                <div className="relative z-10 flex items-center justify-center w-20 h-20 glass-card group-hover:shadow-neon group-hover:scale-110 transition-all duration-300">
                  <svg className="w-8 h-8 text-cyan-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Overlay content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-300">{item.description}</p>
                  <span className="text-xs text-cyan-400 mt-2 font-semibold">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
