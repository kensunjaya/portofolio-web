import { handleScrollTo } from "@/lib/utilfunctions";
import Image from "next/image"

export const SideBar = () => {
  return (
    <nav className="fixed top-10 left-10 h-full w-16 bg-transparent flex flex-col items-center justify-between z-[999]">
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
            handleScrollTo("")
          }}
          style={{ cursor: "pointer" }}
        />
        <div className="rotate-270 space-x-10">
          {[
        { label: "Contact", id: "#contact" },
        { label: "Experience", id: "#experience" },
        { label: "Projects", id: "#project1" },
          ].map(({ label, id }) => (
        <a
          key={label}
          href={id}
          className="relative text-white px-2 py-1 overflow-hidden group"
          onClick={e => {
            e.preventDefault();
            if (window.location.pathname !== "/") {
              window.location.href = "/";
            }
            handleScrollTo(id);
          }}
        >
          <span
            className="relative z-10 group-hover:text-secondary transition-colors duration-300"
          >
            {label}
          </span>
        </a>
          ))}
        </div>
      </div>
    </nav>
  );
}