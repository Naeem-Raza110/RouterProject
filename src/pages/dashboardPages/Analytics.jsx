const Analytics = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">

      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
      </div>

      {/* Analytics Cards */}
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

      {/* Graph Section */}
      <div className="bg-white rounded-xl shadow p-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">User Growth</h3>
        <div className="h-64 flex items-center justify-center text-gray-400">
          {/* Replace with chart library later */}
          Chart Placeholder
        </div>
      </div>

    </div>
  );
};

export default Analytics;
