import { Link } from "react-router-dom";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { menu } from "../navItemMenu";
import { menuItem } from "../../dropDownMenuItem/menuItem";

import "./style.css";
import { useState } from "react";

const Navbar = ({ title = "PROcode", auth }) => {
  const [active, setActive] = useState(false);
  const handleMouseEnter = () => {
    setActive(!active);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar_logo">
          <Link to="./">
            <IntegrationInstructionsIcon sx={{ fontSize: 40 }} />
          </Link>
          <Link to="./">{title}</Link>
        </div>

        <div className="nav_middle_menu">
          <ul className="nav_menu">
            {menu.map((item) => {
              return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="nav_search_menu">
          <input
            className="nav_search"
            type="search"
            placeholder="Search here..."
          />
          <button type="submit">Search</button>
        </div>

        <div className="nav_buttons">
          {auth ? (
            <div className="nav_profile_btn">
              <button onClick={handleMouseEnter}>
                <AccountCircleIcon /> Profile
              </button>
              {active && (
                <ul>
                  {menuItem.map((itm) => {
                    return (
                      <li key={itm.id}>
                        <Link to="/profile">{itm.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ) : (
            <div>
              <button>
                <Link to="/login">SIGN UP</Link>
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
