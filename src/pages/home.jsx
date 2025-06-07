import Hero from "../components/Hero";
import HomeSlider from "../components/HomeSlider3";
import "../App.css";
import { movies } from "../consts";
function Home() {
  return (
    <section className="section-padding"> 
      <div>
        <Hero/>
        <div className="h-[300px] lg:h-[400px] mt-10 md:my-15 lg:my-30  ">
          <h1 className="text-xl lg:text-3xl font-bold my-7">Trending Movies</h1>
          <HomeSlider
          list={movies}
          delay={1}
          cardsWidth={300}
          mobileCardsWidth={200}
          showGenres={false}
          autoSlideInterval={4000}
          />
        </div>

        <div className="h-[300px] lg:h-[400px] mt-10 md:my-15 lg:my-30">
          <h1 className="text-xl lg:text-3xl font-bold my-7">Upcoming Movies</h1>
          <HomeSlider
          list={movies}
          delay={2}
          cardsWidth={300}
          mobileCardsWidth={200}
          showGenres={false}
          autoSlideInterval={4000}
          />
        </div>

        <div className="h-[300px] lg:h-[400px] mt-10 md:my-15 lg:my-30">
          <h1 className="text-xl lg:text-3xl font-bold my-7">Top Movies</h1>
          <HomeSlider
          list={movies}
          delay={3}
          cardsWidth={300}
          mobileCardsWidth={200}
          showGenres={false}
          autoSlideInterval={4000}
          />
        </div>
      </div>
    </section>);
}
export default Home;
