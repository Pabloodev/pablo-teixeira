"use client";

import Link from "next/link";
import { Rocket, Sparkles } from 'lucide-react';
import { useState } from "react";
import { Button } from "@/app/ui/components/button";
import HTMLContent from "./ui/components/HTMLContent";
import {motion} from 'motion/react'


export default function Home() {
  const [htmlValue, setHtmlValue] = useState(0);

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
        duration: 5,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
    }}
>

    <div className="min-h-screen flex items-center justify-center flex-col space-y-4">
      <h1 className="text-5xl">Ready for this trip?</h1>
      <p className="text-xl text-blue-700">Fasten your seatbelts and let's go in search of the magnificent!</p>
      <HTMLContent onValueChange={setHtmlValue} />
      {htmlValue === 100 && (
        <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 5,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
    >
           <Button 
           className="cursor-pointer group relative overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-900 px-8 py-6 text-lg font-medium text-white shadow-lg transition-all duration-500 hover:shadow-purple-500/25 hover:scale-105"
         >
           <Link href="/home" className="flex items-center gap-2">
             <Rocket className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
             Começar viagem pelo portfolio
             <Sparkles className="h-4 w-4 animate-pulse" />
           </Link>
         </Button>
         </motion.div>
      )}
    </div>
    </motion.div>
  );
}
