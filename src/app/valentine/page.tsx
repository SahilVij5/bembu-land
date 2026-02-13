'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Heart, Sparkles } from 'lucide-react';

export default function ValentineGarden() {
  const [mounted, setMounted] = useState(false);
  
  // Custom Flower Particles (Visuals Only)
  const [flowers, setFlowers] = useState<{id: number, left: string, top: string, scale: number, type: string, duration: number}[]>([]);

  useEffect(() => {
    setMounted(true);
    // Floating elements: Roses, Sparkles, and Hearts
    const flowerTypes = ["🌹", "✨", "❤️", "🌷"]; 
    const newFlowers = [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      scale: Math.random() * 0.5 + 0.8,
      type: flowerTypes[Math.floor(Math.random() * flowerTypes.length)],
      duration: Math.random() * 20 + 10
    }));
    setFlowers(newFlowers);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#FFFAFA] text-[#8B0000] overflow-hidden relative font-serif selection:bg-red-100">
      
      {/* --- TEXTURE OVERLAY --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` }}>
      </div>

      {/* --- FLOATING ANIMATION --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {flowers.map((f) => (
          <motion.div
            key={f.id}
            initial={{ y: -100, x: -50, opacity: 0 }}
            animate={{ 
              y: "120vh", 
              x: 50,
              opacity: [0, 1, 1, 0],
              rotate: 360 
            }}
            transition={{ 
              duration: f.duration, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute text-4xl filter drop-shadow-sm"
            style={{ left: f.left, scale: f.scale }}
          >
            {f.type}
          </motion.div>
        ))}
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-center">
        
        {/* --- BACK BUTTON --- */}
        <Link href="/">
          <motion.div 
            whileHover={{ x: -5 }}
            className="absolute top-8 left-6 flex items-center gap-2 text-red-300 font-bold text-xs tracking-widest uppercase cursor-pointer hover:text-red-800 transition-colors"
          >
            <ArrowLeft size={16} /> Return Home
          </motion.div>
        </Link>

        {/* --- MAIN CARD --- */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="bg-white/60 backdrop-blur-md border border-red-100 p-8 md:p-16 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(139,0,0,0.15)] max-w-lg relative"
        >
          {/* Decorative Top Icon */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-red-900 rounded-full flex items-center justify-center shadow-xl border-4 border-[#FFFAFA]">
             <Heart fill="#FFFAFA" className="text-red-900" size={32} />
          </div>

          <div className="mt-8 mb-6">
             <h2 className="font-great-vibes text-6xl md:text-7xl text-red-900 mb-4 drop-shadow-sm">
               She said Yes!
             </h2>
             <div className="w-16 h-[1px] bg-red-200 mx-auto mb-4"></div>
             <p className="font-playfair text-xl text-red-800 font-bold">
               Official Valentine: <br/>
               <span className="text-3xl text-red-600">Hunlu ❤️</span>
             </p>
          </div>
          
          <div className="font-lora text-red-900/80 leading-relaxed text-lg space-y-6 mb-8">
            <p>
              In a world of temporary things, <span className="font-bold text-red-700">you are my forever</span>.
              Every day with you feels like a page from a fairy tale I never want to end.
            </p>
            <p>
              You are my home, my peace, and my greatest adventure. I love you more than code could ever compile, 
              more than words could ever say, and more with every single heartbeat.
            </p>
            <p className="italic text-sm opacity-60">
              (Official Status: Stuck with me. No refunds, no returns.)
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-red-100">
             <p className="font-lora text-xs tracking-widest uppercase text-red-300 mb-2">
               Yours Obsessively,
             </p>
             <p className="font-great-vibes text-4xl text-red-900">
               Sahilu
             </p>
          </div>

        </motion.div>

      </main>
    </div>
  );
}