"use client"

import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { DefaultPageLayout } from "./components/default-page-layout";
import { GalleryContextProvider } from "@/context/gallery-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = new QueryClient()
  return (
    <html lang="en">
      <body>  
        <QueryClientProvider client={client}>
          <GalleryContextProvider>
            <Header/>
            <DefaultPageLayout className={saira.className}>
              {children}
            </DefaultPageLayout>
          </GalleryContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
