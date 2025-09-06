import { useState } from "react";
import { User, Mail, Shield, KeyRound, Smartphone } from "lucide-react";

export default function Profile() {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@college.edu");
  const [role] = useState("Administrator");
  const [department, setDepartment] = useState("Computer Science");

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p className="text-gray-600 mb-6">
        Manage your account details, security, and preferences
      </p>

      <div className="space-y-6">
        {/* Basic Info */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-indigo-200 flex items-center justify-center text-3xl font-bold text-indigo-700">
              {name.charAt(0)}
            </div>

            {/* Info */}
            <div className="flex-1 space-y-3">
              <div>
                <label className="block text-sm text-gray-600">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-indigo-200"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-indigo-200"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600">Department</label>
                <input
                  type="text"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full border rounded-lg p-2 mt-1 focus:ring focus:ring-indigo-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Role Info */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Account Role</h3>
          <p className="flex items-center gap-2 text-gray-700">
            <Shield className="w-5 h-5 text-indigo-600" /> {role}
          </p>
        </div>

        {/* Security Settings */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Security</h3>
          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-gray-600" />
                <span>Change Password</span>
              </div>
              <button className="text-indigo-600 hover:underline">Update</button>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-gray-600" />
                <span>Two-Factor Authentication</span>
              </div>
              <button className="text-indigo-600 hover:underline">Enable</button>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex justify-between">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            Logout
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
