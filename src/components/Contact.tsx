import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "24ec031@psr.edu.in",
      link: "mailto:24ec031@psr.edu.in"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 9363869747",
      link: "tel:+919363869747"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Chennai, Tamil Nadu",
      link: "#"
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">
            Start Your <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Project</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Tell us about your vision. We'll respond within 24 hours with a detailed proposal and timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="glass-card p-8 hover:shadow-neon transition-all duration-300 group cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{info.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
              <p className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">{info.value}</p>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="glass-card px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="glass-card px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Project Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full glass-card px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            />

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full glass-card px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all resize-none"
            />

            <button
              type="submit"
              className="w-full glass-card px-8 py-4 text-white font-bold hover:neon-glow transition-all duration-300 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/40 hover:to-purple-500/40 text-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          {['Instagram', 'Vimeo', 'Behance', 'LinkedIn'].map((social) => (
            <a
              key={social}
              href="#"
              className="glass-card w-12 h-12 flex items-center justify-center text-cyan-400 hover:text-white hover:neon-glow transition-all duration-300 text-sm font-bold"
            >
              {social[0]}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
