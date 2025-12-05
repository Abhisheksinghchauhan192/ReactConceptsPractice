import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import { projectsData } from "./projectsData";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import Footer from "../../components/Footer";
export default function DashBoard() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const filteredProjects = projectsData.filter((project) => {
    return (
      project.desc.toLowerCase().includes(query.toLowerCase()) ||
      project.name.toLowerCase().includes(query.toLowerCase())
    );
  });

  function handleQuery(newquery) {
    setQuery(newquery);
  }

  const navigate = useNavigate();

  function handleAddProject() {
    
    setIsLoading(true);
    setTimeout(() => {
      navigate("/AddProject");
    }, 600);

  }

  return (
    <>
      <div
        className="min-h-screen w-full p-6 lg:p-12 bg-linear-to-br from-slate-900 via-slate-950 to-black text-gray-100 flex flex-col items-center"
        aria-live="polite"
      >
        <header className="w-full max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-slate-800/50 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 841.9 595.3"
                  className="w-16 h-16 text-emerald-400 animate-spin"
                  fill="none"
                  stroke="currentColor"
                  style={{ animationDuration: "5s" }}
                  strokeWidth="20"
                >
                  <g strokeLinecap="round" strokeLinejoin="round">
                    <ellipse
                      cx="420"
                      cy="296.5"
                      rx="200"
                      ry="70"
                      transform="rotate(-30 420 296.5)"
                    />
                    <ellipse
                      cx="420"
                      cy="296.5"
                      rx="200"
                      ry="70"
                      transform="rotate(30 420 296.5)"
                    />
                    <ellipse
                      cx="420"
                      cy="296.5"
                      rx="200"
                      ry="70"
                      transform="rotate(90 420 296.5)"
                    />
                    <circle cx="420" cy="296.5" r="35" fill="currentColor" />
                  </g>
                </svg>
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  <span className="text-4xl sm:text-5xl lg:text-6xl text-emerald-400 font-bold">
                    Welcome
                  </span>{" "}
                  to.. React Project Dashboard
                </h1>
                <p className="mt-1 text-sm text-gray-300">
                  Browse, search and manage your React projects
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center w-full md:w-auto">
              <label
                htmlFor="search"
                className="relative w-full sm:min-w-[360px]"
              >
                <span className="sr-only">Search projects</span>
                <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-teal-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                    />
                  </svg>
                </span>

                <input
                  id="search"
                  type="text"
                  placeholder="Search projects by name or description"
                  onChange={(e) => handleQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-800 border border-slate-700 text-gray-100 text-base focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-shadow"
                  value={query}
                />
              </label>

              <button
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl 
    ${
      isLoading
        ? "bg-emerald-500/70 cursor-not-allowed"
        : "bg-emerald-600 hover:bg-emerald-500"
    } 
    shadow-md shadow-emerald-800/30 text-white text-sm font-medium transition-transform`}
                onClick={handleAddProject}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <span>Add Project</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </header>

        <main className="w-full max-w-7xl mt-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-400">
              Showing{" "}
              <span className="text-teal-200 font-medium">
                {filteredProjects.length}
              </span>{" "}
              project{filteredProjects.length !== 1 ? "s" : ""}
            </p>
            <p className="text-sm text-gray-500 hidden sm:block">
              Pro tip: try searching by day or keywords in the description.
            </p>
          </div>

          <section
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            aria-label="project list"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.name}
                name={project.name}
                link={project.link}
                desc={project.desc}
                details={project.details}
              />
            ))}
          </section>

          {filteredProjects.length === 0 && (
            <div className="mt-12 flex flex-col items-center text-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 14l2-2 4 4m0 0V7a4 4 0 10-8 0v9"
                />
              </svg>
              <p className="text-lg">No projects matched your search.</p>
              <p className="mt-2 text-sm">
                Try different keywords, or{" "}
                <button
                  className="underline text-teal-300"
                  onClick={() => setQuery("")}
                >
                  clear search
                </button>
                .
              </p>
            </div>
          )}
        </main>
        <Footer/>
      </div>
    </>
  );
}
