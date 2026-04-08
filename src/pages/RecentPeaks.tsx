import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Users, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

import { ContactSection } from '../components/sections/ContactSection';

const cases = [
  {
    id: 1,
    title: "BTOG Edinburgh 2026",
    client: "British Thoracic Oncology Group",
    location: "EICC, Edinburgh",
    guests: "1,200+",
    duration: "3 Days",
    image: "https://i.postimg.cc/RZYt4d51/1000028115.jpg",
    description: "Providing premium barista coffee for the BTOG Annual Conference at the Edinburgh International Conference Centre. A high-profile medical summit requiring precision, speed, and exceptional quality."
  }
];

export function RecentPeaks() {
  return (
    <main className="pt-48 pb-32 px-6 md:px-12 bg-background">
      <div className="max-w-[1800px] mx-auto">
        <div className="max-w-4xl mb-24">
          <span className="mono-label text-accent mb-4 block">RECENT PEAKS</span>
          <h1 className="text-5xl sm:text-7xl md:text-[12vw] leading-[0.75] mb-12 font-display uppercase">
            RECENT <br /> <span className="text-accent italic font-serif font-light lowercase">peaks</span>
          </h1>
          <p className="text-2xl text-white/40 max-w-2xl leading-relaxed">
            A showcase of our most ambitious projects and the precision we bring to every event.
          </p>
        </div>

        <div className="space-y-48">
          {cases.map((study, index) => (
            <motion.div
              key={study.id}
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
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-4">
                  <span className="mono-label text-accent">{study.client}</span>
                  <h2 className="text-4xl sm:text-6xl md:text-8xl font-display leading-none uppercase">
                    {study.title}
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/40 mono-label text-xs">
                      <MapPin size={14} /> Location
                    </div>
                    <p className="text-xl font-display">{study.location}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/40 mono-label text-xs">
                      <Users size={14} /> Guests
                    </div>
                    <p className="text-xl font-display">{study.guests}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/40 mono-label text-xs">
                      <Calendar size={14} /> Duration
                    </div>
                    <p className="text-xl font-display">{study.duration}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/40 mono-label text-xs">
                      <Award size={14} /> Result
                    </div>
                    <p className="text-xl font-display">Success</p>
                  </div>
                </div>

                <p className="text-xl text-white/40 leading-relaxed max-w-md">
                  {study.description}
                </p>

                <Link
                  to={`/recent-peaks/${study.id}`}
                  className="inline-flex items-center gap-4 text-accent hover:gap-6 transition-all mono-label"
                >
                  VIEW RECENT PEAK <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ContactSection />
    </main>
  );
}
