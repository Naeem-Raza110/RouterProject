import { Link, useLocation } from "react-router-dom";
import Button from "../Ui/Button";
const Sidebar = () => {
  const location = useLocation();

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Profile", path: "/dashboard/profile" },
    { name: "Users", path: "/dashboard/users" },
    { name: "Settings", path: "/dashboard/settings" },
    { name: "Analytics", path: "/dashboard/analytics" },
  ];

  return (
    <div className="h-full bg-[#0f1625] text-white p-6 flex flex-col justify-between">
      
      {/* Top */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Admin <span className="text-blue-500">Panel</span></h2>
        <nav className="flex flex-col space-y-3 text-lg">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium text-white 
                  transition-colors hover:bg-[#1a2235] ${
                    isActive ? "bg-blue-600" : ""
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <Link
        to="/"
        
      >
       <Button title="Logout" className="w-full bg-red-600 hover:bg-red-700 py-2"></Button>
      </Link>
    </div>
  );
};

export default Sidebar;
