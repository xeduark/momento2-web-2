import React from "react";
import styles from "./Home.module.css";
import NavHome from "../layouts/NavHome";

const Home = () => {
  const buttonLabels = ["Two", "Three"];
  const buttonLabel = ["One"];

  return (
    <div>
      <NavHome /> 
        <h1 className={styles.tittle}>Esto es el Home</h1>
      <div className={styles.container}>
        <div className={styles.cardsContainer}>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className={styles.containerItem}>
              <div className={styles.spacer} />
              <div className={styles.buttonContainer}>
                {buttonLabel.map((label, buttonIndex) => (
                  <button key={buttonIndex} className={styles.buttonOne}>
                    {label}
                  </button>
                ))}
                {buttonLabels.map((label, buttonIndex) => (
                  <button key={buttonIndex} className={styles.button}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;