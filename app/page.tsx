"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/herosection/HeroSection"),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <div className="h-[95vh] flex flex-col justify-center bg-background rounded-[100px]">
      <HeroSection />
    </div>
  );
}
