import React from 'react';
import { motion } from 'motion/react';
import { Coffee, Zap, Users, Globe, Award, ShieldCheck } from 'lucide-react';
import { cn } from '../../lib/utils';

const features = [
  {
    title: "Elite Baristas",
    description: "Our team consists of award-winning baristas with years of experience in high-end hospitality.",
    icon: Award,
    className: "md:col-span-2 md:row-span-2 bg-accent text-black",
    image: "https://picsum.photos/seed/barista/800/600"
  },
  {
    title: "High Capacity",
    description: "Capable of serving 1000+ guests with zero compromise on quality or speed.",
    icon: Zap,
    className: "md:col-span-1 md:row-span-1 bg-white/5",
  },
  {
    title: "UK Wide",
    description: "From Edinburgh to London, we bring the peak of coffee to your doorstep.",
    icon: Globe,
    className: "md:col-span-1 md:row-span-1 bg-white/5",
  },
  {
    title: "Sustainable",
    description: "100% compostable cups and ethically sourced beans from small-batch roasters.",
    icon: ShieldCheck,
    className: "md:col-span-1 md:row-span-2 bg-white/5",
    image: "https://picsum.photos/seed/beans/400/600"
  },
  {
    title: "Custom Branding",
    description: "Fully brandable bars and personalized latte art for your corporate identity.",
    icon: Users,
    className: "md:col-span-2 md:row-span-1 bg-white/5",
  }
];

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[800px]">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className={cn(
            "relative group rounded-sm overflow-hidden p-8 flex flex-col justify-between border border-white/5",
            feature.className
          )}
        >
          {feature.image && (
            <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
          
          <div className="relative z-10">
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110",
              feature.className.includes('bg-accent') ? "bg-black text-accent" : "bg-white/10 text-accent"
            )}>
              <feature.icon size={24} />
            </div>
            <h3 className="text-3xl font-display tracking-tight mb-4">{feature.title}</h3>
            <p className={cn(
              "text-lg leading-relaxed max-w-xs",
              feature.className.includes('bg-accent') ? "text-black/70" : "text-white/50"
            )}>
              {feature.description}
            </p>
          </div>

          <div className="relative z-10 mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="mono-label text-xs">Learn More</span>
            <div className="w-8 h-px bg-current" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
