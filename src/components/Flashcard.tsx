"use client";
import React from "react";
import { useEffect } from "react";

export type FlashcardProps = {
  front: string;
  back: string;
};

const bgColours = [
  "bg-amber-300",
  "bg-lime-300",
  "bg-teal-300",
  "bg-violet-300",
  "bg-pink-300",
];

export default function Flashcard({ front, back }: FlashcardProps) {
  const [text, setText] = React.useState(front);
  const [loaded, setLoaded] = React.useState(false);
  const [bgColour, setBgColour] = React.useState("bg-amber-300");

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);

      setBgColour(bgColours[Math.floor(Math.random() * bgColours.length)]);
    }
  });

  function flip() {
    text === front ? setText(back) : setText(front);
  }

  return (
    <div
      className={`${bgColour} flex place-items-center max-w-sm w-96 h-60 p-6 rounded-lg shadow cursor-pointer select-none`}
      onClick={flip}
    >
      <p className="w-full text-center text-lg font-semibold">{text}</p>
    </div>
  );
}
