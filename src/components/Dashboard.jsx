export default function Dashboard() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <p className="text-gray-600 mb-6">
        Monitor your academic scheduling system performance and key metrics
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow rounded-xl p-4">
          <p className="text-gray-500">Active Programs</p>
          <h3 className="text-2xl font-bold">4</h3>
          <p className="text-sm text-indigo-500">B.Ed, M.Ed, FYUP, ITEP</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4">
          <p className="text-gray-500">Total Students</p>
          
        </div>
        <div className="bg-white shadow rounded-xl p-4">
          <p className="text-gray-500">Faculty Members</p>
          
        </div>
        
      </div>

      {/* Quick Actions */}
      <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <button className="bg-blue-500 text-white p-6 rounded-xl shadow hover:bg-blue-600">
          🚀 Generate New Timetable
        </button>
        <button className="bg-green-500 text-white p-6 rounded-xl shadow hover:bg-green-600">
          📊 View Analytics
        </button>
        <button className="bg-purple-500 text-white p-6 rounded-xl shadow hover:bg-purple-600">
          📑 Export Reports
        </button>
      </div>

      {/* Recent Activity */}
      <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
      <div className="bg-white shadow rounded-xl divide-y">
        <div className="p-4 flex items-center gap-3">
          <span className="text-green-500 text-xl">✅</span>
          <div>
            <p className="font-medium">Timetable generated for B.Ed Semester 3</p>
            <p className="text-gray-500 text-sm">
              
            </p>
          </div>
        </div>
        <div className="p-4 flex items-center gap-3">
          <span className="text-purple-500 text-xl">👥</span>
          <div>
            <p className="font-medium">Student elective preferences updated</p>
            <p className="text-gray-500 text-sm">
              
            </p>
          </div>
        </div>
        <div className="p-4 flex items-center gap-3">
          <span className="text-blue-500 text-xl">🏫</span>
          <div>
            <p className="font-medium">New lab facility added to system</p>
            <p className="text-gray-500 text-sm">
              
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
