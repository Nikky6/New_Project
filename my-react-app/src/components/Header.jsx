import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header({ onToggleSidebar }) {
  return (
    <header className="bg-white shadow p-4 flex items-center justify-between">
      {/* Burger Button */}
      <button
        onClick={onToggleSidebar}
        className="text-gray-500 hover:text-black"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      <h1 className="text-lg font-bold">WELCOME TO ONPASSIVE</h1>

      {/* Placeholder for right side actions */}
      <div></div>
    </header>
  );
}
