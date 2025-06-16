import { Minus, Square, X, ArrowRight, FileUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
        <h1 className="text-center text-3xl">
          Let's work <span className="text-purple-400">together?</span>?
        </h1>

        <div className="flex flex-col border-1 border-gray-400 max-w-[600px] items-center rounded-sm absolute right-130 top-30 cursor-grab">
          {/* Card picture */}
          <div className="border-1 border-gray-400  flex justify-between p-2 w-full items-center">
            <span>Why do I want to be part of your team?</span>
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
              I'm very <span className="text-red-400 font-medium">productive</span> in both, but I feel more creative working from <span className="text-yellow-400 font-medium">home</span>.
            </p>
            <p>
              I'm very excited to <span className="text-orange-400 font-medium">learn</span> everything about <span className="text-green-200 font-medium">AI</span> so I've been jumping headfirst into this area.
            </p>
            <p>
              I love <span className="text-pink-400 font-medium">working in a team</span> and solving problems, inside and outside of it, <span className="text-blue-200 font-medium">this excites me!</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col border-1 border-gray-400 max-w-[300px] items-center rounded-sm absolute left-80 top-50 cursor-grab">
          {/* Card picture */}
          <div className="border-1 border-gray-400 flex justify-between p-2 w-full items-center gap-5">
            <span>Main information</span>
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
              className="hover:text-yellow-400 duration-700 flex items-center gap-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Whatsapp</span>
              <ArrowRight />
            </Link>
            <Link
              href={"https://github.com/Pabloodev"}
              className="hover:text-yellow-400 duration-700 flex items-center gap-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Linkedin</span>
              <ArrowRight />
            </Link>
            <Link
              href={"https://github.com/Pabloodev"}
              className="hover:text-yellow-400 duration-700 flex items-center gap-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Github</span>
              <ArrowRight />
            </Link>
            
          </div>
        </div>

        <div className="flex flex-col border-1 border-gray-400 max-w-[300px] items-center rounded-sm absolute right-300 cursor-grab top-110">
          {/* Card picture */}
          <div className="border-1 border-gray-400 flex justify-between p-2 w-full items-center gap-5">
            <span>Curriculum</span>
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
              className="hover:text-yellow-400 duration-700 flex items-center gap-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Clique aqui para visualizar</span>
              <ArrowRight />
            </Link>
            
          </div>
        </div>
      </div>
  )
}