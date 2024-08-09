import styles from "./RightSidebar.module.css";
function RightSidebar() {
  return (
    <div>
      <div>
        <h3>Find a team</h3>
        <ul>
          <li className={styles.teamFindList}>
            <div>
              <div className={styles.nListContainer}>
                <img src="https://via.placeholder.com/150" alt="User" />
                <p className={styles.name}>Name</p>
              </div>
              <div>
                <button></button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h3>Recent Bounties</h3>
        <p>Bounty 1</p>
        <p>Bounty 2</p>
        <p>Bounty 3</p>
      </div>
    </div>
  );
}

export default RightSidebar;
