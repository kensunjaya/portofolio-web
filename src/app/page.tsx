'use client';
import React, { useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generation.effect";
import { TextRandomizerEffect } from "@/components/ui/text-randomizer";
import Image from "next/image";
import { SideBar } from "@/components/sidebar";
import { handleScrollTo } from "@/lib/utilfunctions";
import { Project } from "@/components/project";
import { TechStackSlider } from "@/components/ui/techstack-slider";
import { RoleAnimator } from "@/components/role-animator";
import { Experience } from "@/components/experience";
import { ContactSection } from "@/components/contact";

function Home() {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [techStackOpacity, setTechStackOpacity] = React.useState(0);
  const [scrollIconOpacity, setScrollIconOpacity] = React.useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    setScrollIconOpacity(100 - window.scrollY);
    setTechStackOpacity(1000 - window.scrollY);
    console.log("Scroll Position:", window.scrollY);
  };

  const setOpacity = (opacity: number) => {
    setScrollIconOpacity(opacity);
    setTechStackOpacity(opacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="w-full min-h-screen overflow-hidden">
      <Spotlight />
      <SideBar />
      {scrollIconOpacity > 0 && (
        <div className="fixed w-full h-screen flex flex-col justify-end items-center bottom-20 space-y-3 transition duration-200" style={{ opacity: scrollIconOpacity / 100 }}>
          <div className="select-none">Scroll</div>
          <Image
            src="/scroll.gif"
            alt="Scroll"
            width={60}
            height={60} 
            className="cursor-n-resize"
            draggable={false}
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#project1");
            }}
          />
        </div>
      )}
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center h-full text-white text-4xl">
          <div className="space-y-4">
            <TextRandomizerEffect words="KENNETH SUNJAYA" className="tracking-widest text-white" callback={(opacity: number) => { setOpacity(opacity); return opacity; }} />
            <div className="min-w-[50rem]">
              <RoleAnimator />
            </div>
            <TextGenerateEffect words={'"Building interactive web experiences with modern technologies"'} className="tracking-widest text-lg text-cfgray" duration={0.2} delay={0.15} />
            <TechStackSlider className="mt-10" style={{ opacity: techStackOpacity / 100 }} />
          </div>
        </div>
      </div>
      <Project
        title={'Chroma War'}
        description={"A fast-paced two-player chain reaction strategy game. Challenge friends online or test your skills against a smart AI opponent!"}
        imageUrl={"/chroma-war.svg"}
        link={"https://chroma-war.vercel.app"}
        number={1}
      />
      <Project
        title={'NExT Sudoku'}
        description={"A modern take on the classic Sudoku puzzle, featuring an intuitive interface and challenging AI."}
        imageUrl={"/next-sudoku.svg"}
        link={"https://next-sudoku-web.vercel.app"}
        number={2}
      />
      <Experience />
      <ContactSection />
    </main>
  );
}

export default Home;