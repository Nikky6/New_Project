import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar({ sidebarOpen, onClose }) {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Forms", path: "/forms" },
    { name: "Tables", path: "/tables" },
    { name: "Reports", path: "/reports" },
    { name: "Settings", path: "/settings" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-all duration-300 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-black">
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative p-4">
        <MagnifyingGlassIcon className="h-5 w-5 absolute left-6 top-6 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="pl-8 pr-3 py-2 border rounded w-full focus:outline-none focus:ring focus:ring-blue-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Menu Items */}
      <nav className="px-4 space-y-2">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded hover:bg-gray-200 ${
                  isActive ? "bg-gray-300 font-semibold" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No results found</p>
        )}
      </nav>
    </div>
  );
}
