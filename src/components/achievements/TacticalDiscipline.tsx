import { FaMedal } from "react-icons/fa"
import { SiProgress } from "react-icons/si";

interface freeTimeData{
    title: string
    desc: string
}

interface TacticalDisciplineProps{
    freeTimeData: freeTimeData[]
}

const TacticalDiscipline: React.FC<TacticalDisciplineProps> = ({ freeTimeData }) => {
  return (
    <div className="flex items-center">
          <div className="flex flex-col items-center px-5">
            <div className="flex items-center gap-1 mt-4">
              <h1 className="text-base font-bold">Tactical Discipline</h1>
              <SiProgress size={18} className="font-bold" />
            </div>
            <div className="flex items-center gap-5 flex-wrap mt-3 justify-center">
                {freeTimeData.map((item, index)=>(
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
  )
}

export default TacticalDiscipline