import React, {useState} from "react";
import App from "./App.css";
import { MdOutlineNightsStay } from "react-icons/md";
import {HandySvg} from 'handy-svg';

function Theme() {
  const [theme, setTheme] = useState('light');
  const toogleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <button 
      type="button"
      onClick={toogleTheme}>
       <MdOutlineNightsStay className="
       text-yellow-500
        absolute mt-7" />
      </button>
    </div>
  );
};

export default Theme;
