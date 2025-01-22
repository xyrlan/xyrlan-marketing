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
    <div className="md:h-[95vh] flex flex-col justify-center bg-background md:rounded-[100px] rounded-[50px]">
      <HeroSection />
    </div>
  );
}
