import {plans} from "../consts/index.js"
export default function Subscribe() {
    return(
        <section className="section-padding">
            <div>
                <h1 className="text-4xl font-bold text-center my-12">Our Plans</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-10 items-center w-full">
                    {plans.map((plan,ind)=>(
                        <div key={ind+plan.plan}
                        className={`bg-gray-100 p-5 rounded-md text-center
                            lg:${ind===1?"translate-y-[-10px]":"translate-y-[10px]"}
                            hover:bg-gray-200
                            `}
                        style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                transition:"all 0.2s ease-in-out",
                            }}
                        >
                            <h1 className="font-bold text-2xl w-fit px-2 py-2.5 border-b-2 mx-auto">{plan.plan}</h1>
                            <div className="mt-5 text-xl ">
                                <h1 className="border-b-2 py-1.5">price: {plan.price}</h1>
                                <h1 className="border-b-2 py-1.5">Movies watching: {plan.movies.content}</h1>
                                <h1 className="border-b-2 py-1.5">Movies Adds: {plan.movies.ads}</h1>
                                <h1 className="border-b-2 py-1.5">Movies Download: {plan.movies.download}</h1>
                                <h1 className="border-b-2 py-1.5"> Tv Shows Watching: {plan.tvShows.content}</h1>
                                <h1 className="border-b-2 py-1.5"> TV Shows Adds: {plan.tvShows.ads}</h1>
                                <h1 className="py-1.5">Tv Shows Download: {plan.tvShows.download}</h1>
                            </div>
                            <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white 
                            font-bold py-2 px-4 rounded mt-3 cursor-pointer">
                                subscribe
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}