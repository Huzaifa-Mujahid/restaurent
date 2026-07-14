'use client';
import { motion } from 'framer-motion';

const values = [
  {
    icon: "verified",
    title: "Quality Ingredients",
    desc: "Sourced locally and globally from artisanal producers who share our unyielding standards."
  },
  {
    icon: "restaurant",
    title: "Authentic Recipes",
    desc: "Rooted in classic techniques but elevated with avant-garde creativity and precision."
  },
  {
    icon: "volunteer_activism",
    title: "Warm Hospitality",
    desc: "Every guest is family, and every meal is an unforgettable journey of taste and service."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function CoreValues() {
  return (
    <section className="py-section-gap bg-surface-container-high">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="text-center mb-16">
          <span className="font-label-caps text-label-caps text-primary block mb-2">OUR PILLARS</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Core Values</h2>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
        >
          {values.map((value, i) => (
            <motion.div key={i} variants={itemVariants} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                {value.icon === 'verified' && (
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"/></svg>
                )}
                {value.icon === 'restaurant' && (
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.1 1.6 3.8 3.7 4v9h2.6v-9C11.4 12.8 13 11.1 13 9V2h-2v7zm5-7v11c0 2.2-1.8 4-4 4v5h2v-5h2V2h-2z"/></svg>
                )}
                {value.icon === 'volunteer_activism' && (
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                )}
              </div>
              <h3 className="font-headline-md text-2xl text-on-surface mb-4">{value.title}</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed opacity-90">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
