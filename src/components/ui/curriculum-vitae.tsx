import CustomButton from "../custom-button";
import { MdOutlineOpenInNew } from "react-icons/md";

export const ViewCVButton = () => {
  return (
    <div className="fixed top-5 md:top-10 right-0 md:right-10 w-fit h-fit z-1000">
      <CustomButton
        onClick={() => window.open("https://drive.google.com/file/d/1g6-FoE-fmTfIsoAtu72LdPgUl2w3W5On/view?usp=sharing", "_blank")}
        nofill
      >
        <div className="flex items-center justify-center gap-2">
          <MdOutlineOpenInNew />
          <span>View CV</span>
        </div>
      </CustomButton>
    </div>
  );
};
