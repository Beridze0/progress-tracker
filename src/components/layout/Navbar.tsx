import { GiSergeant } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between border-b border-dotted px-4 py-2">
      <div className="flex items-center gap-3">
        <div>
          <NavLink to='/' className="text-2xl font-semibold cursor-pointer">PROGRESS TRACKER</NavLink>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <NavLink
            to="/progress"
            className="hover:text-primary transition-all duration-200 text-sm"
          >
            Progress
          </NavLink>
          <NavLink
            to="/quests"
            className="hover:text-primary transition-all duration-200 text-sm"
          >
            Quests
          </NavLink>
        </div>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="flex flex-col justify-center items-center">
            <p className="text-sm font-semibold">Davit Beridze</p>
            <p className="text-[0.65rem]">(Recruit Maggot)</p>
        </div>

        <div className="flex items-center gap-1">
          <div className="flex border border-border p-2 rounded-full items-center justify-center">
          <GiSergeant size={15} />
          <p className="text-xs">Level 1</p>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
