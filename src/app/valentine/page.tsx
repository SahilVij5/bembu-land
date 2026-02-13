'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Heart } from 'lucide-react';

export default function ValentineGarden() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Specific flowers requested: Rajnigandha (White Tuberose), Roses, Lillies
  const flowers = [
    { emoji: "🌹", id: 1 }, // Rose
    { emoji: "🪷", id: 2 }, // Lily-ish / Lotus
    { emoji: "🌺", id: 3 }, // Hibiscus/Generic
    { emoji: "💮", id: 4 }, // Rajnigandha representation (White flower)
    { emoji: "🌷", id: 5 }, // Tulip
    { emoji: "🌹", id: 6 },
    { emoji: "💮", id: 7 }, // Rajnigandha
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffeff4] to-[#ffe0ea] overflow-hidden relative font-nunito">
      
      {/* Falling Flowers Animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, x: Math.random() * 100 + "vw", rotate: 0 }}
            animate={{ 
              y: "110vh", 
              rotate: 360,
              x: `calc(${Math.random() * 100}vw + ${Math.random() * 50 - 25}px)` 
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute text-4xl opacity-70"
          >
            {flowers[i % flowers.length].emoji}
          </motion.div>
        ))}
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-center">
        
        {/* Back Button */}
        <Link href="/">
          <motion.div whileHover={{ x: -5 }} className="absolute top-8 left-8 flex items-center gap-2 text-rose-400 font-bold cursor-pointer">
            <ArrowLeft size={20} /> Back to Home
          </motion.div>
        </Link>

        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="bg-white/40 backdrop-blur-xl border border-white/60 p-12 md:p-20 rounded-[3rem] shadow-2xl max-w-3xl"
        >
          <div className="flex justify-center gap-4 mb-8">
             {/* Rajnigandha & Rose Visuals */}
             <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-6xl filter drop-shadow-lg">🌹</motion.div>
             <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} className="text-6xl filter drop-shadow-lg">💮</motion.div>
             <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} className="text-6xl filter drop-shadow-lg">🪷</motion.div>
          </div>

          <h1 className="font-great-vibes text-7xl md:text-9xl text-rose-600 mb-6 drop-shadow-sm leading-tight">
            Happy Valentine's<br/>Day
          </h1>
          
          <p className="text-slate-600 text-xl font-medium leading-relaxed max-w-lg mx-auto mb-10">
            For the girl who deserves all the <span className="text-rose-500 font-bold">Roses</span>, 
            <span className="text-pink-500 font-bold"> Lillies</span>, and 
            <span className="text-slate-500 font-bold"> Rajnigandhas</span> in the world.
          </p>

          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-rose-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-rose-300/50 flex items-center gap-3 mx-auto"
          >
            <Heart fill="white" /> I Love You Bembu
          </motion.button>
        </motion.div>

      </main>
    </div>
  );
}