'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DishCard({ image, name, description, price }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-surface-container-low border border-outline-variant/20 rounded-lg overflow-hidden group hover:border-primary/40 transition-all duration-500"
    >
      <div className="h-64 overflow-hidden relative">
        <Image
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          src={image}
          alt={name}
          fill
        />
      </div>
      <div className="p-8 text-center">
        <div className="flex justify-center mb-3">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-primary fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{name}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-4">{description}</p>
        <span className="font-label-caps text-label-caps text-primary">Rs {price}</span>
      </div>
    </motion.div>
  );
}
