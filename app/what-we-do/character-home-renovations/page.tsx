import type { Metadata } from "next";
import { CharacterHomeBody } from "@/components/CharacterHomeBody";
import { CharacterHomeCTA } from "@/components/CharacterHomeCTA";
import { CharacterHomeIntro } from "@/components/CharacterHomeIntro";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Character Home Renovation Calgary | D2 Design Build",
  description:
    "D2 Design Build restores and renovates character homes in Calgary, preserving original features while modernizing throughout. Full design and build, one team.",
};

export default function CharacterHomeRenovationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <CharacterHomeIntro />
        <CharacterHomeBody />
        <CharacterHomeCTA />
      </main>
      <Footer />
    </>
  );
}
