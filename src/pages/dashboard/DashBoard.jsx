import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import { projectsData } from "./projectsData";

export default function DashBoard() {
  const [query, setQueery] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    return (
      project.desc.toLowerCase().includes(query.toLowerCase()) ||
      project.name.toLowerCase().includes(query.toLowerCase())
    );
  });

  function handleQuery(newquery) {
    setQueery(newquery);
  }

  return (
    <>
      <div
        className="flex flex-col justify-around items-center w-screen p-4 h-screen 
    gap-8 bg-amber-50"
      >
        <div className="flex  flex-col items-center gap-4 w-full ">
          <div className="flex justify-center items-center">
            <h1 className="text-4xl font-bold "> React Project DashBoard </h1>
          </div>
          <div className="flex justify-center w-full h-30 p-4">
            <input
              type="text"
              placeholder="Search in Projects using project description or by Day"
              onChange={(e) => handleQuery(e.target.value)}
              className="w-full  pl-10 py-2 pr-4 border-2 border-teal-300 rounded-2xl text-xl text-gray-900"
              value={query}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-4 p-4 border-black border-2 w-full  ">
          {filteredProjects.map((project) => {
            return (
              <ProjectCard
                name={project.name}
                link={project.link}
                desc={project.desc}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
