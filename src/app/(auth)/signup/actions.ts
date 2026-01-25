"use server"

import { db } from "../../../lib/db"
// import { db } from "~/lib/db"
import bcrypt from "bcryptjs"
export async function registerCompany(formData:any) {
    try{ 

        if (formData.password!==formData.confirmPassword){
            return {error:"Passwords do not match"}
        }
        const hashedPassword=await bcrypt.hash(formData.password,10)
        const newCompany=await db.company.create({
            data:{
                name:formData.companyName,
                employeeCount:parseInt(formData.employeeCount)||0,
                users:{
                    create:{
                        name:formData.employerName,
                        email:formData.email,
                        password:hashedPassword,
                        role:"MANAGER",
                    }
                }
            }
        })
        return {success:true}
    }catch(error:any){
        console.error("SIGNUP_ERROR",error)
        return {error:"Something went wrong or email already exists."}
    }

}