import { genres ,movies} from "../consts/index.js";
import SubNavBar from "../components/subNavBar.jsx";
import Movies from "./contentComponents/movies.jsx";
import TvShows from "./contentComponents/tv-shows.jsx";
import RecentlyAdded from "./contentComponents/recently-added.jsx";
import { useState ,useEffect} from "react";
import  gsap  from 'gsap';

export default function Content() {

    const[moviesList,setMoviesList]=useState([...movies]);
    const[activeGenre,setActiveGenre]=useState([...genres]);


    useEffect(() => {
    for(let i=0;i<genres.length;i++){
        if(activeGenre.includes(genres[i])){
            gsap.to(`#${genres[i]}`,{
                duration:0.4,
                opacity:1,
            })
        }else{
            gsap.to(`#${genres[i]}`,{
                duration:0.4,
                opacity:0.3,
            })
        }
    }

    // for(let i=0;i<moviesList.length;i++){
    //     if(moviesList[i]){
    //         console.log(`${moviesList[i].title} --> ${moviesList[i].genre}`);
    //     }else{
    //         console.log(`$moviesList${[i]} --> no movies`);
    //     }
    // }
    // console.log("active genre",activeGenre);

    }, [activeGenre,moviesList])



    return(
        <section className="section-padding">
            <div>
                <SubNavBar navLinks={["movies","tv-shows","recently-added"]}/>
                <div className="flex  items-center gap-4 flex-wrap">
                    {genres.map((genre) => (
                        <div 
                        onClick={() => {
                            
                            setActiveGenre(()=>{
                                if(activeGenre.includes(genre)){
                                    return activeGenre.filter((g) => g !== genre);
                                }else{
                                    return [...activeGenre,genre];
                                }
                            });

                            setMoviesList(moviesList.filter((movie) =>  activeGenre.includes(movie.genre)));
                        }} 
                        id={genre} 
                        key={genre} 
                        role="button"
                        className="w-fit py-1.5 px-3 rounded-[10px] text-center cursor-pointer   bg-[#eee]">{genre}</div>
                    ))}
                </div>
                <div className="w-full overflow-hidden ">
                    <div
                    style={{width:"300%"}}
                    className="flex items-center"
                    id="content"
                    > 
                        <Movies id={"movies"} movies={moviesList}/>
                        <TvShows id={"tv-shows"} movies={moviesList}/>
                        <RecentlyAdded id={"recently-added"} movies={moviesList}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
