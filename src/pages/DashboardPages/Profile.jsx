import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contact/UserContext";
import Button from "../../components/Ui/Button";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false); // Popup state
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });

  useEffect(() => {
    const savedData = localStorage.getItem("user");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setFormData(parsed);
      if (!user) setUser(parsed);
    } else if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        role: user.role || "Developer",
      });
    }
  }, [user, setUser]);

  const handleSave = () => {
    setUser(formData);
    localStorage.setItem("user", JSON.stringify(formData));
    setIsEditing(false);

    // Alert ki jagah Popup dikhao
    setShowModal(true);

    // 3 seconds baad popup khud gayab ho jaye
    setTimeout(() => setShowModal(false), 3000);
  };
if (user?.role === "guest") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-500">Access Denied: Guests cannot see Profile.</h1>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 relative">
      {/* --- CUSTOM POPUP MODAL --- */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[2rem] p-8 shadow-2xl text-center max-w-sm w-full mx-4 transform animate-in zoom-in duration-300">
            <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Success!</h3>
            <p className="text-gray-500 mt-2">
              Profile details have been updated and saved to LocalStorage.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition shadow-lg cursor-pointer"
            >
              Great, thanks!
            </button>
          </div>
        </div>
      )}

      {/* --- PROFILE UI --- */}
      <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100">
        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-700"></div>

        <div className="px-8 pb-10">
          <div className="relative -mt-16 mb-6 flex justify-between items-end">
            <div className="h-32 w-32 rounded-3xl bg-white p-2 shadow-lg">
              <div className="h-full w-full rounded-2xl bg-indigo-100 flex items-center justify-center text-4xl font-black text-indigo-600">
                {formData.name?.charAt(0) || "U"}
              </div>
            </div>

            {!isEditing ? (
              <Button
                onClick={() => setIsEditing(true)}
                title={"Edit Profile"}
                className=" px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition cursor-pointer shadow-lg shadow-indigo-100 "
              />
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition cursor-pointer shadow-lg shadow-green-100"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 transition cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="space-y-4">
              <div>
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                  Full Name
                </label>
                <input
                  disabled={!isEditing}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full p-4 rounded-2xl border transition-all outline-none ${
                    isEditing
                      ? "border-indigo-400 bg-white ring-4 ring-indigo-50"
                      : "border-transparent bg-gray-50 text-gray-600"
                  }`}
                />
              </div>
              <div>
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                  User Role
                </label>
                <select
                  disabled={!isEditing}
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className={`w-full p-4 rounded-2xl border transition-all outline-none appearance-none ${
                    isEditing
                      ? "border-indigo-400 bg-white ring-4 ring-indigo-50"
                      : "border-transparent bg-gray-50 text-gray-600"
                  }`}
                >
                  <option value="Admin">Admin</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Manager">Manager</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">
                  Email Address
                </label>
                <input
                  disabled={!isEditing}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full p-4 rounded-2xl border transition-all outline-none ${
                    isEditing
                      ? "border-indigo-400 bg-white ring-4 ring-indigo-50"
                      : "border-transparent bg-gray-50 text-gray-600"
                  }`}
                />
              </div>
              <div className="p-5 bg-indigo-50/50 border border-indigo-100 rounded-2xl">
                <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                  <p className="text-xs text-indigo-400 font-bold uppercase">
                    Account Status
                  </p>
                  <p className="text-indigo-700 font-bold text-lg">
                    Verified Account ✅
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
