interface NavBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar = ({ isOpen, setIsOpen }: NavBarProps) => {
  const handleOnNavClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div className={isOpen ? "nav-open" : "nav-link"}>
      <ul className="links">
        <li>
          <a href="/" onClick={handleOnNavClick}>
            Home
          </a>
        </li>
        <li>
          <a href="/#about" onClick={handleOnNavClick}>
            About
          </a>
        </li>
        <li>
          <a href="/#skills" onClick={handleOnNavClick}>
            Skills
          </a>
        </li>
        <li>
          <a href="/#projects" onClick={handleOnNavClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="/#blog" onClick={handleOnNavClick}>
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
