interface BurgerProps{
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Burger = ({isOpen, setIsOpen}: BurgerProps) => {
  const hanleClick = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div className={isOpen ? "menu-open" : "menu"} onClick={hanleClick}>
      <div className="lines"></div>
      <div className="lines"></div>
      <div className="lines"></div>
    </div>
  );
};

export default Burger;
