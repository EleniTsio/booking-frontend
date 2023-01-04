import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [login, setLogin] = useState(false);
  const [user] = useState({
    name: "Elenh",
    email: "golden@gmail.com",
    isAdmin: true,
  });

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        Logo
      </div>
      <div
        className={toggleMenu ? "burger-menu-open" : "burger-menu"}
        onClick={() => setToggleMenu((prevState) => !prevState)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={toggleMenu ? "links open" : "links"}>
        <ul>
          <li onClick={() => navigate("/")}>Αρχική</li>
          <li>Σχετικά με</li>
          <li>Επικοινωνία</li>
          {login ? (
            <li>{user.name}</li>
          ) : (
            <li className="login" onClick={() => navigate("/Login")}>
              Είσοδος
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
