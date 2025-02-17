"use client";
import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  if (theme === null) {
    return <div className="w-[100px] h-[40px] bg-gray-300 animate-pulse rounded-md"></div>;
  }

  return (
    <button
      className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-md transition-all"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <span> Light Mode </span>
        : <span>Dark&nbsp;Mode</span>}
    </button>
  );
};

export default ThemeToggle;

