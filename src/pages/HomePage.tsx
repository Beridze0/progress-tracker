import { Progress } from "@/components/ui/progress";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-12 py-5 px-4 ">
      <div className="flex flex-col items-center gap-1 border border-border p-4 rounded-md">
        <h1 className="font-semibold text-lg">ReactJS</h1>
        <FaReact size={27} className="mb-2" />
        <div className="flex flex-col items-center mt-2 gap-1">
          <Progress value={45} className="w-[200px]" />
          <p className="text-sm font-semibold">0%</p>
          <p>Hours: 0h</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 border border-border p-4 rounded-md">
        <h1 className="font-semibold text-lg">Typescript</h1>
        <BiLogoTypescript size={27} className="mb-2" />
        <div className="flex flex-col items-center mt-2 gap-1">
          <Progress value={20} className="w-[200px]" />
          <p className="text-sm font-semibold">0%</p>
          <p>Hours: 0h</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 border border-border p-4 rounded-md">
        <h1 className="font-semibold text-lg">Tailwind</h1>
        <RiTailwindCssFill size={27} className="mb-2" />
        <div className="flex flex-col items-center mt-2 gap-1">
          <Progress value={90} className="w-[200px]" />
          <p className="text-sm font-semibold">0%</p>
          <p>Hours: 0h</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 border border-border p-4 rounded-md">
        <h1 className="font-semibold text-lg">Javascript</h1>
        <IoLogoJavascript size={27} className="mb-2" />
        <div className="flex flex-col items-center mt-2 gap-1">
          <Progress value={90} className="w-[200px]" />
          <p className="text-sm font-semibold">0%</p>
          <p>Hours: 0h</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 border border-border p-4 rounded-md border p-2">
        <h1 className="font-semibold text-lg">Redux</h1>
        <SiRedux size={27} className="mb-2" />
        <div className="flex flex-col items-center mt-2 gap-1">
          <Progress value={10} className="w-[200px]" />
          <p className="text-sm font-semibold">0%</p>
          <p>Hours: 0h</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
