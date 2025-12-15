import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme); 
    localStorage.setItem("theme", theme);   
  }, [theme]);

 
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <aside aria-label="Theme toggle">
      <button
        className="btn btn-info transition duration-300 text-xl"
        onClick={toggleTheme}
        aria-pressed={theme === "dark"}
        aria-label={theme === "light" ? "Enable dark mode" : "Enable light mode"}
      >
        {theme === "light" ? <FaMoon/> : <FaSun/>}
      </button>
    </aside>
  );
};

export default DarkModeToggle;
