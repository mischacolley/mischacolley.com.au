"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PROJECTS, type Project } from "@/lib/projects";

/**
 * One step per ~7s, matching RotatingTitle's cadence: its three titles cycle
 * in 7.66s, 6.92s and 6.39s (type + hold + delete + gap), averaging 6.99s.
 */
const AUTOPLAY_MS = 7000;

/**
 * Autoplay is JS-driven, so the global reduced-motion CSS never reaches it —
 * it has to be gated here.
 */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(query.matches);
    onChange();
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function ProjectCard({ project }: { project: Project }) {
  const body = (
    <>
      <div className="h-16 flex items-center justify-center">
        {/* Plain img: these are static SVGs of wildly different aspect ratios,
            and object-contain inside a fixed box is all the sizing they need.
            The name lives in alt — no card prints it as text. */}
        <img
          src={project.logo.src}
          alt={project.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <p className="mt-4 text-sm text-gray-600">{project.tagline}</p>
      {project.previously && (
        <p className="mt-1 text-xs text-gray-400">{project.previously}</p>
      )}
    </>
  );

  const className =
    "flex h-full flex-col items-center justify-start px-4 py-6 text-center";

  return project.href ? (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} rounded transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand`}
    >
      {body}
    </a>
  ) : (
    <div className={className}>{body}</div>
  );
}

export default function ProjectCarousel() {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Memoised: a fresh array each render would re-init the carousel every time.
  const plugins = useMemo(
    () =>
      prefersReducedMotion
        ? []
        : [
            Autoplay({
              delay: AUTOPLAY_MS,
              // Resume after a drag or an arrow click, but hold still while
              // the pointer or keyboard focus is on the strip.
              stopOnInteraction: false,
              stopOnMouseEnter: true,
              stopOnFocusIn: true,
            }),
          ],
    [prefersReducedMotion]
  );

  // loop so autoplay keeps going past the last card instead of dead-ending.
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    plugins
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    // Kept so the arrows still take themselves away if the strip is ever
    // reconfigured to fit every card at once.
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const showArrows = canScrollPrev || canScrollNext;

  return (
    // Wider than the prose column above: the copy is centred, so there is no
    // left edge to line up with, and four logos want the room.
    <div
      className="relative mt-16 mx-auto w-full max-w-6xl px-6"
      role="group"
      aria-label="Projects I'm working on"
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="min-w-0 flex-[0_0_100%]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <>
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-gray-400 transition-colors hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-30"
            aria-label="Previous projects"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-gray-400 transition-colors hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-30"
            aria-label="Next projects"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
