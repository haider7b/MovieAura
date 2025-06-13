import{profileImg} from "../utils/index.js"
import { FaUser } from "react-icons/fa6";
//import gsap from "gsap"
import SubNavBar from "../components/subNavBar.jsx";
import {watchLater, favorites, latestWatched} from "../consts/index.js"
import ProfileComponent from "../components/profileComponent.jsx";
export default function Profile() {
    const isLogin=false;//for test 

    return(
        <section className="section-padding" >
            <div className="w-full">
                {/* profile info */}
                <div className="flex items-center justify-between flex-col gap-10">
                    <div className="flex items-center justify-center
                    w-[100px] h-[100px] bg-[#bbb] rounded-full overflow-hidden">
                        {isLogin&&profileImg?
                            <img src={profileImg} alt="profile" className="" />
                            :<FaUser className="text-white text-4xl" />
                        }
                    </div>
                    {isLogin&&(
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-bold">User Name: Ghost</h1>
                            <h1 className="text-xl font-semibold">Email: ghost@gmail.com</h1>
                            <h1 className="text-xl font-semibold">joined: 2024/04/05</h1>
                        </div>
                    )}
                </div>
                {/* activity */}
                {isLogin?
                    (
                    <div className="mt-10 w-full h-[50vh]">
                        <div>
                            <SubNavBar 
                            navLinks={["latest-watched","favorites","watch-later"]}
                            contentId={"profile-page"}
                            />
                        </div>
                        <div className="w-full  overflow-hidden">
                            <div 
                            className="flex "
                            style={{width:"300%"}} >
                                <div className="w-1/3"
                                id="profile-page-0"
                                >
                                    <ProfileComponent
                                    list={latestWatched}
                                    id={1}/>  
                                </div>
                                <div className="w-1/3"
                                id="profile-page-1"
                                >
                                    <ProfileComponent
                                    list={favorites}
                                    id={2}/>
                                </div>
                                <div className="w-1/3"
                                id="profile-page-2"
                                >
                                    <ProfileComponent
                                    list={watchLater}
                                    id={3}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    ):
                    <div className="w-full h-[50vh]  flex  
                    justify-center flex-col py-10 items-center gap-5" 
                    >
                    
                        <button
                        className="cursor-pointer w-fit h-fit bg-blue-500 hover:bg-blue-700 px-5 py-2 
                        rounded-md text-white text-2xl font-bold "
                        onClick={()=>window.open("/login","_self")}
                        >
                            login    
                        </button>  
                        <span className="font-small font-light"> login or sign up</span>
                    </div>
                }
            </div>
        </section>
    )
}