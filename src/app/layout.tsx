
import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { DefaultPageLayout } from "./components/default-page-layout";

export const metadata: Metadata = {
  title: "Computer force app",
  description: "Attempt no. 2",
};

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <DefaultPageLayout className={saira.className}>
          {children}
        </DefaultPageLayout>
      </body>
    </html>
  );
}
