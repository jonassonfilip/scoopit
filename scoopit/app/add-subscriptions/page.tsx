import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import BackArrow from "../components/BackArrow";
import styles from "./page.module.css";

export default function Syncsubscriptions() {
  return (
    <main>
      <section className={styles.syncHeader}>
        <div className={styles.syncBackground}></div>
        <BackArrow></BackArrow>

        <div className={styles.syncWelcome}>
          <h2>Lägg till alla dina abonnemang</h2>
          <p>Med ett klick sköter Scoopit allt!</p>
        </div>
      </section>

      <section className={styles.sync}>
        <p className={styles.syncInfo}>
          Tillåt att Scoopit får åtkomst till dina appar. <br></br>
          Scoopit kommer lägga in dina abonnemang automatiskt.
          <br></br>
          <br />
          Slipp allt krångel och kom igång!
        </p>

        <div className={styles.syncButton}>
          <Link href="./welcome">Lägg till automatiskt</Link>
        </div>

        <button
          type="submit"
          className={`${styles.syncButton} ${styles.syncManual}`}
        >
          Lägg till manuellt
        </button>

        <div className={styles.acceptTerms}>
          <input type="checkbox" className={styles.checkbox} />
          <label htmlFor="keepLoggedIn" className={styles.acceptTermsInfo}>
            <p>
              Ja, jag tillåter att Scoopit sköter registrering och hantering av
              mina abonnemang enligt{" "}
              <a href="terms" className={styles.terms}>
                dessa villkor
              </a>
              .
            </p>
          </label>
        </div>
      </section>
    </main>
  );
}