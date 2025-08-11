import React from "react";
import DataTable from "../components-ui/DataTable";

export default function Tables() {
  const columns = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Role", key: "role" },
  ];

  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@domain.com", role: "User" },
    { id: 3, name: "Mike", email: "mike@site.com", role: "Manager" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Tables</h2>

      <div className="bg-white p-4 rounded shadow">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
