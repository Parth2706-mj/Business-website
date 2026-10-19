import type { Metadata } from "next";
import Image from "next/image";
import { company } from "@/data/company";
import styles from "./greetings.module.css";

export const metadata: Metadata = {
  title: "Dussehra, Dhanteras and Diwali | Baba Sons & Khandelwal Udyog",
  description:
    "Season's greetings from Khandelwal Udyog and Baba Sons for Dussehra, Dhanteras, and Diwali.",
};

const festivals = [
  { name: "Dussehra", line: "Courage, and a clear victory." },
  { name: "Dhanteras", line: "Prosperity for the work you do." },
  { name: "Diwali", line: "Light for your home and your people." },
];

export default function GreetingsPage() {
  const [office] = company.phones;

  return (
    <div className={styles.card}>
      <div className={styles.sky} aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => (
          <span key={index} className={styles.mote} />
        ))}
      </div>

      <article className={styles.sheet}>
        <Image
          src="/greetings/logo.png"
          alt="Khandelwal Udyog and Baba Sons"
          width={1087}
          height={361}
          priority
          className={styles.logo}
        />

        <p className={styles.kicker}>Season&apos;s greetings · 2026</p>
        <h1 className={styles.heading}>Dussehra, Dhanteras and Diwali</h1>
        <div className={styles.rule} />
        <p className={styles.lead}>Wishing you victory, prosperity, and light.</p>
        <p className={styles.body}>
          Dussehra brings courage, Dhanteras brings abundance, and Diwali brings light into
          homes and workplaces. Khandelwal Udyog and Baba Sons wish you and your organisation a
          festive season of steady progress and good fortune.
        </p>

        <figure className={styles.frame}>
          <Image
            src="/greetings/diyas.jpg"
            alt="Three brass lamps lit for the festive season"
            width={1280}
            height={720}
            priority
            className={styles.wide}
          />
          <Image
            src="/greetings/diya.jpg"
            alt=""
            width={1024}
            height={1024}
            className={styles.seal}
          />
        </figure>

        <div className={styles.festivals}>
          {festivals.map((festival) => (
            <section key={festival.name} className={styles.festival}>
              <h2>{festival.name}</h2>
              <p>{festival.line}</p>
            </section>
          ))}
        </div>

        <div className={styles.contacts}>
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
        </div>

        <p className={styles.close}>With warm regards, from all of us.</p>
      </article>
    </div>
  );
}
