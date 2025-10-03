export const ExperienceCard = ({
  year,
  title,
  description,
  isActive,
  className,

}: {
  year: number;
  title: string;
  description: string;
  isActive: boolean;
  className?: string;
}) => {

  return (
    <div
      className={`
        flex gap-0 md:gap-4 xl:gap-8
        transition-transform duration-300 ${className}
      `}
      style={{
        // Subtle scale/translate to make the centered card feel "focused"
        transform: isActive ? "scale(1) translateY(0px)" : "scale(0.95) translateY(4px)",
      }}
    >
      <div className="relative w-fit text-header">
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-5">
          <div className="text-lg md:text-xl lg:text-2xl font-bold rotate-[270deg]">{year}</div>
          <div className="h-full border border-header" />
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:gap-6 max-w-[20rem] lg:max-w-[30rem] xl:max-w-[35rem] pr-5">
        <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-header">{title}</div>
        <p className="text-sm sm:text-md md:text-lg xl:text-xl text-cfgray leading-relaxed font-inter">{description}</p>
      </div>
    </div>
  );
};
