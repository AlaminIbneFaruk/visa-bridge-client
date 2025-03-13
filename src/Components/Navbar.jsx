import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  return (
    <>
      <div className="navbar bg-gradient-to-l from-indigo-500 via-sky-400 to-white">
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
                <Link to="/all-visas">All Visas</Link>
              </li>
              <li>
                <Link to="/add-visa">Add Visa</Link>
              </li>
              <li>
                <Link to={`/my-added-visas/${user?.uid}`}>My Added Visas</Link>
              </li>
              <li>
                <Link to={`/my-visa-applications/${user?.uid}`}>
                  My Visa Applications
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl font-sans font-bold bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 bg-clip-text text-transparent"
          >
            VISA BRIDGE
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-visas">All Visas</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/add-visa">Add Visa</Link>
                </li>
                <li>
                  <Link to={`/my-added-visas/${user?.uid}`}>My Added Visas</Link>
                </li>
                <li>
                  <Link to={`/my-visa-applications/${user?.uid}`}>
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
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/register" className="btn btn-secondary">
                Register
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 bg-gradient-to-r from-blue-300 via-sky-200 to-blue-300 px-3 py-1 rounded-full">
                {user.photoURL && (
                  <img
                    src={user?.photoURL}
                    alt={user?.displayName || "User"}
                    className="w-8 h-8 rounded-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/32"; // Fallback image
                    }}
                  />
                )}
                <span className="text-sm font-medium">
                  {user.displayName || "User"}
                </span>
              </div>
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
