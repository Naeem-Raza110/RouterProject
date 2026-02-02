import { Link } from "react-router-dom";
import Button from "../../components/Ui/Button";
const Dashboard = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 ">
          Admin <span className="text-blue-600">Panel</span>
        </h1>
        <Link to="/dashboard/users">
          <Button
            title={"Go to Users"}
            className=" px-4 py-1 "
          />
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-sm text-gray-500">Total Users</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">1,245</p>
        </div>
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-sm text-gray-500">Active Sessions</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">342</p>
        </div>
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-sm text-gray-500">Revenue</h3>
          <p className="text-2xl font-bold text-gray-800 mt-2">$8,420</p>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Recent Activities
        </h2>
        <div className="bg-white rounded-xl shadow p-6">
          <ul className="space-y-3">
            <li className="flex justify-between text-gray-700">
              <span>User JohnDoe signed up</span>
              <span className="text-gray-400 text-sm">2 mins ago</span>
            </li>
            <li className="flex justify-between text-gray-700">
              <span>Payment of $120 completed</span>
              <span className="text-gray-400 text-sm">10 mins ago</span>
            </li>
            <li className="flex justify-between text-gray-700">
              <span>User JaneDoe updated profile</span>
              <span className="text-gray-400 text-sm">30 mins ago</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/dashboard/profile"
            className="bg-white p-5 rounded-xl shadow border border-transparent hover:border-blue-400 hover:shadow-md transition text-center text-gray-800 font-semibold"
          >
            Profile
          </Link>
          <Link
            to="/dashboard/settings"
            className="bg-white p-5 rounded-xl shadow border border-transparent hover:border-blue-400 hover:shadow-md transition text-center text-gray-800 font-semibold"
          >
            Settings
          </Link>
          <Link
            to="/dashboard/analytics"
            className="bg-white p-5 rounded-xl shadow border border-transparent hover:border-blue-400 hover:shadow-md transition text-center text-gray-800 font-semibold"
          >
            Analytics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
