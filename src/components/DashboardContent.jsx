import React from "react";

export default function DashboardContent() {
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow rounded-2xl p-4 flex flex-col items-start">
          <h2 className="font-semibold text-gray-700">Quick Generator</h2>
          <p className="text-sm text-gray-500 mb-3">Auto-generate timetable with constraints</p>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Generate Now
          </button>
        </div>

        <div className="bg-white shadow rounded-2xl p-4">
          <h2 className="font-semibold text-gray-700">Recent Timetables</h2>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li>📅 CSE - 5th Sem</li>
            <li>📅 ECE - 3rd Sem</li>
            <li>📅 ME - 7th Sem</li>
          </ul>
        </div>

        <div className="bg-white shadow rounded-2xl p-4">
          <h2 className="font-semibold text-gray-700">Stats Overview</h2>
          <p className="text-sm text-gray-500 mt-2">Total Timetables: <b>12</b></p>
          <p className="text-sm text-gray-500">Faculty Assigned: <b>45</b></p>
          <p className="text-sm text-gray-500">Free Slots: <b>6</b></p>
        </div>
      </div>

      {/* Timetable Preview */}
      <div className="bg-white shadow rounded-2xl p-4 mb-6">
        <h2 className="font-semibold text-gray-700 mb-3">Mini Timetable Preview</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-2 border">Day</th>
                <th className="p-2 border">9-10</th>
                <th className="p-2 border">10-11</th>
                <th className="p-2 border">11-12</th>
                <th className="p-2 border">12-1</th>
                <th className="p-2 border">2-3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border font-semibold">Mon</td>
                <td className="p-2 border">Maths</td>
                <td className="p-2 border">DSA</td>
                <td className="p-2 border">OS</td>
                <td className="p-2 border">Break</td>
                <td className="p-2 border">DBMS</td>
              </tr>
              <tr>
                <td className="p-2 border font-semibold">Tue</td>
                <td className="p-2 border">DBMS</td>
                <td className="p-2 border">CN</td>
                <td className="p-2 border">AI</td>
                <td className="p-2 border">Break</td>
                <td className="p-2 border">Maths</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
