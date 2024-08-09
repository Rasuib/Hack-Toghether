import React, { useEffect } from "react";
import {
  AnonAadhaarProof,
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  useProver,
} from "@anon-aadhaar/react";
import { useNavigate } from "react-router-dom";
import LoginNav from "../components/LoginNav";
import styles from "./Login.module.css";

function Login() {
  const [anonAadhaar] = useAnonAadhaar();
  const [, latestProof] = useProver();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
    if (anonAadhaar.status === "logged-in") {
      navigate("/dashboard"); // Redirect to the dashboard page
    }
  }, [anonAadhaar, navigate]);

  return (
    <div>
      <LoginNav />

      <div className={styles.container}>
        <div>
          <img
            className={styles.img}
            src="./public/anon-adhaar.jpg"
            alt="anon-adhaar"
          />
        </div>
        <div>
          <div className={styles.loginBar}>
            <LogInWithAnonAadhaar nullifierSeed={1234} />
          </div>
          <p className={styles.log}>{anonAadhaar?.status}</p>
          {anonAadhaar.status === "logged-in" && (
            <div>
              <p>✅ Proof is valid</p>
              <p>Got your Aadhaar Identity Proof</p>
              <p>Welcome anon!</p>
              {latestProof && (
                <AnonAadhaarProof code={JSON.stringify(latestProof, null, 2)} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
