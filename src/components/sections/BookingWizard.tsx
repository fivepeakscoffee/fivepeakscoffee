import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Users, Calendar, MapPin, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { db, auth } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

type Step = 1 | 2 | 3 | 4;

export function BookingWizard() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    eventType: '',
    guests: '',
    date: '',
    location: '',
    name: '',
    email: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => (prev + 1) as Step);
  const prevStep = () => setStep(prev => (prev - 1) as Step);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);
    try {
      // 1. Send to FormSubmit.co for email delivery
      // This service is often more reliable for direct email-based submissions
      try {
        await fetch('https://formsubmit.co/ajax/fivepeakscoffee@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `New Inquiry: ${formData.eventType} from ${formData.name}`,
            _captcha: "false",
            _template: "table",
            ...formData
          })
        });
      } catch (formSubmitErr) {
        console.error('FormSubmit submission error:', formSubmitErr);
      }

      // 2. Save to Firestore as backup/record
      const path = 'inquiries';
      await addDoc(collection(db, path), {
        ...formData,
        createdAt: serverTimestamp()
      });
      
      nextStep();
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, 'inquiries');
      setError('Failed to send inquiry. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const eventTypes = [
    { id: 'corporate', label: 'Corporate Event', icon: Coffee },
    { id: 'wedding', label: 'Wedding', icon: Users },
    { id: 'festival', label: 'Festival', icon: MapPin },
    { id: 'other', label: 'Other', icon: Calendar }
  ];

  return (
    <div className="glass p-6 md:p-12 rounded-sm border-t-4 border-t-accent relative overflow-hidden min-h-[500px] flex flex-col">
      <div className="flex justify-between items-center mb-12">
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={cn(
                "h-1 w-8 rounded-full transition-all duration-500",
                step >= i ? "bg-accent" : "bg-white/10"
              )}
            />
          ))}
        </div>
        <span className="mono-label text-accent">Step {step} of 4</span>
      </div>

      <div className="flex-grow">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <h3 className="text-3xl sm:text-4xl font-display tracking-tight">What's the occasion?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {eventTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      updateData('eventType', type.id);
                      nextStep();
                    }}
                    className={cn(
                      "flex items-center gap-4 p-6 border border-white/10 rounded-lg hover:border-accent hover:bg-accent/5 transition-all text-left group",
                      formData.eventType === type.id && "border-accent bg-accent/10"
                    )}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                      <type.icon size={20} />
                    </div>
                    <span className="text-lg font-medium">{type.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <h3 className="text-3xl sm:text-4xl font-display tracking-tight">The logistics</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="mono-label">Estimated Guests</label>
                  <input
                    type="number"
                    placeholder="e.g. 150"
                    value={formData.guests}
                    onChange={(e) => updateData('guests', e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl sm:text-2xl focus:border-accent outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="mono-label">Event Location</label>
                  <input
                    type="text"
                    placeholder="City or Venue"
                    value={formData.location}
                    onChange={(e) => updateData('location', e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl sm:text-2xl focus:border-accent outline-none transition-colors"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <h3 className="text-3xl sm:text-4xl font-display tracking-tight">Your details</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="mono-label">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => updateData('name', e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl sm:text-2xl focus:border-accent outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="mono-label">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => updateData('email', e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-xl sm:text-2xl focus:border-accent outline-none transition-colors"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center py-12 space-y-6"
            >
              <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center text-black mb-4">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-5xl font-display tracking-tight">Inquiry Sent</h3>
              <p className="text-xl text-white/60 max-w-md">
                We've received your request for a {formData.eventType} event in {formData.location}. Our team will be in touch within 24 hours.
              </p>
              <div className="flex flex-col gap-4 w-full max-w-xs">
                <a
                  href={`mailto:fivepeakscoffee@gmail.com?subject=Inquiry: ${formData.eventType} in ${formData.location}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AGuests: ${formData.guests}%0D%0ALocation: ${formData.location}%0D%0ANotes: ${formData.notes}`}
                  className="w-full bg-accent text-black py-4 font-bold hover:bg-white transition-colors rounded-sm flex items-center justify-center gap-2"
                >
                  SEND DIRECT EMAIL <ArrowRight size={16} />
                </a>
                <button
                  onClick={() => setStep(1)}
                  className="text-white/40 hover:text-white mono-label text-xs transition-colors"
                >
                  Send another inquiry
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {step < 4 && (
        <div className="flex justify-between mt-12 pt-8 border-t border-white/5">
          {step > 1 ? (
            <button
              onClick={prevStep}
              className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mono-label"
            >
              <ArrowLeft size={16} /> Back
            </button>
          ) : <div />}
          
          {step < 3 ? (
            <button
              onClick={nextStep}
              disabled={step === 2 && (!formData.guests || !formData.location)}
              className="flex items-center gap-2 text-accent hover:gap-4 transition-all mono-label disabled:opacity-20"
            >
              Next <ArrowRight size={16} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!formData.name || !formData.email || isSubmitting}
              className="bg-accent text-black px-8 py-4 font-bold hover:bg-white transition-colors rounded-sm disabled:opacity-20 flex items-center gap-2"
            >
              {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
