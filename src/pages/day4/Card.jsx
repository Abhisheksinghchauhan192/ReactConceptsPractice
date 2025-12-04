
import { useState } from 'react'
import Avatar from '../../components/Avatar'
import {FaRegStar} from 'react-icons/fa'

export default function Card({...props}){

    const [show,setShow] = useState(false)

    const fullName = props.name.split(' ')
    let avatarmsg = fullName[0][0];
    if(fullName.length>1){
        avatarmsg += ` ${fullName[1][0]}`
    }

    return (
        <div className='flex flex-col gap-6 w-full text-amber-50'>
            <div className='flex justify-center w-full text-black'>
            <Avatar img={avatarmsg}/>

            </div>
            <div className='flex justify-center text-2xl font-bold text-amber-300'><h2>{props.name}</h2></div>
            <div className='flex justify-between p-4  text-xl font-semibold'>
                <p className='text-gray-950 p-2 rounded-2xl bg-emerald-300'>{props.price} ₹</p>
                <p className='flex gap-2 '>{props.rating}
                <FaRegStar/>
                 </p>
            </div>
            <button
            className='flex justify-center items-center px-4 py-2 font-medium w-12'
            onClick={()=>setShow(!show)}>{show?"Close":"More.."}</button>
            {show && <p className='text-lg font-medium text-amber-400 '> {props.description}</p>}
        </div>
    )
}