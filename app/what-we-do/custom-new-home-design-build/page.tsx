import type { Metadata } from "next";
import { CustomNewHomeBody } from "@/components/CustomNewHomeBody";
import { CustomNewHomeCTA } from "@/components/CustomNewHomeCTA";
import { CustomNewHomeIntro } from "@/components/CustomNewHomeIntro";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Custom Home Design Build Calgary | D2 Design Build",
  description:
    "D2 Design Build offers custom home design and construction in Calgary and surrounding areas. Design-led builds from brief to handover.",
};

export default function CustomNewHomeDesignBuildPage() {
  return (
    <>
      <Navbar />
      <main>
        <CustomNewHomeIntro />
        <CustomNewHomeBody />
        <CustomNewHomeCTA />
      </main>
      <Footer />
    </>
  );
}
