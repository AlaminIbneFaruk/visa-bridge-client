
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
        <nav className="space-y-2">
          <Link
            to="/dashboard"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/dashboard/bookings"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            My Bookings
          </Link>
          <Link
            to="/dashboard/profile"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            My Profile
          </Link>
          <Link
            to="/dashboard/comments"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            My Comments
          </Link>
        
        </nav>
      </aside>

      <div className="flex-1 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
