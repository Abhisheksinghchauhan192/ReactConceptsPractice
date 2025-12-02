
export default function SearchBox({query,placeholder,onChange,children}){

    return (    
        <div className="flex w-full gap-16  justify-center">
            <input 
            className="w-lg p-4 inset-ring-2 inset-ring-teal-200 rounded-2xl"
            type="text" placeholder={placeholder}
             value={query} 
             onChange={(e)=>onChange(e.target.value)}
             />
            {children}

        </div>
    )
}