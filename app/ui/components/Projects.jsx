// Components
import CardProject from "./CardProject";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <div className="min-h-screen overflow-x-hidden relative flex items-center flex-col space-y-20">
      <h1 className="text-center text-3xl">
        <span className="text-red-700">Main</span> Projects
      </h1>

      <CardProject />

      <Link className="flex items-center gap-2 hover:text-blue-300 transition duration-700 ease-in-out" href={'/projects'}>
      <p>Discover all the projects</p>
      <ArrowRight />
      </Link>
    </div>
  );
}
