"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  House,
  User,
  LaptopMinimal,
  Minus,
  Square,
  X,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, bounce: 0.5 }}
      >
        <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
          <div className="flex flex-col items-center space-y-8">
            <span className="bg-blue-700 h-[100px] w-[1px]"></span>
            <span className="text-gray-400">HOME</span>
          </div>

          <h1 className="text-4xl text-center">
            Hi! I'm Pablodev, a problem solver, fullstack developer and{" "}
            <span className="text-blue-700">passionate</span> about what I do!
          </h1>
          <p>
            Focused on solving problems and helping other people through my
            lines of code.
          </p>

          <span className="bg-blue-700 h-[150px] w-[1px]"></span>
        </div>
      </motion.div>

      <div className="min-h-screen overflow-x-hidden relative">
        <h1 className="text-center text-3xl">
          Who are we talking <span className="text-blue-700">about</span>?
        </h1>

        <motion.div drag>
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
                <span className="text-blue-700 font-medium">developer</span> and{" "}
                <span className="text-yellow-700 font-medium">
                  problem solver
                </span>
                !
              </p>
              <p>
                I'm focused on{" "}
                <span className="text-green-700 font-medium">
                  helping people
                </span>{" "}
                with lines of code and good projects.
              </p>
              <p>
                I like to build{" "}
                <span className="text-pink-700 font-medium">beautiful</span>{" "}
                interfaces and with animations everything gives such a{" "}
                <span className="text-orange-700 font-medium">modern</span>{" "}
                touch.
              </p>
              <p>
                I've been around{" "}
                <span className="text-yellow-300 font-medium">JavaScript</span>{" "}
                since the beginning, so I've had the opportunity to appreciate
                things like{" "}
                <span className="text-blue-300 font-medium">React</span> and{" "}
                <span className="text-slate-300 font-medium">Next</span>, which
                have given me countless possibilities.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div drag>
          <div className="flex flex-col border-1 border-gray-400 max-w-[200px] items-center rounded-sm absolute right-150 top-95 cursor-grab">
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
              src={"/pabloteixeira.png"}
              width={200}
              height={100}
              alt="pablo teixeira picture"
            />
          </div>
        </motion.div>
        <motion.div drag>
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
              <p>Actually I work In São Paulo, Brazil.</p>
              <p>I am part of the athon telecom team.</p>
              <p>I take on the role of systems analyst</p>
            </div>
          </div>
        </motion.div>
        <motion.div drag>
          <div className="flex flex-col border-1 border-gray-400 max-w-[300px] items-center rounded-sm absolute right-260 cursor-grab top-110">
            {/* Card picture */}
            <div className="border-1 border-gray-400 flex justify-between p-2 w-full items-center">
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
                className="hover:text-blue-700 duration-700 flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github <ArrowRight />
              </Link>
              <Link
                href={
                  "https://github.com/https://www.linkedin.com/in/pabloteixeiraimproving/"
                }
                className="hover:text-blue-700 duration-700 flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin <ArrowRight />
              </Link>
              <Link
                href={"https://www.instagram.com/pablin_teixeira/"}
                className="hover:text-blue-700 duration-700 flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram <ArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="min-h-screen overflow-x-hidden relative flex items-center flex-col space-y-20">
        <span className="bg-blue-700 h-[100px] w-[1px]"></span>

        <h1 className="text-center text-3xl">
          Some of the techs I like to{" "}
          <span className="text-blue-700">work</span> with
        </h1>
        <div className="flex flex-col border-1 border-gray-400 max-w-[500px] items-center rounded-smright-260 ">
          {/* Card picture */}
          <div className="border-1 border-gray-400 flex justify-between p-2 w-full items-center">
            <span>Techs</span>
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
          <div className="p-4 flex flex-wrap gap-5 items-center justify-center">
            <div className="flex items-center space-x-4">
              <Image src={"/next.svg"} alt="next icon" width={30} height={30} />
              <p className="font-medium text-xl text-gray-400">Next</p>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src={"/react.svg"}
                alt="react icon"
                width={30}
                height={30}
              />
              <p className="font-medium text-xl text-gray-400">React</p>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src={"/tailwind.svg"}
                alt="Tailwind icon"
                width={30}
                height={30}
              />
              <p className="font-medium text-xl text-gray-400">Tailwind</p>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src={"/tailwind.svg"}
                alt="Tailwind icon"
                width={30}
                height={30}
              />
              <p className="font-medium text-xl text-gray-400">Tailwind</p>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src={"/javascript.svg"}
                alt="Javascript icon"
                width={30}
                height={30}
              />
              <p className="font-medium text-xl text-gray-400">JS</p>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src={"/firebase.svg"}
                alt="Firebase icon"
                width={30}
                height={30}
              />
              <p className="font-medium text-xl text-gray-400">Firebase</p>
            </div>
          </div>
        </div>
        <p className="text-gray-400">
          *I use other tools, mainly animation tools, but I decided to put the
          main ones in this container.
        </p>
      </div>
      <div className="min-h-screen overflow-x-hidden relative flex items-center flex-col space-y-20">
        <span className="bg-blue-700 h-[100px] w-[1px]"></span>

        <h1 className="text-center text-3xl">
          <span className="text-blue-700">Nice</span> things people say about me and my
          work
        </h1>
      </div>
    </div>
  );
}
