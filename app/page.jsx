"use client";
import Link from "next/link";

import { useState, useEffect } from "react";
import { Button } from "@/app/ui/components/button";
import HTMLContent from "./ui/components/HTMLContent";

export default function Home() {
  const [htmlValue, setHtmlValue] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center flex-col space-y-4 bg-gradient-to-b from-gray-900 to-black">
      <h1 className="text-5xl font-medium">Hey! ready to start your journey into my world?</h1>
      <span className="text-3xl text-[#4ff0b7]">Put on your seatbelt and you're about to begin!</span>
      <HTMLContent onValueChange={setHtmlValue} />
      {htmlValue === 100 && (
        <Button className="cursor-pointer duration-700 ease-in-out p-5 transition hover:bg-[#4ff0b7]">
          <Link href={"/home"}>Começar viagem pelo portfolio</Link>
        </Button>
      )}
    </div>
  );
}
