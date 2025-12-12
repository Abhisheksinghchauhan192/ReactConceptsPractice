import Accordian from './components/Accordian'
import faqs from './AccordianData'

export default function Day3Page(){

    return (
        <div className="flex flex-col gap-2 justify-center items-center w-screen  bg-linear-to-br  from-black via-bg-zinc-800 to-gray-800">
            <h1 className='text-gray-200 font-bold text-4xl mt-4'>Accordian Showcase </h1>
            <Accordian data={faqs}/>
        </div>
    )
}