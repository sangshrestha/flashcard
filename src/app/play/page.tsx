"use client";
import { Deck } from "@/components/Deck";
import { FlashcardProps } from "@/components/Flashcard";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function Play() {
  const [decks, setDecks] = useState<{ [key: string]: FlashcardProps[] }>();

  function RenderDeck() {
    const searchParams = useSearchParams();
    const listName = searchParams.get("list");
    if (listName && decks) {
      return <Deck list={decks[listName]}></Deck>;
    }
  }

  useEffect(() => {
    const deckInStorage = window.localStorage.getItem("flashcard-deck");
    if (deckInStorage) {
      setDecks(JSON.parse(deckInStorage));
    }
  }, []);

  return (
    <Suspense>
      <RenderDeck />
    </Suspense>
  );
}
