"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import turkish from "@/turkish.json";
import spanish from "@/spanish.json";

const defaultDecks = { "turkish vocabs": turkish, spanish: spanish };

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
    <nav className="grid auto-rows-fr gap-2 max-w-sm w-96">
      {Object.keys(decks).map((key) => {
        return (
          <Link
            key={key}
            className="block first-letter:capitalize text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-md px-5 py-2.5 justify-center w-full text-center"
            href={{ pathname: "/play", query: { list: key } }}
          >
            {key}
          </Link>
        );
      })}
      <Link
        className="capitalize flex-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-md px-5 py-2.5 inline-flex justify-center w-full text-center"
        href={{ pathname: "/edit" }}
      >
        +
      </Link>
    </nav>
  );
}
