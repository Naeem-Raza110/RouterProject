import { useContext } from "react";
import { UserContext } from "../../contact/UserContext";
const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen p-6 bg-gray-100">

      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
      </div>

      {/* Profile Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">User Info</h3>

          <p>
            <span className="font-semibold text-gray-600">Name:</span>{" "}
            {user?.name || "N/A"}
          </p>

          <p>
            <span className="font-semibold text-gray-600">Email:</span>{" "}
            {user?.email || "N/A"}
          </p>

          <p>
            <span className="font-semibold text-gray-600">Role:</span>{" "}
            {user?.role || "User"}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Settings</h3>
          <p className="text-gray-600">
            Change password, update email, manage account preferences.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Profile;
