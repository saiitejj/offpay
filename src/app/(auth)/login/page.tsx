"use client"

import { useState } from "react"
import { loginUser } from "../signup/actions"
import Link from "next/link"

export default function LoginPage(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [isPending,setIsPending]=useState(false)
    const onSubmit=async (e:React.FormEvent)=>{
        e.preventDefault()
        setIsPending(true)
        const response=await loginUser({email,password})
        if(response?.error){
            alert(response.error)
            setIsPending(false)
        }
        
    }
    return(
        <div className="flex flex-col items-center  justify-center min-h-screen bg-black text-white p-4">
            <div className="border w-full max-w-md bg-zinc-900 p-8 rounded-xl border-zinc-800 flex flex-col gap-4">

                <h1 className="text-2xl font-bold mb-4 ">Welcome <span className="text-[#10B981]">Back</span> ! </h1>
                <div className="flex flex-col gap-2">
                    <form onSubmit={onSubmit} className="flex flex-col gap-6">

                        <div className="flex flex-col gap-1.5">
                            <label 
                                htmlFor="email"
                                className="text-sm font-medium text-gray-200" 
                            >
                                    Work Email
                            </label>
                            <input 
                                type="email"
                                placeholder="name@company.com"
                                className="p-3 rounded-lg bg-black border border-zinc-800 focus:border-[#10B981] outline-none transition-all"
                                value={email} 
                                onChange={(e)=> setEmail(e.target.value)}
                                 />
                        </div>
                        <div className="flex flex-col gap-1.5">

                            <label htmlFor="password" className="text-sm font-medium text-gray-200">Password</label>
                            <input 
                                
                                type="password" 
                                placeholder="Please Enter" 
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                                className="p-3 rounded-lg bg-black border border-zinc-800 focus:border-[#10B981] outline-none transition-all" 
                            />
                        </div>
                        {/* <button
                            type="submit"
                            disabled={isPending}
                            className="mt-4 w-full bg-[#10B981] text-black font-semibold p-3 rounded-lg hover:bg-[#0da371] transition-all disabled:cursor-not-allowed disabled:opacity-50"
                            >
                            {isPending?"Loggin in ...":"Login"}
                        </button> */}
                        <button
                            type="submit"
                            disabled={isPending}
                            className={`mt-4 rounded-lg p-2 font-semibold transition-colors ${
                                isPending 
                                ? "bg-zinc-600 text-zinc-400 cursor-not-allowed" 
                                : "bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80"
                            }`}>
                            {isPending? "Signing in ..." :"Sign In"}

                        </button>
                        
                    </form>
                    <div className="text-center text-sm mt-6 text-zinc-400">
                        Don&apos;t have an account?{" "}
                        <Link 
                            href="/signup"
                            className="text-[#10B981] font-medium hover:underline transiton-all"
                            >
                                Sign Up

                        </Link>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}