import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function DarkTheme() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    document.body.className = theme ? "dark" : "light";
  }, [theme]);

  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div>
      <button className="theme-button" onClick={toggleTheme}>
        {theme ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}

export default DarkTheme;
