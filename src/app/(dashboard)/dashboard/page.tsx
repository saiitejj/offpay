"use client"
import { logoutUser } from "~/app/(auth)/signup/actions"
import { act, useState } from "react"
export default function DashboardPage(){
    const [activeTab,setActiveTab]=useState("")
    const handleLogout=async ()=>{
        await logoutUser()
    }
    return (
        <div className="text-white bg-black min-h-screen flex ">
            <aside className="w-64 border-r border-zinc-800 p-6 flex flex-col">
                <button 
                    onClick={()=>setActiveTab("")}
                    className="text-left cursor-pointer">

                <h1 className="text-[#10B981] font-bold text-2xl mb-10">Offpay</h1>
                    
                </button>
                <div className="flex-1 flex-col flex gap-2">
                    <button 
                        onClick={()=>setActiveTab("profile")}
                        className={`p-3 rounded-lg  text-left cursor-pointer transition-all
                            ${activeTab==="profile"
                                ? "bg-zinc-800 text-white"
                                : "text-zinc-100 hover:bg-zinc-800/30 hover:text-zinc-300"

                            }
                            `}
                        
                        >
                        Profile
                    </button>
                    <button 
                        onClick={()=>setActiveTab("leave")}
                        className={`p-3 rounded-lg  text-left cursor-pointer transition-all
                            ${activeTab==="leave"
                                ? "bg-zinc-800 text-white"
                                : "text-zinc-100 hover:bg-zinc-800/30 hover:text-zinc-300"

                            }
                            `}
                        
                        >
                        Leave Management
                    </button>

                </div>
                
                <button 
                    onClick={handleLogout}
                    className="text-zinc-500 cursor-pointer hover:text-zinc-100 transition-all"
                    >
                        Sign Out
                </button>
                

            </aside>
            <main className="flex-1 p-10 border-l border-zinc-900">
                <h2 className="text-3xl font-bold">
                    {activeTab==="profile"?"User Profile":
                    activeTab==="leave"?"Leave Management":
                    "Welcome to Dashboard"}

                    
                </h2>

            </main>
        </div>
    )
}