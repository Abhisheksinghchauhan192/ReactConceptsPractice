export default function ErrorPage({onClick}) {
  return(
    <div className='flex flex-col gap-10 justify-center items-center text-2xl  p-10 '> Error Occured While Fetching Data 
    <button onClick={onClick} className='cursor-pointer bg-emerald-200 rounded-2xl px-4 py-2 text-gray-800'>Refresh</button>
  </div>
  )
}
