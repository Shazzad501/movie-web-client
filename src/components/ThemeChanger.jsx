import { useState, useEffect } from "react";
const ThemeChanger = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-lg rounded-l-none bg-gray-200 dark:bg-gray-950 text-gray-800 dark:text-gray-200"
    >
      {theme === 'light' ? '🌞 Dark' : '🌙 Light'}
    </button>
  );
};

export default ThemeChanger;