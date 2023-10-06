interface NavBarProps {
  isOpen: boolean;
}

const NavBar = ({ isOpen }: NavBarProps) => {
  return (
    <div className={isOpen ? "nav-open" : "nav-link"}>
      <ul className="links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#skills">Skills</a>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <a href="/#blog">Blog</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
