export default function NoUserFoundPage({msg}) {
  return(
    <div className="flex justify-center items-center min-h-screen w-full ">

      <h1 className="sm:text-2xl md:text-4xl text-emerald-300 font-bold">{msg}</h1>
    </div>
  )
}
