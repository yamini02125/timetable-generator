export default function Sidebar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "generator", label: "AI Generator", icon: "🤖" },
    { id: "students", label: "Student Data", icon: "👥" },
    { id: "faculty", label: "Faculty Management", icon: "🧑‍🏫" },
    { id: "curriculum", label: "Curriculum Structure", icon: "📘" },
    { id: "resources", label: "Resources & Rooms", icon: "🏫" },
    { id: "timetables", label: "Generated Timetables", icon: "📅" },
    { id: "reports", label: "Reports & Export", icon: "📑" },

    
  ];

  return (
    <aside className="w-64 bg-white shadow h-screen p-4 space-y-3">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-2 w-full text-left p-2 rounded-lg transition 
              ${
                activeTab === item.id
                  ? "bg-indigo-100 text-indigo-600 font-semibold"
                  : "hover:bg-indigo-50"
              }`}
          >
            <span>{item.icon}</span> {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
