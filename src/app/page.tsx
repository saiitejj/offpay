import Link from "next/link"
export default function HomePage(){
  return(
    
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#09090b] text-zinc-100">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <Link href="/signup">
          <h1 className="flex text-5xl font-bold font-black uppercase tracking-tight justify-center sm:text-[5rem] items-center">
              <span className="text-white">Off</span> 
              <span className="text-[#10B981]">Pay</span>
          </h1>
        </Link>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          
          <Link href="/signup" className="cursor-pointer">
            <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-zinc-900/50 p-4 border border-zinc-800 hover:bg-zinc-800/50 transition-colors">
              <h3 className="text-2xl font-bold text-[#10B981]">Complete ✅</h3>
              <div className="text-lg text-zinc-300">
                Manager Signup flow and company Registration are live.
              </div>
            </div>
          </Link>

          <Link href="/login" className="cursor-pointer">
            <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-zinc-900/50 p-4 border border-zinc-800 hover:bg-zinc-800/50 transition-colors">
              <h3 className="text-2xl font-bold text-[#10B981]">Complete ✅</h3>
              <div className="text-lg text-zinc-300">
                Secure Login flow with session handling.
              </div>
            </div>
          </Link>

          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-zinc-900/10 p-4 border border-zinc-800/50 opacity-60">
            <h3 className="text-2xl font-bold">Next Update</h3>
            <div className="text-lg">
              Creating the Employee Dashboard 🚀
            </div>
          </div>
        </div>

      </div>
    </main>
    
  )
}