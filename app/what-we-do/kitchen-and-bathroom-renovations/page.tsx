import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { KitchenBathBody } from "@/components/KitchenBathBody";
import { KitchenBathCTA } from "@/components/KitchenBathCTA";
import { KitchenBathIntro } from "@/components/KitchenBathIntro";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Kitchen + Bathroom Renovation Calgary | D2 Design Build",
  description:
    "D2 Design Build renovates kitchens and bathrooms in Calgary with full design direction, premium finish specification, and trade management included.",
};

export default function KitchenAndBathroomRenovationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <KitchenBathIntro />
        <KitchenBathBody />
        <KitchenBathCTA />
      </main>
      <Footer />
    </>
  );
}
