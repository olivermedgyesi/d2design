import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { YouSpacesBody } from "@/components/YouSpacesBody";
import { YouSpacesCTA } from "@/components/YouSpacesCTA";
import { YouSpacesIntro } from "@/components/YouSpacesIntro";

export const metadata: Metadata = {
  title: "Home Gym Renovation Calgary | D2 Design Build",
  description:
    "D2 Design Build designs and builds home gyms, theater rooms, home offices, and specialty spaces in Calgary. Purpose-built rooms designed to actually work.",
};

export default function YouSpacesPage() {
  return (
    <>
      <Navbar />
      <main>
        <YouSpacesIntro />
        <YouSpacesBody />
        <YouSpacesCTA />
      </main>
      <Footer />
    </>
  );
}
