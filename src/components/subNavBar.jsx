import  gsap  from 'gsap';

export default function SubNavBar({navLinks,contentId}){

    function handleLinksClick(ind){
    
        for(let i=0;i<navLinks.length;i++){
            gsap.to(`#${navLinks[i]}-${i}`,{
                        duration:0.5,
                        color:i===ind?"#000":"#999",
                        borderBottom:i===ind?"2px solid #000":"2px solid #fff"
                    })
        }
        
        for(let i=0;i<navLinks.length;i++){
            gsap.to(`#${contentId}-${i}`,{
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
                    id={`${navLinks[ind]}-${ind}`}
                    role="button"
                    className={`hover:text-[#000]
                    ${ind===0?"text-[#000]":"text-[#999]"}
                    ${ind===0?"border-b-2 border-[#000]":"border-b-2 border-[#fff]"}
                    py-3.5 font-semibold hover:border-[#000] 
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