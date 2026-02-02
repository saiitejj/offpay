"use server"

import { db } from "../../../lib/db"
import * as bcrypt from "bcryptjs"
import { cookies } from "next/headers"

import { createSession,deleteSession } from "~/lib/session"
import { redirect } from "next/navigation"

interface RegisterCompanyData {
    name?:string;
    password?: string;
    confirmPassword?: string;
    companyName?: string;
    employeeCount?: string;
    employerName?: string;
    email?: string;
}

export async function logoutUser(){
    await deleteSession()
    redirect("/login")
}

export async function registerCompany(formData:RegisterCompanyData) {
    try{ 

        if (!formData.password || !formData.confirmPassword || !formData.email) {
            return { error: "Missing required fields" }
        }

        if (formData.password !== formData.confirmPassword) {
            return { error: "Passwords do not match" }
        }
        const passwordToHash =String(formData.password)
        const hashedPassword :string =await bcrypt.hash(passwordToHash,10)
        await db.company.create({
            data:{
                name:formData.companyName ?? "Unnamed Company",
                employeeCount:Number.parseInt(formData.employeeCount ?? "0")||0,
                users:{
                    create:{
                        name:formData.employerName ?? "Employer",
                        email:formData.email,
                        password:hashedPassword ,
                        role:"MANAGER",
                    }
                }
            }
        })
        return {success:true}
    }catch(error:unknown){
        console.error("SIGNUP_ERROR",error)
        const errorMessage = error instanceof Error ? error.message : String(error);
        
        return {error:"Something went wrong or email already exists.",errorMessage}
    }

}

export async function loginUser(formData:{email?:string;password?:string}) {
    if (!formData.email || !formData.password){
        return {error: "Please enter your email and password"}
    }

    const user=await db.user.findUnique({
        where:{ email:formData.email}
    })
    if(!user){
        return {error:"No user fount with this email"}
    }

    const isPasswordCorrect=await bcrypt.compare(formData.password,user.password)

    if(!isPasswordCorrect){
        return {error:"Incorrect password"}
    }
    await createSession(user.id,user.role)
    alert("Success Redirecting ...")
    redirect("/dashboard")

    
    
}