import codeLogo from "../images/codeLogo.png"
import deleteGridLogo from "../images/deleteGridLogo.png"
const GridCard = () => {
  return (
    <>
        <div className="gridCard bg-[#141414] w-[250px] h-[190px] p-[10px] cursor-pointer hover:bg-[#202020] rounded-2xl shadow-lg shadow-black/50">
            <img className="w-[70px]" src={codeLogo} alt="code-log" />
            <h3 className="text-[25px] w-[90%] line-clamp-1 mt-4">My First Project</h3>
            <div className="flex items-center justify-between" >
              <p className="text-[grey] text-[12px]">Created on 9 mon 2024</p>
              <img className="w-[30px] cursor-pointer "  src={deleteGridLogo} alt="delete-logo" />
            </div>
        </div>
    </>
  )
}

export default GridCard;