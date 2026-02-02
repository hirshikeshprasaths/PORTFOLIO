import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-teal-400 to-purple-500 rounded flex items-center justify-center font-bold text-white text-xs">B</div>
            <span className="text-lg font-bold tracking-tighter text-white">BUILD ME</span>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Vimeo</a>
            <a href="#" className="hover:text-white transition-colors">Behance</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
          
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Build Me Post-Production. All rights reserved. | Email: 24ec031@psr.edu.in | Phone: +91 9363869747
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
