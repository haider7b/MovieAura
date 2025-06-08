import  gsap  from 'gsap';

export default function SubNavBar({navLinks}){

    function handleLinksClick(ind){
        console.log("clicked");
        for(let i=0;i<navLinks.length;i++){
            gsap.to(`#link-${i}`,{
                        duration:0.5,
                        color:i===ind?"#000":"#999",
                        borderBottom:i===ind?"2px solid #000":"2px solid #fff"
                    })
        }
        
        for(let i=0;i<navLinks.length;i++){
            gsap.to(`#content-${i}`,{
                display:i===ind?"block":"none",
                x:ind===i?0:`${-100}%`,
                duration:0.8,
                delay: 0.3,
                ease:"back.inOut",
            })
        }
    }


    return(
        <div className='mb-10'>
            <div className="flex items-center gap-6  
            text-[18px]  relative">
                {navLinks.map((link,ind)=>(
                    <div
                    key={link} 
                    id={`link-${ind}`}
                    role="button"
                    className={`hover:text-[#000] text-[${ind===0?"#000":"#999"}] py-3.5 border-[${ind===0?"#000":"#fff"}] hover:border-[#000] 
                    border-b-2 cursor-pointer`}
                    onClick={()=>{
                        handleLinksClick(ind)
                    }}
                    >
                        {link.includes("-")?link.replace("-"," ").toUpperCase():link.toUpperCase()}
                    </div>
                ))}
                <hr 
                style={{backgroundColor:"#bbb",border:"none",height:"1px"}}
                className='absolute bottom-[0] w-full h-[2px]'
                ></hr>
            </div>
        </div>
    )
}