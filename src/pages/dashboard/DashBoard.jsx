
import ProjectCard from "../../components/ProjectCard";

export default function DashBoard() {
  return (
    <>
    <div className="flex flex-col justify-center items-center w-screen p-4 h-screen bg-teal-200 gap-8">
        <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold "> React Project DashBoard </h1>
        </div>
        <div className="flex flex-wrap gap-4 p-4 border-black border-2 w-full h-full">
    
        <ProjectCard name='Day1' link='/day1' desc='Searchable Cards Implementation'/>
        <ProjectCard name="Day2" link='/day2'desc={'Dropdown Filter Implementation'}/>

        </div>
    </div>


    </>
  );
}
