"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useCallback, useEffect, useMemo, useState } from "react";

import aime from "@/assets/client-logos/AIME.png";
import digitalVillage from "@/assets/client-logos/digital-village.png";
import empowerGolf from "@/assets/client-logos/empower-golf.png";
import epicPathways from "@/assets/client-logos/epic-pathways.png";
import friendsOfTheKoala from "@/assets/client-logos/friends-of-the-koala.png";
import hnat from "@/assets/client-logos/hnat.png";
import populares from "@/assets/client-logos/populares.png";
import rpc from "@/assets/client-logos/rpc.svg";
import startSomeGood from "@/assets/client-logos/start-some-good.png";
import storyboard from "@/assets/client-logos/storyboard.png";
import today from "@/assets/client-logos/today.png";
import verve from "@/assets/client-logos/verve.png";
import wae from "@/assets/client-logos/wae.svg";
import wela from "@/assets/client-logos/wela.png";

/**
 * Ported from Fractional by Nature's ClientLogoCarousel so the two sites show
 * the same strip. Two deliberate differences: the logos are static imports
 * rather than `/client-logos/*` public paths, so they are fingerprinted and
 * cached here, and the edge fades are painted in white rather than FbN's
 * shadcn `bg-card` token, which this site does not have.
 *
 * The list is expected to drift as FbN takes on new clients. It is duplicated
 * rather than shared because the two repos have no common package, and a
 * fourteen-entry list is cheaper to keep in step than a package would be.
 */
const CLIENT_LOGOS: { name: string; logo: { src: string } }[] = [
  { name: "AIME", logo: aime },
  { name: "Digital Village", logo: digitalVillage },
  { name: "Empower Golf", logo: empowerGolf },
  { name: "EPIC Pathways", logo: epicPathways },
  { name: "Friends of the Koala", logo: friendsOfTheKoala },
  { name: "HNAT", logo: hnat },
  { name: "Populares", logo: populares },
  { name: "Rainbow Power Company", logo: rpc },
  { name: "Start Some Good", logo: startSomeGood },
  { name: "Storyboard", logo: storyboard },
  { name: "Today", logo: today },
  { name: "Verve Super", logo: verve },
  { name: "We Are Explorers", logo: wae },
  { name: "Wela", logo: wela },
];

/**
 * The strip drifts on its own so the logos aren't only reachable by clicking
 * through. The global prefers-reduced-motion rule in globals.css only disables
 * CSS animation; this movement is JS-driven, so it has to be gated here too.
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

export default function ClientLogoCarousel() {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Memoised: a fresh array each render would re-init the carousel every time.
  const plugins = useMemo(
    () =>
      prefersReducedMotion
        ? []
        : [
            AutoScroll({
              speed: 0.7,
              startDelay: 0,
              // Resume after a drag or arrow click, but hold still while the
              // pointer or keyboard focus is on the strip.
              stopOnInteraction: false,
              stopOnMouseEnter: true,
              stopOnFocusIn: true,
            }),
          ],
    [prefersReducedMotion]
  );

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
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    // No visible heading: the strip reads as client logos from the copy above
    // it, so the group carries the label for assistive tech only.
    <div
      className="relative px-10 sm:px-12 md:px-16"
      role="group"
      aria-label="Organisations I've worked with"
    >
      {/* Fade the logos in and out at the edges rather than clipping them
          dead. White at full opacity to zero alpha; `to-transparent` would
          interpolate through black and smear the fade grey. */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-8 sm:w-16 md:w-28 bg-gradient-to-r from-white to-white/0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-8 sm:w-16 md:w-28 bg-gradient-to-l from-white to-white/0"
        aria-hidden="true"
      />

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8">
          {CLIENT_LOGOS.map(({ name, logo }) => (
            <div
              key={name}
              className="flex-[0_0_33.33%] min-w-0 md:flex-[0_0_16.66%] flex items-center justify-center"
            >
              <div className="w-full h-24 flex items-center justify-center p-4 transition-all duration-300 hover:grayscale">
                {/* Plain img: these are static files of wildly different
                    aspect ratios, and object-contain inside a fixed box is all
                    the sizing they need. The name lives in alt. */}
                <img
                  src={logo.src}
                  alt={name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {canScrollPrev && (
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          aria-label="Previous logos"
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
      )}

      {canScrollNext && (
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          aria-label="Next logos"
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
      )}
    </div>
  );
}
