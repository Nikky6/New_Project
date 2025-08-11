import React, { useState, useEffect } from "react";

export default function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  disabled = false,
}) {
  const [showPwd, setShowPwd] = useState(false);

  useEffect(() => {
    if (type !== "password") setShowPwd(false);
  }, [type]);

  const inputType = type === "password" && showPwd ? "text" : type;

  return (
    <div className="flex flex-col">
      {label && <label className="text-sm mb-1">{label} {required && <span className="text-red-500">*</span>}</label>}
      <div className="relative">
        <input
          name={name}
          value={value}
          onChange={onChange}
          type={inputType}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full px-3 py-2 border rounded ${disabled ? "bg-gray-100" : "bg-white"}`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPwd((s) => !s)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-blue-600"
          >
            {showPwd ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
}
