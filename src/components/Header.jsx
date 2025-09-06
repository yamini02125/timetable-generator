import { Settings, User } from "lucide-react";

export default function Header({ setActiveTab }) {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">Timetable Generator</h1>

      {/* Right side icons */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setActiveTab("settings")}
          className="p-2 rounded-full hover:bg-gray-100"
          title="Settings"
        >
          <Settings className="w-5 h-5 text-gray-700" />
        </button>

        <button
          onClick={() => setActiveTab("profile")}
          className="p-2 rounded-full hover:bg-gray-100"
          title="Profile"
        >
          <User className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </header>
  );
}
