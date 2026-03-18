import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThreeScene from "@/components/ThreeScene";
import CursorGlow from "@/components/CursorGlow";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashish Panwar | Content Creator & Video Editor",
  description: "Portfolio of Ashish Panwar - Bridging the gap between code and cinema.",
  icons: {
    icon: "/apfavicon.PNG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased selection:bg-neon-cyan/30`}>
        <ThreeScene>
          <mesh visible={false} />
        </ThreeScene>
        <CursorGlow />
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
