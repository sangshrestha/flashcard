"use client";
import { Deck } from "@/components/Deck";
import { FlashcardProps } from "@/components/Flashcard";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function Edit() {
  const [deck, setDeck] = useState<FlashcardProps[]>([]);
  const [frontText, setFrontText] = useState("");
  const [backText, setBackText] = useState("");
  const [deckName, setDeckName] = useState("");
  const searchParams = useSearchParams();
  const listName = searchParams.get("list");

  function addCard() {
    if (frontText && backText && deckName) {
      console.log(frontText, backText, deckName);
      setDeck([...deck, { front: frontText, back: backText }]);
      setBackText("");
      setFrontText("");
    }
  }

  useEffect(() => {
    const deckInStorage = window.sessionStorage.getItem("flashcard-deck");
  }, [deck]);

  return (
    <Suspense>
      <div className="flex flex-col gap-4 max-w-sm">
        <div className="flex justify-between gap-8">
          <h2>Deck:</h2>
          <input
            className="flex-1 px-2 w-full"
            type="text"
            name="name"
            value={deckName}
            onChange={(e) => setDeckName(e.currentTarget.value)}
          />
        </div>
        <div className="flex gap-6 mt-4">
          <input
            className="flex-1 px-2 w-full"
            type="text"
            name="name"
            value={frontText}
            onChange={(e) => setFrontText(e.currentTarget.value)}
          />
          <input
            className="flex-1 px-2 w-full"
            type="text"
            name="name"
            value={backText}
            onChange={(e) => setBackText(e.currentTarget.value)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4">
          {deck.toReversed().map((card, i) => {
            return (
              <div key={i} className="flex justify-between gap-8">
                <p className="flex-1 p-1 bg-amber-400 rounded-full text-white text-center font-semibold ">
                  {card.front}
                </p>
                <p className="flex-1 p-1 bg-amber-200 rounded-full text-center text-gray-800 font-semibold ">
                  {card.back}
                </p>
              </div>
            );
          })}
        </div>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={addCard}
        >
          Update deck
        </button>
      </div>
    </Suspense>
  );
}