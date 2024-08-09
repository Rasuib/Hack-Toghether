import { NavLink } from "react-router-dom";
import styles from "./LoginNav.module.css";

function LoginNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <p>Hack Together</p>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default LoginNav;
