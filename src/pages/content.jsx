import { genres } from "../consts/index.js";
import SubNavBar from "../components/subNavBar.jsx";
import Movies from "./contentComponents/movies.jsx";
import TvShows from "./contentComponents/tv-shows.jsx";
import RecentlyAdded from "./contentComponents/recently-added.jsx";


export default function Content() {
    return(
        <section className="section-padding">
            <div>
                <SubNavBar navLinks={["movies","tv-shows","recently-added"]}/>
                <div className="flex  items-center gap-4 flex-wrap">
                    {genres.map((genre) => (
                        <div id={genre} key={genre} className="w-fit py-1.5 px-3 rounded-[10px] text-center cursor-pointer   bg-[#eee]">{genre}</div>
                    ))}
                </div>
                <div className="w-full overflow-hidden ">
                    <div
                    style={{width:"300%"}}
                    className="flex  items-center"
                    id="content"
                    > 
                        <Movies id={"movies"}/>
                        <TvShows id={"tv-shows"}/>
                        <RecentlyAdded id={"recently-added"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
