import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <div className="px-4 py-2">
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout