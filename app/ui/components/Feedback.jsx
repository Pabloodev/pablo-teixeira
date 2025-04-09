import { Minus, Square, X, ArrowRight, Mouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Feedback(){
  return (
    <div className="min-h-screen overflow-x-hidden relative flex items-center flex-col space-y-20">
        <h1 className="text-center text-3xl">
          <span className="text-red-700">Nice</span> things people say about me
          and my work
        </h1>

        <div className="flex flex-col border-1 border-gray-400 max-w-[600px] items-center rounded-sm right-130 top-30">
          <div className="border-1 border-gray-400  flex justify-between p-2 w-full items-center">
            <span>Testimonial</span>
          </div>
          <div className="flex flex-col space-y-4 p-8">
            <div className="flex items-center space-x-4">
              <Image
                className="rounded-full"
                src={"/vitoria.jpg"}
                width={60}
                height={60}
                alt="Avatar Testimonial"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente dolorum accusamus molestiae illum quae itaque numquam
                magni doloremque eaque sit tempore, corrupti voluptatibus
                necessitatibus! Delectus necessitatibus sint fuga assumenda
                dolor.
              </p>
            </div>
            <p className="text-orange-200">
              Vitória Lopes{" "}
              <span className="text-gray-400">
                // Technical sector supervisor
              </span>
            </p>
          </div>
        </div>
      </div>
  )
}