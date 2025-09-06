import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800">Welcome Back, Yamini!</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
}
