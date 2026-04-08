import React from 'react';

export function Privacy() {
  return (
    <main className="pt-48 pb-32 px-6 md:px-12 bg-background text-white min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-6xl font-display uppercase">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-8 text-white/60 text-lg leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl text-white font-display uppercase tracking-widest">1. Introduction</h2>
            <p>
              Five Peaks Coffee ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white font-display uppercase tracking-widest">2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you fill out a booking inquiry form, subscribe to our newsletter, or contact us via email. This may include your name, email address, phone number, and event details.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white font-display uppercase tracking-widest">3. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide our services.</li>
              <li>Communicate with you about your event bookings.</li>
              <li>Send you updates and promotional materials (if you've opted in).</li>
              <li>Improve our website and services.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white font-display uppercase tracking-widest">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or alteration.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white font-display uppercase tracking-widest">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at fivepeakscoffee@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
