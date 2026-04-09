import React from 'react';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Coffee, Zap, Users, ShieldCheck, Award, Globe } from 'lucide-react';
import { SEO } from '../components/SEO';
import { cn } from '../lib/utils';
import { ContactSection } from '../components/sections/ContactSection';

const services = {
  'corporate': {
    title: "Corporate Events",
    subtitle: "High-stakes hospitality for the modern workplace.",
    description: "From board meetings to massive tech summits, we provide a seamless, high-capacity coffee experience that keeps your team and guests energized and focused.",
    features: [
      "Dual-station espresso bars",
      "Elite barista team",
      "Branded cups and bars",
      "Custom menu curation"
    ],
    image: "https://i.postimg.cc/qqYsWRnn/20260306_151817.jpg"
  },
  'wedding': {
    title: "Weddings",
    subtitle: "A bespoke coffee bar for your special day.",
    description: "Elevate your wedding with a premium specialty coffee bar. We provide a beautiful destination for your guests to gather and enjoy expertly crafted drinks.",
    features: [
      "Bespoke latte art",
      "Signature drinks menu",
      "Elegant bar setup",
      "Professional service"
    ],
    image: "https://i.postimg.cc/ZqhcTCgZ/20251114_075037.jpg"
  },
  'festival': {
    title: "Festivals",
    subtitle: "High-volume specialty coffee for the crowds.",
    description: "Our mobile units are built for speed and quality. We can serve thousands of guests in a high-pressure environment without compromising on the specialty experience.",
    features: [
      "Self-sufficient mobile units",
      "High-capacity equipment",
      "Rapid service workflow",
      "Ethically sourced beans"
    ],
    image: "https://i.postimg.cc/CLt5XKLH/1000026379.jpg"
  }
};

export function ServicePage() {
  const { id } = useParams();
  const service = services[id as keyof typeof services] || services.corporate;

  return (
    <main className="pt-48 pb-32 px-6 md:px-12 bg-background">
      <SEO 
        title={`${service.title} Catering`}
        description={service.description}
        canonical={`https://www.fivepeakscoffee.co.uk/#/services/${id}`}
        ogImage={service.image}
      />
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center mb-32">
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-4">
              <span className="mono-label text-accent">OUR SERVICES</span>
              <h1 className="text-5xl sm:text-7xl md:text-[10vw] leading-[0.75] mb-12 font-display uppercase">
                {service.title.split(' ')[0]} <br /> <span className="text-accent italic font-serif font-light lowercase">{service.title.split(' ')[1] || ''}</span>
              </h1>
            </div>
            <p className="text-3xl font-display text-white/60 max-w-xl">
              {service.subtitle}
            </p>
            <p className="text-xl text-white/40 leading-relaxed max-w-2xl">
              {service.description}
            </p>
            <Link
              to="/contact"
              className="inline-flex bg-accent text-black px-12 py-6 font-bold hover:bg-white transition-all items-center gap-4 rounded-sm text-lg"
            >
              BOOK THIS SERVICE <ArrowRight size={20} />
            </Link>
          </div>

          <div className="lg:col-span-6 aspect-[16/10] overflow-hidden rounded-sm bg-white/5">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {service.features.map((feature, i) => (
            <div key={i} className="glass p-12 rounded-sm border-t-4 border-t-accent">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-8">
                <Coffee size={24} />
              </div>
              <h3 className="text-2xl font-display mb-4">{feature}</h3>
              <p className="text-white/40 leading-relaxed">
                Ensuring the highest standards of quality and consistency for your {service.title.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
      </div>
      <ContactSection />
    </main>
  );
}
