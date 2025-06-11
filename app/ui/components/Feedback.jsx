import Image from "next/image";
import { feedbacks } from "@/app/data/feedbacks";

export default function Feedback() {
  return (
    <div className="min-h-screen overflow-x-hidden relative flex items-center flex-col space-y-20">
      <h1 className="text-center text-3xl">
        <span className="text-red-700">Nice</span> things people say about me
        and my work
      </h1>

      <p className="text-center"></p>

      <div className="flex items-center rounded-sm gap-10">
        {feedbacks.map((feed, index) => (
          <div
            key={index}
            className="w-[500px] h-[300px] border-1 border-gray-400 flex flex-col space-y-4 p-8 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <Image
                className="rounded-full"
                src={feed.avatar}
                width={40}
                height={40}
                alt="Avatar Testimonial"
              />
              <p>{feed.content}</p>
            </div>
            <p className="text-orange-200">
              {feed.name} <span className="text-gray-400">// {feed.role}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
