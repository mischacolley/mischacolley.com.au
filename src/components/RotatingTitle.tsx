"use client";

import { useEffect, useState } from "react";

const TITLES = [
  "Creative Technologist",
  "Fractional CTO",
  "Tech Lead",
];

const LONGEST = TITLES.reduce((a, b) => (b.length > a.length ? b : a));

// Typing and deleting stay brisk; the finished title just sits there a good
// while longer, so the sentence is readable between rotations.
const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 4800;
const GAP_MS = 650;
// Reduced motion swaps the whole word rather than typing it, so this stands in
// for one full cycle above.
const REDUCED_MS = 7500;

type Phase = "hold" | "deleting" | "typing";

export default function RotatingTitle() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(TITLES[0]);
  const [phase, setPhase] = useState<Phase>("hold");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Reduced motion: swap the whole title, no typing.
  useEffect(() => {
    if (!reduced) return;
    setText(TITLES[index]);
    const id = setTimeout(
      () => setIndex((i) => (i + 1) % TITLES.length),
      REDUCED_MS
    );
    return () => clearTimeout(id);
  }, [reduced, index]);

  useEffect(() => {
    if (reduced) return;
    const full = TITLES[index];
    const delay =
      phase === "hold"
        ? HOLD_MS
        : phase === "deleting"
        ? text.length === 0
          ? GAP_MS
          : DELETE_MS
        : TYPE_MS;

    const id = setTimeout(() => {
      if (phase === "hold") {
        setPhase("deleting");
      } else if (phase === "deleting") {
        if (text.length === 0) {
          setIndex((i) => (i + 1) % TITLES.length);
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
  }, [text, phase, index, reduced]);

  return (
    <em className="relative inline-block align-baseline">
      <span className="sr-only">
        {TITLES.slice(0, -1).join(", ")} or {TITLES[TITLES.length - 1]}
      </span>
      {/* Reserves the width of the longest title so the sentence doesn't reflow. */}
      <span className="invisible" aria-hidden="true">
        {LONGEST}
      </span>
      {/* text-left so a centred sentence doesn't make the characters grow out
          from the middle of the reserved box as they're typed. */}
      <span
        className="absolute inset-0 whitespace-nowrap text-left"
        aria-hidden="true"
      >
        {text}
        <span className="animate-blink not-italic text-brand">|</span>
      </span>
    </em>
  );
}
