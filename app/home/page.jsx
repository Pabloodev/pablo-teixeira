'use client'

import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3, bounce: 0.5 }} // Removi "scale" da transition
    >
      <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
        <div className="flex flex-col items-center">
          <span className="bg-gray-300 w-[1px] h-[40px]"></span>
          <span className="text-gray-300">HOME</span>
        </div>

        <h1 className="text-4xl text-center">
          Hi! I'm Pablodev, a problem solver, fullstack developer and{" "}
          <span className="text-blue-700">passionate</span> about what I do!
        </h1>
        <p>Focused on solving problems and helping other people through my lines of code.</p>
      </div>
    </motion.div>
  );
}
