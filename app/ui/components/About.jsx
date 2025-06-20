import { Minus, Square, X, ArrowRight, Mouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
        <h1 className="text-center text-3xl">
          Who are we talking <span className="text-red-700">about</span>?
        </h1>

        <div className="flex flex-col border-1 border-gray-400 max-w-[600px] items-center rounded-sm absolute right-130 top-30 cursor-grab">
          {/* Card picture */}
          <div className="border-1 border-gray-400  flex justify-between p-2 w-full items-center">
            <span>About Me</span>
            <div>
              <ul className="flex items-center space-x-4">
                <li>
                  <Minus size={15} />
                </li>
                <li>
                  <Square size={15} />
                </li>
                <li>
                  <X size={15} />
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4 flex flex-col space-y-4">
            <p>
              Hi, I'm{" "}
              <span className="text-red-700 font-medium">Pablo Teixeira</span>{" "}
              or pablodev, a fullstack{" "}
              <span className="text-red-700 font-medium">developer</span> and{" "}
              <span className="text-yellow-700 font-medium">
                problem solver
              </span>
              .
            </p>
            <p>
              I'm focused on{" "}
              <span className="text-green-700 font-medium">helping people</span>{" "}
              with lines of code and good projects.
            </p>
            <p>
              I like to build{" "}
              <span className="text-pink-700 font-medium">beautiful</span>{" "}
              interfaces and with animations everything gives such a{" "}
              <span className="text-orange-700 font-medium">modern</span> touch.
            </p>
            <p>
              I've been around{" "}
              <span className="text-yellow-300 font-medium">JavaScript</span>{" "}
              since the beginning, so I've had the opportunity to appreciate
              things like{" "}
              <span className="text-red-300 font-medium">React</span> and{" "}
              <span className="text-slate-300 font-medium">Next</span>, which
              have given me countless possibilities.
            </p>
            <p>
              I'm studying <span className="text-blue-300 font-medium">AI engineering</span> righ now...
            </p>
            
          </div>
        </div>

        <div className="flex flex-col border-1 border-gray-400 max-w-[200px] items-center rounded-sm absolute right-150 top-100 cursor-grab">
          {/* Card picture */}
          <div className="border-1 border-gray-400  flex justify-between p-2 w-full items-center">
            <span>Portrait</span>
            <div>
              <ul className="flex items-center space-x-4">
                <li>
                  <Minus size={15} />
                </li>
                <li>
                  <Square size={15} />
                </li>
                <li>
                  <X size={15} />
                </li>
              </ul>
            </div>
          </div>
          <Image
            src={"/ghibli.png"}
            width={200}
            height={100}
            alt="pablo teixeira picture"
          />
        </div>

        <div className="flex flex-col border-1 border-gray-400 max-w-[300px] items-center rounded-sm absolute left-80 top-50 cursor-grab">
          {/* Card picture */}
          <div className="border-1 border-gray-400 flex justify-between p-2 w-full items-center">
            <span>Where I work</span>
            <div>
              <ul className="flex items-center space-x-4">
                <li>
                  <Minus size={15} />
                </li>
                <li>
                  <Square size={15} />
                </li>
                <li>
                  <X size={15} />
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4 flex flex-col space-y-4">
            <p>Actually I work In <span className="text-blue-300 font-medium">São Paulo</span>, Brazil.</p>
            <p>I am part of the <span className="text-red-400 font-medium">Athon Telecom</span> team.</p>
            <p>I take on the role of <span className="text-yellow-400 font-medium">systems analyst</span>.</p>
          </div>
        </div>

        <div className="flex flex-col border-1 border-gray-400 max-w-[300px] items-center rounded-sm absolute right-300 cursor-grab top-110">
          {/* Card picture */}
          <div className="border-1 border-gray-400 flex justify-between p-2 w-full items-center gap-5">
            <span>Social Media</span>
            <div>
              <ul className="flex items-center space-x-4">
                <li>
                  <Minus size={15} />
                </li>
                <li>
                  <Square size={15} />
                </li>
                <li>
                  <X size={15} />
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4 flex flex-col space-y-4">
            <Link
              href={"https://github.com/Pabloodev"}
              className="hover:text-yellow-400 duration-700 flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <ArrowRight />
            </Link>
            <Link
              href={
                "https://github.com/https://www.linkedin.com/in/pabloteixeiraimproving/"
              }
              className="hover:text-blue-300 duration-700 flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin <ArrowRight />
            </Link>
            <Link
              href={"https://www.instagram.com/pablin_teixeira/"}
              className="hover:text-red-300 duration-700 flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
  )
}