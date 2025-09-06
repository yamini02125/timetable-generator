import { useState } from "react";

export default function GenerateTimetable() {
  const [academicYear, setAcademicYear] = useState("2024-2025");
  const [semester, setSemester] = useState("Odd Semester");
  const [programs, setPrograms] = useState({
    bed: true,
    med: true,
    fyup: true,
    itep: false,
  });
  const [priority, setPriority] = useState("faculty");
  const [workingDays, setWorkingDays] = useState("Monday to Friday");
  const [dailyHours, setDailyHours] = useState("6 hours (9 AM - 3 PM)");

  const toggleProgram = (program) => {
    setPrograms({ ...programs, [program]: !programs[program] });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">AI Timetable Generator</h2>
      <p className="text-gray-600 mb-6">
        Configure and generate optimized timetables using AI algorithms
      </p>

      {/* ================= FORM CARD ================= */}
      <div className="bg-white shadow rounded-xl p-6 space-y-6">
        {/* Academic Year + Semester */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 mb-2">Academic Year</label>
            <select
              value={academicYear}
              onChange={(e) => setAcademicYear(e.target.value)}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-indigo-200"
            >
              <option>2024-2025</option>
              <option>2025-2026</option>
              <option>2026-2027</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-indigo-200"
            >
              <option>Odd Semester</option>
              <option>Even Semester</option>
            </select>
          </div>
        </div>

        {/* Programs to Include */}
        <div>
          <label className="block text-gray-600 font-medium mb-2">
            Programs to Include
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={programs.bed}
                onChange={() => toggleProgram("bed")}
              />
              B.Ed (Bachelor of Education)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={programs.med}
                onChange={() => toggleProgram("med")}
              />
              M.Ed (Master of Education)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={programs.fyup}
                onChange={() => toggleProgram("fyup")}
              />
              FYUP (Four Year UG Program)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={programs.itep}
                onChange={() => toggleProgram("itep")}
              />
              ITEP (Integrated Teacher Education)
            </label>
          </div>
        </div>

        {/* Optimization Priority */}
        <div>
          <label className="block text-gray-600 font-medium mb-2">
            Optimization Priority
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="priority"
                value="faculty"
                checked={priority === "faculty"}
                onChange={(e) => setPriority(e.target.value)}
              />
              Faculty workload optimization
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="priority"
                value="student"
                checked={priority === "student"}
                onChange={(e) => setPriority(e.target.value)}
              />
              Student convenience
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="priority"
                value="resource"
                checked={priority === "resource"}
                onChange={(e) => setPriority(e.target.value)}
              />
              Resource utilization
            </label>
          </div>
        </div>

        {/* Working Days + Daily Hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-600 mb-2">Working Days</label>
            <select
              value={workingDays}
              onChange={(e) => setWorkingDays(e.target.value)}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-indigo-200"
            >
              <option>Monday to Friday</option>
              <option>Monday to Saturday</option>
              <option>Custom</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 mb-2">Daily Hours</label>
            <select
              value={dailyHours}
              onChange={(e) => setDailyHours(e.target.value)}
              className="w-full border rounded-lg p-2 focus:ring focus:ring-indigo-200"
            >
              <option>6 hours (9 AM - 3 PM)</option>
              <option>7 hours (9 AM - 4 PM)</option>
              <option>8 hours (9 AM - 5 PM)</option>
            </select>
          </div>
        </div>
      </div>

      {/* ================= STATUS CARD ================= */}
      <div className="bg-white shadow rounded-xl p-6 mt-6">
        <h3 className="text-lg font-semibold mb-4">Generation Status</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex justify-between items-center">
            <span>Data Validation</span>
            <span className="text-green-500">✅</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Conflict Detection</span>
            <span className="text-green-500">✅</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Resource Allocation</span>
            <span className="text-yellow-500">⏳</span>
          </li>
          <li className="flex justify-between items-center">
            <span>AI Optimization</span>
            <span className="text-blue-500">⏸</span>
          </li>
        </ul>
      </div>

      {/* ================= GENERATE BUTTON ================= */}
      <div className="mt-6">
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700">
          🚀 Generate Timetable
        </button>
      </div>

      {/* ================= AI RECOMMENDATIONS ================= */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-6">
        <h3 className="text-lg font-semibold text-blue-700 mb-4">
          💡 AI Recommendations
        </h3>
        <ul className="list-disc list-inside space-y-2 text-blue-900">
          <li>Consider 2-hour blocks for practical sessions</li>
          <li>Schedule field work on Fridays</li>
          <li>Reserve mornings for core subjects</li>
        </ul>
      </div>
    </div>
  );
}
