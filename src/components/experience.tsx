'use client';

import Image from "next/image";

export const Experience = () => {
  return (
    <div className="flex h-screen items-center justify-center gap-20 font-primary">
      <div className="flex max-w-[40rem]">
        <div className="relative w-fit">
          <div className="flex flex-col items-center justify-center h-full gap-8 pt-5">
            <div className="text-2xl font-bold rotate-270">2024</div>
            <div className="h-full border border-white" />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="text-3xl font-semibold">Front-End Development Class Mentor</div>
          <p className="text-xl">I mentored and delivered 13 online hands-on sessions covering front-end web development fundamentals. Taught topics including HTML, CSS, JavaScript, Git, Bootstrap, and React, helping students build their own interactive web projects.</p>
        </div>
      </div>
      <Image
        src="/mentor.png"
        alt="Mentor"
        width={600}
        height={400}
        draggable={false}
        className="rounded-xl hover:drop-shadow-xl drop-shadow-secondary"
      />
    </div>
  );
}