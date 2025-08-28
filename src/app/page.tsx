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
    setScrollIconOpacity(80 - window.scrollY);
  };

  const { breakpoint } = useTailwindBreakpoint();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
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
        <div className="fixed flex flex-col justify-end items-center bottom-20 left-0 right-0 space-y-3 transition duration-200 z-999" style={{ opacity: scrollIconOpacity / 100 }}>
          <div className="select-none text-xs">Scroll</div>
          <Image
            src="/scroll.gif"
            alt="Scroll"
            width={50}
            height={50} 
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
          imageUrl={"/chroma-war.png"}
          logo={"/chroma_war_logo.png"}
          link={"https://chroma-war.vercel.app"}
          number={1}
          breakpoint={breakpoint}
          techstacks={['Next.js', 'TypeScript', 'Node.js', 'Socket.io']}
          project_story_path={"/projects/chroma-war"}
        />
      </LazySection>

      <LazySection id="project2">
        <Project
          title={'NExT Sudoku'}
          description={"A modern take on the classic Sudoku puzzle, featuring a puzzle generation algorithm that creates unique puzzles for endless gameplay."}
          imageUrl={"/next-sudoku.png"}
          logo={"/next_sudoku_logo.png"}
          link={"https://next-sudoku-web.vercel.app"}
          number={2}
          breakpoint={breakpoint}
          techstacks={['Next.js', 'TypeScript', 'Node.js', 'AWS']}
          project_story_path={"/projects/next-sudoku"}
        />
      </LazySection>
      <LazySection id="project3">
        <Project
          title={'SEATUDY'}
          description={"An online learning platform that is designed to enhance the learning experience through materials and resources tailored to individual student needs."}
          imageUrl={"/seatudy.png"}
          logo={"/seatudy_logo.png"}
          link={"https://github.com/Filbert88/seatudy"}
          number={3}
          breakpoint={breakpoint}
          techstacks={['Next.js', 'TypeScript', 'PostgreSQL', 'Express', 'Figma']}
          project_story_path={"/projects/seatudy"}  
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