import React from "react";

export default function Dropdown({ label, name, value, onChange, options = [], placeholder = "Select..." }) {
  return (
    <div className="flex flex-col">
      {label && <label className="text-sm mb-1">{label}</label>}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded bg-white"
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}
