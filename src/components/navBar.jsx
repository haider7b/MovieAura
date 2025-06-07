
import{webName,moviesNames,navLinks} from "../consts/index.js"
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import "./css/navBar_style.css"
import { useState,useEffect } from "react";
import  gsap  from 'gsap';
import{profileImg} from "../utils/index.js"
export default function NavBar() {

    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [mobileInput,setMobileInput]=useState(false);
    const [mobileMenu,setMobileMenu]=useState(false);


    useEffect(()=>{
            gsap.to("#mobileInput",
                {
                    width:mobileInput?"140px":"1px",
                    delay:0.2,
                    duration:0.3,
                    padding:mobileInput?"0px 10px":"0px",
                    backgroundColor:mobileInput?"#eee":"#bbb"
                }
            )

            if(window.innerWidth<550){
                gsap.to("#logo",{
                opacity:mobileInput?0:1,
                display:mobileInput?"none":"block",
                delay:mobileInput?0:0.4,
                duration:mobileInput?0:0.5,
            })
            }
            
    },[mobileInput])



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

    function handleSearch(value){
        setSearchValue(value);
        if(value.replace(" ","").length===0){
            setSearchResults([]);
            return;
        }else{
            let res=[]
            for(let i=0;i<moviesNames.length;i++){
                if(moviesNames[i].toLowerCase().includes(value.toLowerCase())){
                    res.push(moviesNames[i]);
                }
            }
            setSearchResults(res);
        }
    }

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
                    <div className ="mobileSearch-And-button">
                        <div className="mobile-search">
                            <input 
                                id="mobileInput"
                                type="text" 
                                placeholder="Search"
                                value={searchValue}
                                onChange={(e)=>handleSearch(e.target.value)}
                            ></input>
                            <div  className="results" 
                                style={{display:searchResults.length===0?"none":"flex",
                                height:searchResults.length===0?"0px":"200px"}}>
                                {searchResults.map((result,ind)=>(
                                    <div>
                                        <a key={ind}>{result}</a>
                                    </div>
                                ))}
                            </div>
                            <button className="toggle-search"
                                onClick={() => setMobileInput(!mobileInput)}
                                >
                                <IoSearch/>
                            </button>
                        </div>
                        <button className="toggle-menu"
                        onClick={() => setMobileMenu(!mobileMenu)}>
                            <span className="s1"></span>
                            <span className="s2"></span>
                            <span className="s3"></span>
                        </button>
                    </div>

                    {/*  */}
                    <div className="search-And-profile">
                        <div className="search">
                            <input 
                                type="text" 
                                placeholder="Search"
                                value={searchValue}
                                onChange={(e)=>handleSearch(e.target.value)}
                            ></input>
                            <div  className="results" 
                                style={{display:searchResults.length===0?"none":"flex",
                                height:searchResults.length===0?"0px":"200px"}}
                            >
                                {searchResults.map((result,ind)=>(
                                    <div>
                                        <a key={ind}>{result}</a>
                                    </div>
                                ))}
                            </div>
                            <IoSearch/>
                        </div>
                        <div className="profile-toggle">
                            <Link to={"/profile"}>
                                <img src={profileImg} alt="profile"></img> 
                            </Link>
                        </div>
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