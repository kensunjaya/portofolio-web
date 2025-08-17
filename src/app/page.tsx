'use client';
import React, { useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import { SideBar } from "@/components/sidebar";
import { handleScrollTo } from "@/lib/utilfunctions";
import { Project } from "@/components/project";
import { Experience } from "@/components/experience";
import { ContactSection } from "@/components/contact";
import { HomeSection } from "@/components/home";
import { LazySection } from "@/components/ui/lazy-section";
import { ViewCVButton } from "@/components/ui/curriculum-vitae";
import { SocialMediaLinks } from "@/components/ui/social-media";
import { useTailwindBreakpoint } from "@/components/hooks/breakpoint";

function Home() {
  const [scrollIconOpacity, setScrollIconOpacity] = React.useState(0);
  const handleScroll = () => {
    setScrollIconOpacity(100 - window.scrollY);
  };

  const { breakpoint } = useTailwindBreakpoint();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="w-full min-h-screen overflow-hidden">
      <Spotlight />
      <SocialMediaLinks />
      <ViewCVButton />
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
      <LazySection id="home">
        <HomeSection />
      </LazySection>

      <LazySection id="project1">
        <Project
          title={'Chroma War'}
          description={"A fast-paced two-player chain reaction strategy game. Challenge friends online or test your skills against a smart AI opponent!"}
          imageUrl={"/chroma-war.svg"}
          link={"https://chroma-war.vercel.app"}
          number={1}
          breakpoint={breakpoint}
          techstacks={['Next.js', 'TypeScript', 'Node.js', 'Socket.io']}
        />
      </LazySection>

      <LazySection id="project2">
        <Project
          title={'NExT Sudoku'}
          description={"A modern take on the classic Sudoku puzzle, featuring a puzzle generation algorithm that creates unique puzzles for endless gameplay."}
          imageUrl={"/next-sudoku.svg"}
          link={"https://next-sudoku-web.vercel.app"}
          number={2}
          breakpoint={breakpoint}
          techstacks={['Next.js', 'TypeScript', 'Node.js', 'AWS']}
        />
      </LazySection>
      <LazySection id="project3">
        <Project
          title={'SEATUDY'}
          description={"An online learning platform that is designed to enhance the learning experience through materials and resources tailored to individual student needs."}
          imageUrl={"/seatudy.svg"}
          link={"https://seatudy-real.vercel.app"}
          number={3}
          breakpoint={breakpoint}
          techstacks={['Next.js', 'TypeScript', 'PostgreSQL', 'Express', 'Figma']}
        />
      </LazySection>
      <LazySection id="experience">
        <Experience />
      </LazySection>
      <LazySection id="contact">
        <ContactSection />
      </LazySection>
    </main>
  );
}

export default Home;