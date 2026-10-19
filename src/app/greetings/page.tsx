import type { Metadata } from "next";
import Link from "next/link";
import styles from "./greetings.module.css";

export const metadata: Metadata = {
  title: "Festival greetings | Baba Sons & Khandelwal Udyog",
  description: "Separate animated greetings for Dussehra, Dhanteras, and Diwali.",
};

const cards = [
  { href: "/greetings/dussehra", title: "Dussehra" },
  { href: "/greetings/dhanteras", title: "Dhanteras" },
  { href: "/greetings/diwali", title: "Diwali" },
];

export default function GreetingsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <p className={styles.kicker}>Khandelwal Udyog &amp; Baba Sons</p>
        <h1>Festival greetings</h1>
        <p>Open each card on its own. The names and the tagline are set in type, and each festival moves in its own way.</p>
      </header>
      <div className={styles.grid}>
        {cards.map((card) => (
          <Link key={card.href} href={card.href} className={styles.choice}>
            {card.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
