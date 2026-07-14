'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const categories = ["Starters", "Main Course", "Desserts", "Beverages"];

export default function MenuTabs({ menuItems }) {
  const [activeTab, setActiveTab] = useState("Starters");

  const filteredItems = menuItems.filter(item => item.category === activeTab);

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap">
      
      {/* Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-outline-variant/20 mb-12 justify-start md:justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`relative px-8 py-4 font-label-caps text-label-caps whitespace-nowrap transition-colors duration-300 ${
              activeTab === category ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {category}
            {activeTab === category && (
              <motion.div
                layoutId="activeMenuTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-surface-container-low border border-outline-variant/10 rounded-lg overflow-hidden group hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {item.isSpecial && (
                    <div className="absolute top-4 right-4 bg-primary text-on-primary px-4 py-1 rounded font-label-caps text-[10px] tracking-widest font-semibold shadow-lg">
                      CHEF'S SPECIAL
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="font-headline-md text-xl text-on-surface leading-tight">{item.name}</h3>
                    <span className="font-label-caps text-lg text-primary font-semibold">Rs {item.price}</span>
                  </div>
                  <p className="font-body-md text-on-surface-variant leading-relaxed opacity-90 flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
