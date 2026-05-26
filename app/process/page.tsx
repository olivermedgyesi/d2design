import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProcessCTA } from "@/components/ProcessCTA";
import { ProcessIntro } from "@/components/ProcessIntro";
import { ProcessPhases } from "@/components/ProcessPhases";

export const metadata: Metadata = {
  title: "Our Process | D2 Design Build Calgary",
  description:
    "D2 Design Build's 5-phase process: from design brief to final handover. One team manages design and construction from start to finish.",
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProcessIntro />
        <ProcessPhases />
        <ProcessCTA />
      </main>
      <Footer />
    </>
  );
}
