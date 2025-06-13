import  gsap  from 'gsap';
import { useState,useEffect } from "react";
import{IoOptionsSharp} from "react-icons/io5"
import{latestWatched,watchLater,favorites} from "../consts/index.js"

export default  function Options({Id,move}) {
    
    const [options,setOptions]=useState(false);
    const [isWatched,setIsWatched]=useState(false);
    const [inFavorites,setInFavorites]=useState(false);
    const [inWatchLater,setInWatchLater]=useState(false);
    
    useEffect(() => {
        for(let i=0;i<latestWatched.length;i++){
            if(latestWatched[i].title===move.title){
                setIsWatched(true);
            }
        }
    },[move])
    
    
    useEffect(() => {
        for(let i=0;i<watchLater.length;i++){
            if(watchLater[i].title===move.title){
                setInWatchLater(true);
            }
        }
    },[move])
    

    
    useEffect(() => {
        for(let i=0;i<favorites.length;i++){
            if(favorites[i].title===move.title){
                setInFavorites(true);
            }
        }
    },[move])

    

    function handleWatchLater(){
        setInWatchLater((per)=>{
            if(!per){
                watchLater.push({...move});
            }else{
                for(let i=0;i<watchLater.length;i++){
                    if(watchLater[i].title===move.title){
                        watchLater.splice(i,1);
                    }
                }
            }
            return !per;
        })
    }

    function handleFavorites(){
        setInFavorites((per)=>{
            if(!per){
                favorites.push({...move});
            }else{
                for(let i=0;i<favorites.length;i++){
                    if(favorites[i].title===move.title){
                        favorites.splice(i,1);
                    }
                }
            }
            return !per;
        })
    }

    function handleWatched(){
        setIsWatched((per)=>{
            if(!per){
                latestWatched.push({...move});
            }else{
                for(let i=0;i<latestWatched.length;i++){
                    if(latestWatched[i].title===move.title){
                        latestWatched.splice(i,1);
                    }
                }
            }
            return !per;
        })
    }


    function handleClick(){
        setOptions((per)=>{
            if(options===per) {//to git rid of error message
                "";
            }
            const newOptions= !per;

            gsap.to(`#options-container-${Id}`,{
                backgroundColor:newOptions?"#efefef":"transparent",
                duration:0.3
            })

            gsap.to(`#options-dots-${Id}`,{
                display:newOptions?"none":"flex",
                opacity:newOptions?0:1,
                duration:0.3,
            })
            gsap.to(`#options-list-${Id}`,{
                opacity:newOptions?1:0,
                duration:0.3,
                display:newOptions?"block":"none",
            })  

            gsap.to(`#close-${Id}`,{
                opacity:newOptions?1:0,
                duration:0.3,
                display:newOptions?"flex":"none",
            })
            return newOptions;
        });    
    }

    return (
        <div 
        title='Options'
        className={`
        absolute top-[10px] left-[10px] flex gap-2 z-80 cursor-pointer rounded-[5px]`}
        id={`options-container-${Id}`} >
            <div 
            onClick={()=>{handleClick()}}  
            id={`options-dots-${Id}`}
            className={`w-[25px] py-1 flex flex-col gap-1 items-center bg-gray-200 rounded-[5px] `}>
                <IoOptionsSharp/>
                {/* <span className="w-[5px] h-[5px] rounded-full bg-gray-500"></span>
                <span className="w-[5px] h-[5px] rounded-full bg-gray-500"></span>
                <span className="w-[5px] h-[5px] rounded-full bg-gray-500"></span> */}
            </div>

            <div className="w-[15px] h-[15px] absolute top-[5px] left-[5px] hidden 
            hover:bg-gray-400 rounded-full  items-center justify-center p-1 text-[18px]"
            onClick={()=>{handleClick()}}  
            id={`close-${Id}`}>
                X
            </div>

            <div className="  hidden  px-2 pb-2 pt-5"
            id={`options-list-${Id}`}
            >
                <div className="cursor-pointer  px-1 py-1.5 hover:bg-white"
                onClick={()=>{handleFavorites()}}
                >
                    {/* <FaHeart /> */}
                    {inFavorites?"Remove From Favorites":"Add To Favorites"}
                </div>
                <div className="cursor-pointer  px-1 py-1.5 hover:bg-white"
                onClick={()=>{handleWatchLater()}}
                >
                    {inWatchLater?"Remove From Watch Later":"Add To Watch Later"}
                </div>
                <div className="cursor-pointer  px-1 py-1.5 hover:bg-white"
                onClick={()=>{handleWatched()}}
                >
                    {isWatched?"Remove From Watched":"Add To Watched"}
                </div>
            </div>
            
        </div>
    )
}