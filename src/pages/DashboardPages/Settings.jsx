const Settings = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">

      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
      </div>

      {/* Settings Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Profile Settings</h3>
          <p className="text-gray-600">Update personal info, email, and password.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Notifications</h3>
          <p className="text-gray-600">Manage email, app notifications, and alerts.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Privacy</h3>
          <p className="text-gray-600">Control data visibility and account security.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Billing</h3>
          <p className="text-gray-600">Manage payment methods and subscription.</p>
        </div>
      </div>

    </div>
  );
};

export default Settings;
