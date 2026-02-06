import { Link } from "react-router-dom";
import Button from "../../components/Ui/Button";
import { UserContext } from "../../contact/UserContext";
import { useContext } from "react";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const userRole = user?.role || "guest"; 

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      {/* --- HEADER (Role Based Button) --- */}
      <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 ">
          Welcome back, {user ? user.name : "guest"}!
          <span className="ml-2 text-sm font-medium px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full">
            {userRole}
          </span>
        </h1>

        {/* Sirf Admin ko "Go to Users" ka button dikhayen */}
        {userRole === "Admin" && (
          <Link to="/dashboard/users">
            <Button
              title={"Go to Users"}
              className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition cursor-pointer shadow-lg shadow-indigo-100"
            />
          </Link>
        )}
      </div>

      {/* --- STATS CARDS (Only for Admin and User) --- */}
      {userRole !== "guest" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-xl shadow p-5 border-l-4 border-blue-500">
            <h3 className="text-sm text-gray-500">Total Users</h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">1,245</p>
          </div>
          {/* Admin ko Revenue dikhao, User ko kuch aur */}
          <div className="bg-white rounded-xl shadow p-5 border-l-4 border-green-500">
            <h3 className="text-sm text-gray-500">Active Sessions</h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">342</p>
          </div>
          {userRole === "Admin" && (
            <div className="bg-white rounded-xl shadow p-5 border-l-4 border-purple-500">
              <h3 className="text-sm text-gray-500">Revenue</h3>
              <p className="text-2xl font-bold text-gray-800 mt-2">$8,420</p>
            </div>
          )}
        </div>
      ) : (
        // Guest Welcome Message
        <div className="mt-6 bg-blue-600 text-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold">Try Premium Access!</h2>
          <p className="mt-2 opacity-90">
            As a guest, you can only view basic settings. Contact admin to
            upgrade your role.
          </p>
        </div>
      )}

      {/* --- RECENT ACTIVITIES (Hidden for Guests) --- */}
      {userRole !== "guest" && (
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Recent Activities
          </h2>
          <div className="bg-white rounded-xl shadow p-6">
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-700 border-b pb-2 border-gray-50">
                <span>User JohnDoe signed up</span>
                <span className="text-gray-400 text-sm">2 mins ago</span>
              </li>
              <li className="flex justify-between text-gray-700 border-b pb-2 border-gray-50">
                <span>Payment of $120 completed</span>
                <span className="text-gray-400 text-sm">10 mins ago</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* --- QUICK LINKS (Filtered by Role) --- */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile (Hidden for Guest) */}

          <Link
            to="/dashboard/profile"
            className="bg-white p-5 rounded-xl shadow border border-transparent hover:border-blue-400 hover:shadow-md transition text-center text-gray-800 font-semibold"
          >
            My Profile
          </Link>

          <Link
            to="/dashboard/settings"
            className="bg-white p-5 rounded-xl shadow border border-transparent hover:border-blue-400 hover:shadow-md transition text-center text-gray-800 font-semibold"
          >
            Settings
          </Link>

          {/* Analytics (Only for Admin) */}
          {userRole === "Admin" && (
            <Link
              to="/dashboard/analytics"
              className="bg-white p-5 rounded-xl shadow border border-transparent hover:border-blue-400 hover:shadow-md transition text-center text-gray-800 font-semibold"
            >
              Analytics Reports
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
