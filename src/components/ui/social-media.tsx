import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const SocialMediaLinks = () => {
  return (
    <div className="fixed portrait:right-5 landscape:right-10 portrait:bottom-5 landscape:bottom-10 z-1000 text-3xl md:text-4xl space-y-6">
      <FaLinkedin className="cursor-pointer hover:scale-110 transition" onClick={() => window.open("https://www.linkedin.com/in/kenneth-sunjaya", "_blank")} />
      <FaInstagram className="cursor-pointer hover:scale-110 transition" onClick={() => window.open("https://www.instagram.com/kensunjaya", "_blank")} />
      <FaGithub className="cursor-pointer hover:scale-110 transition" onClick={() => window.open("https://www.github.com/kensunjaya", "_blank")} />
    </div>
  );
};
