import type { Metadata } from "next";
import { FAQCTA } from "@/components/FAQCTA";
import { FAQList } from "@/components/FAQList";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "FAQ | D2 Design Build Calgary",
  description:
    "Common questions about working with D2 Design Build — projects, process, pricing, timelines, and service areas.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar variant="dark" />
      <main>
        <FAQList />
        <FAQCTA />
      </main>
      <Footer />
    </>
  );
}
