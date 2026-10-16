"use client";

import { useEffect, useMemo, useState } from "react";

// Typing and deleting stay brisk; the finished phrase just sits there a good
// while longer, so the sentence is readable between rotations.
const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 4800;
const GAP_MS = 650;
// Reduced motion swaps the whole phrase rather than typing it, so this stands
// in for one full cycle above.
const REDUCED_MS = 7500;

type Phase = "hold" | "deleting" | "typing";

/** How much of the front of two phrases is identical. */
function sharedPrefixLength(a: string, b: string) {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i += 1;
  return i;
}

export default function RotatingTitle({ kids }: { kids: string }) {
  // Whole phrases rather than bare job titles: each types its own lead-in, so
  // the line stands on its own under the greeting and the wording can vary.
  const phrases = useMemo(
    () => [
      `I’m Dad to ${kids}`,
      "I’m a Creative Technologist",
      "I work as a Fractional CTO, Tech Lead",

    ],
    [kids]
  );

  const [index, setIndex] = useState(0);
  const [text, setText] = useState(phrases[0]);
  const [phase, setPhase] = useState<Phase>("hold");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Reduced motion: swap the whole phrase, no typing.
  useEffect(() => {
    if (!reduced) return;
    setText(phrases[index]);
    const id = setTimeout(
      () => setIndex((i) => (i + 1) % phrases.length),
      REDUCED_MS
    );
    return () => clearTimeout(id);
  }, [reduced, index, phrases]);

  useEffect(() => {
    if (reduced) return;

    const full = phrases[index];
    const nextIndex = (index + 1) % phrases.length;
    // These phrases all open the same way, and rubbing that out only to type
    // it straight back reads as a stutter. Delete to the fork instead, so the
    // shared opening sits still while the tail changes. Two phrases with
    // nothing in common fall back to a full retype on their own.
    const keep = sharedPrefixLength(full, phrases[nextIndex]);

    const delay =
      phase === "hold"
        ? HOLD_MS
        : phase === "deleting"
        ? text.length <= keep
          ? GAP_MS
          : DELETE_MS
        : TYPE_MS;

    const id = setTimeout(() => {
      if (phase === "hold") {
        setPhase("deleting");
      } else if (phase === "deleting") {
        if (text.length <= keep) {
          setIndex(nextIndex);
          setPhase("typing");
        } else {
          setText(text.slice(0, -1));
        }
      } else if (text === full) {
        setPhase("hold");
      } else {
        setText(full.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(id);
  }, [text, phase, index, reduced, phrases]);

  return (
    // The phrase gets a line of its own, so it can simply centre as it types:
    // nothing else shares the line to be shoved around.
    <em className="inline-block align-baseline">
      <span className="sr-only">{phrases.join(". ")}.</span>
      <span aria-hidden="true">
        {text}
        <span className="animate-blink not-italic text-brand">|</span>
      </span>
    </em>
  );
}
