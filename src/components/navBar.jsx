
import{webName,navLinks} from "../consts/index.js"
import { Link } from 'react-router-dom';
import "./css/navBar_style.css"
import { useState,useEffect } from "react";
import  gsap  from 'gsap';
import{profileImg} from "../utils/index.js"
import { FaUser } from "react-icons/fa6";
export default function NavBar() {

    const [mobileMenu,setMobileMenu]=useState(false);
    const isLogin=false;//for test 





    useEffect(()=>{
        gsap.to("#mobileMenu",
                {
                    opacity:mobileMenu?1:0,
                    display:mobileMenu?"block":"none",
                    delay:0.2,
                    duration:0.3,
                    left:mobileMenu?"0%":"-100%"
                }
            )
        gsap.to(".s1",{
            width:mobileMenu?"100%":"15px",
            rotate:mobileMenu?45:0,
            delay:0.2,
            duration:0.4,
            x:mobileMenu?1:0,
            y:mobileMenu?9:0
        })

        gsap.to(".s2",{
            x:mobileMenu?"50px":0,
            opacity:mobileMenu?0:1,
            delay:0.2,
            duration:0.3
        })
        gsap.to(".s3",{
            width:mobileMenu?"100%":"15px",
            rotate:mobileMenu?-45:0,
            delay:0.2,
            duration:0.4,
            x:mobileMenu?-1: 0,
            y:mobileMenu?-11:0
        })
    },[mobileMenu])

    

    return(
        <nav className="">
            <div className="container   ">
                {/* big screen menu*/}
                <div className="flex justify-between">
                    <h1 className="logo mr-2.5"
                    id="logo">
                        {webName}
                    </h1>
                    <ul className="big-menu flex items-center justify-between gap-2.5">
                        { navLinks.map((link,ind)=>(
                            <li key={ind+link} className="">
                                <Link to={"/"+(ind===0?"":link)} title={link+" page"}>
                                    {link.includes("-")?link.replace("-"," ").toUpperCase():link.toUpperCase()}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex lg:gap-0 gap-6">
                    
                        
                        <button className="toggle-menu"
                        onClick={() => setMobileMenu(!mobileMenu)}>
                            <span className="s1"></span>
                            <span className="s2"></span>
                            <span className="s3"></span>
                        </button>
                                            
                        <div className="profile-toggle text-white">
                            <Link to={"/profile"} title="profile">
                            {isLogin&&profileImg?
                            <img src={profileImg} alt="profile"></img>
                            :<FaUser/>
                            } 
                            </Link>
                        </div>
                    </div>
                </div>
            {/* mobile menu */}
            <div className="mobile-menu text-white"
            id="mobileMenu"> 
                <h1 className="text-2xl font-bold px-2.5 py-5">{webName}</h1>
                <div className="flex flex-col gap-2.5 px-2.5 py-5 ">
                    { navLinks.map((link,ind)=>(
                        <div key={ind+link} className=" font-bold text-xl">
                            <Link to={"/"+(ind===0?"":link)} title={link+" page"}>{link.includes("-")?link.replace("-"," ").toUpperCase():link.toUpperCase()}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}