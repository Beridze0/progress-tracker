import { FaMedal } from "react-icons/fa";
import { CgGym } from "react-icons/cg";

interface BattleBeastData {
  title: string
  desc: string
}

interface BattleBeastProps{
  battleBeastData: BattleBeastData[]
}

const BattleBeast: React.FC<BattleBeastProps> = ({battleBeastData}) => {
  return (
    <div>
      <div className="flex flex-col items-center px-5 ">
        <div className="flex items-center gap-1 mt-4">
          <h1 className="text-base font-bold">Battle Beast</h1>
          <CgGym size={18} className="font-bold" />
        </div>
        <div className="flex items-center gap-5 flex-wrap mt-3 justify-center">
          {battleBeastData.map((item, index)=>(
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

export default BattleBeast;
