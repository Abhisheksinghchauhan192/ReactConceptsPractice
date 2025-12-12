import CardContextProvider from "./context/CardContextProvider"
import Form from "./component/Form"
import GeneratedCard from "./GeneratedCard"
import { useState } from "react"

export default function Day5Page(){

    const[showCard,setShowCard] = useState(true)

    return (
        
        <div className="flex justify-center w-screen min-h-screen p-8 bg-slate-900 text-gray-300">

        <CardContextProvider>

            { showCard && <Form showCard={showCard}  onShow={setShowCard}/> }
            {
                !showCard && 
              <GeneratedCard/>}

        </CardContextProvider>
        </div>
    )
}