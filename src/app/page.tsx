"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import turkish from "@/turkish.json";
import spanish from "@/spanish.json";

const defaultDecks = { turkish: turkish, spanish: spanish };

export default function Home() {
  const [decks, setDecks] = useState(defaultDecks);

  useEffect(() => {
    const localDeck = window.localStorage.getItem("flashcard-deck");

    if (localDeck) {
      setDecks(JSON.parse(localDeck));
    } else {
      window.localStorage.setItem(
        "flashcard-deck",
        JSON.stringify(defaultDecks)
      );
    }
  }, []);

  return (
    <nav className="flex flex-col">
      {Object.keys(decks).map((key) => {
        return (
          <Link
            key={key}
            className="capitalize"
            href={{ pathname: "/play", query: { list: key } }}
          >
            {key}
          </Link>
        );
      })}
    </nav>
  );
}
