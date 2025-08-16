"use client";
import CustomButton from "@/components/custom-button";
import { SideBar } from "@/components/sidebar";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { TextRandomizerEffect } from "@/components/ui/text-randomizer";
import { IoSend } from "react-icons/io5";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";

const SendMessagePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (!serviceID || !templateID || !userID) {
        throw new Error("Missing EmailJS configuration");
      }
      const res = await emailjs.send(serviceID, templateID, formData, userID);

      if (res.status === 200) {
        console.log("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Failed to send message. Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Spotlight />
      <SideBar />

      {/* Slide-up animation wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}   // start below
        animate={{ opacity: 1, y: 0 }}    // slide up into place
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-xl px-6"
      >
        <TextRandomizerEffect
          words="Send a Message"
          className="text-3xl font-semibold mb-10"
          placeholder
        />

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            aria-label="Your name"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full bg-transparent border-0 border-b border-zinc-300/70 dark:border-zinc-700/70 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors py-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            aria-label="Your email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full bg-transparent border-0 border-b border-zinc-300/70 dark:border-zinc-700/70 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors py-3"
          />

          <textarea
            name="message"
            placeholder="Your message"
            aria-label="Your message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full bg-transparent border-0 border-b border-zinc-300/70 dark:border-zinc-700/70 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors py-3 resize-y"
          />

          <div className="pt-2">
            <CustomButton type="submit">
              <div className="flex items-center justify-center gap-2">
                <IoSend className="text-xl" />
                <div>Send</div>
              </div>
            </CustomButton>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SendMessagePage;
