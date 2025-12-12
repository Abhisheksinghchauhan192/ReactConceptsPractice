import AccordianItem from "./AccordianItem"
import { useState } from "react"

export default function Accordian({data}){

    const[openItemIndex,setOpenItemIndex] = useState(1)

    function handleOpenItemIndex(newIndex){
        setOpenItemIndex(newIndex)
    }
    const accordianItems = data.map((item,index)=>{
        return (
        
            <AccordianItem 
            key={item.id}
            id={item.id}
            q={item.question}
            isOpenIndex={openItemIndex}
            a={item.answer}
            onClick={handleOpenItemIndex}

            />
        )
    })

    return (

        <div className="flex flex-col w-screen max-w-xl p-4 m-20 ">
            {accordianItems}
        </div>
    )

}