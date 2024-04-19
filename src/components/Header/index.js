import React from "react";
import { Link } from "react-router-dom";
import "../Header/header.styles.scss";
function Header() {
  return (
    <header className="header--container">
      <div className="header--logo-div">
        <h3>Paulo Movies</h3>
      </div>
      <nav className="header--nav">
        <ul className="header--ul">
          <li className="header--li">
            <Link className="header--link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="header--li">
            <Link to={"/register"}>Cadastro</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
