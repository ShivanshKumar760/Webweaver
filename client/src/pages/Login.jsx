import { useState } from "react"
import logo from "../images/logo.png"
import {Link} from "react-router-dom"
import rightside from "../images/rightside.png"
const Login = () => {
    const [email,setEmail]=useState("");
    const [pwd,setPwd]=useState("");

    const submitForm=(e)=>{
        e.preventDefault()
    }
  return (
    <>
        <div 
        className="container w-screen min-h-screen flex items-center justify-between  pl-[100px]">

            <div className="left w-[40%] ">
                <img  className="w-[250px]" src={logo} alt="webweaver-logo" />
                <form  onSubmit={submitForm} className="w-full mt-10" action="">
                    <div className="inputBox">
                        <input required type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                     <div className="inputBox">
                        <input required type="password" placeholder="Password" value={pwd} onChange={(e)=>setPwd(e.target.value)} />
                    </div>

                    <p className="text-[grey]">Don't  have an account: <Link to="/signup" className="text-[#00AEEF]">Sign Up</Link></p>

                    <button className="btnBlue w-full mt-[20px]">Login</button>
                </form>



            </div>
            <br/>
            <div className="right w-[55%]">
                <img  className="h-[100vh] w-[100%] object-cover rightsideBanner" src={rightside} alt="" />
            </div>

        </div>
    </>

  )
}

export default Login;