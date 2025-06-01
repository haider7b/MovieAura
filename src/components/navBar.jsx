
import{webName,moviesNames,navLinks} from "../consts/index.js"
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import "./css/navBar_style.css"
import { useState } from "react";

export default function NavBar() {

    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    function handleSearch(value){
        setSearchValue(value);
        console.log(searchValue);
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
            console.log(res);
            setSearchResults(res);
        }
    }

    return(
        <nav className="">
            <div className="container ">

                <h1 className="logo">{webName}</h1>
                {/* big screen menu*/}
                <div>
                    <ul className="big-menu">
                        { navLinks.map((link,ind)=>(
                            <li key={ind+link} className="">
                                <Link to={"/"+(ind===0?"":link)} title={link+" page"}>
                                    {link.includes("-")?link.replace("-"," "):link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="search">
                        <input 
                            type="text" 
                            placeholder="Search"
                            value={searchValue}
                            onChange={(e)=>handleSearch(e.target.value)}
                        ></input>
                        <div  className="results" 
                            style={{display:searchResults.length===0?"none":"block",
                                height:searchResults.length===0?"0px":"200px"}}
                        >
                            {searchResults.map((result,ind)=><p key={ind}>{result}</p>)}
                        </div>
                        <IoSearch/>
                    </div>
                </div>
                <button className="toggle-menu">
                    <span className="s1"></span>
                    <span className="s2"></span>
                    <span className="s3"></span>
                </button>

                {/* mobile menu */}
                <ul className="mobile-menu">
                    { navLinks.map((link,ind)=>(
                        <li key={ind+link} className="">
                            <Link to={"/"+ind===0?"":link} title={link+" page"}>{link.includes("-")?link.replace("-"," "):link}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}