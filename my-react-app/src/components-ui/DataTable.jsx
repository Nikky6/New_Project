import React, { useMemo, useState } from "react";

export default function DataTable({ columns = [], data = [] }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter(row => columns.some(col => String(row[col.key] ?? "").toLowerCase().includes(q)));
  }, [query, data, columns]);

  const filteredIds = filtered.map(r => r.id);
  const allSelected = filtered.length > 0 && filteredIds.every(id => selected.includes(id));

  const toggleAll = () => {
    if (allSelected) {
      setSelected(prev => prev.filter(id => !filteredIds.includes(id)));
    } else {
      setSelected(prev => Array.from(new Set([...prev, ...filteredIds])));
    }
  };

  const toggleRow = (id) => setSelected(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));

  return (
    <div>
      <div className="mb-3">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." className="w-full px-3 py-2 border rounded" />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[640px] w-full bg-white rounded">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3"><input type="checkbox" checked={allSelected} onChange={toggleAll} /></th>
              {columns.map(c => <th key={c.key} className="p-3 text-left">{c.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={columns.length + 1} className="p-6 text-center text-gray-500">No data</td></tr>
            ) : filtered.map(row => (
              <tr key={row.id} className="even:bg-white odd:bg-gray-50">
                <td className="p-3"><input type="checkbox" checked={selected.includes(row.id)} onChange={() => toggleRow(row.id)} /></td>
                {columns.map(c => <td key={c.key} className="p-3">{row[c.key] ?? "-"}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-sm text-gray-600 mt-2">Selected: <strong>{selected.length}</strong></div>
    </div>
  );
}
