import logoNav from "../images/logoNav.png";
import {Link} from "react-router-dom";
import Avatar from "react-avatar";
import { MdLightMode } from "react-icons/md";
import { BsGridFill } from "react-icons/bs";
import { toggleClass } from '../helper';
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
            {/* <Avatar name="Shivansh Kumar" size="50" round="50%" className="cursor-pointer ml-3"/> */}
            <Avatar onClick={() => { toggleClass(".dropDownNavbar", "hidden") }} name="Shivansh" size="50" round="50%" className='cursor-pointer ml-3' />
            {/* <Avatar onClick={() => { toggleClass(".dropDownNavbar", "hidden") }} name={data ? data.name : ""} size="40" round="50%" className=' cursor-pointer ml-2' /> */}
          </div>

          <div className='dropDownNavbar hidden absolute right-[60px] top-[80px] shadow-lg shadow-black/50 p-[10px] rounded-lg bg-[#443e3e] w-[150px] h-[160px]'>
            <div className='py-[10px] border-b-[1px] border-b-[#fff]'>
              {/* <h3 className='text-[17px]' style={{ lineHeight: 1 }}>{data ? data.name : ""}</h3> */}
              <h3 className='text-[17px]' style={{ lineHeight: 1 }}>Shivansh Kumar</h3>
            </div>
            <i className='flex items-center gap-2 mt-3 mb-2 cursor-pointer' style={{ fontStyle: "normal" }}><MdLightMode className='text-[20px]' /> Light mode</i>
            {/* <i onClick={() => setIsGridLayout(!isGridLayout)} className='flex items-center gap-2 mt-3 mb-2 cursor-pointer' style={{ fontStyle: "normal" }}><BsGridFill className='text-[20px]' /> {isGridLayout ? "List" : "Grid"} layout</i> */}
            <i  className='flex items-center gap-2 mt-3 mb-2 cursor-pointer' style={{ fontStyle: "normal" }}><BsGridFill className='text-[20px]' /> Grid layout</i>
          </div>
      </div>
    </>
  )
}

export default Navbar;