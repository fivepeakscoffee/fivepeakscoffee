import React from 'react';
import { FAQ } from '../components/sections/FAQ';
import { ContactSection } from '../components/sections/ContactSection';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';

export function FAQPage() {
  return (
    <main className="pt-32">
      <SEO 
        title="Frequently Asked Questions"
        description="Find answers to common questions about Five Peaks Coffee's barista catering services, setup requirements, and coverage areas."
        canonical="https://www.fivepeakscoffee.co.uk/#/faqs"
      />
      
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mono-label text-accent mb-4 block"
            >
              KNOWLEDGE BASE
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-display leading-none uppercase"
            >
              FREQUENTLY <br /> ASKED <span className="text-accent italic font-serif font-light lowercase">questions</span>
            </motion.h1>
          </div>
          
          <FAQ />
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
