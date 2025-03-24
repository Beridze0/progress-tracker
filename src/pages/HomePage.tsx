import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import Skill from "@/components/custom/Skill";

const skillData = [
  {
    name: "ReactJS",
    icon: <FaReact/>,
    progressValue: 45,
    hours: "0h",
  },
  {
    name: "Typescript",
    icon: <BiLogoTypescript/>,
    progressValue: 20,
    hours: "0h",
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill/>,
    progressValue: 90,
    hours: "0h",
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript/>,
    progressValue: 90,
    hours: "0h",
  },
  {
    name: "Redux",
    icon: <SiRedux/>,
    progressValue: 10,
    hours: "0h",
  },
];

const HomePage = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-7 py-5 px-4 ">
      {skillData.map((item, index)=>(
        <Skill key={index} skillData={item} />
      ))}
    </div>
  );
};

export default HomePage;
