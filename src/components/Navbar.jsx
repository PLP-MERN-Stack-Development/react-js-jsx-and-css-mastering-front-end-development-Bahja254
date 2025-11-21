import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="p-4 flex justify-between bg-blue-600 dark:bg-gray-800 text-white">
      <h1 className="font-bold text-xl">React Tailwind App</h1>
      <button
        onClick={toggleTheme}
        className="px-3 py-1 rounded bg-white text-blue-600 dark:bg-gray-700 dark:text-white"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
