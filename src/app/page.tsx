"use client";

import Header from "@/components/header";
import Scrolling from "@/components/page2/InfiniteScrolling";
import Page1 from "@/components/page1/page";
import Page3 from "@/components/page3/page";

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center">
      <Header />
      <Page1 />
      <Scrolling />
      <Page3 />
    </main>
  );
}
