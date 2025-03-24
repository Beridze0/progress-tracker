import { JSX } from "react";
import { Progress } from "../ui/progress";

interface SkillData {
  name: string;
  icon: JSX.Element;
  progressValue: number;
  hours: string;
}

interface SkillProps {
  skillData: SkillData;
}

const Skill: React.FC<SkillProps> = ({ skillData }) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-10 py-5 px-4">
      <div className="flex flex-col items-center gap-1 border border-border p-4 rounded-md">
        <h1 className="font-semibold text-lg">{skillData.name}</h1>
        <>{skillData.icon}</>
        <div className="flex flex-col items-center mt-2 gap-1">
          <Progress value={skillData.progressValue} className="w-[200px]" />
          <p className="text-sm font-semibold">{skillData.progressValue}%</p>
          <p>Hours: {skillData.hours}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
