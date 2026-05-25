import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { TermsOfUseContent } from "@/components/TermsOfUseContent";

export const metadata: Metadata = {
  title: "Terms of Use | D2 Design Build",
  description:
    "Terms governing use of the D2 Design Build website, including intellectual property, liability, and governing law in Alberta, Canada.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <Navbar variant="dark" />
      <main>
        <TermsOfUseContent />
      </main>
      <Footer />
    </>
  );
}
