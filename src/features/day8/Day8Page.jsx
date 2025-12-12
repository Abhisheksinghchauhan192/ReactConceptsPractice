import { Outlet } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

export default function Day8Page() {
  return (
    <div className="min-h-screen w-full bg-linear-to-b from-slate-800 to-slate-900/70 text-slate-50">
      <header
        className="bg-slate-800 flex flex-col gap-10 p-4 text-gray-200 
      "
      >
        <h1 className="flex  w-full text-2xl sm:text-4xl font-bold text-emerald-300 justify-center">
          Welcome to Day8{" "}
        </h1>
        <p className="w-full flex justify-center text-xs text-gray-300 sm:text-base">
          
          Following listed Cards are demo for dynamic Routing .... in REACT
        </p>
      </header>
      <UserProvider>
        <Outlet />
      </UserProvider>
    </div>
  );
}
