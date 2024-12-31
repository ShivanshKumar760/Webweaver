import logoNav from "../images/logoNav.png";
import {Link} from "react-router-dom";
import Avatar from "react-avatar";
function Navbar() {
  return (
    <>
      <div className="navbar flex items-center justify-between px-[100px] h-[103px] bg-[#141414]">
          <div className="logo">
              <img className="w-[199px]  cursor-pointer" src={logoNav} alt="" />
          </div>

          <div className="links flex items-center gap-2">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Contact</Link>
            <Link>Services</Link>
            <Avatar name="Shivansh Kumar" size="50" round="50%" className="cursor-pointer ml-3"/>
          </div>
      </div>
    </>
  )
}

export default Navbar;