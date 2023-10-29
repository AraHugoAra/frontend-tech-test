import React from "react";
import Search from "../Search";

const Header = () => {
  return (
    <header className="lumx-spacing-padding-big header">
      <div className="header__container">
        <img src="/Marvel_logo_red.png" alt="marvel-logo" />
        <Search />
      </div>
    </header>
  );
};

export default Header;
