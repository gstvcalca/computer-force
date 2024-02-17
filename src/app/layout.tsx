

import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";

const saira = Saira({ 
  subsets: ["latin"],
  weight: ['400', '500', '600'] 
});

export const metadata: Metadata = {
  title: "Computer force app",
  description: "Attempt no. 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
