import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  return (
    <>
      <div className="navbar px-8 mx-auto sticky z-50 top-0 bg-gradient-to-tr from-blue-500 via-sky-400 to-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="all-visas">All Visas</Link>
              </li>
              <li>
                <Link to="contact-us">Contact Us</Link>
              </li>

              {user && (
                <>
                  <li>
                    <Link to="add-visa">Add Visa</Link>
                  </li>
                  <li>
                    <Link to={`my-added-visas/${user?.uid}`}>
                      My Added Visas
                    </Link>
                  </li>
                  <li>
                    <Link to={`my-visa-applications/${user?.uid}`}>
                      My Visa Applications
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost">
            <img src="/VisaBridge.jpg" alt="VisaBridge" className="h-full" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="all-visas">All Visas</Link>
            </li>
            <li>
              <Link to="contact-us">Contact Us</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="add-visa">Add Visa</Link>
                </li>
                <li>
                  <Link to={`my-added-visas/${user?.uid}`}>
                    My Added Visas
                  </Link>
                </li>
                <li>
                  <Link to={`my-visa-applications/${user?.uid}`}>
                    My Visa Applications
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {!user ? (
            <div className="flex gap-2">
              <Link to="login" className="btn">
                Login
              </Link>
              <Link
                to="register"
                className="btn btn-primary border border-black text-white"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {/* Conditional Admin/Dashboard Link */}
              <Link
                to={
                  user.email === "alaminibnefarukayon@gmail.com"
                    ? "admin"
                    : "/dashboard"
                }
                className="btn btn-secondary"
              >
                {user.email === "alaminibnefarukayon@gmail.com"
                  ? "Admin"
                  : "Dashboard"}
              </Link>

              {/* User Avatar */}
              <div className="flex items-center btn-circle btn btn-info">
                {user.photoURL && (
                  <div className="relative group z-20">
                    <img
                      src={user?.photoURL}
                      alt={user?.displayName || "User"}
                      className="w-8 h-8 rounded-full object-cover border border-gray-300 shadow-sm"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/32";
                      }}
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-sky-800 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      {user?.displayName}
                      <div className="absolute left-1/2 -translate-x-1/2 -top-1 h-2 w-2 bg-sky-800 rotate-45"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Log Out Button */}
              <button className="btn" onClick={signOutUser}>
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
