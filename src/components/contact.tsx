import Image from "next/image";
import CustomButton from "./custom-button";
import { TextRandomizerEffect } from "./ui/text-randomizer";
import { IoSend } from "react-icons/io5";
import { useEffect, useState } from "react";

export const ContactSection = () => {
  const [openMessagePage, setOpenMessagePage] = useState(false);

  useEffect(() => {
    if (openMessagePage) {
      setTimeout(() => {
        window.location.href = "/send-message";
      }, 500)
    }
  }, [openMessagePage]);

  return (
    <div className={`flex flex-row items-center justify-center h-screen gap-20 transition-opacity ${openMessagePage ? "opacity-0" : "opacity-100"}`} id="contact">
      <Image 
        src="/profile_enhanced.jpg"
        alt="Your Image Description"
        width={400}
        height={500}
      />
      <div className="flex flex-col max-w-[40rem]">
        <TextRandomizerEffect className="text-5xl font-semibold" words={"Hello World!"} placeholder />
        <p className="text-lg mb-8 text-cfgray mt-5">{"I'm Kenneth, an Undergraduate Computer Science student at Binus University, currently based in Indonesia. I'm deeply passionate about turning ideas into reality through code, and over the years I've built a diverse portfolio of projects spanning Front-end Development, Mobile App Development, and Back-end Development. Both as part of a team and independently."}</p>
        <p className="text-lg mb-8 text-cfgray">{"Beyond just writing code, I enjoy exploring clean design, intuitive user experiences, and scalable architectures. My journey has been fueled by curiosity, problem-solving, and a drive to create technology that's not only functional, but also meaningful."}</p>
        <CustomButton onClick={() => setOpenMessagePage(true)}>
          <div className="flex items-center justify-center gap-2">
            <IoSend className="text-xl" />
            <div>Send me a message</div>
          </div>
        </CustomButton>
      </div>
    </div>
  );
};
