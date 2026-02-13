import type { Metadata } from "next";
import { Playfair_Display, Lora, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

const lora = Lora({ 
  subsets: ["latin"],
  variable: '--font-lora',
});

const greatVibes = Great_Vibes({ 
  subsets: ["latin"],
  variable: '--font-great-vibes',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: "Bembu Land",
  description: "Our Forever Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable} ${greatVibes.variable} font-serif antialiased bg-[#FFFAFA]`}>
        {children}
      </body>
    </html>
  );
}