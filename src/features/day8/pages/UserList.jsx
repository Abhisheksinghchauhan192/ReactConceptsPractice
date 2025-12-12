import { useUsers } from "../context/UserContext";
import UserCard from "../components/UserCard";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";
import NoUserFoundPage from "./NoUserFoundPage";
import { Search } from "lucide-react";
import { useState } from "react";

export default function UserList() {
  const { users, error, refresh, loading } = useUsers();

  const [query, setQuery] = useState("");

  if (loading) return <LoadingPage />;
  if (error) return <ErrorPage onClick={refresh} />;

  if (!users || users.length === 0)
    return <NoUserFoundPage msg={"NO User Found !"} />;

  function handleChange(e) {
    setQuery(e.target.value.trim());
  }

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.occupation.toLowerCase().includes(query.toLowerCase())
    );
  });

  const userCardList = filteredUsers.map((user) => {
    return (
      <UserCard
        key={user.id}
        id={user.id}
        name={user.name}
        img={user.avatar}
        age={user.age}
        gender={user.gender}
        occupation={user.occupation}
        city={user.location?.city || "Unknown"}
        email={user.email}
      />
    );
  });

  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex  flex-col gap-2 px-4 flex-wrap">
        <h2 className="pl-20 font-semibold py-2 px-4 underline underline-offset-4">
          Found <span className="text-emerald-400">{users.length}</span> Users
        </h2>
        <span className="w-full flex justify-center">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Userr Profiles By their name or work..."
              id={"searchBar"}
              onChange={handleChange}
              className="border border-emerald-300 text-emerald-300 font-medium focus:border-none rounded-2xl pl-10  h-10 w-[80%] "
            />
            <Search className="absolute left-2 top-2" />
          </div>
        </span>
      </div>

      {filteredUsers.length === 0 && (
        <NoUserFoundPage msg={"No User Found Based On Your Search !"} />
      )}
      <div
        className="text-gray-50
  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 gap-8  
    "
      >
        {filteredUsers.length ? userCardList : null}
      </div>
    </div>
  );
}
