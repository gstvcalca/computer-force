"use client";

import { useState } from "react";
import { GalleryContextContainer } from "./components/gallery-context";
import { GalleryList } from "./components/gallery-list";

export default function Home(){
  return (
      <main>
        <GalleryContextContainer/>
        <GalleryList/>
      </main>
  );
}
