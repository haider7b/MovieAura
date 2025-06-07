import  gsap  from 'gsap';

export default function SubNavBar({navLinks}){

    function handleLinksClick(ind){
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
                duration:i===ind?0.8:0.5,
                delay:i===ind?0.2: 0.5,
                ease:"learner",
            })
        }
        // gsap.to("#content",{
        //             duration:0.8,
        //             x:`${-ind*100}%`,
        //             backgroundColor:`${ind===0?"#fff":"#f5f5f5"}`,
        //             ease:"learner",
        //             delay:0.2
        //     })
    }


    return(
        <div className="flex items-center gap-6  text-[#999]
        mb-10    text-[18px] border-b-2 border-[#bbb]">
            {navLinks.map((link,ind)=>(
                <div
                key={link} 
                id={`link-${ind}`}
                role="button"
                className="hover:text-[#000] py-3.5 border-[#fff] hover:border-[#000] 
                border-b-2 cursor-pointer"
                onClick={()=>{
                    handleLinksClick(ind)
                }}
                
                >
                {link.includes("-")?link.replace("-"," "):link}</div>
            ))}
        </div>
    )
}