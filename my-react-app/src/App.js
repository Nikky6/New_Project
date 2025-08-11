import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Forms from "./pages/Forms";
import Tables from "./pages/Tables";
import SettingsProfile from "./pages/SettingsProfile";
import SettingsSecurity from "./pages/SettingsSecurity";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/settings/profile" element={<SettingsProfile />} />
        <Route path="/settings/security" element={<SettingsSecurity />} />
        <Route path="*" element={<div className="p-6">Page not found</div>} />
      </Routes>
    </MainLayout>
  );
}
