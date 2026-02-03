import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Ui/Button";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()),
  );

  const visibleUsers = filtered.slice(0, visibleCount);

  if (loading)
    return (
      <div className="p-10 text-center text-gray-400 animate-pulse">
        Loading Users...
      </div>
    );

  return (
    <div className="p-6  mx-auto min-h-screen bg-gray-100">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold text-gray-900 tracking-wide">
          Users
        </h2>

        <input
          type="text"
          placeholder="Search..."
          className="bg-white px-4 py-2 border border-gray-300 rounded-lg
          text-sm w-full sm:w-64 focus:ring-2 focus:ring-blue-400 outline-none 
          text-gray-900 placeholder-gray-400 transition-all"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleUsers.map((user) => (
          <Link
            key={user.id}
            to={`/dashboard/users/${user.id}`}
            className="bg-white p-5 rounded-2xl border border-gray-200
            hover:border-blue-400 hover:shadow-lg transition-all group flex flex-col items-center"
          >
            <div
              className="w-16 h-16 rounded-full bg-gray-200 text-gray-700 
              flex items-center justify-center text-2xl font-bold mb-4
              group-hover:bg-blue-400 group-hover:text-white transition-colors shadow-sm"
            >
              {user.name.charAt(0)}
            </div>

            {/* Name & Username */}
            <h3 className="text-lg font-semibold text-gray-900 text-center truncate">
              {user.name}
            </h3>
            <p className="text-sm text-gray-500 text-center truncate">
              @{user.username}
            </p>

            {/* Hover overlay */}
            <div
              className="mt-3 text-xs font-semibold text-blue-400 
              text-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              View Profile
            </div>
          </Link>
        ))}
      </div>

      {/* See More Button */}
      {visibleCount < filtered.length && (
        <div className="flex justify-end mt-8">
          <Button
            onClick={() => setVisibleCount(filtered.length)}
            title={" See More Users"}
            className={"px-6 py-3 "}
          />
        </div>
      )}
    </div>
  );
};

export default Users;
