import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";

export const SocialMediaLinks = () => {
  const [isInstagramLabelVisible, setIsInstagramLabelVisible] = useState(false);
  const [isLinkedinLabelVisible, setIsLinkedinLabelVisible] = useState(false);
  const [isGithubLabelVisible, setIsGithubLabelVisible] = useState(false);

  return (
    <div className="fixed portrait:left-5 landscape:left-15 portrait:bottom-5 landscape:bottom-15 z-1000 text-2xl md:text-3xl space-y-6 text-cfgray">
      <div className="flex gap-5">
        <FaLinkedin className="cursor-pointer hover:scale-110 transition hover:text-secondary" onClick={() => window.open("https://www.linkedin.com/in/kenneth-sunjaya", "_blank")} onMouseEnter={() => setIsLinkedinLabelVisible(true)} onMouseLeave={() => setIsLinkedinLabelVisible(false)} />
        {isLinkedinLabelVisible && 
          <motion.div 
            className="text-sm md:text-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}  
          >LinkedIn
          </motion.div>}
      </div>
      <div className="flex gap-5">
        <FaInstagram className="cursor-pointer hover:scale-110 transition hover:text-secondary" onClick={() => window.open("https://www.instagram.com/kensunjaya", "_blank")} onMouseEnter={() => setIsInstagramLabelVisible(true)} onMouseLeave={() => setIsInstagramLabelVisible(false)} />
        {isInstagramLabelVisible && 
          <motion.div className="text-sm md:text-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}  
          >Instagram
          </motion.div>}
      </div>

      <div className="flex gap-5">
        <FaGithub className="cursor-pointer hover:scale-110 transition hover:text-secondary" onClick={() => window.open("https://www.github.com/kensunjaya", "_blank")} onMouseEnter={() => setIsGithubLabelVisible(true)} onMouseLeave={() => setIsGithubLabelVisible(false)} />
        {isGithubLabelVisible && 
          <motion.div className="text-sm md:text-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}  
          >GitHub
          </motion.div>}
      </div>
    </div>
  );
};
