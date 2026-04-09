import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Recent Peaks', path: '/recent-peaks' },
  { name: 'Contact', path: '/contact' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    // Backup scroll to top on location change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 md:px-12 py-6 md:py-8",
        scrolled ? "bg-background py-4 border-b border-white/5 shadow-2xl" : "bg-transparent"
      )}>
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <Link to="/" className="group flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-500">
              <span className="font-display font-bold text-xl">5</span>
            </div>
            <span className="text-2xl font-display tracking-tight group-hover:text-accent transition-colors font-black">
              FIVE PEAKS <span className="text-accent italic font-serif font-light lowercase">coffee</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "mono-label text-xs tracking-[0.3em] hover:text-accent transition-colors relative group",
                  location.pathname === link.path ? "text-accent" : (scrolled ? "text-white" : "text-white/60")
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-2 left-0 h-px bg-accent transition-all duration-500",
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-accent text-black px-8 py-3 font-bold hover:bg-white transition-colors rounded-sm text-sm"
            >
              BOOK NOW
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[40] bg-background flex flex-col p-12 lg:hidden"
          >
            <div className="mt-24 space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-4xl sm:text-6xl font-display tracking-tight hover:text-accent transition-colors block font-bold"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-white/10">
              <div className="flex flex-col gap-4">
                <span className="mono-label text-accent">Direct Line</span>
                <a href="tel:07384504405" className="text-3xl font-display">07384504405</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
