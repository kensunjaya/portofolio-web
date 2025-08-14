export const ExperienceCard = ({
  year,
  title,
  description,
  isActive,
}: {
  year: number;
  title: string;
  description: string;
  isActive: boolean;
}) => {
  return (
    <div
      className={`
        flex gap-8 
        transition-transform duration-300
      `}
      style={{
        // Subtle scale/translate to make the centered card feel "focused"
        transform: isActive ? "scale(1) translateY(0px)" : "scale(0.95) translateY(4px)",
      }}
    >
      <div className="relative w-fit">
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-5">
          {/* Fix invalid class: rotate-[270deg] */}
          <div className="text-2xl font-bold rotate-[270deg]">{year}</div>
          <div className="h-full border border-white" />
        </div>
      </div>

      <div className="flex flex-col gap-6 max-w-[40rem]">
        <div className="text-3xl font-semibold">{title}</div>
        <p className="text-xl text-cfgray leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
