import { NavLink, Outlet } from "react-router-dom";
import { docsData } from "../data/docsData";
import { useState } from "react";
import { PiHamburgerDuotone } from "react-icons/pi";

export default function DocsLayout() {
  const[isOpen,setIsOpen] = useState(true);
  const[isMobileOpen,setIsMobileOpen] = useState(false);

  return (
<>
      <aside className="sm:hidden min-h-[calc(100vh-64px)] w-64 absolute left-0 top-16 p-4 ">
          <div className="flex items-center justify-between mb-4">
          {isMobileOpen && (
            <h2 className="text-sm font-semibold text-slate-400 uppercase">
              Documentations
            </h2>
          )}

          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="text-slate-400 hover:text-white cursor-pointer text-lg font-bold"
            title="Toggle sidebar"
          >
            {!isMobileOpen ? <PiHamburgerDuotone />: "X"}
          </button>
        </div>

          <nav className={`bg-slate-800 ${isMobileOpen?'flex flex-col gap-2':"hidden"}`}>
          {docsData.map((doc) => (
            <NavLink
              key={doc.id}
              to={doc.id}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-emerald-400 font-medium"
                    : "text-slate-300 hover:text-white"
                } ${!isOpen ? "text-center text-xs" : ""}`
              }
            >
              {doc.title}
            </NavLink>
          ))}
        </nav>

      </aside>

    <div className="flex min-h-[calc(100vh-64px)]">
      {/* SideBar Side Navigation Menu  */}
      <aside
        className={`hidden sm:block border-r border-slate-700 transition-all duration-300 ${
          isOpen ? " w-64 md:p-4" : "w-8 md:p-2"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          {isOpen && (
            <h2 className="text-sm font-semibold text-slate-400 uppercase">
              Documentation
            </h2>
          )}

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-slate-400 hover:text-white"
            title="Toggle sidebar"
          >
            {isOpen ? "⟨⟨" : "⟩⟩"}
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {docsData.map((doc) => (
            <NavLink
              key={doc.id}
              to={doc.id}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-emerald-400 font-medium"
                    : "text-slate-300 hover:text-white"
                } ${!isOpen ? "text-center text-xs" : ""}`
              }
            >
              {isOpen ? doc.title : doc.title[0]}
            </NavLink>
          ))}
        </nav>
      </aside>


      {/* Content Section Of the Page  */}
      <section className="flex-1 p-8">
        <Outlet />
      </section>
    </div>

    </>
  );
}
