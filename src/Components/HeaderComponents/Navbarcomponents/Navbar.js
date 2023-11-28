import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
const navLinks = [
  {
    id: 1,
    title: "Home",
    link: "home",
  },
  {
    id: 2,
    title: "About",
    link: "about",
  },
  {
    id: 3,
    title: "Resume",
    link: "resume",
  },
  {
    id: 4,
    title: "Skill",
    link: "skill",
  },
  {
    id: 5,
    title: "Project",
    link: "project",
  },
  {
    id: 6,
    title: "Contact",
    link: "contact",
  },
];

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scroll >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <h1>Portfolio</h1>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {navLinks.map(({ id, title, link }) => (
          <li className="links" key={id}>
            <Link
              activeClass="active"
              to={link}
              spy={true}
              smooth={true}
              offset={70}
              duration={500}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-icon" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
}
