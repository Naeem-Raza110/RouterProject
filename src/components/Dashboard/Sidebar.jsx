import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black text-white p-6 flex flex-col justify-between">
      
      {/* Top Links */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        <nav className="flex flex-col space-y-4 text-lg">
          <Link to="/dashboard" className="hover:text-blue-400 transition">Dashboard</Link>
          <Link to="/dashboard/profile" className="hover:text-blue-400 transition">Profile</Link>
          <Link to="/dashboard/settings" className="hover:text-blue-400 transition">Settings</Link>
          <Link to="/dashboard/analytics" className="hover:text-blue-400 transition">Analytics</Link>
        </nav>
      </div>

      {/* Logout Button */}
      <Link
        to="/"  // Redirect to Home
        className="bg-red-600 hover:bg-red-700 transition text-white py-2 px-4 rounded-lg text-center"
      >
        Logout
      </Link>

    </div>
  );
};

export default Sidebar;
