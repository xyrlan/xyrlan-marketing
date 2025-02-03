"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const Logo = () => {
  const { theme, setTheme } = useTheme();

  return theme === "light" ? (
    <Image alt="logo" height={64} src="/icon-light.png" width={64} />
  ) : (
    <Image alt="logo" height={64} src="/icon.png" width={64} />
  );
};

export default Logo;
