import Link from "next/link"
export default function HomePage(){
  return(
    
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#09090b] text-zinc-100">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <Link href="/signup">
          <h1 className="flex text-5xl font-bold font-black uppercase tracking-tighter -space-x-px justify-center sm:text-[5rem]">
            <span className="bg-zinc-800 px-4 py-2 text-cyan-300 rounded-l-xl">Off</span> 
            <span className="bg-cyan-300 px-4 py-2 text-zinc-800 rounded-r-xl">Pay</span>
          
          </h1> 
        </Link>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-zinc-900/50 p-4 border border-zinc-800 hover:bg-zinc-800/50 transition-colors">
              <h3 className="text-2xl font-bold">Status: Building 🏗️</h3>
              <div className="text-lg">
                Database is synced. #OP engine is starting up.

              </div>
          </div>
          <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-zinc-900/50 p-4 border border-zinc-800 hover:bg-zinc-800/50 transition-colors">
            <h3 className="text-2xl font-bold">Next Update</h3>
            <div className="text-lg">
              Creating the Manager Signup flow and company Registration.

            </div>
          </div>
        </div>

      </div>
    </main>
    
  )
}