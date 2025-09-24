import CustomButton from "../custom-button";
import { MdOutlineOpenInNew } from "react-icons/md";

export const ViewCVButton = () => {
  return (
    <div className="fixed top-3 md:top-10 right-0 md:right-10 w-fit h-fit z-1000 text-cfgray">
      <CustomButton
        onClick={() => window.open("https://drive.google.com/file/d/199QgDAVlS0L_EKf9MHZjd0XSXaXPUsYa/view?usp=sharing", "_blank")}
        nofill
        className="font-normal"
      >
        <div className="flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-200">
          <MdOutlineOpenInNew />
          <span>Download CV</span>
        </div>
      </CustomButton>
    </div>
  );
};
