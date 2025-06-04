
import{webName,moviesNames,navLinks} from "../consts/index.js"
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import "./css/navBar_style.css"
import { useState,useEffect } from "react";
import  gsap  from 'gsap';
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
                    backgroundColor:mobileInput?"transparent":"#eee"
                }
            )

            if(window.innerWidth<500){
                gsap.to("#logo",{
                opacity:mobileInput?0:1,
                display:mobileInput?"none":"block",
                delay:0.2,
                duration:0.3
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
        <nav className="bg-[#2e7df3]">
            <div className="container   ">
                {/* big screen menu*/}
                <div className="flex">
                    <h1 className="logo"
                    id="logo">
                        {webName}
                    </h1>
                    <ul className="big-menu">
                        { navLinks.map((link,ind)=>(
                            <li key={ind+link} className="">
                                <Link to={"/"+(ind===0?"":link)} title={link+" page"}>
                                    {link.includes("-")?link.replace("-"," "):link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex">
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
                        <div className="profile">
                                {/* <img src="" alt="profile"></img> */}
                                <div style={{color:"black",fontSize:"10px",textAlign:"center"}}> me</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile menu */}
            <div className="mobile-menu"
            id="mobileMenu"
            >
                { navLinks.map((link,ind)=>(
                    <div key={ind+link} className="">
                        <Link to={"/"+ind===0?"":link} title={link+" page"}>{link.includes("-")?link.replace("-"," "):link}</Link>
                    </div>
                ))}
            </div>
        </nav>
    )
}