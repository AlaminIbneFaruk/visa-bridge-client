import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaMailBulk } from "react-icons/fa";


const socialLinks = [
  { name: "Facebook", icon: <FaFacebookF />, url: "https://facebook.com" },
  { name: "Email", icon: <FaMailBulk/>, url: "https://gmail.com" },
  { name: "Github", icon: <FaGithub />, url: "https://github.com" },
  { name: "Linkedin", icon: <FaLinkedinIn />, url: "https://linkedin.com" },
];

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content py-10 justify-between items-center flex px-8">
      <nav>
        <Link
          to="/"
          className="btn btn-ghost text-5xl font-sans font-bold bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 bg-clip-text text-transparent mb-2"
        >
          VISABRIDGE
        </Link>
        <div className="px-5">
          <p className="text-2xl"># Visa Bridge Ltd</p>
          <p>Where Traveling gets easy</p>
          <p className="py-4">
            Copyright © {new Date().getFullYear()} - All rights reserved by Visa
            Bridge Ltd
          </p>
        </div>
      </nav>

      <nav>
        <h6 className="footer-title text-2xl">Navigation</h6>
        {["Home", "All Visas", "Login", "Register"].map((item, index) => (
          <Link
            key={index}
            to={`/${item.toLowerCase().replace(" ", "-")}`}
            className="link link-hover"
          >
            {item}
          </Link>
        ))}
      </nav>

      <nav>
        <h6 className="footer-title text-2xl flex items-center gap-4 mb-4">
          Links
        </h6>
        <div className="flex flex-col gap-3">
          {socialLinks.map(({ name, icon, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover flex items-center gap-2"
            >
              <span className="text-lg">{icon}</span> {name}
            </a>
          ))}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
