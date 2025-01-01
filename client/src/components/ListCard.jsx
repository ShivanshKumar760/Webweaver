import codeLogo from "../images/codeLogo.png"
import deleteLogo from "../images/deleteLogo.png"
const ListCard = () => {
  return (
    <div 
    className="listCard mb-2 w-[full] flex items-center justify-between p-[11px] 
    bg-[#141414] rounded-lg cursor-pointer hover:bg-[#202020]">
       <div className="flex items-center gap-2">
        <img className="w-[65px] " src={codeLogo} alt="code-logo"/>
        <div>
            <h3 className="text-[22px]">My First Project</h3>
            <p className="text-[grey] -mt-1 text-[14px]">Created on 9 mon 2024</p>
        </div>
       </div>

       <div>
            <img className="w-[50px] cursor-pointer mr-5"  src={deleteLogo} alt="delete-logo" />
       </div>
    </div>
  )
}

export default ListCard;