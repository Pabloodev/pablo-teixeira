'use client'

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navData = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "Serviços",
      href: "#services",
    },
    {
      title: "Sobre",
      href: "#about",
    },
    // {
    //   title: "Blog",
    //   href: "https://pabloodev.github.io/blog-athon-networks/",
    // },
    {
      title: "Contato",
      href: "#contact",
    },
  ];

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

      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } sm:flex absolute sm:static top-16 left-0 w-full sm:w-auto bg-zinc-900 sm:bg-transparent p-4 sm:p-0 shadow-lg sm:shadow-none rounded sm:rounded-none z-40`}
      >
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center text-gray-300">
          {navData.map((item, index) => (
            <li key={index}>
              <a
                className="hover:text-white transition duration-300 ease-in-out"
                href={item.href}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a href="#contact" className="hidden sm:block">
        <button
          className="bg-black hover:bg-white hover:text-black text-white px-4 py-2 rounded rounded-lg duration-700 cursor-pointer border-1 border-gray-400 shadow-white shadow-xs
"
        >
          Work with me
        </button>
      </a>
    </header>
  );
}
