// Components
import CardProject from "./CardProject";
import Link from "next/link";
import { ArrowRight, Mouse } from "lucide-react";

export default function Projects() {
  return (
    <div className="min-h-screen overflow-x-hidden relative flex items-center flex-col space-y-20">
      <h1 className="text-center text-3xl">
        <span className="text-pink-300">Main</span> Projects
      </h1>

      <ul>
        <li>
          <CardProject />
        </li>
      </ul>

      <Link
        className="flex items-center gap-2 hover:text-blue-300 transition duration-700 ease-in-out"
        href={"/projects"}
      >
        <p>Discover all the projects</p>
        <ArrowRight />
      </Link>

      <div className="mt-10 flex flex-col items-center gap-5">
        <span>scroll to down</span>
        <Mouse className="animate-bounce" />
      </div>
    </div>
  );
}
