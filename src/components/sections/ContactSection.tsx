import React from 'react';
import { BookingWizard } from './BookingWizard';

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-8xl md:text-[14vw] leading-[0.75] mb-12">
            LET'S <br /> <span className="text-accent italic font-serif font-light lowercase">talk</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto w-full mb-24">
          <BookingWizard />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto w-full border-t border-white/10 pt-16">
          <div className="space-y-2 text-center md:text-left">
            <span className="mono-label text-accent">Direct Line</span>
            <a href="tel:07384504405" className="block text-3xl md:text-5xl font-display text-white hover:text-accent transition-colors">07384504405</a>
          </div>
          <div className="space-y-2 text-center md:text-right">
            <span className="mono-label text-accent">Digital Mail</span>
            <a href="mailto:fivepeakscoffee@gmail.com" className="block text-3xl md:text-5xl font-display text-white hover:text-accent transition-colors break-all">fivepeakscoffee@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
