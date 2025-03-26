"use client";

// I want to add a motion here that split my text and I cant create a history about my portfolio, something dinamic

export default function Page() {
  return (
    <div className="min-h-screen items-center justify-center flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <p>Hey, you</p>
        <p>Yeah, I'm talking with you!</p>
        <p>Are you prepared?</p>
        <p>For what?</p>
        <p>For the history!</p>
        <h1>
          Ready to embark on a story with lessons, sleepless nights and a few
          hours of coding errors?
        </h1>
        <p>Yeah but you have to promisse for me that you'll help me for pass the level, alright?</p>
      </div>

      <div className="flex items-center gap-5">
        <button className="bg-white text-black p-2 rounded-sm cursor-pointer">Allright!</button>
        <button className="bg-red-300 text-black p-2 rounded-sm cursor-pointer">No, I can't now.</button>
      </div>

    </div>
  );
}
