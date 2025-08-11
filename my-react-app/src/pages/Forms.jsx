import React, { useState } from "react";
import InputField from "../components-ui/InputField";
import Dropdown from "../components-ui/Dropdown";

export default function Forms() {
  const [form, setForm] = useState({ email: "", password: "", role: "" });
  const [pwdDisabled, setPwdDisabled] = useState(false);

  const handle = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Forms</h2>

      <div className="bg-white p-4 rounded shadow max-w-2xl">
        <form onSubmit={(e) => { e.preventDefault(); alert(JSON.stringify(form, null, 2)); }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handle}
              required
            />

            <div>
              <InputField
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handle}
                disabled={pwdDisabled}
                required
              />

              <label className="inline-flex items-center mt-2 text-sm">
                <input className="mr-2" type="checkbox" checked={pwdDisabled} onChange={() => setPwdDisabled((s) => !s)} />
                Disable password
              </label>
            </div>

            <Dropdown
              label="Role"
              name="role"
              value={form.role}
              onChange={handle}
              options={[
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
                { label: "Manager", value: "manager" },
              ]}
            />
          </div>

          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
