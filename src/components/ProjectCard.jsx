import { Link } from "react-router-dom"
import Avatar from "./Avatar"
export default function ProjectCard({name,desc,link}){

    return (

        <div className="flex flex-col justify-center items-center gap-2 p-4 border-teal-900 border-2 w-40 h-80 rounded-lg">
            <Avatar img={desc[0]}/>
            <h2 className="text-2xl font-bold">{name}</h2>
            <div className="flex justify-end p-2 ">
                <Link to={link}
                className="text-blue-900 font-bold"
                >Link</Link>
            </div>
            <p className="text-ceter font-semibold">{desc}</p>
        </div>
    )
}