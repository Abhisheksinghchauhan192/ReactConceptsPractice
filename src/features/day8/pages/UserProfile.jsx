import LoadingPage from "./LoadingPage";
import { useUsers } from "../context/UserContext";
import ErrorPage from "./ErrorPage";
import NoUserFoundPage from "./NoUserFoundPage";
import { useNavigate, useParams } from "react-router-dom";

export default function UserProfile() {

  const { users, error, loading, refresh } = useUsers();
  const userId = useParams("id").id;
  const navigate = useNavigate()
  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage onClick={refresh} />;
  if (!users || users.length === 0)
    return <NoUserFoundPage msg={"User Detailed Not Found"} />;

  const user = users.find((u) => u.id == userId);
  return (
    <div className="flex flex-col gap-10 w-full bg-slate-950/30 min-h-screen p-20">

      <div>
        <button onClick={()=>navigate(-1)}
          className="px-2 py-1 bg-emerald-300 cursor-pointer border-none rounded-2xl text-slate-950"
          >← Back</button>
      </div>
    
      <div className="flex  p-2 sm:pl-4 sm:pt-2 bg-slate-700 rounded-2xl w-40 sm:w-full h-40 sm:h-45 relative justify-end overflow-hidden ">
        <img
          src={user.avatar}
          alt="UserProfileImage"
          className="sm:object-cover w-30 justify-self-center rounded-2xl sm:rounded-full absolute top-2 left-4 sm:w-40 sm:h-40"
        />
        <div className="w-40 h-40 bg-slate-950/50 rotate-45 rounded-4xl hidden sm:block "></div>
      </div>

      <div>
        <h2 className=" text-base sm:text-2xl lg:text-4xl font-semibold text-emerald-400 ">
          {user.details}
        </h2>
      </div>

      <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-2 ">
        <div className="flex flex-col gap-10 p-8  bg-slate-900/50 rounded-2xl">
          <h3 className="text-base sm:text-3xl font-semibold text-gray-300 underline-offset-6 underline">
            Personal Details
          </h3>
          <div className="w-full bg-slate-700 p-2 rounded-xl flex flex-col gap-2 shadow-2xl">
            <h3 className="text-base sm:text-lg font-semibold">{user.name}</h3>
            <p className="text-sm">From {user.location?.city || "Unknown"}</p>
            <p className="text-md text-emerald-400 font-medium">
              {user.occupation}
            </p>
            <div className="flex justify-between p-1">
              <p className="bg-slate-950/60 rounded-4xl px-2 py-1">Joined</p>
              <p className="text-sm text-gray-300 font-medium">
                {new Date(user.joined).toDateString()}
              </p>
            </div>
            <div className="flex justify-start gap-4">
              <p className="py-1 px-2 bg-slate-950/50 rounded-2xl">
                {user.followers}+
              </p>
              <p className="text-emerald-300 font-semibold">Followers</p>
            </div>
            <div>
              <p className="p-2 bg-slate-800 rounded-2xl text-emerald-200">
                {user.brief}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 p-8  bg-slate-900/50 rounded-2xl">
          <div className="flex flex-col bg-slate-700 rounded-2xl p-2">
            <h2 className="text-lg sm:text-xl font-medium text-emerald-400">
              Skills:
            </h2>
            <div className="flex gap p-1 flex-wrap">
              {user.skills.map((sk) => {
                return (
                  <div
                    key={sk}
                    className="px-2 py-1 bg-slate-950/80 rounded-xl m-1"
                  >
                    {sk}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col bg-slate-700 rounded-2xl p-2 gap-2">
            <h2 className="text-lg sm:text-xl font-medium text-emerald-200">
              Interest:
            </h2>
            {user.interests.map((int) => {
              return (
                <div key={int}>
                  <span className="px-2 py-1 bg-slate-950/40 rounded-2xl ">
                    {int}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-slate-950/50 rounded-2xl p-4">
        <div className="flex w-full justify-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-emerald-300 font-bold">
            Routine
          </h2>
        </div>
        <div className="flex justify-center p-6">
          <table className="w-full table-auto border-collapse bg-slate-700/60 rounded-xl overflow-hidden">
            <thead className="bg-slate-800">
              <tr>
                <th className="px-4 py-2 text-left text-slate-200">Time</th>
                <th className="px-4 py-2 text-left text-slate-200">Activity</th>
              </tr>
            </thead>

            <tbody>
              {user.dailyRoutine.map((rt, i) => (
                <tr
                  key={i}
                  className="
          border-b border-slate-600
          hover:bg-slate-600/40
          hover:shadow-md hover:shadow-emerald-500/20
          transition-colors duration-200
        "
                >
                  <td className="px-4 py-2 text-slate-300">{rt.time}</td>
                  <td className="px-4 py-2 text-slate-300">{rt.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
