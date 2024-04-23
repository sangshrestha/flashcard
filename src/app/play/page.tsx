"use client";
import { Deck } from "@/components/Deck";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function Play() {
  const [list, setList] = useState([
    { front: "Loading front", back: "Loading back" },
  ]);

  const searchParams = useSearchParams();
  const listName = searchParams.get("list");

  useEffect(() => {
    const deckInStorage = window.localStorage.getItem("flashcard-deck");
    if (deckInStorage && listName) {
      const decks = JSON.parse(deckInStorage);
      setList(decks[listName]);
    }
  }, []);

  return (
    <Suspense>
      <Deck key={list[0].front} list={list}></Deck>
    </Suspense>
  );
}
