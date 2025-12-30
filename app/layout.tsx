import type { Metadata } from "next";
import { Courier_Prime, Fira_Sans } from "next/font/google";
import "./globals.css";

export const courier_prime = Courier_Prime({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-courier-prime",
});

export const fira_sans = Fira_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fira-sans",
});

export const metadata: Metadata = {
  title: "Winfrey De Vera",
  description:
    "Aspiring Backend & Data Engineer | BS Information Technology Student | Experienced Frontend Lead Passionate About Building Scalable, Data-Driven Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${courier_prime.variable} ${fira_sans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
