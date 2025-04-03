import { Minus, Square, X, ArrowRight, Mouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen overflow-x-hidden relative flex items-center flex-col space-y-20">
        <h1 className="text-center text-3xl">
          <span className="text-red-700">Main</span> Projects
        </h1>

        <div className=" h-[300px] border-1 border-gray-400 p-10 flex gap-10">
          <div className="flex flex-col space-y-2">
            <h2 className="text-4xl">OS Rescheduling</h2>
            <div>
              <ul className="flex gap-5 text-red-500">
                <li>React</li>
                <li>Tailwind.css</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div>
              <p className="text-gray-300 max-w-[250px]">
                Project created to optimize a process in my sector, it automates
                the report of customers absent on the day.
              </p>
            </div>
            <div className="flex gap-5">
              <Link
                className="hover:text-red-700 transition duration-700"
                href={""}
              >
                Deploy
              </Link>
              <Link
                className="hover:text-red-700 transition duration-700"
                href={""}
              >
                Repositore
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={"/rescheduling.png"}
              width={400}
              height={400}
              alt="Photo Project"
              className="border-1 border-white"
            />
          </div>
        </div>
      </div>
  )
}