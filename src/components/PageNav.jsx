import styles from "./PageNav.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function PageNav() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <p>Hack Together</p>
          </li>
          <li>
            <SearchBar />
          </li>
          <li>
            <NavLink to="/dashboard">Home</NavLink>
          </li>
          <li>
            <NavLink to="/bounties">Bounties</NavLink>
          </li>
          <li>
            <NavLink to="/network">My Network</NavLink>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="-5.0 -10.0 110.0 135.0"
              style={{ height: "30px", width: "auto" }}
            >
              <path d="m58.301 78.5h-16.602c1.3008 3.1992 4.5 5.5 8.3008 5.5s6.8984-2.3008 8.3008-5.5z" />
              <path d="m30.301 76.5h39.398c4-0.19922 6.3984-1.1016 7.6016-3 1.8008-3 0-7-2.1992-11.699-1.6992-3.6016-3.6016-7.8008-3.6016-11.398-0.19922-16.699-6.3008-27.102-16.801-29.5-0.5-2.9023-2.3984-4.9023-4.6992-4.9023s-4.3008 2-4.6992 4.8008c-10.5 2.3008-16.602 12.801-16.801 29.5-0.10156 3.3984-1.8008 7.1992-3.5 11-2.1992 4.8984-4.1016 9.1992-2.1992 12.301 1.1992 1.7969 3.5977 2.7969 7.5 2.8984z" />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 68 62.5"
              x="0px"
              y="0px"
              style={{ height: "20px", width: "auto" }}
            >
              <title>Message</title>
              <g data-name="Layer 2">
                <g data-name="Layer 2">
                  <path d="M67.75,47l-8-14.58V5.31A5.33,5.33,0,0,0,54.43,0H5.35A5.33,5.33,0,0,0,0,5.31V38.39a5.33,5.33,0,0,0,5.35,5.31H40.6l24.92,6.25A2,2,0,0,0,67.75,47ZM41.34,39.76h0l-.3,0H5.35A1.33,1.33,0,0,1,4,38.39V5.31A1.35,1.35,0,0,1,5.35,4H54.43a1.33,1.33,0,0,1,1.35,1.31V33s0,.06,0,.09a2,2,0,0,0,0,.21c0,.06,0,.13,0,.19s0,.12.06.18a2,2,0,0,0,.08.2l0,.08,6,11Z" />
                  <path d="M47,14.27H12.82a2,2,0,0,0,0,4H47a2,2,0,0,0,0-4Z" />
                  <path d="M41.47,25.42H12.82a2,2,0,0,0,0,4H41.47a2,2,0,0,0,0-4Z" />
                </g>
              </g>
            </svg>
          </li>
          <li>
            <img src="https://via.placeholder.com/150" alt="User" />
          </li>
          <li>
            <ConnectButton />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PageNav;
