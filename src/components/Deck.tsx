"use client";
import React from "react";
import dynamic from "next/dynamic";
import { FlashcardProps } from "./Flashcard";

const Flashcard = dynamic(() => import("@/components/Flashcard"), {
  ssr: false,
});

type Deckprops = { list: FlashcardProps[] };

export function Deck({ list }: Deckprops) {
  const startIndex = Math.floor(Math.random() * list.length);
  const [listIndex, setListIndex] = React.useState(startIndex);

  function change() {
    const startList = Array(list.length)
      .fill(0)
      .map((n, i) => i);

    const filterList = startList.filter((n) => n !== listIndex);
    setListIndex(filterList[Math.floor(Math.random() * filterList.length)]);
  }

  return (
    <div className="flex flex-col justify-center gap-4">
      <Flashcard
        key={listIndex}
        front={list[listIndex].front}
        back={list[listIndex].back}
      ></Flashcard>
      <button
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={change}
      >
        Done
      </button>
    </div>
  );
}
