"use client";

import { useEffect, useState } from "react";

/**
 * Classic typewriter effect: types each word, pauses, deletes, moves to next.
 */
export function useTypewriter(
  words: string[],
  {
    typeSpeed = 65,
    deleteSpeed = 32,
    pause = 1700,
    startDelay = 600,
  }: {
    typeSpeed?: number;
    deleteSpeed?: number;
    pause?: number;
    startDelay?: number;
  } = {}
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    const word = words[wordIndex % words.length];

    // All state updates happen inside timeout callbacks (never synchronously
    // in the effect body), so React never sees cascading renders.
    let delay: number;
    let action: () => void;

    if (!deleting && text === word) {
      delay = pause;
      action = () => setDeleting(true);
    } else if (deleting && text === "") {
      delay = 0;
      action = () => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      };
    } else {
      delay = deleting ? deleteSpeed : typeSpeed;
      action = () => setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }

    const timeout = setTimeout(action, delay);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, started, typeSpeed, deleteSpeed, pause]);

  return text;
}
