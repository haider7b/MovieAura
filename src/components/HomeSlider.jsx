
import { useState, useEffect } from "react";
import { gsap } from "gsap";


export default function HomeSlider({list,id}){

    const [movie, setIndexImg] = useState({
        ind: 0,    // Current slide index
        dir: "left" // Controls slide direction for auto-sliding
    });

    // Handles GSAP animations for both slider movement and dot indicators
    useEffect(() => {
        gsap.to(`#slider-${id}`, {
            xPercent: -movie.ind * (100 / list.length),
            duration: 1.5,
            delay: 1,
        });

        
        
    }, [movie,list,id]);

    // Auto-sliding functionality with direction reversal at ends
    useEffect(() => {
        setTimeout(() => {//to make each slider independent
                const interval = setInterval(() => {
                setIndexImg(prev => {
                    let newInd = prev.dir === "left" ? prev.ind + 1 : prev.ind - 1;
                    let newDir = prev.dir;

                    if (newInd >= list.length - 1) {
                        newInd = list.length - 1;
                        newDir = "right";
                    } else if (newInd <= 0) {
                        newInd = 0;
                        newDir = "left";
                    }
                    return { ind: newInd, dir: newDir };
                });
            }, 10000);

            return () => clearInterval(interval);
        }, 1000*id);
        
    }, [list,id]);
    
    return (
        <div className="w-full h-full overflow-hidden "> 
            <div 
            id={`slider-`+id}
            // style={{width: `${list.length * 100}%`}}
            className="flex gap-10 w-fit h-full">
                {
                    list.map((movie,ind)=>(
                        <div key={ind+movie.title} 
                        className="w-[100%] md:w-[50%]  lg:w-[170px]
                            bg-amber-200 h-full relative rounded-[10px] ">
                            <img src={movie.poster} alt={movie.title} 
                            className="w-full rounded-[10px]"/>
                            <div className=" p-2   text-xl">
                                {ind+1+"-"+movie.title}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}