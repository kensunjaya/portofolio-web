import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const SocialMediaLinks = () => {
  return (
    <div className="fixed portrait:left-5 landscape:left-15 portrait:bottom-5 landscape:bottom-15 z-1000 text-2xl md:text-3xl space-y-6 text-cfgray">
      <FaLinkedin className="cursor-pointer hover:scale-110 transition hover:text-secondary" onClick={() => window.open("https://www.linkedin.com/in/kenneth-sunjaya", "_blank")} />
      <FaInstagram className="cursor-pointer hover:scale-110 transition hover:text-secondary" onClick={() => window.open("https://www.instagram.com/kensunjaya", "_blank")} />
      <FaGithub className="cursor-pointer hover:scale-110 transition hover:text-secondary" onClick={() => window.open("https://www.github.com/kensunjaya", "_blank")} />
    </div>
  );
};
