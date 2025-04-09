import { Minus, Square, X, ArrowRight, Mouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Techs() {
  return (
    <div className="min-h-screen overflow-x-hidden relative flex items-center flex-col space-y-20">
        <h1 className="text-center text-3xl">
          Some of the techs I like to <span className="text-green-300">work</span>{" "}
          with
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

        <div className="mt-10 flex flex-col items-center gap-5">
        <span>scroll to down</span>
        <Mouse className="animate-bounce" />
      </div>
      </div>
  )
}