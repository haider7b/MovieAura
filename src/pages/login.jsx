import { useState } from "react"

export default function Login() {

    //const[login,setLogin]=useState(false);

    return (
        <section className="section-padding ">
            <div className="w-full h-[60vh] flex justify-center items-center">
                <form
                method="get"
                className="flex flex-col justify-center items-center 
                gap-5 w-full md:w-[350px] lg:w-[450px] p-5 rounded-md  bg-blue-500">
                    <div className="flex flex-col w-fit justify-center gap-3  ">
                        <label className="text-xl font-bold text-white " >User Name</label>
                        <input 
                        placeholder="User Name"
                        type="text"
                        required="required"
                        className="bg-[#eee] rounded-[6px] h-[50px] text-black text-xl border-0 outline-0 px-2.5"></input>
                    </div>
                    <div className="flex flex-col w-fit justify-center gap-3  ">
                        <label className="text-xl font-bold text-white ">Emil</label>
                        <input 
                        placeholder="Emil"
                        type="email"
                        required="required"
                        className="bg-[#eee] rounded-[6px] h-[50px] text-black text-xl border-0 outline-0 px-2.5"></input>
                    </div>
                    <div className="flex flex-col w-fit justify-center gap-3  ">
                        <label className="text-xl font-bold text-white ">Password</label>
                        <input 
                        placeholder="Password"
                        type="password"
                        required="required"
                        className="bg-[#eee] rounded-[6px] h-[50px] text-black text-xl border-0 outline-0 px-2.5"></input>
                    </div>
                    <div className="flex flex-col w-fit justify-center gap-3  ">
                        
                        <input 
                        value="Login"
                        type="submit"
                        readOnly="readOnly" 
                        className="bg-[#fff] cursor-pointer rounded-[6px] h-[45px] text-black text-xl border-0 outline-0 px-2.5"></input>
                    </div>
                    <span className="text-white">Don't have an account?, <a href="/register" className="text-white underline">sing up</a></span>
                </form>
            </div>
        </section>
    )
}