"use client"
import Link from "next/link"
export default function RedirectSignIn(){
    return (
        <div className="text-center text-sm mt-6 text-zinc-400">
            Already have an account?{" "}
            <Link 
                href="/login"
                className="text-[#10B981] font-medium hover:underline transiton-all"
                >
                    Sign In

            </Link>

        </div>
    )
}