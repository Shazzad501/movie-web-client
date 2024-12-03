import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";

const ThemeChanger = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {theme === 'light' ? '🌞 Dark' : '🌙 Light'}
    </button>
  );
};

export default ThemeChanger;