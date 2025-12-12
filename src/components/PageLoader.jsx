import { Loader } from "lucide-react";

export default function PageLoader({size}) {
  
    const className = `h-${size} w-${size} animate-spin text-emerald-400`
    return (
    <div className="flex flex-col gap-20 justify-center items-center h-screen w-full text-emerald-500 tex-4xl font-bold">
        <Loader className={className}/>
        <h2>Loading...</h2>
    </div>
  )
}
