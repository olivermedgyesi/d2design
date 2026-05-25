import type { Metadata } from "next";
import { CompleteDesignerBody } from "@/components/CompleteDesignerBody";
import { CompleteDesignerCTA } from "@/components/CompleteDesignerCTA";
import { CompleteDesignerIntro } from "@/components/CompleteDesignerIntro";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Whole Home Renovation Calgary | D2 Design Build",
  description:
    "D2 Design Build handles complete home renovations in Calgary from design brief to final walkthrough. One team, full design control, no compromises.",
};

export default function CompleteDesignerRenovationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <CompleteDesignerIntro />
        <CompleteDesignerBody />
        <CompleteDesignerCTA />
      </main>
      <Footer />
    </>
  );
}
