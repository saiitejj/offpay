"use client"

import { useState } from "react"

export default function SignupForm(){
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
    return (
        <form className="flex flex-col gap-6">
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
                <select 
                    value={formData.employeeCount}
                    onChange={handleChange}
                    name="employeeCount" 
                    id="employeeCount"
                    className="rounded-lg bg-zinc-900 border border-zinc-800 p-2 text-zinc-400 outline-none focus:ring-2 focus:ring-zinc-600 appearance-none "
                    
                
                >

                    <option value="" disabled hidden>Select company size</option>
                    <option value="1-10">1 - 10 Employees</option>
                    <option value="11-50">11 - 50 Employees</option>
                    <option value="51-100">51 - 100 Employees</option>
                    <option value="100+">100+ Employees</option>
                </select>

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
                className="mt-4 rounded-lg bg-zinc-100 p-2 font-semibold text-zinc-900 hover:bg-zinc-100/80 transition-colors"
                >
                    Create Account

            </button>

        </form>
    )
}

