import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fractul = localFont({
  src: [
    { path: "./fonts/Fractul-Light.woff2", weight: "300", style: "normal" },
    { path: "./fonts/Fractul-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Fractul-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Fractul-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Fractul-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-fractul",
  display: "swap",
});

const meravila = localFont({
  src: [{ path: "./fonts/meravila-bold.otf", weight: "700", style: "normal" }],
  variable: "--font-meravila",
  display: "swap",
});

export const metadata: Metadata = {
  title: "D2 Design Build | Calgary Design-Build Firm",
  description:
    "D2 Design Build creates thoughtful homes in Calgary. Custom new builds, character home renovations, and precision interiors by Dracek & Dhaliwal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fractul.variable} ${meravila.variable}`}>
      <body className="bg-paper text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
