import { Context } from "@/utils/context";
import React, { useContext } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const DarkMode = () => {
  const { theme, setTheme } = useContext(Context);

  function handleOnClick(mode) {
    if (mode === "light") {
      setTheme("light");
    } else if (mode === "dark") {
      setTheme("dark");
    }
  }

  if (theme === "light") {
    document.documentElement.className = "light";
    localStorage.setItem("theme", "light");
  } else if (theme === "dark") {
    document.documentElement.className = "dark";
    localStorage.setItem("theme", "dark");
  }

  return (
    <div>
      {theme === "light" ? (
        <MdDarkMode
          // size={24}
          className="border text-2xl max-[450px]:text-xl border-black/15 p-0.5 rounded-full cursor-pointer hover:border-1 hover:border-black"
          onClick={() => handleOnClick("dark")}
        />
      ) : (
        <MdOutlineLightMode
          // size={24}
          className="border text-2xl max-[450px]:text-xl border-gray-500 p-0.5 rounded-full cursor-pointer hover:border-1 hover:border-gray-300"
          onClick={() => handleOnClick("light")}
        />
      )}
    </div>
  );
};

export default DarkMode;
