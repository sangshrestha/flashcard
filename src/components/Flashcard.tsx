"use client";
import React from "react";

type FlashcardProps = {
  front: string;
  back: string;
};

export function Flashcard({ front, back }: FlashcardProps) {
  const [text, setText] = React.useState(front);

  function flip() {
    text === front ? setText(back) : setText(front);
  }

  return (
    <div
      className="flex flex-1 place-items-center max-w-sm h-60 p-6 rounded-lg shadow bg-amber-300 cursor-pointer"
      onClick={flip}
    >
      <p className="w-full text-center text-lg font-semibold">{text}</p>
    </div>
  );
}
