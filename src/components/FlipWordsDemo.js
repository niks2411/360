import React from "react";
import { FlipWords } from "./ui/FlipWords";

export function FlipWordsDemo() {
  const words = ["SEO", "Marketing", "Analytics", "Performance"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-gray-600 text-center">
        Take Complete Control of Your
        <FlipWords words={words} /> <br />
        with 360° Website Control
      </div>
    </div>
  );
}
