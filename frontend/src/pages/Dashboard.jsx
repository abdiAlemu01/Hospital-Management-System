import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import Button from "../components/Button";

/**
 * Dashboard Page Component
 * Main page after successful login
 */
const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900">
              Hospital Management System
            </h1>
          </div>
          <Button
            onClick={handleLogout}
            variant="secondary"
            size="sm"
          >
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {user?.name}!
              </h2>
              <p className="text-gray-600">
                You are logged in as{" "}
                <span className="font-semibold capitalize text-blue-600">
                  {user?.role}
                </span>
              </p>
            </div>
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">
                {user?.role === "admin" && "⚙️"}
                {user?.role === "doctor" && "👨‍⚕️"}
                {user?.role === "reception" && "📋"}
                {user?.role === "patient" && "👤"}
              </span>
            </div>
          </div>
        </div>

        {/* User Info Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Your Profile Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-500">Name</label>
              <p className="mt-1 text-base text-gray-900">{user?.name}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Email</label>
              <p className="mt-1 text-base text-gray-900">{user?.email}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Role</label>
              <p className="mt-1 text-base text-gray-900 capitalize">
                {user?.role}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">User ID</label>
              <p className="mt-1 text-base text-gray-900 font-mono text-sm">
                {user?.id}
              </p>
            </div>
          </div>
        </div>

        {/* Role-based Quick Actions */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 p-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Quick Actions for {user?.role}
          </h3>
          <p className="text-blue-800 mb-6">
            {user?.role === "admin" &&
              "Manage users, view reports, and configure system settings."}
            {user?.role === "doctor" &&
              "View appointments, manage patient records, and prescriptions."}
            {user?.role === "reception" &&
              "Schedule appointments, register patients, and manage visits."}
            {user?.role === "patient" &&
              "View your appointments, medical records, and prescriptions."}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="sm" className="bg-blue-600 hover:bg-blue-700">
              View Dashboard
            </Button>
            <Button variant="secondary" size="sm">
              Settings
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
