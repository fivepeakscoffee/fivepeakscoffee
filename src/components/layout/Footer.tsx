import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5 bg-background relative z-10">
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-black">
            <span className="font-display font-bold text-sm">5</span>
          </div>
          <span className="text-xl font-display tracking-tight font-black uppercase">
            FIVE PEAKS <span className="text-accent italic font-serif font-light lowercase">coffee</span>
          </span>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <p className="text-white/20 text-[10px] mono-label text-center">
            © 2026 FIVE PEAKS COFFEE. ALL RIGHTS RESERVED. PRECISION IN EVERY POUR.
          </p>
          <div className="flex gap-6">
            <a href="https://instagram.com/fivepeakscoffee" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com/company/fivepeakscoffee" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="flex gap-8">
          <Link to="/privacy" className="text-white/40 hover:text-accent transition-colors mono-label text-[10px]">PRIVACY</Link>
          <Link to="/terms" className="text-white/40 hover:text-accent transition-colors mono-label text-[10px]">TERMS</Link>
        </div>
      </div>
    </footer>
  );
}
