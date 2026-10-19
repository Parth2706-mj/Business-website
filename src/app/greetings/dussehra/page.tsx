import type { Metadata } from "next";
import { FestivalCard } from "@/components/greetings/FestivalCard";

export const metadata: Metadata = {
  title: "Dussehra greetings | Baba Sons & Khandelwal Udyog",
  description: "Dussehra greetings from Khandelwal Udyog and Baba Sons.",
};

export default function DussehraGreetingPage() {
  return <FestivalCard theme="dussehra" />;
}
