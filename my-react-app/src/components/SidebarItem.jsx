import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function SidebarItem({ title, subItems = [], icon: Icon }) {
  const [open, setOpen] = useState(false);
  const hasSubs = Array.isArray(subItems) && subItems.length > 0;

  return (
    <div>
      <div
        onClick={() => hasSubs && setOpen((s) => !s)}
        className="flex items-center justify-between p-2 rounded hover:bg-gray-700 cursor-pointer"
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon className="w-5 h-5 text-gray-300" />}
          <span className="text-gray-100">{title}</span>
        </div>

        {hasSubs && (open ? (
          <ChevronDownIcon className="w-4 h-4 text-gray-300" />
        ) : (
          <ChevronRightIcon className="w-4 h-4 text-gray-300" />
        ))}
      </div>

      {hasSubs && open && (
        <div className="ml-4 mt-1 space-y-1">
          {subItems.map((s) => (
            <NavLink
              key={s.path}
              to={s.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded text-sm ${isActive ? "bg-gray-600 text-white" : "text-gray-200 hover:bg-gray-700"}`
              }
            >
              {s.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
