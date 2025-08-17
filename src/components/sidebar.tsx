import { handleScrollTo } from "@/lib/utilfunctions";
import Image from "next/image";
import { useTailwindBreakpoint } from "./hooks/breakpoint";
import { usePathname } from "next/navigation";

export const SideBar = () => {
  const { breakpoint, orientation } = useTailwindBreakpoint();
  const pathname = usePathname();
  return (
    <nav className="fixed top-5 md:top-10 sm:left-5 md:left-10 h-0 w-16 bg-transparent flex flex-col items-center justify-between z-[999] scale-60 md:scale-100">
      <div className="flex flex-col items-center space-y-50">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={48}
          height={48}
          onClick={() => {
            if (window.location.pathname !== "/") {
              window.location.href = "/";
            }
            handleScrollTo("#home");
          }}
          style={{ cursor: "pointer" }}
        />
        {((orientation === "landscape") || (orientation === "portrait" && pathname !== "/send-message")) && (
          <div className="rotate-270 space-x-10">
            {[
              { label: "CONTACT", id: "#contact" },
              { label: "EXPERIENCE", id: "#experience" },
              { label: "PROJECTS", id: "#project1" },
            ].map(({ label, id }) => (
              <a
                key={label}
                href={id}
                className="relative text-white px-2 py-1 overflow-hidden group"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname !== "/") {
                    window.location.href = "/";
                  }
                  handleScrollTo(id);
                }}
              >
                <span className="relative z-10 group-hover:text-secondary transition-colors duration-300">
                  {label}
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
