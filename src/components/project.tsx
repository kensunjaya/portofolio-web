import { handleOpenUrl } from "@/lib/utilfunctions";
import CustomButton from "./custom-button";
import { TextRandomizerEffect } from "./ui/text-randomizer";
import Image from "next/image";

export const Project = ({title, description, imageUrl, link, number} : {title: string, description: string, imageUrl: string, link: string, number: number}) => {
  return (
    <div className="h-screen" id={`project${number}`}>
      <div className="flex items-center justify-center h-full space-x-10">
        <div className="flex-col space-y-8 max-w-[800px]">
          <div className="font-bold text-xl select-none">
            <span className="text-secondary mr-3">{"//"}</span>
            <span>{number}</span>
          </div>
          <TextRandomizerEffect className="text-5xl font-semibold" words={title} placeholder={true} />
          <p className="text-3xl">{description}</p>
          <CustomButton onClick={() => handleOpenUrl(link)}>
            {"Try Now"}
          </CustomButton>
        </div>
        <div className="flex items-center justify-center select-none">
          <Image src={imageUrl} alt={title} width={800} height={800} draggable={false} />
        </div>
      </div>
    </div>
  );
};
