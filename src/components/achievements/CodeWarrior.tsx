import { FaMedal } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";

interface codeWarriorData {
  title: string;
  desc: string;
}

interface codeWarriorProps {
  codeWarriorData: codeWarriorData[];
}

const CodeWarrior: React.FC<codeWarriorProps> = ({ codeWarriorData }) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center px-5">
        <div className="flex items-center gap-1 mt-4">
          <h1 className="text-base font-bold">Code Warrior</h1>
          <IoCodeSlashOutline size={18} className="font-bold" />
        </div>
        <div className="flex items-center gap-5 flex-wrap mt-3 justify-center">
            {codeWarriorData.map((item, index)=>(
            <div className="cursor-pointer transition-all hover:scale-95 hover:text-primary text-muted-foreground flex flex-col items-center text-sm gap-3 border p-2 rounded-md w-56 h-28" key={index}>
                <p>
                <b>{item.title}</b> - {item.desc}
                </p>
                <FaMedal />
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CodeWarrior;
