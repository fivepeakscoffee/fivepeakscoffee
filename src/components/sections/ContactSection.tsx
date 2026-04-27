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

        <div className="max-w-4xl mx-auto w-full border-t border-white/10 pt-16 text-center">
          <div className="space-y-2">
            <span className="mono-label text-accent">Digital Mail</span>
            <a href="mailto:fivepeakscoffee@gmail.com" className="block text-3xl md:text-5xl font-display text-white hover:text-accent transition-colors break-all">fivepeakscoffee@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
