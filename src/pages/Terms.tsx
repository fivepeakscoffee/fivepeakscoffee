import React from 'react';

export function Terms() {
  return (
    <main className="pt-48 pb-32 px-6 md:px-12 bg-background text-white min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-6xl font-display uppercase">Terms of Service</h1>
        <div className="prose prose-invert max-w-none space-y-8 text-white/60 text-lg leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl text-white font-display uppercase tracking-widest">1. Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our website or services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white font-display uppercase tracking-widest">2. Services Provided</h2>
            <p>
              Five Peaks Coffee provides mobile coffee catering services for events, conferences, and festivals. The specific details of our services will be outlined in our service agreements for individual bookings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white font-display uppercase tracking-widest">3. Bookings and Payments</h2>
            <p>
              All bookings are subject to availability and confirmation. Payment terms will be specified in our service agreements. We reserve the right to cancel or reschedule bookings in the event of unforeseen circumstances.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white font-display uppercase tracking-widest">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, and logos, is the property of Five Peaks Coffee and is protected by intellectual property laws. You may not use our content without our prior written consent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white font-display uppercase tracking-widest">5. Limitation of Liability</h2>
            <p>
              Five Peaks Coffee will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of our website or services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white font-display uppercase tracking-widest">6. Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of Scotland. Any disputes will be subject to the exclusive jurisdiction of the Scottish courts.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
