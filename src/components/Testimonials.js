'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "Aurelian Noir isn't just a restaurant; it's a temple of gastronomy. The Shinwari Mutton Karahi is quite possibly the finest I've had in a decade.",
    author: "ZARA ALI",
    title: "The Culinary Gazette",
  },
  {
    id: 2,
    quote: "The attention to detail in the plating is mirrored only by the exquisite service. A masterclass in modern Pakistani fine dining luxury.",
    author: "AHMED KHAN",
    title: "Vogue Gastronomique",
  },
  {
    id: 3,
    quote: "Rarely does a venue balance atmosphere and culinary heritage so perfectly. The Balochi Sajji is an absolute must-try.",
    author: "SANA TARIQ",
    title: "Michelin Insider",
  },
  {
    id: 4,
    quote: "An unforgettable dining experience. The ambiance transports you to another era while the flavors stay rooted in tradition.",
    author: "FARAH YOUSAF",
    title: "Food & Travel Pakistan",
  },
  {
    id: 5,
    quote: "The Nalli Nihari here is perfection in a bowl. Every spoonful tells a story of slow-cooked love.",
    author: "OMAR RASHID",
    title: "Lahore Food Diaries",
  },
];

const duplicated = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-section-gap bg-surface-container-high relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -ml-32 -mb-32"></div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10">
        <div className="text-center mb-16">
          <svg className="w-12 h-12 text-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Critique & Praise</h2>
        </div>

        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            {duplicated.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-[420px] flex-shrink-0 bg-surface-container-low p-8 rounded-lg border border-outline-variant/10 shadow-xl flex flex-col justify-between"
              >
                <p className="font-body-lg text-body-lg text-on-surface italic leading-relaxed mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-label-caps text-label-caps text-on-surface">{item.author}</h4>
                    <p className="text-xs text-on-surface-variant uppercase tracking-tighter">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
