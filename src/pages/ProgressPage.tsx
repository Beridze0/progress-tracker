import BattleBeast from "@/components/achievements/BattleBeast";
import CodeWarrior from "@/components/achievements/CodeWarrior";
import TacticalDiscipline from "@/components/achievements/TacticalDiscipline";
import { Progress } from "@/components/ui/progress";
import { RootState } from "@/redux/store";
import { GiSergeant } from "react-icons/gi";
import { GiAchievement } from "react-icons/gi";
import { useSelector } from "react-redux";

const achievementsData = {
  codeWarriorData: [
    {
      title: "Boot Camp Survivor",
      desc: "Completed your first React.js project",
    },
    { title: "Rookie Coder", desc: "Coded for 7 days straight" },
    { title: "Bug Exterminator", desc: "Fixed 10+ bugs in a single session" },
    { title: "Redux Commander", desc: "Implemented Redux successfully" },
    {
      title: "TypeScript Sharpshooter",
      desc: "Converted a whole project to TypeScript",
    },
    { title: "API Sniper", desc: "Integrated an API into your project" },
    {
      title: "Frontend General",
      desc: "Deployed a complete production-ready app",
    },
    { title: "Code War Veteran", desc: "Coded every day for 30 days" },
  ],

  battleBeastData: [
    { title: "Recruit Training", desc: "Completed your first gym session" },
    { title: "Iron Soldier", desc: "Lifted 1.5x your body weight" },
    {
      title: "Pain is Weakness Leaving the Body",
      desc: "Worked out for 7 consecutive days",
    },
    { title: "War Machine", desc: "Hit the gym for 30 days straight" },
    { title: "No Mercy", desc: "Worked out while feeling sore" },
    {
      title: "Beast Mode Activated",
      desc: "Achieved a personal record in any lift",
    },
    { title: "Unbreakable", desc: "Stayed consistent for 3 months" },
    { title: "Battle-Tested", desc: "Ran 10km or did 100 push-ups in one go" },
  ],

  freeTimeData: [
    {
      title: "Distraction Eliminator",
      desc: "Avoided social media for a full day",
    },
    { title: "Knowledge Seeker", desc: "Read a full book" },
    {
      title: "Deep Work Operative",
      desc: "Focused for 3 hours without distractions",
    },
    { title: "Side Quest Completed", desc: "Learned a new non-tech skill" },
    { title: "Master of Time", desc: "Woke up before 6 AM for a week" },
    { title: "Warrior’s Rest", desc: "Slept 8 hours for 7 days in a row" },
    { title: "Strategist", desc: "Planned an entire week in advance" },
    { title: "No Days Wasted", desc: "Stayed productive for 30 days straight" },
  ],
};

const ProgressPage = () => {
  
  const { xp, level } = useSelector((state: RootState) => state.level);
 
  return (
    <div className="flex flex-col self-center w-full px-5 py-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold">DAVIT BERIDZE</h1>
          <p className="text-sm gap-3 ">(Recruit Maggot)</p>
        </div>
        <div className="flex border border-border gap-0.5 p-1.5 px-3 rounded-full items-center justify-center mt-1 cursor-pointer">
          <GiSergeant size={18} />
          <p className="text-sm gap-3">Level {level}</p>
        </div>
        <Progress value={0} className="w-[600px] mt-3" />
        <p>
          XP: {xp} / {level * 100}
        </p>
      </div>
      {/* achievements */}
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="flex items-center gap-1">
          <h1 className="text-xl font-semibold mb-1">ACHIEVEMENTS</h1>
          <GiAchievement size={25} />
        </div>
        <div className="flex flex-col gap-3 items-center">
          <CodeWarrior codeWarriorData={achievementsData.codeWarriorData} />
          <BattleBeast battleBeastData={achievementsData.battleBeastData} />
          <TacticalDiscipline freeTimeData={achievementsData.freeTimeData} />
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
