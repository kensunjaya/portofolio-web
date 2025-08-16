import { handleOpenUrl } from "@/lib/utilfunctions";
import CustomButton from "./custom-button";
import { TextRandomizerEffect } from "./ui/text-randomizer";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";

import { motion } from "framer-motion";

export const Project = ({title, description, imageUrl, link, number} : {title: string, description: string, imageUrl: string, link: string, number: number}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}  
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="h-screen" id={`project${number}`}
    >
      <div className="flex items-center justify-center h-full space-x-10">
        <div className="flex-col space-y-8 max-w-[800px]">
          <div className="font-bold text-xl select-none">
            <span className="text-secondary mr-3">{"//"}</span>
            <span>{number}</span>
          </div>
          <TextRandomizerEffect className="text-5xl font-semibold" words={title} placeholder={true} />
          <p className="text-3xl text-cfgray">{description}</p>
          <CustomButton onClick={() => handleOpenUrl(link)}>
            <div className="flex items-center justify-center gap-2">
              <span>View Project</span>
              <MdOutlineArrowOutward className="text-xl" />
            </div>
          </CustomButton>
        </div>
        <div className="flex items-center justify-center select-none">
          <Image src={imageUrl} alt={title} width={600} height={600} draggable={false} />
        </div>
      </div>
    </motion.div>
  );
};
