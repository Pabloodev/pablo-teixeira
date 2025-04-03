import { Mouse } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">

      {/* This could be a liitle strange, but it's just a title with colors in key words */}
      <h1 className="text-3xl text-center">
        Hi! I'm Pablo Teixeira, a problem{" "}
        <span className="text-blue-300">solver</span>, fullstack{" "}
        <span className="text-green-300">developer</span>,{" "}
        <span className="text-red-300">AI</span> engineer and{" "}
        <span className="text-orange-300">passionate</span> about what I do!
      </h1>

      <p className="text-lg text-gray-300">
        Focused on solving problems and helping other people through my lines of
        code.
      </p>

      <div className="mt-10 flex flex-col items-center gap-5">
        <span>scroll to down</span>
        <Mouse className="animate-bounce" />
      </div>
    </div>
  );
}
