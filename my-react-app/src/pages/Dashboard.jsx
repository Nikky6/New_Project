import React from "react";

export default function Dashboard() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">Stat 1</div>
        <div className="bg-white p-4 rounded shadow">Stat 2</div>
        <div className="bg-white p-4 rounded shadow">Stat 3</div>
      </div>
    </div>
  );
}
