'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/1.png', '/2.png'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              className="object-cover"
              src={images[currentImage]}
              alt={`Hero Background ${currentImage + 1}`}
              fill
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      <div className="relative z-10 text-center px-margin-mobile max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 drop-shadow-2xl"
        >
          Where Taste Meets Elegance.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto opacity-90"
        >
          Experience the art of culinary perfection in an atmosphere of refined luxury. Every dish is a masterpiece, every moment an heirloom.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <button className="w-full md:w-auto bg-primary text-on-primary px-10 py-4 rounded-lg font-label-caps text-label-caps hover:brightness-110 transition-all duration-300 shadow-lg shadow-primary/10">
            Book Now
          </button>
          <button className="w-full md:w-auto border border-primary text-primary px-10 py-4 rounded-lg font-label-caps text-label-caps hover:bg-primary/10 transition-all duration-300">
            View Menu
          </button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
