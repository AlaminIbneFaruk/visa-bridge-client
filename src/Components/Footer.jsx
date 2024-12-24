import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content py-10 justify-evenly items-center flex ">
      <nav>
      <Link
        to="/"
        className="btn btn-ghost text-5xl font-sans font-bold bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 bg-clip-text text-transparent mb-2">
        VISABRIDGE
      </Link>
      <div className="px-5">
        <p className="text-2xl"># Visa Bridge.Ltd </p>
        <p>
        Where Traveling gets easy
        </p>
        <p className="py-4">Copyright © {new Date().getFullYear()} - All right reserved by Visa Bridge Ltd</p>
      </div>
      </nav>
      <nav>
        <h6 className="footer-title text-2xl">Navigation</h6>
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/all-visas" className="link link-hover">All Visas</Link>
        <Link to="/login" className="link link-hover">Login</Link>
        <Link to="/register" className="link link-hover">Register</Link>
      </nav>
    </footer>

  );
};

export default Footer;