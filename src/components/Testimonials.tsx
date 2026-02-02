import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Creative Director",
    company: "Netflix Originals",
    text: "Build Me delivered exceptional post-production for our documentary series. Their color grading elevated the entire project. Professional, fast, and incredibly talented.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Music Video Director",
    company: "Universal Music Group",
    text: "Working with Build Me was a game-changer. The VFX and editing quality exceeded expectations. They understood our artistic vision and brought it to life perfectly.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Thompson",
    role: "Brand Manager",
    company: "Tesla Motors",
    text: "Our product launch campaign required flawless execution. Build Me's attention to detail and 8K workflow capabilities made our brand shine. Highly recommended.",
    rating: 5
  },
  {
    id: 4,
    name: "David Park",
    role: "Film Producer",
    company: "Sundance Institute",
    text: "Build Me handled complete post-production for our festival film. From color grading to sound design, every aspect was handled with precision and artistry.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            What <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Trusted by industry leaders, streaming platforms, and award-winning creators
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-card p-8 hover:shadow-neon transition-all duration-500"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-300 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-cyan-400 font-bold text-xl">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clients Logo Section */}
        <div className="mt-20 glass-card p-12 text-center">
          <p className="text-slate-400 text-sm mb-8 uppercase tracking-wider">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["Netflix", "HBO Max", "Sony Pictures", "Universal", "Warner Bros", "Disney+"].map((client) => (
              <div
                key={client}
                className="text-slate-500 hover:text-white font-bold text-xl transition-colors duration-300 cursor-pointer"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
