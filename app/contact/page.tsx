import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact D2 Design Build | Book a Discovery Call",
  description:
    "Book a free 15-minute discovery call with D2 Design Build in Calgary. Tell us about your project and we'll be in touch within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar variant="dark" />
      <main>
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
