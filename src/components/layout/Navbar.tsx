import { GiSergeant } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div>
          <NavLink to='/' className="text-2xl font-semibold cursor-pointer">PROGRESS TRACKER</NavLink>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <NavLink
            to="/dashboard"
            className="hover:text-primary transition-all duration-200 text-sm"
          >
            Dashboard
          </NavLink>
          <NavLink
            to=""
            className="hover:text-primary transition-all duration-200 text-sm"
          >
            Dashboard
          </NavLink>
          <NavLink
            to=""
            className="hover:text-primary transition-all duration-200 text-sm"
          >
            Dashboard
          </NavLink>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p>Davit Beridze</p>
        <div className="flex items-center gap-0.5">
          <div className="border border-border p-1.5 rounded-full items-center justify-center">
          <GiSergeant />
          </div> 
          <p className="text-sm">(Recruit Maggot)</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
