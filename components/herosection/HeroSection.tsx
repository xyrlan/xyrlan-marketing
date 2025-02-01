import { Button } from "@heroui/button";
import Lottie from "lottie-react";
import React, { useEffect } from "react";

import animation from "@/app/animation.json";
import {
  animateWordChange,
  animateWordChange2,
  animateWordChange3,
} from "@/utils/animateWords";

const HeroSection = () => {
  useEffect(() => {
    const cleanup = animateWordChange();
    const cleanup2 = animateWordChange2();
    const cleanup3 = animateWordChange3();

    return () => {
      cleanup && cleanup();
      cleanup2 && cleanup2();
      cleanup3 && cleanup3();
    };
  }, []);

  return (
    <section className="md:h-[95vh] flex flex-col justify-center bg-background ">
      <div className="flex flex-col md:flex-row justify-between md:gap-4 max-md:px-5 py-24 md:py-10 container mx-auto max-w-7xl">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-8xl font-semibold leading-tight">
            Nós{" "}
            <span className="ml-4" id="word-1">
              <span className="word">desenvolvemos</span>
              <span className="word">construimos</span>
              <span className="word">criamos</span>
            </span>
            <br />
            <span className="" id="word-2">
              <span className="word2">websites</span>
              <span className="word2">soluções</span>
            </span>
            <br />
            que{" "}
            <span className="ml-4" id="word-3">
              <span className="word3">usuários</span>
              <span className="word3">marcas</span>
              <span className="word3">pessoas</span>
            </span>
            <br />
            amam
          </h1>
          <p className="my-5 max-w-md text-xl leading-relaxed">
            Nós construímos sites que transformam seu público-alvo de
            visualizadores passivos em entusiastas de marcas ativas.
          </p>
          <Button
            className="w-fit my-5"
            color="primary"
            radius="full"
            size="lg"
          >
            Começar Agora
          </Button>
        </div>

        <Lottie loop animationData={animation} className="w-full md:w-1/2" />
      </div>
    </section>
  );
};

export default HeroSection;
