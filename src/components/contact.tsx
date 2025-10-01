/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import CustomButton from "./custom-button";
import { TextRandomizerEffect } from "./ui/text-randomizer";
import { IoSend } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useTailwindBreakpoint } from "./hooks/breakpoint";

export const ContactSection = () => {
  const [openMessagePage, setOpenMessagePage] = useState(false);

  const { breakpoint, orientation } = useTailwindBreakpoint();

  const router = useRouter();

  useEffect(() => {
    if (openMessagePage) {
      setTimeout(() => {
        router.push("/send-message");
      }, 500);
    }
  }, [openMessagePage]);

  return (
    <div className="min-h-screen flex items-center justify-center" id="contact">
      {
        orientation === 'landscape' ? (
          <div className={`flex flex-row items-center justify-center gap-10 xl:gap-20 transition-opacity ${openMessagePage ? "opacity-0" : "opacity-100"}`}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              <motion.div 
                className="absolute rotate-270 left-[-170px] top-[100px] my-5 italic text-6xl font-primary font-bold drop-shadow-[0_1.1px_1.1px_rgba(1,1,1,1)] z-999"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              >
                {"DEVELOPER"}
              </motion.div>
              <Image
                src="/profile_enhanced.webp"  
                alt="Kenneth Sunjaya"
                draggable={false}
                width={400}
                height={0}
                style={{ height: "auto" }}
              />
            </motion.div>
            <div className="flex flex-col max-w-[350px] lg:max-w-[400px] xl:max-w-[550px]">
              <TextRandomizerEffect className="text-2xl md:text-3xl lg:text-5xl font-semibold" words={"Hello World!"} placeholder />
              <p className="text-md xl:text-lg mb-8 text-cfgray mt-5 text-justify font-inter">I&apos;m Kenneth, an Undergraduate Computer Science student at Binus University, currently based in Indonesia. I&apos;m deeply passionate about turning ideas into reality through <code className="bg-black py-1 px-2 outline outline-white text-white">code</code> , and over the years I&apos;ve built a diverse portfolio of projects spanning <strong>Front-end Development, Mobile App Development, and Back-end Development</strong>. Both as part of a team and independently.</p>
              <p className="text-md xl:text-lg mb-8 text-cfgray text-justify font-inter">Beyond just writing code, I enjoy exploring <strong>clean design, intuitive user experiences, and scalable architectures</strong>. My journey has been fueled by curiosity, problem-solving, and a drive to create technology that&apos;s not only functional, but also meaningful.</p>
              <CustomButton onClick={() => setOpenMessagePage(true)}>
                <div className="flex items-center justify-center gap-2">
                  <IoSend className="text-xl" />
                  <div>Send me a message</div>
                </div>
              </CustomButton>
            </div>
          </div>
        ) : (
          <div className={`flex flex-col items-center justify-center gap-10 pr-10 pl-12 py-5 transition-opacity ${openMessagePage ? "opacity-0" : "opacity-100"}`} id="contact">
            <div className="flex flex-col max-w-[350px] xl:max-w-[800px]">
              <TextRandomizerEffect className="text-2xl md:text-3xl lg:text-5xl font-semibold" words={"Hello World!"} placeholder />
              <p className="text-sm md:text-md lg:text-lg mb-5 md:mb-8 text-cfgray mt-3 md:mt-5 text-justify">I&apos;m Kenneth, an Undergraduate Computer Science student at Binus University, currently based in Indonesia. I&apos;m deeply passionate about turning ideas into reality through <code className="bg-black py-1 px-2 outline outline-white text-white">code</code> , and over the years I&apos;ve built a diverse portfolio of projects spanning <strong>Front-end Development, Mobile App Development, and Back-end Development</strong>. Both as part of a team and independently.</p>
              <p className="text-sm md:text-md lg:text-lg mb-5 md:mb-8 text-cfgray text-justify">Beyond just writing code, I enjoy exploring <strong>clean design, intuitive user experiences, and scalable architectures</strong>. My journey has been fueled by curiosity, problem-solving, and a drive to create technology that&apos;s not only functional, but also meaningful.</p>
              <CustomButton onClick={() => setOpenMessagePage(true)}>
                <div className="flex items-center justify-center gap-2">
                  <IoSend className="text-xl" />
                  <div>Send me a message</div>
                </div>
              </CustomButton>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-10"
            >
              <Image 
                src="/profile_enhanced.webp"
                alt="Kenneth Sunjaya"
                draggable={false}
                width={breakpoint === 'xs' || breakpoint === "sm" ? 300 : breakpoint === "md" ? 350 : breakpoint === 'lg' ? 400 : 500}
                height={0}
                style={{ height: "auto" }}
              />
            </motion.div>
          </div>
        )
      }
    </div>
  );
};
