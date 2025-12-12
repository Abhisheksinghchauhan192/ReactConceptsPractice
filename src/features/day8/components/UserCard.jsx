import { Link } from "react-router-dom"
import Avatar from '../../../components/Avatar'

export default function UserCard({id,name,age,gender,city,email,occupation,img}) {
  return(

    <Link to={`user/${id}`} 
    className="bg-slate-800/60 rounded-2xl pl-10 pr-4 py-4 shadow-2xl transition hover:translate-1 hover:shadow-4xl duration-350 hover:border hover:border-emerald-300 overflow-hidden" 
    >
      <Avatar img={img}/>
      <h2 className="text-center font-bold ">{name}</h2>
      <div className="flex justify-between p-4 text-emerald-200 ">
        <p className="text-blue-400">Age <span className="text-emerald-400 font-semibold">{age}</span></p>
        <p className="font-semibold bg-slate-700 px-2 py-1 rounded-2xl">{gender}</p>
      </div>
      <h2 className="text-lg text-gray-300">Location:{city}</h2>
      <h2 className="text-emerald-200">Occupation: {occupation}</h2>
      <p className="text-sm text-wrap w-full">{email}</p>
    </Link>

  )
}
