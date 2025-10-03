import { FaMoon } from "react-icons/fa";
import { useTheme } from "../context/theme-context";
import { MdSunny } from "react-icons/md";

export const ThemeChanger = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className="fixed bottom-5 md:bottom-15 landscape:left-5 landscape:md:left-15 portrait:right-5 portrait:md:right-15 w-fit h-fit z-1000 text-2xl md:text-3xl text-cfgray">
      {isDarkMode ? <MdSunny onClick={toggleTheme} className="transition cursor-pointer hover:rotate-30 hover:scale-110 hover:text-secondary" /> : 
                    <FaMoon onClick={toggleTheme} className="transition cursor-pointer hover:-rotate-20 hover:scale-110 hover:text-secondary" />}
    </div>
  );
};
