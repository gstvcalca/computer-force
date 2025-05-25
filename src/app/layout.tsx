"use client";

import { Saira, Saira_Stencil_One } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { DefaultPageLayout } from "./components/default-page-layout";
import { DefaultPageProviders } from "./components/default-page-providers";
import { Footer } from "./components/footer";


const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export const sairaOne = Saira_Stencil_One({ 
    subsets: ["latin"],
    weight: '400', 
  }); 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saira.className}>  
        <DefaultPageProviders>
          <Header/>
          <DefaultPageLayout>
            {children}
          </DefaultPageLayout>
          <Footer/>
        </DefaultPageProviders>
      </body>
    </html>
  );
}
