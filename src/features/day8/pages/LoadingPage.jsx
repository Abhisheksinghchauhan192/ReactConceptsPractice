import { Loader } from "lucide-react"

export default function LoadingPage() {
  return (
    <div className='flex justify-center items-center h-screen'>
    <Loader className='h-22 w-22 text-3xl animate-spin'/>
    <p className='text-4xl text-emerald-300 font-semibold'>Loading..</p>
  </div>
  )
}
