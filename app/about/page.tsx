import type { Metadata } from "next";
import { AboutCTA } from "@/components/AboutCTA";
import { AboutIntro } from "@/components/AboutIntro";
import { AboutPillars } from "@/components/AboutPillars";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "About D2 Design Build | Calgary Design-Build Firm",
  description:
    "D2 Design Build was founded by Dracek & Dhaliwal to do design-build work with genuine creative intent and full focus on the client.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutIntro />
        <AboutPillars />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}
