import LoginNav from "../components/LoginNav";
import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <LoginNav />

      <section>
        <h1>
          Find your perfect people for hackathon, bounties, and collaborations.
        </h1>
        <p className={styles.subHeading}>
          Join the next-generation professional network where you can build your
          profile, complete bounties, and earn rewards securely with blockchain
          technology.
        </p>
        <button
          className={styles.ctaButton}
          onClick={() => handleClick("/login")}
        >
          Join a team
        </button>
      </section>

      <section className={styles.gridSection}>
        <p className={styles.keyFeatures}>Key Features</p>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <img
              className={styles.gridImages}
              src="./public/Bounty.jpeg"
              alt="Bounty"
            />
            <p className={styles.description}>
              Complete bounties to earn money.
            </p>
          </div>
          <div className={styles.gridItem}>
            <img
              className={styles.gridImages}
              src="./public/Money.jpeg"
              alt="Multiple Chains Payment Support"
            />
            <p className={styles.description}>
              Supports payment in multiple chains
            </p>
          </div>
          <div className={styles.gridItem}>
            <img
              className={styles.gridImages}
              src="./public/Dashboard.jpeg"
              alt="Dashboard"
            />
            <p className={styles.description}>
              Dynamic dashboard for posting you achievements.
            </p>
          </div>
          <div className={styles.gridItem}>
            <img
              className={styles.gridImagesAdhaar}
              src="./public/anon-adhaar.jpg"
              alt="Anon Aadhaar"
            />
            <p className={styles.description}>
              Uses Anon Adhaar for complete verification
            </p>
          </div>
          <div className={styles.gridItem}>
            <img
              className={styles.gridImages}
              src="./public/Profile.jpeg"
              alt="Dev Profile"
            />
            <p className={styles.description}>
              Tell peple about youself in your profile
            </p>
          </div>
          <div className={styles.gridItem}>
            <img
              className={styles.gridImages}
              src="./public/Notification.jpeg"
              alt="Notification"
            />
            <p className={styles.description}>
              Receive notification whenever someone interacts with your profile.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
