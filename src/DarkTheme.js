import { useState, useEffect } from "react";

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
        Switch Mode
      </button>
    </div>
  );
}

export default DarkTheme;
