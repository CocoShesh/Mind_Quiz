import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="flex items-center justify-center pt-5">
      <img src="/mind-quiz-logo.png" alt="" className="h-20" />
      <span className="custom-text text-5xl max-xs:text-3xl font-bold">
        <a href="/">Mind Quiz </a>
      </span>
    </nav>
  );
};

export default Header;
