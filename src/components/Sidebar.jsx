import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Book,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col">
      <div className="px-6 py-4 text-2xl font-bold text-purple-400">
        TimeGen
      </div>
      <nav className="flex-1 px-4 space-y-2">
        <Link
          to="/"
          className="flex items-center space-x-2 p-2 rounded-lg bg-purple-600"
        >
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/generate"
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700"
        >
          <Calendar size={18} />
          <span>Generate Timetable</span>
        </Link>

        <Link
          to="/timetables"
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700"
        >
          <Book size={18} />
          <span>My Timetables</span>
        </Link>

        <Link
          to="/faculty"
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700"
        >
          <Users size={18} />
          <span>Faculty Allocation</span>
        </Link>

        <Link
          to="/reports"
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700"
        >
          <BarChart3 size={18} />
          <span>Reports</span>
        </Link>

        <Link
          to="/settings"
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700"
        >
          <Settings size={18} />
          <span>Settings</span>
        </Link>
      </nav>

      <div className="px-4 py-3 space-y-2">
        <Link
          to="/help"
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700"
        >
          <HelpCircle size={18} />
          <span>Help & Support</span>
        </Link>

        <Link
          to="/logout"
          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}
