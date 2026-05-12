import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatWeDoCTA } from "@/components/WhatWeDoCTA";
import { WhatWeDoIntro } from "@/components/WhatWeDoIntro";
import { WhatWeDoServices } from "@/components/WhatWeDoServices";

export const metadata: Metadata = {
  title: "What We Do | D2 Design Build Calgary",
  description:
    "Character home renovations, designer overhauls, custom new builds, kitchens, bathrooms, and niche spaces across Calgary.",
};

export default function WhatWeDoPage() {
  return (
    <>
      <Navbar />
      <main>
        <WhatWeDoIntro />
        <WhatWeDoServices />
        <WhatWeDoCTA />
      </main>
      <Footer />
    </>
  );
}
