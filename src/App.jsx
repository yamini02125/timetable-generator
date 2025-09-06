// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/DashboardContent";
import GenerateTimetable from "./components/GenerateTimetable";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<DashboardContent />} />
          <Route path="/generate" element={<GenerateTimetable />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
