import { useState, useContext, Fragment } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import BurgerButton from "../UI/BurgerButton";
import classes from "./Header.module.css";

const Header = () => {
  const [burgerIsActive, setBurgerIsActive] = useState(false);
  const { isLogginIn } = useContext(AuthContext);

  const activeBurgerHandler = () => {
    setBurgerIsActive(!burgerIsActive);
  };

  return (
    <header className={classes.header}>
      <h2 className={classes["header-title"]}>
        From 0<br />
        To Hero
      </h2>
      {document.body.offsetWidth < 576 && (
        <BurgerButton onClick={activeBurgerHandler} isActive={burgerIsActive} />
      )}
      {(burgerIsActive || document.body.offsetWidth > 576) && (
        <nav className={classes["header-navigation"]}>
          <ul>
            <li className={classes["header-navigation__link"]}>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? classes["active-link"] : undefined
                }
              >
                {" "}
                Home
              </NavLink>
            </li>
            <li className={classes["header-navigation__link"]}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? classes["active-link"] : undefined
                }
              >
                About
              </NavLink>
            </li>
            {isLogginIn === false ? (
              <li className={classes["header-navigation__link"]}>
                <NavLink
                  to="/registration"
                  className={({ isActive }) =>
                    isActive ? classes["active-link"] : undefined
                  }
                >
                  Start Now
                </NavLink>
              </li>
            ) : (
              <Fragment>
                <li className={classes["header-navigation__link"]}>
                  <NavLink
                    to="/archive"
                    className={({ isActive }) =>
                      isActive ? classes["active-link"] : undefined
                    }
                  >
                    Archive
                  </NavLink>
                </li>
                <li className={classes["header-navigation__link"]}>
                  <button>Logout</button>
                </li>
              </Fragment>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
