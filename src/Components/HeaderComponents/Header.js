import React from "react";
import "./Header.css";
import HeaderText from "./HeaderText";

import Navbar from "./Navbarcomponents/Navbar";

export default function Header() {
  return (
    <header id="home">
      <Navbar />
      <HeaderText />
    </header>
  );
}
