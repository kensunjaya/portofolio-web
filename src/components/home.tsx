'use client';
import { useState } from "react";
import { RoleAnimator } from "./role-animator";
import { TechStackSlider } from "./ui/techstack-slider";
import { TextGenerateEffect } from "./ui/text-generation.effect";
import { TextRandomizerEffect } from "./ui/text-randomizer";

export const HomeSection = () => {
  const [techStackOpacity, setTechStackOpacity] = useState(0);

  const setOpacity = (opacity: number) => {
    setTechStackOpacity(opacity);
  };
  
  return (
    <div className="h-screen" id="home">
      <div className="flex flex-col items-center justify-center h-full text-white text-4xl">
        <div className="space-y-4">
          <TextRandomizerEffect words="KENNETH SUNJAYA" className="tracking-widest text-white" callback={(opacity: number) => { setOpacity(opacity); return opacity; }} />
          <div className="min-w-[50rem]">
            <RoleAnimator />
          </div>
          <TextGenerateEffect words={'"Full-stack & cross-platform development, built for performance and impact."'} className="tracking-widest text-lg text-cfgray" duration={0.2} delay={0.15} />
          <TechStackSlider className="mt-10" style={{ opacity: techStackOpacity / 100 }} />
        </div>
      </div>
    </div>
  );
};
