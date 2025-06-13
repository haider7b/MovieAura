import  gsap  from 'gsap';
export default function ProfileComponent({list,id}) {
    return(
        <div className='w-full lg:flex-col flex-row my-14 flex gap-10 flex-wrap'>{
            list.length>0?(
                    list.map((result,ind)=>(
                        <div key={ind+result.title} 
                        className="lg:w-full w-[200px]  lg:h-[350px] cursor-pointer flex items-center 
                        justify-between overflow-hidden rounded-[15px] hover:bg-[#efefef] 
                        lg:flex-row flex-col-reverse  relative transition-all transition-duration-300"
                        onClick={()=>window.open(result.url,"_blank")}
                        onMouseOver={()=>{  
                            gsap.to(`#profile-content-${id}-${ind}`,{
                                left:0,
                                duration:0.3
                            })
                        }}
                        onMouseOut={()=>{  
                            gsap.to(`#profile-content-${id}-${ind}`,{
                                left:`${-100}%`,
                                duration:0.3
                            })
                        }}>
                        <div id={`profile-content-${id}-${ind}`} 
                        className="lg:flex flex-col lg:w-1/3 h-full items-start p-3
                        absolute lg:static w-full  text-white lg:text-black left-[-100%]  ">
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
            ))
        ):(<div className='text-center text-3xl'>no watched movie yet</div>)
        }
    </div>)
}