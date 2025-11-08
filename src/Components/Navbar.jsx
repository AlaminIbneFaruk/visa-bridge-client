import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  // Compose all nav links here for DRY clarity
  const baseLinks = [
    { to: "/", label: "Home" },
    { to: "/all-visas", label: "All Visas" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  const userLinks = user
    ? [
        { to: "/add-visa", label: "Add Visa" },
        { to: `/my-added-visas/${user.uid}`, label: "My Added Visas" },
        {
          to: `/my-visa-applications/${user.uid}`,
          label: "My Visa Applications",
        },
      ]
    : [];

  const dashboardLink = user
    ? {
        to:
          user.email === "alaminibnefarukayon@gmail.com"
            ? "/admin"
            : "/dashboard",
        label:
          user.email === "alaminibnefarukayon@gmail.com"
            ? "Admin"
            : "Dashboard",
      }
    : null;

  return (
    <div className="navbar px-8 mx-auto fixed top-0 z-50 bg-white/50 backdrop-blur-lg">
      <div className="navbar-start flex items-center gap-4">
        {/* Mobile hamburger menu */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-neutral-content rounded-box w-56 text-white"
          >
            {baseLinks.map(({ to, label }) => (
              <li key={label}>
                <Link to={to}>{label}</Link>
              </li>
            ))}

            {userLinks.map(({ to, label }) => (
              <li key={label}>
                <Link to={to}>{label}</Link>
              </li>
            ))}

            {dashboardLink && (
              <li>
                <Link to={dashboardLink.to}>{dashboardLink.label}</Link>
              </li>
            )}

            {!user && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}

            {user && (
              <li>
                <button onClick={signOutUser} className="w-full text-left">
                  Log Out
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="normal-case text-xl">
          <img src="/VisaBridge.jpg" alt="VisaBridge" className="h-10" />
        </Link>
      </div>
      {/* Center Menu */}
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal font-bold gap-0.5">
          {[...baseLinks, ...userLinks].map(({ to, label }) => (
            <li key={label}>
              <Link to={to} className="text-blue-800">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Right - user controls */}
      <div className="navbar-end hidden lg:flex items-center gap-2 text-base-100">
        <DarkModeToggle />

        {!user ? (
          <>
            <Link to="/login" className="btn">
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-info border border-black text-white"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to={dashboardLink.to} className="btn btn-secondary">
              {dashboardLink.label}
            </Link>

            <div className="flex items-center btn btn-info btn-circle">
              {user.photoURL ? (
                <div className="relative group z-20">
                  <img
                    src={user.photoURL}
                    alt={user.displayName || "User"}
                    className="w-8 h-8 rounded-full object-cover border border-gray-300 shadow-sm"
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/32")
                    }
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 bg-sky-800 text-black text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    {user.displayName}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-1 h-2 w-2 bg-sky-800 rotate-45"></div>
                  </div>
                </div>
              ) : (
                <span className="text-lg font-bold">
                  {user.displayName?.[0] || "U"}
                </span>
              )}
            </div>

            <button className="btn" onClick={signOutUser}>
              Log Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
