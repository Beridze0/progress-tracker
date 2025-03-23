import CodeWarrior from "@/components/achievements/CodeWarrior";
import { Progress } from "@/components/ui/progress";
import { GiSergeant } from "react-icons/gi";
import { GiAchievement } from "react-icons/gi";

const ProgressPage = () => {
  return (
    <div className="flex flex-col self-center w-full px-5 py-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold">DAVIT BERIDZE</h1>
          <p className="text-sm gap-3 ">(Recruit Maggot)</p>
        </div>
        <div className="flex border border-border gap-0.5 p-1.5 px-3 rounded-full items-center justify-center mt-1">
          <GiSergeant size={18} />
          <p className="text-sm gap-3">Level 1</p>
        </div>
        <Progress value={30} className="w-[600px] mt-3" />
        <p>0%</p>
      </div>
      {/* achievements */}
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="flex items-center gap-1">
        <h1 className="text-xl font-semibold mb-1">ACHIEVEMENTS</h1>
        <GiAchievement size={25} />
        </div>
        <CodeWarrior />
      </div>
    </div>
  );
};

export default ProgressPage;
