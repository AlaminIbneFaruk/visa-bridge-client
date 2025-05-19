import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaMailBulk } from "react-icons/fa";

const socialLinks = [
  { name: "Facebook", icon: <FaFacebookF />, url: "https://facebook.com" },
  { name: "Email", icon: <FaMailBulk />, url: "https://gmail.com" },
  { name: "Github", icon: <FaGithub />, url: "https://github.com" },
  { name: "Linkedin", icon: <FaLinkedinIn />, url: "https://linkedin.com" },
];

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content py-10 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-center gap-10 md:gap-0">
        
        {/* Brand Section */}
        <nav className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/3 space-y-4">
          <Link
            to="/"
            className="btn btn-ghost text-4xl md:text-5xl font-sans font-bold bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 bg-clip-text text-transparent"
          >
            VISABRIDGE
          </Link>
          <div className="text-base md:text-lg">
            <p className="font-semibold text-2xl"># Visa Bridge Ltd</p>
            <p>Where Traveling gets easy</p>
            <p className="pt-4 text-sm md:text-base">
              Copyright © {new Date().getFullYear()} - All rights reserved by Visa Bridge Ltd
            </p>
          </div>
        </nav>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center md:items-start md:w-1/3 text-center md:text-left space-y-2">
          <h6 className="footer-title text-2xl font-semibold mb-4">Navigation</h6>
          {["Home", "All Visas", "Login", "Register"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(" ", "-")}`}
              className="link link-hover text-lg"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <nav className="flex flex-col items-center md:items-start md:w-1/3 text-center md:text-left space-y-4">
          <h6 className="footer-title text-2xl font-semibold mb-4 flex items-center gap-4">Links</h6>
          <div className="flex flex-col gap-3">
            {socialLinks.map(({ name, icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link link-hover flex items-center gap-3 text-lg"
              >
                <span className="text-xl">{icon}</span> {name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
