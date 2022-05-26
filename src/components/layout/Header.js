import { useState } from "react";
import { NavLink } from "react-router-dom";
import BurgerButton from "../UI/BurgerButton";
import classes from "./Header.module.css";

const Header = () => {
  const [burgerIsActive, setBurgerIsActive] = useState(false);

  const activeBurgerHandler = () => {
    setBurgerIsActive(!burgerIsActive);
  };


  return (
    <header className={classes.header}>
      <h2 className={classes["header-title"]}>
        From 0<br /> To Hero
      </h2>
      {document.body.offsetWidth < 576 && <BurgerButton onClick={activeBurgerHandler} isActive={burgerIsActive} />}
      {(burgerIsActive || document.body.offsetWidth > 576) && (
        <nav className={classes["header-navigation"]}>
          <ul>
            <li className={classes["header-navigation__link"]}>
              <NavLink to="/home" className={({ isActive }) => isActive ? classes['active-link'] : undefined}> Home</NavLink>
            </li>
            <li className={classes["header-navigation__link"]}>
              <NavLink to="/about" className={({ isActive }) => isActive ? classes['active-link'] : undefined}>About</NavLink>
            </li>
            <li className={classes["header-navigation__link"]}>
              <NavLink to="/registration" className={({ isActive }) => isActive ? classes['active-link'] : undefined}>Start Now</NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
