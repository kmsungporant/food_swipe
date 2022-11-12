import { SiFramer, SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";

export default function Footer() {
  return (
    <div className="w-full fixed h-[8%] transition-colors text-black bottom-0">
      <div className="flex flex-col items-center justify-center h-full text-xs ">
        <span className=" text-center">Created for Virginia Tech Hackathon X 
        </span>
        <span className="flex flex-row items-center space-x-2">
          <span className="">Powered by</span>
          <SiNextdotjs />, <SiReact />, <SiTailwindcss /> <span className="mr-2"> and</span>
          <SiFramer />
        </span>
      </div>
    </div>
  );
}