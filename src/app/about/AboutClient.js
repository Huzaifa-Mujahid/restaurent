'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutClient() {
  const ambianceImages = [
    { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop", alt: "Elegant dining room interior" },
    { src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069&auto=format&fit=crop", alt: "Intimate table setting" },
    { src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop", alt: "Private dining area" },
    { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop", alt: "Live kitchen" },
  ];

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

  return (
    <>
      {/* Page Header / Hero */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            className="object-cover"
            src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?q=80&w=2024&auto=format&fit=crop"
            alt="About Us Hero Background"
            fill
            priority
          />
          <div className="absolute inset-0 bg-surface-dim/70"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface drop-shadow-2xl"
          >
            About Us
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-primary mx-auto mt-6"
          ></motion.div>
        </div>
      </section>

      {/* Restaurant Story */}
      <section className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-square md:aspect-[4/5] rounded-lg overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop"
              alt="Restaurant history"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-stack-md lg:pl-12"
          >
            <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-2">THE LEGACY</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Our Story</h2>
            <div className="space-y-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <p>
                Founded in 1998, Aurelian Noir began as a modest dream to fuse authentic Pakistani culinary heritage with the refined elegance of modern fine dining. Over two decades later, we stand as a beacon of culinary excellence in the heart of Lahore.
              </p>
              <p>
                Our journey has always been guided by a singular philosophy: dining is not merely about sustenance, but about emotion, memory, and artistry. Every plate we serve is a testament to the dedication of our local spice merchants, farmers, and our tireless kitchen brigade.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chef Introduction */}
      <section className="py-section-gap bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="max-w-4xl mx-auto px-margin-mobile text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <Image 
                src="/tariq mehmood.png"
                alt="Tariq Mahmood"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-label-caps text-label-caps text-primary tracking-widest block mb-2">MASTER OF CRAFT</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Tariq Mahmood</h2>
            <h3 className="font-headline-md text-xl text-on-surface-variant mb-6">Executive Head Chef</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed opacity-90">
              "Cooking is the ultimate expression of our culture. I draw inspiration from the vibrant streets and historic royal kitchens of Pakistan. My goal is to extract the purest essence of traditional spices and present them in a way that respects their origin while thrilling the palate."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ambiance Gallery */}
      <section className="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">The Ambiance</h2>
          <p className="font-label-caps text-label-caps text-primary mt-2">A GLIMPSE INTO OUR WORLD</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ambianceImages.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg group ${index === 0 || index === 3 ? 'md:aspect-video aspect-square' : 'aspect-square'}`}
            >
              <Image 
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-label-caps tracking-widest border border-white/50 px-6 py-2 rounded">VIEW</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission / Values */}
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
                  {/* Using Material Symbols if included, otherwise fallback to SVG. Using inline SVG for reliability */}
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
    </>
  );
}
