import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import scoopImage from "/public/scoop-purple.jpeg";
import roundButton from "/public/get-started.png";
import barThree from "/public/Bar1.png";
import styles from "./page.module.css";
import RoundButton from "../components/RoundButton";


export default function Welcome () {
    return (
        <main>
            <section className={styles.welcomeHeader} style={{
      backgroundImage: `url(${scoopImage.src})`
    }}>
            </section>
            
        <section className={styles.welcomeFooter}>
            <h2>Besvärslös prenumerationshantering.</h2>
            <p>Med Scoopit kommer du att samla in prenumerationer utan ansträngning. Spåra, hantera och ha kontroll över din ekonomi. Börja njuta av ett mer organiserat digitalt liv idag!"</p>
        </section>
        

        <section className="nextPage" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '86px'
    }}>
    <Image
      src={barThree}
      alt="Bar that shows where you are"
      width={30}
      height={6}
    />

    <Link href="./login">
      <Image
        src={roundButton}
        alt="Button to next page"
        width={205}
        height={114}
      />
    </Link>

</section>
        
        </main>
    )
}