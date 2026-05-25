import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PrivacyPolicyContent } from "@/components/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | D2 Design Build",
  description:
    "How D2 Design Build collects, uses, and protects personal information submitted through this website, in compliance with Alberta's PIPA and Canada's PIPEDA.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar variant="dark" />
      <main>
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </>
  );
}
