import { ReactNode, useState } from "react";

const CustomButton = ({ onClick, children, type="button", nofill=false, disabled=false, className }: { onClick?: () => void; children: ReactNode; type?: "button" | "submit"; nofill?: boolean; disabled?: boolean; className?: string }) => {
  const [fillingWidth, setFillingWidth] = useState(0);
  const handleHover = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { width } = event.currentTarget.getBoundingClientRect();
    setFillingWidth(width);
  };
  return (
    <button
      className={`text-sm md:text-md lg:text-lg font-semibold rounded-md transition cursor-pointer min-w-[10rem] min-h-[3rem] relative overflow-hidden ${nofill ? "bg-transparent text-white hover:text-secondary" : "text-primary bg-secondary"} ${className}`}
      type={type}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={() => setFillingWidth(0)}
      disabled={disabled}
    >
      <div
        className="absolute left-0 top-0 h-full bg-cyan-400 transition-all duration-300 z-0"
        style={{
          width: fillingWidth > 0 && !nofill ? `${fillingWidth}px` : "0px",
          pointerEvents: "none",
        }}
      />
      <div className="relative z-10 px-4">{children}</div>
    </button>
  );
};

export default CustomButton;
