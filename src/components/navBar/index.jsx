import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { SiIrobot } from "react-icons/si";
import { Link } from "react-router-dom";
import "./styles.scss";

const data = [
  {
    id: 1,
    name: "HOME",
    to: "/",
    icon: "home",
  },
  {
    id: 2,
    name: "ABOUT",
    to: "/about",
    icon: "",
  },
  {
    id: 3,
    name: "SKILLS",
    to: "/skill",
    icon: "home",
  },
  // {
  //   id: 4,
  //   name: "RESUME",
  //   to: "/resume",
  //   icon: "home",
  // },
  // {
  //   id: 5,
  //   name: "PORTFOLIO",
  //   to: "/portfolio",
  //   icon: "home",
  // },
  {
    id: 4,
    name: "CONTACT",
    to: "/contact",
    icon: "home",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
    setIsNavExpanded(!isNavExpanded);
  };
  const handleCloseMenu = () => {
    console.log("Menu closed");
    setToggleIcon(false);
    setIsNavExpanded(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <SiIrobot size={30} />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                to={item.to}
                className="navbar__container__menu__item__links"
                onClick={handleCloseMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
