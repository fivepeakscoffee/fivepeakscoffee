import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Coffee, Zap, Users, MapPin, Award, Globe, ShieldCheck } from 'lucide-react';
import { BentoGrid } from '../components/sections/BentoGrid';
import { ContactSection } from '../components/sections/ContactSection';
import { FAQ } from '../components/sections/FAQ';
import { Link, useLocation } from 'react-router-dom';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 md:px-12 pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background z-10" />
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000"
            alt="Premium Barista Service"
            className="w-full h-full object-cover grayscale opacity-60"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-[1800px] mx-auto w-full">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-accent" />
              <span className="mono-label text-accent tracking-[0.4em]">EST. 2018 | EDINBURGH</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl sm:text-7xl md:text-[12vw] leading-[0.9] mb-12 font-display uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            >
              PRECISION <br /> IN EVERY <br /> <span className="text-accent italic font-serif font-light lowercase tracking-normal">pour</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col md:flex-row gap-8 items-start md:items-center"
            >
              <Link
                to="/contact"
                className="group bg-accent text-black px-12 py-6 font-bold hover:bg-white transition-all flex items-center gap-4 rounded-sm text-lg"
              >
                ELEVATE YOUR EVENT <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <p className="text-xl text-white/90 max-w-sm leading-relaxed font-medium drop-shadow-lg">
                Elite barista catering for high-stakes events, conferences, and festivals across the UK.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="py-32 px-6 md:px-12 bg-background border-y border-white/5 overflow-visible">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-stretch">
            <div className="lg:sticky lg:top-32 h-fit self-start">
              <span className="mono-label text-accent mb-4 block">WHY FIVE PEAKS</span>
              <h2 className="text-4xl md:text-6xl font-display leading-none mb-6">
                THE PEAK <br /> OF SERVICE
              </h2>
              <p className="text-lg text-white/40 leading-relaxed mb-8">
                We've spent years refining the art of mobile coffee. Our reputation is built on consistency, speed, and an uncompromising dedication to the craft.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-12 lg:mb-0">
                {[
                  "https://www.fivepeakscoffee.co.uk/wp-content/uploads/go-x/u/b7a2e446-9178-408f-adc5-760d0533b4f6/image.jpg",
                  "https://i.postimg.cc/Gt9PMYBx/20260305_124658.jpg",
                  "https://i.postimg.cc/5yj5PvHF/20260303_202156.jpg",
                  "https://i.postimg.cc/ZqhcTCgZ/20251114_075037.jpg"
                ].map((src, idx) => (
                  <div key={idx} className="relative aspect-square overflow-hidden rounded-sm border border-white/10">
                    <img
                      src={src}
                      alt={`Five Peaks Service ${idx + 1}`}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-16 lg:gap-24">
              {[
                {
                  title: "Elite Baristas",
                  description: "Award-winning team with years of experience.",
                  icon: Award,
                  link: "/services/corporate"
                },
                {
                  title: "High Capacity",
                  description: "1000+ guests with zero compromise.",
                  icon: Zap,
                  link: "/services/corporate"
                },
                {
                  title: "UK Wide",
                  description: "Edinburgh to London, fully mobile.",
                  icon: Globe,
                  link: "/services"
                },
                {
                  title: "Sustainable",
                  description: "100% compostable and ethical.",
                  icon: ShieldCheck,
                  link: "/services"
                },
                {
                  title: "Custom Branding",
                  description: "Fully brandable bars and art.",
                  icon: Users,
                  link: "/services/corporate"
                }
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`group flex flex-col gap-6 relative ${i === 4 ? 'col-span-2 lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left' : ''}`}
                >
                  <div className={`w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all shrink-0 ${i === 4 ? 'mx-auto lg:mx-0' : ''}`}>
                    <point.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-3xl font-display mb-2 uppercase leading-tight">{point.title}</h3>
                    <p className="text-sm md:text-lg text-white/40 leading-relaxed group-hover:text-white/60 transition-colors mb-4">
                      {point.description}
                    </p>
                    <Link to={point.link} className={`inline-flex items-center gap-2 text-accent mono-label text-[10px] opacity-0 group-hover:opacity-100 transition-opacity ${i === 4 ? 'justify-center lg:justify-start' : ''}`}>
                      LEARN MORE <ArrowRight size={10} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Peaks Section */}
      <section className="py-24 px-6 md:px-12 bg-white text-black">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <h2 className="text-5xl md:text-7xl font-display leading-none">
              RECENT <br /> <span className="text-accent italic font-serif font-light lowercase">peaks</span>
            </h2>
            <div className="max-w-md">
              <p className="text-black/60 text-lg mb-6">
                Latest updates from the field. From corporate summits to remote festivals, see where we've been pouring lately.
              </p>
              <Link to="/recent-peaks" className="mono-label text-accent hover:text-black transition-colors flex items-center gap-2">
                EXPLORE ALL RECENT PEAKS <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 1, title: "BTOG Edinburgh 2026", location: "EICC, Edinburgh", date: "JAN 2026", image: "https://i.postimg.cc/RZYt4d51/1000028115.jpg" }
            ].map((study, i) => (
              <Link
                key={i}
                to={`/recent-peaks/${study.id}`}
                className="group block"
              >
                <div className="aspect-square overflow-hidden rounded-sm mb-6 bg-gray-100 relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-accent px-3 py-1 rounded-full">
                    <span className="mono-label text-[8px] text-white">{study.date}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-display mb-1 uppercase tracking-tight group-hover:text-accent transition-colors">{study.title}</h3>
                  <span className="mono-label text-black/40 text-[10px]">{study.location}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Wizard Section */}
      <ContactSection />

      {/* FAQ Section */}
      <section className="py-32 px-6 md:px-12 bg-white/5">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-24">
            <span className="mono-label text-accent mb-4 block">COMMON QUESTIONS</span>
            <h2 className="text-6xl md:text-8xl font-display leading-none">
              EVERYTHING <br /> YOU NEED TO KNOW
            </h2>
          </div>
          <FAQ />
        </div>
      </section>
    </main>
  );
}
