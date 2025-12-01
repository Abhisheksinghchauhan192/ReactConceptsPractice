
export default function SearchBox({query,placeholder,onChange}){

    return (    
        <div className="flex w-full gap-16  justify-center">
            <input 
            className="w-lg p-4 inset-ring-2 inset-ring-teal-200 rounded-2xl"
            type="text" placeholder={placeholder}
             value={query} 
             onChange={(e)=>onChange(e.target.value)}
             />
            <button 
            className="flex justify-center items-center border-2 border-teal-300 px-4 py-2  rounded-2xl hover:bg-teal-200 cursor-pointer"
            onClick={()=>onChange('')}>Reset</button>
        </div>
    )
}