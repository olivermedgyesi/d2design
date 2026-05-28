import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PortfolioCTA } from "@/components/PortfolioCTA";
import { PortfolioCollection } from "@/components/PortfolioCollection";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { PortfolioIntro } from "@/components/PortfolioIntro";

export const metadata: Metadata = {
  title: "Portfolio | D2 Design Build Calgary",
  description:
    "Projects by D2 Design Build — character home renovations, custom builds, kitchens, bathrooms, and specialty spaces across Calgary.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioIntro />
        <PortfolioGrid />
        <PortfolioCollection />
        <PortfolioCTA />
      </main>
      <Footer />
    </>
  );
}
