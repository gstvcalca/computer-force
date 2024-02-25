"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GalleryContextContainer } from "./components/gallery-context";
import { GalleryList } from "./components/gallery-list";

export default function Home() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <main>
        <GalleryContextContainer/>
        <GalleryList/>
      </main>
    </QueryClientProvider>
  );
}
