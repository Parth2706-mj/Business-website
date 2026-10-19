import type { Metadata } from "next";
import Image from "next/image";
import styles from "./greetings.module.css";

export const metadata: Metadata = {
  title: "Festival greetings | Baba Sons & Khandelwal Udyog",
  description:
    "Separate greeting cards from Khandelwal Udyog and Baba Sons for Dussehra, Dhanteras, and Diwali.",
};

const cards = [
  {
    src: "/greetings/dussehra.jpg",
    title: "Dussehra",
    file: "Dussehra-Khandelwal-Udyog-Baba-Sons.jpg",
  },
  {
    src: "/greetings/dhanteras.jpg",
    title: "Dhanteras",
    file: "Dhanteras-Khandelwal-Udyog-Baba-Sons.jpg",
  },
  {
    src: "/greetings/diwali.jpg",
    title: "Diwali",
    file: "Diwali-Khandelwal-Udyog-Baba-Sons.jpg",
  },
];

export default function GreetingsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <p className={styles.kicker}>Khandelwal Udyog &amp; Baba Sons</p>
        <h1>Festival greetings</h1>
        <p>Three cards, one for each festival. Open an image and save it to send.</p>
      </header>
      <div className={styles.grid}>
        {cards.map((card) => (
          <figure key={card.src} className={styles.card}>
            <a href={card.src} download={card.file}>
              <Image
                src={card.src}
                alt={`${card.title} greeting from Khandelwal Udyog and Baba Sons`}
                width={1296}
                height={1728}
                className={styles.image}
              />
            </a>
            <figcaption>
              <span>{card.title}</span>
              <a href={card.src} download={card.file}>
                Save image
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
