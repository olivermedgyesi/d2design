import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ReadyToMoveBody } from "@/components/ReadyToMoveBody";
import { ReadyToMoveCTA } from "@/components/ReadyToMoveCTA";
import { ReadyToMoveIntro } from "@/components/ReadyToMoveIntro";

export const metadata: Metadata = {
  title: "Designer Homes for Sale Calgary | D2 Design Build",
  description:
    "D2 Design Build acquires properties, renovates them to a full designer standard, and lists them for sale. Move in without managing a build.",
};

export default function ReadyToMoveDesignerProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ReadyToMoveIntro />
        <ReadyToMoveBody />
        <ReadyToMoveCTA />
      </main>
      <Footer />
    </>
  );
}
