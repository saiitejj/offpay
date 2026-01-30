import SignupForm from "./SignupForm"
import RedirectSignIn from "./RedirectSignIn"

export default function SignupPage(){
    return(
        <main className="flex flex-col items-center justify-center min-h-screen bg-[#09090b] text-zinc-100">
            <div className="container flex flex-col items-center justify-center gap-6 px-4 py-16">
                <h1 className="text-3xl font-light tracking-widest uppercase sm:text-5xl">
                    Register <span className="font-bold text-[#10B981]">Company</span>
                </h1>
                <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl bg-zinc-900/50 p-6 border border-zinc-800 shadow-2xl">
                    <SignupForm />
                    <RedirectSignIn />
                </div>
            </div>
        </main>
    )
}