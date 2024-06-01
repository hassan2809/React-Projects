import React, { useState, useEffect } from "react";
import Light from "../images/light-mode-button.png";
import Dark from "../images/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  //   console.log(element);

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div>
      <div className="relative">
        <img
          src={Dark}
          className={`w-14 cursor-pointer absolute z-10 ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          } `}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <img
          src={Light}
          className="w-14"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      </div>
    </div>
  );
};

export default DarkMode;
