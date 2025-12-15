import { NavLink, Outlet, useParams } from "react-router-dom";
import { docsContent } from "../data/docsData";

export default function Topics() {
  const { topicId } = useParams();
  const topic = docsContent[topicId];

  if (!topic) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-semibold text-red-400">
          Topic not found
        </h2>
        <p className="text-slate-400 mt-2">
          Please select a valid topic from the sidebar.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Inner Navigation        */}
      {/* Breadcrumb */}
<div className="text-sm text-slate-400 mb-4">
  <NavLink to="/day9/docs" className="hover:text-white">
    Docs
  </NavLink>
  <span className="mx-2">/</span>
  <span className="capitalize">{topicId}</span>
</div>

      <div className="flex justify-around border-b border-slate-700 mb-6">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            isActive
              ? "pb-2 border-b-2 border-emerald-300 text-emerald-400 font-medium"
              : "text-slate-300 hover:text-white pb-2"
          }
        >
          Overview
        </NavLink>

        <NavLink
          to="examples"
          className={({ isActive }) =>
            isActive
              ? "pb-2 border-b-2 border-emerald-400 text-emerald-400"
              : "pb-2 text-slate-400 hover:text-white"
          }
        >
          Examples
        </NavLink>

        <NavLink
          to="api"
          className={({ isActive }) =>
            isActive
              ? "pb-2 border-b-2 border-emerald-400 text-emerald-400"
              : "pb-2 text-slate-400 hover:text-white"
          }
        >
          API
        </NavLink>
      </div>
      {/* Section Content  */}
      <Outlet context={{ topic }} />
    </div>
  );
}
