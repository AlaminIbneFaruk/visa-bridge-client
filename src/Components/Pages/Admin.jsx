
import { Link, Outlet } from "react-router-dom";

const Admin = () => {


  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-semibold mb-6">Admin Dashboard</h2>
        <nav className="space-y-2">
          <Link
            to="/admin"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/admin/users"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Manage Users
          </Link>
          <Link
            to="/admin/guides"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Manage Guides
          </Link>
          <Link
            to="/admin/packages"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Manage Packages
          </Link>
          <Link
            to="/admin/analytics"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            View Analytics
          </Link>
          <Link
            to="/admin/applications"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Guide Applications
          </Link>
        </nav>
      </aside>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
