import {movies} from "../consts/index.js"
import { useState, useEffect } from "react";
import { gsap } from "gsap";


export default function Hero() {

    const [movie, setIndexImg] = useState({
        ind: 0,    // Current slide index
        dir: "left" // Controls slide direction for auto-sliding
    });

    // Handles GSAP animations for both slider movement and dot indicators
    useEffect(() => {
        gsap.to(`#hero-slider`, {
            xPercent: -movie.ind * (100 / movies.length),
            duration: 1.5,
            delay: 1,
        });

        
        
    }, [movie]);

    // Auto-sliding functionality with direction reversal at ends
    useEffect(() => {
        const interval = setInterval(() => {
            setIndexImg(prev => {
                let newInd = prev.dir === "left" ? prev.ind + 1 : prev.ind - 1;
                let newDir = prev.dir;

                if (newInd >= movies.length - 1) {
                    newInd = movies.length - 1;
                    newDir = "right";
                } else if (newInd <= 0) {
                    newInd = 0;
                    newDir = "left";
                }

                return { ind: newInd, dir: newDir };
            });
        }, 10000);

        return () => clearInterval(interval);
    }, []);





    return (
        <div className="w-full h-fit lg:h-[400px] bg-amber-200 overflow-hidden   rounded-[10px]"> 
            <div 
            id="hero-slider"
            style={{width: `${movies.length * 100}%`}}
            className="flex ">
                {
                    movies.map((movie,ind)=>(
                        <div key={ind+movie.title} className="w-[100%] h-full relative  overflow-hidden">
                            <img src={movie.img} alt={movie.title} className="w-full"/>
                            <div 
                            
                            className="absolute  top-[10px] left-[10px]  text-white text-sm lg:text-xl">{ind+1+"-"+movie.title}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}