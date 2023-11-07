import { useState, useEffect } from "react";
import Burger from "./Burger";
import NavBar from "./NavBar";
import SideButton from "./SIdeButton";

import "../../styles/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the state based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 100) {
      // You can adjust the scroll position threshold
      setIsOpen(false);
    }
  };

  // Attach a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="header-elements">
        <div className="logo">
          <h1>Mukani</h1>
        </div>
        <Burger setIsOpen={setIsOpen} isOpen={isOpen} />
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <SideButton />
      </div>
    </header>
  );
};

export default Header;
