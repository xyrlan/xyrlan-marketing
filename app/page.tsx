"use client";

import { useEffect } from "react";
import Lottie from "lottie-react";
import { Button } from "@heroui/button";

import test from "./test.json";

import {
  animateWordChange,
  animateWordChange2,
  animateWordChange3,
} from "@/utils/animateWords";

export default function Home() {
  useEffect(() => {
    // Initialize animation for all word groups in parallel
    // const cleanup = animateAllWordGroups();
    const cleanup = animateWordChange();
    const cleanup2 = animateWordChange2();
    const cleanup3 = animateWordChange3();

    return () => {
      // Cleanup interval if the component unmounts
      cleanup && cleanup();
      cleanup2 && cleanup2();
      cleanup3 && cleanup3();
    };
  }, []);

  return (
    <section className="flex flex-col md:flex-row justify-between gap-4 py-8 md:py-10">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-8xl font-semibold leading-tight">
          We{" "}
          <span className="ml-4" id="word-1">
            <span className="word">develop</span>
            <span className="word">build</span>
            <span className="word">create</span>
          </span>
          <br />
          <span className="" id="word-2">
            <span className="word2">websites</span>
            <span className="word2">solutions</span>
          </span>
          <br />
          that{" "}
          <span className="ml-4" id="word-3">
            <span className="word3">users</span>
            <span className="word3">brands</span>
            <span className="word3">people</span>
          </span>
          <br />
          love
        </h1>
        <p className="my-5 max-w-md text-xl leading-relaxed">
          We make websites that convert your audience from passive viewers to
          active brand enthusiasts.
        </p>
        <Button className="w-fit my-5" color="primary" size="lg">
          Get Started
        </Button>
      </div>

      <Lottie loop animationData={test} className="w-full md:w-1/2" />
    </section>
  );
}
