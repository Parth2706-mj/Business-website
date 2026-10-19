import Image from "next/image";
import { Archivo_Narrow, Cormorant_Garamond } from "next/font/google";
import { company } from "@/data/company";
import styles from "./festival-card.module.css";

const display = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export type FestivalTheme = "dussehra" | "dhanteras" | "diwali";

const copy: Record<FestivalTheme, { title: string; message: string; art: string; alt: string }> = {
  dussehra: {
    title: "Dussehra",
    message:
      "Wishing you and your organisation a Dussehra of courage and clear victory. May the season ahead favour the work you do.",
    art: "/greetings/art-dussehra.jpg",
    alt: "A golden bow and marigolds for Dussehra",
  },
  dhanteras: {
    title: "Dhanteras",
    message:
      "Wishing you and your organisation a Dhanteras of abundance. May prosperity stay with your home and your enterprise.",
    art: "/greetings/art-dhanteras.jpg",
    alt: "Gold coins and a brass vessel for Dhanteras",
  },
  diwali: {
    title: "Diwali",
    message:
      "Wishing you and your organisation a Diwali of warmth and light. May your people, your home, and the year ahead be bright.",
    art: "/greetings/art-diwali.jpg",
    alt: "Brass lamps lit for Diwali",
  },
};

export function FestivalCard({ theme }: { theme: FestivalTheme }) {
  const card = copy[theme];
  const [office] = company.phones;

  return (
    <div className={styles.stage} data-theme={theme}>
      <article className={`${styles.card} ${display.className}`}>
        <header className={styles.brand}>
          <Image
            src="/greetings/mark.png"
            alt=""
            width={356}
            height={172}
            priority
            className={styles.mark}
          />
          <p className={styles.trade}>Khandelwal Udyog</p>
          <p className={styles.sons}>
            <i />
            Baba Sons
            <i />
          </p>
          <p className={`${styles.tagline} ${serif.className}`}>
            Your Partner in Chemical Industrial Solutions
          </p>
        </header>

        <figure className={styles.art}>
          <Image src={card.art} alt={card.alt} width={864} height={1152} priority className={styles.photo} />
          <div className={styles.glow} />
          <div className={styles.fx} aria-hidden="true">
            {theme === "dussehra" &&
              Array.from({ length: 10 }, (_, index) => <span key={index} className={styles.petal} />)}
            {theme === "dhanteras" &&
              Array.from({ length: 12 }, (_, index) => <span key={index} className={styles.spark} />)}
            {theme === "diwali" &&
              Array.from({ length: 14 }, (_, index) => <span key={index} className={styles.mote} />)}
          </div>
        </figure>

        <h1 className={serif.className}>{card.title}</h1>
        <p className={styles.message}>{card.message}</p>

        <footer className={styles.contacts}>
          <a href={office.href}>
            <span>Office</span>
            {office.display}
          </a>
          {company.emails.map((email) => (
            <a key={email} href={`mailto:${email}`}>
              <span>Email</span>
              {email}
            </a>
          ))}
        </footer>
      </article>
    </div>
  );
}
