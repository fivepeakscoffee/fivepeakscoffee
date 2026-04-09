import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowLeft, MapPin, Users, Calendar, Award } from 'lucide-react';
import { SEO } from '../components/SEO';
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
    description: "Providing premium barista coffee for the BTOG Annual Conference at the Edinburgh International Conference Centre.",
    challenge: "Maintaining a consistent flow of specialty coffee for over 1,200 medical professionals during tight session breaks, ensuring every cup meets our exacting standards.",
    solution: "We deployed a high-capacity setup with multiple espresso stations and a dedicated team of senior baristas. Our workflow was optimized for speed without compromising on the artisanal quality Five Peaks is known for.",
    results: [
      "Served 4,000+ specialty coffees over 3 days",
      "Seamless integration with the EICC's prestigious environment",
      "Exceptional feedback from delegates and organizers",
      "Zero downtime during high-pressure peak periods"
    ]
  }
];

export function RecentPeakDetail() {
  const { id } = useParams();
  const study = cases.find(c => c.id === Number(id));

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-white p-6">
        <div className="text-center">
          <h1 className="text-4xl font-display mb-8">RECENT PEAK NOT FOUND</h1>
          <Link to="/recent-peaks" className="text-accent hover:underline mono-label">BACK TO ALL PEAKS</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-background text-white min-h-screen">
      <SEO 
        title={`${study.title} | Recent Peak`}
        description={study.description}
        canonical={`https://www.fivepeakscoffee.co.uk/#/recent-peaks/${study.id}`}
        ogImage={study.image}
      />
      {/* Hero Header */}
      <section className="relative h-[70vh] flex items-end px-6 md:px-12 pb-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-20 max-w-[1800px] mx-auto w-full">
          <Link 
            to="/recent-peaks" 
            className="inline-flex items-center gap-2 text-accent mb-8 hover:gap-4 transition-all mono-label text-xs"
          >
            <ArrowLeft size={16} /> BACK TO RECENT PEAKS
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="mono-label text-accent mb-4 block">{study.client}</span>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-display leading-none uppercase max-w-5xl">
              {study.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 px-6 md:px-12 border-y border-white/5 bg-white/5">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/40 mono-label text-xs uppercase tracking-widest">
                <MapPin size={14} className="text-accent" /> Location
              </div>
              <p className="text-2xl font-display">{study.location}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/40 mono-label text-xs uppercase tracking-widest">
                <Users size={14} className="text-accent" /> Guests
              </div>
              <p className="text-2xl font-display">{study.guests}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/40 mono-label text-xs uppercase tracking-widest">
                <Calendar size={14} className="text-accent" /> Duration
              </div>
              <p className="text-2xl font-display">{study.duration}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/40 mono-label text-xs uppercase tracking-widest">
                <Award size={14} className="text-accent" /> Outcome
              </div>
              <p className="text-2xl font-display">Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-7 space-y-24">
              <div className="space-y-8">
                <h2 className="text-4xl font-display uppercase">The Challenge</h2>
                <p className="text-2xl text-white/60 leading-relaxed font-light">
                  {study.challenge}
                </p>
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl font-display uppercase">The Solution</h2>
                <p className="text-2xl text-white/60 leading-relaxed font-light">
                  {study.solution}
                </p>
              </div>

              <div className="aspect-video rounded-sm overflow-hidden bg-white/5">
                <img 
                  src="https://i.postimg.cc/RZYt4d51/1000028115.jpg" 
                  alt="Service Detail" 
                  className="w-full h-full object-cover grayscale opacity-50"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-32 space-y-12">
                <div className="p-12 border border-white/10 rounded-sm bg-white/5">
                  <h3 className="text-3xl font-display mb-12 uppercase">Key Results</h3>
                  <div className="space-y-8">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <CheckCircle2 className="text-accent shrink-0 mt-1" size={24} />
                        <p className="text-xl text-white/80 leading-snug">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-12 bg-accent text-black rounded-sm">
                  <h3 className="text-3xl font-display mb-6 uppercase">Ready to peak?</h3>
                  <p className="text-lg mb-8 font-medium">
                    Bring this level of precision and quality to your next event.
                  </p>
                  <Link 
                    to="/contact" 
                    className="w-full bg-black text-white py-4 font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4 rounded-sm"
                  >
                    BOOK YOUR EVENT <ArrowLeft className="rotate-180" size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
