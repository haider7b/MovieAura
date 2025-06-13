import { useState,  } from "react"
import { movies } from "../consts";
import { FiX } from "react-icons/fi";
import gsap from "gsap/gsap-core";
import { IoSearch } from "react-icons/io5";

export default function Categories() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([...(movies.sort((a,b)=>b.rating-a.rating).slice(0,5))]);


    function handleSearch(value){
            setSearchValue(value);
            let res=[]
            if(value.replace(" ","").length===0){
                movies.sort((a,b)=>b.rating-a.rating);
                res=movies.slice(0,5);
            }else{
                
                for(let i=0;i<movies.length;i++){
                    if(movies[i].title.toLowerCase().includes(value.toLowerCase())){
                        res.push(movies[i]);
                    }
                }
            }
            setSearchResults(res);
        }

    return(
        <section className="section-padding min-h-[80vh]"> 
            <div>
                <div className="categories-search relative">
                    <input
                    className={`bg-[#eee] border-none outline-0
                    w-full py-3 px-[40px] 
                    rounded-md  `}
                    type="text" 
                    placeholder="Search"                    
                    value={searchValue}
                    style={{}}
                    onChange={(e)=>handleSearch(e.target.value)}>
                    </input>
                
                    <div className="text-2xl flex justify-center items-center 
                    absolute left-3 top-3 opacity-50">
                        <IoSearch/>
                    </div>
                    
                    {searchValue.replace(" ","").length===0?"":(
                        <button
                        title="Clear Search"
                        onClick={()=>handleSearch("")} 
                        className="hover:bg-[#ccc] text-2xl flex justify-center items-center
                        absolute right-3 top-3 rounded-full w-[30px] h-[30px]">
                                <FiX/>
                        </button>
                    )}
                </div>
                <h1 className="text-xl lg:text-3xl font-bold my-7">
                    {searchValue.replace(" ","").length===0?
                    "Top Searched Movies & Series":"Search Results"}
                </h1>
                <div  
                className="w-full lg:flex-col flex-row my-14 flex gap-10 flex-wrap" 
                >
                    {searchResults.length!==0?searchResults.map((result,ind)=>(
                        <div key={ind+result.title} 
                        className="lg:w-full w-[200px]  lg:h-[350px] cursor-pointer flex items-center 
                        justify-between overflow-hidden rounded-[15px] hover:bg-[#efefef] 
                        lg:flex-row flex-col-reverse  relative transition-all transition-duration-300
                        "
                        onClick={()=>window.open(result.url,"_blank")}
                        onMouseOver={()=>{  
                            gsap.to(`#category-content-${ind}`,{
                                left:0,
                                duration:0.3
                            })
                        }}
                        onMouseOut={()=>{  
                            gsap.to(`#category-content-${ind}`,{
                                left:`${-100}%`,
                                duration:0.3
                            })
                        }}
                        >
                            <div id={`category-content-${ind}`} 
                            className="lg:flex flex-col lg:w-1/3 h-full items-start p-3
                                absolute lg:static w-full  text-white lg:text-black left-[-100%]  "
                                >
                                <div className="absolute lg:static top-3 left-3 z-20">
                                    <h1 className="Lg:text-2xl text-xl font-black ">{result.title}</h1>
                                    <p>{result.description&&result.description.length>100?result.description.slice(0,100)+"...":result.description}</p>
                                    <div className="lg:text-[#999]">{result.year} , {result.rating} , {result.genre}</div>
                                </div>
                                <div className="w-full h-full block lg:hidden absolute top-0 left-0 z-10"
                                style={{backgroundColor:"black",opacity:0.3}}>
                                </div>
                            </div>

                            <div className="lg:w-1/3 w-full h-full flex justify-end">
                                <img className="max-h-full rounded-[15px]" src={result.poster} alt={result.title} />
                            </div>
                        </div>
                    )):(
                        <h1 className="text-2xl text-center w-full lg:text-4xl font-bold my-7">No Search Results Found!</h1>
                    )}
                </div>
            </div>
        </section>
    )
}