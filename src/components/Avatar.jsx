export default function Avatar({img}){

    return (

        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-pink-300">
            <h2 className="text-2xl font-bold">{img}</h2>
        </div>
    )
}