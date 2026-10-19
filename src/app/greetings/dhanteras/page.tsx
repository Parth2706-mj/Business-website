import type { Metadata } from "next";
import { FestivalCard } from "@/components/greetings/FestivalCard";

export const metadata: Metadata = {
  title: "Dhanteras greetings | Baba Sons & Khandelwal Udyog",
  description: "Dhanteras greetings from Khandelwal Udyog and Baba Sons.",
};

export default function DhanterasGreetingPage() {
  return <FestivalCard theme="dhanteras" />;
}
