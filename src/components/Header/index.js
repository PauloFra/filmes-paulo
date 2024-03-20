import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div>Logo</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/register"}>Cadastro</Link>
          </li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
