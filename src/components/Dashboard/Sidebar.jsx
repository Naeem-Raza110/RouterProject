import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../contact/UserContext";
import Button from "../Ui/Button";

const Sidebar = () => {
  const location = useLocation();
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()

  // --- LOCAL STORAGE SYNC (Taake data gayab na ho) ---
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser && !user) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, [user, setUser]);

  // --- LINKS WITH ROLES ---
  const links = [
    { name: "Dashboard", path: "/dashboard", roles: ["Admin", "User", "guest"] },
    { name: "Profile", path: "/dashboard/profile", roles: ["Admin", "User" , "guest"] },
    { name: "Users", path: "/dashboard/users", roles: ["Admin"] },
    { name: "Settings", path: "/dashboard/settings", roles: ["Admin", "User", "guest"] },
    { name: "Analytics", path: "/dashboard/analytics", roles: ["Admin"] },
  ];

  // Filter logic
  const currentRole = user?.role || "guest";
  const filteredLinks = links.filter(link => link.roles.includes(currentRole));

  if (loading) return <div className="w-full h-full bg-[#0f1625]"></div>;

  return (
    <div className="w-full h-full bg-[#0f1625] text-white flex flex-col shadow-none border-none overflow-hidden font-sans">
      
      {/* --- PREMIUM TOP SECTION --- */}
      <div className="p-8 pb-6 animate-[slideDown_0.7s_cubic-bezier(0.2,0.8,0.2,1)]">
        <div className="relative group flex flex-col items-center">
          <div className="relative w-14 h-14 mb-3">
            <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center text-xl font-black border border-white/10 shadow-2xl text-white">
              {user?.name?.[0] || "G"}
            </div>
          </div>
          <h2 className="font-bold text-[10px] tracking-[0.2em] text-blue-400/80 mb-1 uppercase">
            {currentRole}
          </h2>
          <p className="text-sm font-medium uppercase text-white/90 truncate w-full text-center">
            {user?.name || "guest User"}
          </p>
        </div>
      </div>

      {/* --- CINEMATIC LINKS (Filtered) --- */}
      <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto custom-scrollbar">
        {filteredLinks.map((link, index) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              style={{ animationDelay: `${index * 60}ms` }}
              className={`relative flex items-center px-4 py-3 rounded-xl text-[13px] font-semibold tracking-wide transition-all duration-500 group animate-[slideLeft_0.6s_both]
                ${isActive ? "text-white" : "text-white/40 hover:text-white/80"}`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent border-l-2 border-blue-500 rounded-r-none rounded-xl animate-pulse"></div>
              )}
              
              <span className="relative z-10">{link.name}</span>
              
              <div className={`absolute right-4 w-1 h-1 rounded-full bg-blue-500 transition-all duration-300 opacity-0 
                ${isActive ? "opacity-100 scale-125" : "group-hover:opacity-50"}`}>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* --- BOTTOM ACTIONS (Back to Home Included) --- */}
      <div className="p-6 mt-auto space-y-3 animate-[slideUp_0.8s_ease-out]">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4"></div>
        
        {/* Wapis aa gaya aapka button! */}
        <Link to="/" className="block">
          <button className="w-full py-2 text-[11px] font-black uppercase tracking-widest text-white/70 hover:text-white border border-white/5 hover:border-white/20 rounded-lg transition-all duration-300 bg-white/5 hover:bg-white/10 backdrop-blur-sm cursor-pointer">
            Back to Home
          </button>
        </Link>
        
        <Button
          className="w-full py- cursor-pointer"
          title="  Secure Logout"
          isCorrect={false}
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/"); // Logout ke baad home page par le jao
            
          }}
        >
        </Button>
      </div>

      <style>{`
        @keyframes slideDown { 
          from { opacity: 0; transform: translateY(-30px); filter: blur(10px); } 
          to { opacity: 1; transform: translateY(0); filter: blur(0); } 
        }
        @keyframes slideLeft { 
          from { opacity: 0; transform: translateX(-30px); } 
          to { opacity: 1; transform: translateX(0); } 
        }
        @keyframes slideUp { 
          from { opacity: 0; transform: translateY(30px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default Sidebar;