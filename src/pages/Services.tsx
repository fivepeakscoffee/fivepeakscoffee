import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Coffee, Zap, Users, Globe, Award, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { ContactSection } from '../components/sections/ContactSection';

const services = [
  {
    id: 'corporate',
    title: "Corporate Events",
    description: "High-stakes hospitality for the modern workplace. From board meetings to massive tech summits, we provide a seamless, high-capacity coffee experience.",
    icon: Zap,
    image: "https://i.postimg.cc/qqYsWRnn/20260306_151817.jpg",
    features: ["Dual-station espresso bars", "Elite barista team", "Branded cups and bars", "Custom menu curation"]
  },
  {
    id: 'wedding',
    title: "Weddings",
    description: "A bespoke coffee bar for your special day. Elevate your wedding with a premium specialty coffee bar that guests will gather and enjoy.",
    icon: Users,
    image: "https://i.postimg.cc/ZqhcTCgZ/20251114_075037.jpg",
    features: ["Bespoke latte art", "Signature drinks menu", "Elegant bar setup", "Professional service"]
  },
  {
    id: 'festival',
    title: "Festivals",
    description: "High-volume specialty coffee for the crowds. Our mobile units are built for speed and quality in high-pressure environments.",
    icon: MapPin,
    image: "https://i.postimg.cc/CLt5XKLH/1000026379.jpg",
    features: ["Self-sufficient mobile units", "High-capacity equipment", "Rapid service workflow", "Ethically sourced beans"]
  }
];

export function Services() {
  return (
    <main className="pt-48 pb-32 px-6 md:px-12 bg-background">
      <div className="max-w-[1800px] mx-auto">
        <div className="max-w-4xl mb-24">
          <span className="mono-label text-accent mb-4 block">OUR SERVICES</span>
          <h1 className="text-5xl sm:text-7xl md:text-[12vw] leading-[0.75] mb-12 font-display uppercase">
            CRAFTING <br /> THE <span className="text-accent italic font-serif font-light lowercase">experience</span>
          </h1>
          <p className="text-2xl text-white/40 max-w-2xl leading-relaxed">
            We don't just serve coffee; we create a destination within your event that guests will remember long after the last cup.
          </p>
        </div>

        <div className="space-y-48">
          {services.map((service, index) => (
            <motion.section
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center group"
            >
              <div className={cn(
                "lg:col-span-7 overflow-hidden rounded-sm bg-white/5 aspect-[16/10]",
                index % 2 === 1 ? "lg:order-2" : ""
              )}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all shrink-0">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-4xl sm:text-6xl md:text-8xl font-display leading-none uppercase">
                    {service.title}
                  </h2>
                </div>

                <p className="text-xl text-white/40 leading-relaxed max-w-md">
                  {service.description}
                </p>

                <div className="space-y-4">
                  <span className="mono-label text-xs text-accent">Key Features</span>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-4 text-accent hover:gap-6 transition-all mono-label"
                >
                  EXPLORE SERVICE <ArrowRight size={20} />
                </Link>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
      <ContactSection />
    </main>
  );
}
