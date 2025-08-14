import { ReactNode, useState } from "react";

const CustomButton = ({ onClick, children, type="button" }: { onClick?: () => void; children: ReactNode; type?: "button" | "submit" }) => {
  const [fillingWidth, setFillingWidth] = useState(0);
  const handleHover = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { width } = event.currentTarget.getBoundingClientRect();
    setFillingWidth(width);
  };
  return (
    <button
      className="text-lg font-semibold text-primary bg-secondary rounded-md transition cursor-pointer min-w-[10rem] min-h-[3rem] relative overflow-hidden"
      type={type}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={() => setFillingWidth(0)}
    >
      <div
        className="absolute left-0 top-0 h-full bg-cyan-400 transition-all duration-300 z-0"
        style={{
          width: fillingWidth > 0 ? `${fillingWidth}px` : "0px",
          pointerEvents: "none",
        }}
      />
      <div className="relative z-10 px-4">{children}</div>
    </button>
  );
};

export default CustomButton;
