import React from "react";
import LoadingBackground from "../components/LoadingBackground";
import styles from "./page.module.css";

export default function LoadSubscriptions() {
  return (
    <main className={styles.page}>
      <LoadingBackground />
      <div className={styles.container}>
        <div className={styles.loadingText}>
          Dina appar skopas nu upp i Scoopit.
          <br />
          Det kan ta en stund...
        </div>
        <div className={styles.logo}>
          <h2>scoopit</h2>
        </div>
      </div>
    </main>
  );
}