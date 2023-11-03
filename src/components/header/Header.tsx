import { useState } from "react";
import Burger from "./Burger";
import NavBar from "./NavBar";
import SideButton from "./SIdeButton";

import "../../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="header-elements">
        <div className="logo">
          <h1>Mukani</h1>
        </div>
        <Burger setIsOpen={setIsOpen} isOpen={isOpen} />
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <SideButton />
      </div>
    </header>
  );
};

export default Header;
