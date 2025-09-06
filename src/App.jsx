import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import GenerateTimetable from "./components/GenerateTimetable";
import Profile from "./components/profile";


function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header (pass setActiveTab) */}
      <Header setActiveTab={setActiveTab} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "generator" && <GenerateTimetable />}
          {activeTab === "students" && (
            <p className="text-gray-600">📌 Student Data coming soon</p>
          )}
          {activeTab === "faculty" && (
            <p className="text-gray-600">📌 Faculty Management coming soon</p>
          )}
          {activeTab === "curriculum" && (
            <p className="text-gray-600">📌 Curriculum Structure coming soon</p>
          )}
          {activeTab === "resources" && (
            <p className="text-gray-600">📌 Resources & Rooms coming soon</p>
          )}
          {activeTab === "timetables" && (
            <p className="text-gray-600">📌 Generated Timetables coming soon</p>
          )}
          {activeTab === "reports" && (
            <p className="text-gray-600">📌 Reports & Export coming soon</p>
          )}
          {activeTab === "profile" && <Profile />}
          {activeTab === "settings" && (
            <Settings /> // ✅ will build later
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
