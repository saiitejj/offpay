"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { registerCompany } from "./actions"
export default function SignupForm(){
    const router=useRouter()
    const [formData,setFormData]=useState({
        companyName:"",
        employerName:"",
        email:"",
        password:"",
        confirmPassword:"",
        employeeCount:"",
    })
    const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        const {name,value}=e.target
        setFormData((prev)=>({
            ...prev,
            [name]:value,
        }))
    }
    const [loading,setLoading]=useState(false)
    const handleSubmit=async (e: React.FormEvent)=>{
        e.preventDefault()
        setLoading(true)
        try{

            const response=await registerCompany(formData)
            if(response.error){
                alert(response.error)
                setLoading(false)
            }else{
                alert("Account Created Successfully!")
                router.push("/login")
            }
        }catch(err){
            console.error("Submission error:", err)
            alert("An unexpected error occurred.")
            setLoading(false)     
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">

                <label htmlFor="company" className="text-sm font-medium text-gray-200">Company Name</label>
                <input 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Please Enter" 
                    className="rounded-lg bg-zinc-900 border border-zinc-800 p-2 text-zinc-100 outline-none focus:ring-2 focus:ring-zinc-600" 
                />
            </div>
            <div className="flex flex-col gap-1.5">
                <label htmlFor="manager" className="text-sm font-medium text-gray-200">
                    Employer name
                </label>
                <input 
                    name="employerName"
                    value={formData.employerName}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Please Enter" 
                    className="rounded-lg bg-zinc-900 border border-zinc-800 p-2 text-zinc-100 outline-none focus:ring-2 focus:ring-zinc-600" 
                />
            </div>
            
            <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-gray-200">
                    Work Email
                </label>
                <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="Please Enter" 
                    className="rounded-lg bg-zinc-900 border border-zinc-800 p-2 text-zinc-100 outline-none focus:ring-2 focus:ring-zinc-600" 
                />
            </div>
            <div className="flex flex-col gap-1.5">
                <label 
                    htmlFor="employeeCount" 
                    className="text-sm font-medium text-gray-200">
                        Number of Employees

                </label>
                <input 
                    type="number"
                    name="employeeCount"
                    value={formData.employeeCount}
                    onChange={handleChange}
                    placeholder="e.g. 25"
                    className="rounded-lg bg-zinc-900 border border-zinc-800 p-2 text-zinc-100 outline-none focus:ring-2 focus:ring-zinc-600" 
                />

            </div>
            <div className="flex flex-col gap-1.5">
                <label htmlFor="password" className="text-sm font-medium text-gray-200">
                    Password
                </label>
                <input 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password" 
                    placeholder="Please Enter a Strong Password" 
                    className="rounded-lg bg-zinc-900 border border-zinc-800 p-2 text-zinc-100 outline-none focus:ring-2 focus:ring-zinc-600" 
                />
            </div>
            <div className="flex flex-col gap-1.5">
                <label htmlFor="cpassword" className="text-sm font-medium text-gray-200">
                    Confirm Password
                </label>
                <input 
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    type="password" 
                    placeholder="Please Re-enter the Password" 
                    className="rounded-lg bg-zinc-900 border border-zinc-800 p-2 text-zinc-100 outline-none focus:ring-2 focus:ring-zinc-600" 
                />
            </div>
            <button
                type="submit"
                disabled={loading}
                className={`mt-4 rounded-lg p-2 font-semibold transition-colors ${
                    loading 
                    ? "bg-zinc-600 text-zinc-400 cursor-not-allowed" 
                    : "bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80"
                }`}>
                   {loading? "Creating Account ..." :"Create Account"}

            </button>

        </form>
    )
}

