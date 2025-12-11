// src/layouts/ManagerLayout.jsx
import { Routes, Route } from "react-router-dom";
import ManagerSidebar from "../sidebars/ManagerSidebar.jsx";

// Pages (Manager Equivalents)
import ManagerDashboard from "../../pages/manager/ManagerDashboard.jsx";

const ManagerLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <ManagerSidebar />
      <main className="flex-1 p-6 overflow-y-auto w-full mt-15 ml-0 md:ml-64 sm:mt-6">
        <Routes>

          {/* Dashboard */}
          <Route index element={<ManagerDashboard />} />
          <Route path="dashboard" element={<ManagerDashboard />} />

        </Routes>
      </main>
    </div>
  );
};

export default ManagerLayout;
