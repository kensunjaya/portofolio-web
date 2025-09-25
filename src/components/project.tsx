import { handleOpenUrl } from "@/lib/utilfunctions";
import CustomButton from "./custom-button";
import { TextRandomizerEffect } from "./ui/text-randomizer";
import Image from "next/image";

import { motion } from "framer-motion";
import { Breakpoint, TechStack } from "./interface/types";
import { useRouter } from "next/navigation";
import { LuScrollText } from "react-icons/lu";
import { RiExpandDiagonalLine } from "react-icons/ri";

export const Project = ({ title, description, imageUrl, link, number, breakpoint, techstacks, logo, project_story_path } : { title: string, description: string, imageUrl: string, link: string, number: number, breakpoint: Breakpoint, techstacks: TechStack[], logo: string, project_story_path?: string }) => {
  const techStackClasses: Record<TechStack, string> = {
    "React": "border-cyan-400 text-cyan-400",
    "Next.js": "border-indigo-300 text-indigo-300",
    "TypeScript": "border-blue-400 text-blue-400",
    "Node.js": "border-emerald-400 text-emerald-400",
    "Express": "border-gray-400 text-gray-400",
    "MongoDB": "border-green-400 text-green-400",
    "AWS": "border-yellow-400 text-yellow-400",
    "PostgreSQL": "border-pink-400 text-pink-400",
    "Figma": "border-purple-400 text-purple-400",
    "Socket.io": "border-orange-400 text-orange-400"
  };

  const navigator = useRouter();

  return (
    <motion.div 
      initial={{ opacity: 0, x: number % 2 === 0 ? 50 : -50 }}
      animate={{ opacity: 1, x: 0 }}  
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-screen portrait:my-15 [@media(max-width:400px)]:portrait:pl-10 [@media(max-width:400px)]:portrait:pr-5" id={`project${number}`}
    >
      <div className={`flex landscape:flex-row portrait:flex-col items-center justify-center h-full landscape:gap-5 portrait:gap-10`}>
        <div className="flex-col space-y-8 max-w-[350px] xl:max-w-[550px] portrait:px-4">
          <div className="font-bold text-xl select-none">
            <span className="text-secondary mr-3">{"//"}</span>
            <span>{number}</span>
          </div>
          <div className="flex gap-5 items-center">
            <Image src={logo} alt={title} width={50} height={50} />
            <TextRandomizerEffect className="portrait:text-3xl landscape:text-5xl font-semibold whitespace-nowrap" words={title} placeholder={true} />
          </div>
          <span className="text-lg md:text-xl xl:text-2xl text-cfgray leading-[1.5] font-inter">{description}</span>
          <div className="flex flex-row flex-wrap gap-3 mt-10 text-sm md:text-md lg:text-lg">
            {techstacks.map((tech) => (
              <div
                key={tech}
                className={`outline-1 md:outline-2 rounded-full w-fit px-3 font-inter py-1 ${techStackClasses[tech]}`}
              >
                {tech}
              </div>
            ))}
          </div>
          <div className="flex portrait:flex-col">
            <CustomButton onClick={() => handleOpenUrl(link)} className="portrait:w-full">
              <div className="flex items-center justify-center gap-2 font-semibold">
                <RiExpandDiagonalLine className="text-xl" />
                <span>View Project</span>
              </div>
            </CustomButton>
            {
              project_story_path && (
                <CustomButton onClick={() => navigator.push(project_story_path)} className="portrait:w-full landscape:ml-10 portrait:mt-5" backgroundColor="bg-indigo-200" fillColor="bg-indigo-300">
                  <div className="flex items-center justify-center gap-2 font-semibold">
                    <LuScrollText className="text-xl" />
                    <span>Read Full Story</span>
                  </div>
                </CustomButton>
              )
            }
          </div>
        </div>
        <div className="flex items-center justify-center select-none">
          <Image 
            src={imageUrl} 
            alt={title} 
            width={breakpoint === 'xs' ? 300 : breakpoint === "sm" ? 350 : breakpoint === "md" ? 400 : breakpoint === "lg" ? 450 : 500} 
            height={0}
            style={{ height: "auto" }}
            draggable={false} 
          />
        </div>
      </div>
    </motion.div>
  );
};
