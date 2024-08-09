import styles from "./LoginComponent.module.css";
import { Link } from "react-router-dom";

function LoginComponent() {
  return (
    <div className={styles.loginContainer}>
      <div>
        <p className={styles.heading}>Sign in</p>
        <p>
          New to this app?{" "}
          <Link to="/signup">
            <span className={styles.signUp}>Sign up</span>
          </Link>{" "}
          Now!
        </p>
        <input type="text" placeholder="Your Username Here" />
        <input type="password" placeholder="Your Password" />
        <button className="login-btn" onClick={login}>
          Log Into App
        </button>
      </div>
    </div>
  );
}

export default LoginComponent;
