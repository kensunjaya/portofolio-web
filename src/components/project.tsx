import { handleOpenUrl } from "@/lib/utilfunctions";
import CustomButton from "./custom-button";
import { TextRandomizerEffect } from "./ui/text-randomizer";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";

import { motion } from "framer-motion";
import { Breakpoint, TechStack } from "./interface/types";

export const Project = ({ title, description, imageUrl, link, number, breakpoint, techstacks, logo } : { title: string, description: string, imageUrl: string, link: string, number: number, breakpoint: Breakpoint, techstacks: TechStack[], logo: string }) => {
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


  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-screen" id={`project${number}`}
    >
      <div className={`flex landscape:flex-row portrait:flex-col items-center justify-center h-full gap-10`}>
        <div className="flex-col space-y-8 max-w-[350px] xl:max-w-[800px] portrait:px-4">
          <div className="font-bold text-xl select-none">
            <span className="text-secondary mr-3">{"//"}</span>
            <span>{number}</span>
          </div>
          <div className="flex gap-5 items-center">
            <Image src={logo} alt={title} width={50} height={50} />
            <TextRandomizerEffect className="portrait:text-4xl landscape:text-5xl font-semibold" words={title} placeholder={true} />
          </div>
          <p className="text-xl md:text-2xl xl:text-3xl text-cfgray">{description}</p>
            <div className="flex flex-row flex-wrap gap-2">
            {techstacks.map((tech) => (
              <div
                key={tech}
                className={`border rounded-full w-fit px-3 py-1 ${techStackClasses[tech]}`}
              >
                {tech}
              </div>
            ))}
            </div>
          <CustomButton onClick={() => handleOpenUrl(link)} className="portrait:w-full">
            <div className="flex items-center justify-center gap-2">
              <span>View Project</span>
              <MdOutlineArrowOutward className="text-xl" />
            </div>
          </CustomButton>
        </div>
        <div className="flex items-center justify-center select-none">
          <Image 
            src={imageUrl} 
            alt={title} 
            width={breakpoint === 'xs' ? 300 : breakpoint === "sm" ? 350 : breakpoint === "md" ? 400 : breakpoint === "lg" ? 450 : 600} 
            height={0}
            style={{ height: "auto" }}
            draggable={false} 
          />
        </div>
      </div>
    </motion.div>
  );
};
