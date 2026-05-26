import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TeamCTA } from "@/components/TeamCTA";
import { TeamIntro } from "@/components/TeamIntro";
import { TeamMembers } from "@/components/TeamMembers";

export const metadata: Metadata = {
  title: "The Team | D2 Design Build Calgary",
  description:
    "Meet the team behind D2 Design Build — Christian Dracek and Raj Dhaliwal, owner-operators involved in every project from brief to handover.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <TeamIntro />
        <TeamMembers />
        <TeamCTA />
      </main>
      <Footer />
    </>
  );
}
