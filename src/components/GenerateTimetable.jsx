// src/components/GenerateTimetable.jsx
import { useState } from "react";

function GenerateTimetable() {
  const [subjects, setSubjects] = useState([{ name: "", faculty: "" }]);

  const handleChange = (index, field, value) => {
    const newSubjects = [...subjects];
    newSubjects[index][field] = value;
    setSubjects(newSubjects);
  };

  const addRow = () => {
    setSubjects([...subjects, { name: "", faculty: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Generated Timetable Data:", subjects);
    alert("Timetable Generated! (Check console for data)");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Generate Timetable</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {subjects.map((subj, index) => (
          <div key={index} className="flex gap-4">
            <input
              type="text"
              placeholder="Subject Name"
              value={subj.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              className="p-2 border rounded w-1/2"
            />
            <input
              type="text"
              placeholder="Faculty Name"
              value={subj.faculty}
              onChange={(e) => handleChange(index, "faculty", e.target.value)}
              className="p-2 border rounded w-1/2"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addRow}
          className="px-4 py-2 bg-purple-600 text-white rounded"
        >
          + Add Subject
        </button>
        <br />
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          Generate Timetable
        </button>
      </form>
    </div>
  );
}

export default GenerateTimetable;
