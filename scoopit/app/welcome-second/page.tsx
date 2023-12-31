import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import scoopImage from "/public/scoopit-animation.gif";
import roundButton from "/public/Onboarding-button.png";
import BackArrow from "../components/BackArrow";
import pageBar from "/public/Bar2.png";
import styles from "./page.module.css";

export default function SecondPage() {
  return (
    <main>
      <section
        className={styles.welcomeHeader}
        style={{
          backgroundImage: `url(${(scoopImage as any).src})`,
        }}
      >
        <BackArrow></BackArrow>
      </section>

      <div className={styles.bar}>
        <Image
          src={pageBar}
          alt="A bar that shows which page you're on"
          width={30}
          height={6}
        />
      </div>
      <section className={styles.welcomeFooter}>
        <h2>Alla dina prenumerationer, en skopa bort.</h2>
        <p>
          Vår scoop-logotyp är din nyckel till prenumerationsorganisation. Det
          är dags att samla alla dina prenumerationer under ett tak. Vi är här
          för att hjälpa dig att hantera dem utan ansträngning.
        </p>
      </section>

      <section className={styles.nextPage}>
        <a href="./login">Hoppa över intro</a>

        <Link href="./welcome-third">
          <Image
            src={roundButton}
            alt="Button to next page"
            width={114}
            height={114}
          />
        </Link>
      </section>
    </main>
  );
}
