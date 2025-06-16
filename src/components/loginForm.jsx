import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';


//let rendedCount=0
export default function LoginForm  ()  {


    const form =useForm();
    const {register,handleSubmit,formState}=form
    const{errors}=formState;
    

    //the first way
    //const {name,ref,onChange, onBlur}=register("username")

    const onSubmit=(data)=>{
        console.log(data)
    }

    //rendedCount++; 
    return (
        <div>
            {/* <h1>rended count={rendedCount/2}</h1> */}
            <form
            onSubmit={handleSubmit(onSubmit)}
            method="get"
            noValidate
            className="flex flex-col justify-center items-center 
                        gap-5 w-full md:w-[350px] lg:w-[450px] p-5 rounded-md 
                        bg-blue-500"
            >
                <div className="flex flex-col w-fit justify-center gap-3  ">
                    <label 
                    htmlFor='email'
                    className="text-xl font-bold text-white ">Emil</label>
                    <input 
                    id='email'
                    {...register("email",{
                        required:"email is required",
                        pattern:{
                            value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message:"Invalid email"
                        },
                        validate:(value)=>{
                            return value!="admin@admin"||"Invalid email"
                        }
                    })}
                    placeholder="Emil"
                    type="email"
                    required="required"
                    className="bg-[#eee] rounded-[6px] h-[50px] text-black text-xl border-0 outline-0 px-2.5">
                    </input>
                    <p className='text-red-500 p-1.5'>{errors.email?.message}</p>
                </div>
                <div className="flex flex-col w-fit justify-center gap-3  ">
                    <label 
                    htmlFor='password'
                    className="text-xl font-bold text-white ">Password</label>
                    <input 
                    id='password'
                    {...register("password",{
                        required:"password is required",
                        minLength:8,
                    })}
                    placeholder="Password"
                    type="password"
                    required="required"
                    className="bg-[#eee] rounded-[6px] h-[50px] text-black text-xl border-0 outline-0 px-2.5">
                    </input>
                    <p className='text-red-500 p-1.5'>{errors.password?.message}</p>
                </div>
                <div className="flex flex-col w-fit justify-center gap-3  ">  
                    <button 
                    className="bg-[#fff] cursor-pointer rounded-[6px] h-[45px] text-black text-xl border-0 outline-0 px-2.5">submit</button>
                </div>
                <span className="text-white">
                    Don't have an account?,
                    <a
                    href=""
                    className="text-white underline cursor-pointer">
                        sing up
                    </a>
                </span>
            </form>
            <DevTool control={form.control} />
        </div>
    )
}
