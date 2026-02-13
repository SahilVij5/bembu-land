'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, ArrowRight, Sparkles, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BembuLand() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [showError, setShowError] = useState(false);
  const [petals, setPetals] = useState<{id: number, left: string, top: string, size: number, duration: number}[]>([]);
  const router = useRouter();

  useEffect(() => {
    const newPetals = [...Array(8)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 30 + 10,
      duration: Math.random() * 10 + 10
    }));
    setPetals(newPetals);
  }, []);

  const handleYes = () => router.push('/valentine');
  const handleNo = () => setShowError(true);

  return (
    <div className="min-h-screen bg-[#FFFAFA] text-[#8B0000] overflow-x-hidden relative selection:bg-red-100">
      
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` }}>
      </div>

      <div className="fixed inset-0 pointer-events-none z-0">
         {petals.map((petal) => (
           <motion.div
             key={petal.id}
             animate={{ y: [0, 100, 0], opacity: [0.3, 0.6, 0.3], rotate: [0, 45, 0] }}
             transition={{ duration: petal.duration, repeat: Infinity, ease: "linear" }}
             className="absolute text-red-200"
             style={{ left: petal.left, top: petal.top }}
           >
             <Heart size={petal.size} fill="currentColor" />
           </motion.div>
         ))}
      </div>

      <main className="relative z-10 container mx-auto px-6 py-8 max-w-lg flex flex-col items-center">
        
        <header className="text-center mb-12 mt-4 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex justify-center mb-4">
                 <div className="w-12 h-[1px] bg-red-800/30 self-center"></div>
                 <span className="mx-4 text-xs font-bold tracking-[0.3em] uppercase text-red-900/60">Est. 2023</span>
                 <div className="w-12 h-[1px] bg-red-800/30 self-center"></div>
              </div>
              <h1 className="font-playfair text-6xl text-[#8B0000] mb-3 leading-tight">Bembu Land</h1>
              <p className="font-lora italic text-red-800/60 text-sm">A love story, curated.</p>
            </motion.div>
        </header>

        {/* --- FILM STRIP --- */}
        <div className="w-screen relative left-[calc(-50vw+50%)] mb-16">
          <div className="flex gap-6 overflow-x-auto px-8 pb-8 no-scrollbar snap-x snap-mandatory">
            <PhotoFrame src="/bembu-land/images/us.jpg" date="Since the start" caption="King & Queen" />
            <PhotoFrame src="/bembu-land/images/dog.jpg" date="Pure Joy" caption="The Guardian" />
            <PhotoFrame src="/bembu-land/images/her.jpg" date="My Heart" caption="Princess Bembu" />
            <div className="w-2 shrink-0"></div>
          </div>
          <div className="flex justify-center gap-2 mt-2">
            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="text-xs font-lora text-red-300 italic">
              Scroll to reminisce &rarr;
            </motion.div>
          </div>
        </div>

        {/* --- THE VOWS --- */}
        <div className="w-full mb-20">
          <AnimatePresence mode="wait">
            {!isLetterOpen ? (
              <motion.button 
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsLetterOpen(true)} 
                className="w-full bg-white shadow-[0_20px_40px_-15px_rgba(139,0,0,0.15)] p-1 rounded-sm border border-red-50 group"
              >
                <div className="border border-red-100 h-48 flex flex-col items-center justify-center relative overflow-hidden bg-[#FFFCF9]">
                  <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-red-200"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-red-200"></div>
                  <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center shadow-lg mb-4 group-hover:scale-105 transition-transform border-4 border-red-800/20">
                    <Heart fill="#e5e5e5" className="text-red-100" size={24} />
                  </div>
                  <span className="font-playfair text-2xl text-red-900">Read My Vows</span>
                </div>
              </motion.button>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: 10 }}
                className="bg-white w-full p-8 shadow-2xl rounded-sm border-t-4 border-red-900 relative"
              >
                <button onClick={() => setIsLetterOpen(false)} className="absolute top-4 right-4 text-red-300 hover:text-red-900 transition-colors"><X size={24} /></button>
                <div className="font-lora text-red-900/80 leading-relaxed space-y-4 text-lg">
                  <p className="font-bold text-red-900 text-3xl font-playfair mb-6">My Dearest Bembu,</p>
                  <p>Almost three years ago, you walked into my life and turned it into the most beautiful adventure.</p>
                  <p>Bembu Land isn't just a website; it’s a promise of all the years still to come.</p>
                  <div className="pt-8 border-t border-red-100 mt-8">
                     <p className="font-great-vibes text-4xl text-red-800">
                        Forever yours,<br/>
                        <span className="text-xl font-playfair text-red-400">Sahil</span>
                     </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- PROPOSAL --- */}
        <div className="w-full mb-24 relative z-20">
            <div className="text-center mb-8">
                <Sparkles className="text-red-300 mx-auto mb-2" />
                <h2 className="font-playfair text-4xl text-red-900">One Last Question</h2>
            </div>
            
            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-red-100 text-center relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-200 via-red-400 to-red-200"></div>
                 <p className="font-lora text-xl text-red-900/80 mb-8 italic">"Will you be my Valentine?"</p>
                 <div className="flex flex-col gap-4">
                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleYes}
                        className="w-full bg-red-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest shadow-lg shadow-red-900/20 hover:bg-red-800 transition-all flex items-center justify-center gap-2"
                    >
                        <Heart fill="white" size={18} /> Yes, Obviously
                    </motion.button>
                    <button 
                        onClick={handleNo}
                        className="w-full bg-white text-red-300 py-4 rounded-xl font-bold uppercase tracking-widest border border-red-100 hover:bg-red-50 transition-colors text-xs"
                    >
                        No (Don't click this)
                    </button>
                 </div>
            </div>
        </div>

        {/* --- ROYAL COURT --- */}
        <div className="w-full mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
             <div className="h-[1px] w-8 bg-red-200"></div>
             <h2 className="text-center font-playfair text-3xl text-red-900">The Royal Court</h2>
             <div className="h-[1px] w-8 bg-red-200"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <RoyalCard name="Princess Bembu" role="The Queen" image="/bembu-land/images/her.jpg" />
            <RoyalCard name="Bembu #2" role="The King" image="/bembu-land/images/me.jpg" />
            <RoyalCard name="Bembu #3" role="The Guardian" image="/bembu-land/images/dog.jpg" />
            <RoyalCard name="Bembu #4" role="The Legacy" image="//bembu-landimages/baby.jpg" />
          </div>
        </div>

        <footer className="text-center text-red-900/30 text-[10px] font-bold tracking-[0.2em] uppercase pb-8 font-lora">
          Established 2023
        </footer>

      </main>

      <AnimatePresence>
        {showError && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
                onClick={() => setShowError(false)}
            >
                <motion.div 
                    initial={{ scale: 0.8, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    className="bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center border-t-4 border-red-500"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
                        <AlertTriangle size={32} />
                    </div>
                    <h3 className="font-playfair text-2xl text-gray-900 mb-2">System Error 404</h3>
                    <p className="font-lora text-gray-600 mb-6">
                        Rejection not found. The "No" option is currently unavailable for this user. You are stuck with me forever.
                    </p>
                    <button 
                        onClick={() => setShowError(false)}
                        className="bg-gray-900 text-white px-6 py-3 rounded-lg font-bold w-full"
                    >
                        Okay, I accept my fate
                    </button>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

// --- FIXED COMPONENTS ---

function PhotoFrame({ src, date, caption }: any) {
  return (
    // FIX 1: Remove 'items-center' to prevent collapse
    <div className="snap-center shrink-0 w-[70vw] md:w-[350px] flex flex-col">
      {/* FIX 2: Add 'w-full' to force width */}
      <div className="w-full bg-white p-3 pb-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rotate-1 hover:rotate-0 transition-transform duration-500 border border-gray-100">
        <div className="h-[400px] w-full relative bg-gray-100">
          <Image src={src} alt={caption} fill className="object-cover" unoptimized />
          <div className="absolute inset-0 opacity-[0.1] bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')]"></div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="font-lora italic text-red-300 text-xs mb-1">{date}</p>
        <h3 className="font-playfair text-xl text-red-900">{caption}</h3>
      </div>
    </div>
  )
}

function RoyalCard({ name, role, image }: any) {
  return (
    <div className="bg-white border border-red-50 p-6 flex flex-col items-center justify-center gap-4 shadow-sm">
      <div className="w-20 h-20 relative rounded-full overflow-hidden ring-4 ring-red-50 transition-all duration-500">
         <Image src={image} alt={name} fill className="object-cover" unoptimized />
      </div>
      <div className="text-center">
        <h3 className="font-playfair font-bold text-base text-red-900 leading-tight">{name}</h3>
        <p className="text-[9px] uppercase font-bold tracking-widest text-red-300 mt-2 font-lora">{role}</p>
      </div>
    </div>
  );
}