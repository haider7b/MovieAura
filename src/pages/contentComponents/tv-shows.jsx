import HomeSlider from "../../components/HomeSlider3";
const title=["top tv shows","most popular tv shows","upcoming tv shows","most watched tv shows"]

export default function TvShows ({movies}){
    return(
        <div id="content-1" className="w-screen">
            {
                title.map((title,i)=>(
                    <div key={title} className="w-full  my-5 lg:my-10">
                        <h1 className="text-xl lg:text-3xl font-bold my-7">{title.toUpperCase()}</h1>
                        <div className="h-[350px] lg:h-[400px]">
                            <HomeSlider 
                            list={movies}
                            delay={i+1}
                            cardsWidth={300}
                            mobileCardsWidth={200}
                            showGenres={true}
                            autoSlideInterval={5000}
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}