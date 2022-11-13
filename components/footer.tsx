import { SiFramer, SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

export default function Footer() {
  return (
    <div className="w-full fixed h-[8%] transition-colors text-[#CF4420] bottom-0">
      <div className="flex flex-col items-center justify-center h-full text-xs gap-y-1 ">
        <span className=" text-center font-black ">VTHackX</span>
        <span className="flex flex-row items-center space-x-2">
          <SiNextdotjs /> <SiReact /> <SiTailwindcss /><SiFramer />
        </span>
      </div>
    </div>
  );
}