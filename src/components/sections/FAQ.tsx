import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../lib/utils';

const faqs = [
  {
    question: "Do you provide your own power and water?",
    answer: "Yes, we are fully self-sufficient. Our mobile bars come equipped with internal water tanks and filtration systems. We typically require a standard 13-amp power outlet, but we can also provide silent generators for outdoor events if needed."
  },
  {
    question: "What is your typical setup time?",
    answer: "We usually arrive 60-90 minutes before the service start time to ensure everything is perfectly calibrated. Setup is included in our service fee and doesn't count towards your booked hours."
  },
  {
    question: "Can you handle large-scale events with 1000+ guests?",
    answer: "Absolutely. We have multiple high-capacity espresso machines and a team of elite baristas. For large conferences or festivals, we can deploy multiple stations to ensure minimal wait times and consistent quality."
  },
  {
    question: "Do you offer non-dairy milk options?",
    answer: "Yes, we always carry a range of premium alternative milks, including Oat, Almond, and Soy, at no extra cost to you or your guests."
  },
  {
    question: "What areas of the UK do you cover?",
    answer: "While we are based in Edinburgh, we provide nationwide coverage across the UK. Travel costs are calculated based on the event location and will be clearly outlined in your quote."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={cn(
              "border border-white/10 rounded-lg overflow-hidden transition-all duration-500",
              activeIndex === index ? "bg-white/5 border-accent/30" : "hover:border-white/20"
            )}
          >
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left"
            >
              <span className="text-xl md:text-2xl font-display tracking-tight">
                {faq.question}
              </span>
              <div className={cn(
                "w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all",
                activeIndex === index ? "bg-accent text-black border-accent" : ""
              )}>
                {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </div>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                >
                  <div className="px-8 pb-8 text-white/60 text-lg leading-relaxed max-w-3xl">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
