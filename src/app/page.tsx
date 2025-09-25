'use client';
import React, { useEffect } from "react";
import { Spotlight } from "@/components/ui/spotlight";
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
import { FaAnglesDown } from "react-icons/fa6";

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
      <Spotlight height={breakpoint == 'xs' ? 850 : breakpoint == 'md' ? 1000 : breakpoint == 'lg' ? 1200 : 1380} />
      <SocialMediaLinks />
      <ViewCVButton />
      <SideBar />
      {scrollIconOpacity > 0 && (
        <div className="fixed flex flex-col justify-end items-center bottom-[50px] left-0 right-0 space-y-3 transition duration-200 z-999" style={{ opacity: scrollIconOpacity / 100 }}>
          <div className="select-none text-xs">Scroll</div>
          <FaAnglesDown
            className="animate-pulse transition text-2xl cursor-pointer"
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
          imageUrl={"/chroma-war.webp"}
          logo={"/chroma_war_logo.webp"}
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
          imageUrl={"/next-sudoku.webp"}
          logo={"/next_sudoku_logo.webp"}
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
          imageUrl={"/seatudy.webp"}
          logo={"/seatudy_logo.webp"}
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