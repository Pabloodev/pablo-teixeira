'use client'

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 sm:px-20 lg:px-40 mt-5">
      <div className="flex items-center gap-2">
        <p>pablodev.</p>
      </div>

      <button
        className="sm:hidden text-gray-300"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <Link href="/work" className="hidden sm:block">
        <button
          className="bg-black text-gray-300 hover:text-white px-4 py-2 rounded rounded-lg duration-700 cursor-pointer"
        >
          Work with me
        </button>
      </Link>
    </header>
  );
}
