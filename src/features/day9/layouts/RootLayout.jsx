import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    < div className="bg-slate-800 " >
      <nav className="flex gap-6 border-b border-slate-700 px-6 py-4 bg-slate-900">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            isActive
              ? "text-emerald-400 font-semibold"
              : "text-slate-300 hover:text-white"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="docs"
          className={({ isActive }) =>
            isActive
              ? "text-emerald-400 font-semibold"
              : "text-slate-300 hover:text-white"
          }
        >
          Docs
        </NavLink>
      </nav>

      <main className="p-8  text-slate-50">
        <Outlet />
      </main>
    </div>
  );
}
