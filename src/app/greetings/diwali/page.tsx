import type { Metadata } from "next";
import { FestivalCard } from "@/components/greetings/FestivalCard";

export const metadata: Metadata = {
  title: "Diwali greetings | Baba Sons & Khandelwal Udyog",
  description: "Diwali greetings from Khandelwal Udyog and Baba Sons.",
};

export default function DiwaliGreetingPage() {
  return <FestivalCard theme="diwali" />;
}
