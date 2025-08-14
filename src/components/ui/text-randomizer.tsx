/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from "react";

export const TextRandomizerEffect = ({ words, className, placeholder = false, callback }: { words: string; className?: string; placeholder?: boolean; callback?: (arg0: number) => number }) => {
  const [displayedWords, setDisplayedWords] = useState(placeholder ? "\u00A0".repeat(words.length) : "");

  useEffect(() => {
    setDisplayedWords("");

    const timers: NodeJS.Timeout[] = [];

    for (let step = 0; step <= words.length; step++) {
      const timer = setTimeout(() => {
        let displayedText = "";

        for (let i = 0; i < step; i++) {
          displayedText += words[i];
        }

        for (let i = step; i < words.length; i++) {
          displayedText += randomChar();
        }

        setDisplayedWords(displayedText);
        if (callback) {
          callback(step / words.length * 100);
        }
      }, step * 50);

      timers.push(timer);
    }

    

    return () => {
      timers.forEach(clearTimeout);
    }
  }, [words]);

  return (
    <div className={`font-medium font-primary ${className}`}>
      {displayedWords}
    </div>
  );
};

function randomChar() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return chars.charAt(Math.floor(Math.random() * chars.length));
}
