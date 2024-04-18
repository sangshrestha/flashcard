"use client";
import React from "react";
import { useEffect } from "react";

export type FlashcardProps = {
  front: string;
  back: string;
};

export type BgVariation = {
  front: string;
  back: string;
};

const bgVariations: BgVariation[] = [
  { front: "bg-amber-400", back: "bg-amber-200" },
  { front: "bg-lime-400", back: "bg-lime-200" },
  { front: "bg-teal-400", back: "bg-teal-200" },
  { front: "bg-violet-400", back: "bg-violet-200" },
  { front: "bg-pink-400", back: "bg-pink-200" },
];

let bgVariationCache: BgVariation;

export default function Flashcard({ front, back }: FlashcardProps) {
  const filteredBgColours = bgVariations.filter(
    (col) => !bgVariationCache || col.front !== bgVariationCache.front
  );
  const [turn, setTurn] = React.useState("");
  const [bgVariation] = React.useState(
    filteredBgColours[Math.floor(Math.random() * filteredBgColours.length)]
  );

  useEffect(() => {
    bgVariationCache = bgVariation;
  });

  function flip() {
    setTurn(turn === "" ? "turn" : "");
  }

  return (
    <div
      className={`flashcard ${turn} absolute inset-0 w-96 h-60 rounded-sm cursor-pointer shadow-md select-none transition transform duration-700`}
      onClick={flip}
    >
      <div
        className={`${bgVariation.front} front absolute flex place-items-center w-full h-full p-6 rounded-sm`}
      >
        <p className="w-full text-center text-lg font-semibold text-white">
          {front}
        </p>
      </div>
      <div
        className={`${bgVariation.back} back absolute flex place-items-center max-w-sm w-full h-full p-6 rounded-sm`}
      >
        <p className="w-full text-center text-lg text-gray-800 font-semibold">
          {back}
        </p>
      </div>
    </div>
  );
}
