import { FaMedal } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";

const CodeWarrior = () => {
  return (
    <div>
      <div className="flex flex-col items-center px-5">
        <div className="flex items-center gap-1 mt-4">
          <h1 className="text-base">Code Warrior</h1>
          <IoCodeSlashOutline size={18} className="font-bold" />
        </div>
        <div className="flex items-center gap-5 flex-wrap mt-3">
          <div className="cursor-pointer transition-all hover:scale-95 hover:text-primary text-muted-foreground flex flex-col items-center text-sm gap-3 border p-2 rounded-md w-56 h-28">
            <p>
              <b>Boot Camp Survivor</b> - Completed your first React.js project
            </p>
            <FaMedal />
          </div>
          <div className="cursor-pointer transition-all hover:scale-95 hover:text-primary text-muted-foreground flex flex-col items-center text-sm gap-3 border p-2 rounded-md w-56 h-28">
            <p>
              <b>Rookie Coder</b> - Coded for 7 days straight
            </p>
            <FaMedal />
          </div>
          <div className="cursor-pointer transition-all hover:scale-95 hover:text-primary text-muted-foreground flex flex-col items-center text-sm gap-3 border p-2 rounded-md w-56 h-28">
            <p>
              <b>Bug Exterminator</b> – Fixed 10+ bugs in a single session
            </p>
            <FaMedal />
          </div>
          <div className="cursor-pointer transition-all hover:scale-95 hover:text-primary text-muted-foreground flex flex-col items-center text-sm gap-3 border p-2 rounded-md w-56 h-28">
            <p>
              <b>Redux Commander</b> – Implemented Redux successfully
            </p>
            <FaMedal />
          </div>
          <div className="cursor-pointer transition-all hover:scale-95 hover:text-primary text-muted-foreground flex flex-col items-center text-sm gap-3 border p-2 rounded-md w-56 h-28">
            <p>
              <b>TypeScript Sharpshooter</b> – Converted a whole project to
              TypeScript
            </p>
            <FaMedal />
          </div>
          <div className="cursor-pointer transition-all hover:scale-95 hover:text-primary text-muted-foreground flex flex-col items-center text-sm gap-3 border p-2 rounded-md w-56 h-28">
            <p>
              <b>API Sniper</b> – Integrated an API into your project
            </p>
            <FaMedal />
          </div>
          <div className="cursor-pointer transition-all hover:scale-95 hover:text-primary text-muted-foreground flex flex-col items-center text-sm gap-3 border p-2 rounded-md w-56 h-28">
            <p>
              <b>Frontend General</b> – Deployed a complete production-ready app
            </p>
            <FaMedal />
          </div>
          <div className="cursor-pointer transition-all hover:scale-95 hover:text-primary text-muted-foreground flex flex-col items-center text-sm gap-3 border p-2 rounded-md w-56 h-28">
            <p>
              <b>Code War Veteran</b> – Coded every day for 30 days
            </p>
            <FaMedal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeWarrior;
