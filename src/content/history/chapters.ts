/**
 * The History page, as data.
 *
 * Content rather than JSX so the page can show you how far along it is: each
 * chapter carries a status, and an unwritten one renders its interview
 * questions in place rather than a gap. The point is to see the shape and the
 * pacing before the prose exists.
 *
 * Nothing in here is invented. Prose marked `drafted` is Mischa's own writing,
 * moved across from the Fractional by Nature About where the long version had
 * been living. Everything else is a question waiting on an answer.
 *
 * See docs/story-map.md for why the long story lives here and not there.
 */

import type { StaticImageData } from "next/image";

import march from "@/assets/history/a-moment-in-time.webp";
import aimeTeam from "@/assets/history/aime-team.webp";
import halfCut from "@/assets/history/half-cut.webp";

export type ChapterStatus =
  /** Nothing written. The questions are the content for now. */
  | "blank"
  /** Mischa's own words, moved across. Awaiting his pass. */
  | "drafted"
  /** Signed off. */
  | "ready";

export interface Photo {
  image: StaticImageData;
  /** What is in the frame, for anyone who cannot see it. */
  alt: string;
  /**
   * Null until the real caption is known. "Somewhere, some year" was the
   * placeholder on the FbN About and is exactly what we are not shipping, so
   * a missing caption renders as a visible gap rather than a plausible lie.
   */
  caption: string | null;
  /** What is still needed to write the caption. */
  needs?: string;
}

export interface Chapter {
  /** Stable id for the heading anchor. */
  slug: string;
  title: string;
  /** Shown beside the title. Null where the span is not yet pinned down. */
  period: string | null;
  status: ChapterStatus;
  /** One string per paragraph. */
  body: string[];
  photos: Photo[];
  /** Interview questions, shown while the chapter is unfinished. */
  questions: string[];
  /** Anything about this chapter that is not a question for Mischa. */
  note?: string;
}

export const CHAPTERS: Chapter[] = [
  {
    slug: "wild-river",
    title: "Born on the Wild River, raised in Byron Bay",
    period: null,
    status: "drafted",
    body: [
      "I was born at home on the banks of the Wild River in Far North Queensland, and I grew up in Byron Bay.",
    ],
    photos: [],
    questions: [
      "What is your earliest memory of place?",
      "Who shaped you, and how?",
      "Is there a photo from this part of your life you would want here?",
    ],
    note: "One sentence carried over from the FbN About. This chapter is the one with the least written and the most room.",
  },
  {
    slug: "music-and-the-early-internet",
    title: "Music, Steiner school and the early internet",
    period: null,
    status: "drafted",
    body: [
      "I came to technology through a love of music and the arts, at my Steiner high school.",
      "The early internet drew me in because I saw it as an enabling technology for creative expression and grassroots democracy. I could publish my teenage protest music under an open source licence, and read independent media that helped me connect what I had learned about history with what I was watching repeat itself in places like Iraq and Afghanistan.",
      "When I began my career in tech I used to say I have a passion for the Creative Arts and the pursuit of Social Justice that fuels my interest in the web.",
    ],
    photos: [
      {
        image: march,
        alt: "Marchers behind a hand-painted banner reading Northern Rivers, war is terrorism, with placards for Medicare not war and no more secret treaties",
        caption: null,
        needs: "Where this march was, and what year.",
      },
    ],
    questions: [
      "What did you make? Is any of the music still online?",
      "What did the internet make possible that nothing else did?",
      "Which independent media were you reading?",
    ],
  },
  {
    slug: "germany-brisbane-leaving-uni",
    title: "Germany, Brisbane, and leaving uni",
    period: null,
    status: "drafted",
    body: [
      "After a stint living and studying in Germany, I moved to Brisbane and studied three and a half years of a four year double degree in Fine Arts, Interactive and Visual Design, and IT, specialising in Online Environments. I dropped out, because I already had work in the industry.",
    ],
    photos: [],
    questions: [
      "What did living in Germany change?",
      "Why did you leave the degree, really? The FbN cut says you already had work; the longer draft also says you were disillusioned with technology and with formal education. Which is the truer version?",
      "What did open courseware show you? This is the origin of the Open Campus Project, so it is worth giving room.",
    ],
    note: "The open courseware thread belongs here and is currently missing. Open Campus Project needs this chapter to exist so it has somewhere to point.",
  },
  {
    slug: "first-jobs-and-aime-mentoring",
    title: "First jobs, and mentoring with AIME",
    period: "from 2010",
    status: "blank",
    body: [],
    photos: [],
    questions: [
      "What was mentoring with AIME like, and why did it stay with you?",
      "The brief says it kept you in your degree. How?",
      "Which agencies and in-house teams, and what did you learn by doing the work rather than studying it?",
    ],
    note: "The 2010 date comes from the working doc. Confirm it before this ships.",
  },
  {
    slug: "becoming-a-dad-and-aime",
    title: "Becoming a dad, and AIME",
    period: "2014 onward",
    status: "drafted",
    body: [
      "When my son was born in 2014, and after a couple of redundancies, I got a job with AIME as a Web Wizard and never looked back. I had been a mentor with them while at uni, so for me joining AIME was a real coming home.",
      "At AIME I went from solo Web Wizard to CTO. Over three years we grew into a fully remote team of eleven across five time zones, covering design, engineering, IT and data, as AIME expanded from Australia into Africa and the USA. My job changed from writing code to enabling teams to do their best work: strategy, hiring, mentoring, and working with agencies and contractors.",
      "Then COVID forced a redundancy, and I had to let go of the team I had built, overnight. It taught me how easy it is to tangle purpose and identity up in our work, especially when you care as deeply as I did, and when the Indigenous Australian story is so rooted in my country and who I am.",
    ],
    photos: [
      {
        image: aimeTeam,
        alt: "The AIME team",
        caption: null,
        needs: "Who is in the photo, where it was taken and when. The alt text is a placeholder too.",
      },
    ],
    questions: [
      "What did the job teach you about leading people?",
      'The brief flags "I was devastated" — keep it only if that is true as written.',
      "Confirm the wording of the Indigenous Australian line. It matters and it should be yours exactly.",
    ],
  },
  {
    slug: "remote-on-the-road-unschooling",
    title: "Remote, on the road, and unschooling",
    period: null,
    status: "drafted",
    body: [
      "I have spent the past decade working remotely from home on Bundjalung and Yugambeh Country, and often from the road. Sometimes that means delivering a project from the 4WD, with Starlink on only while we are working.",
    ],
    photos: [
      {
        image: halfCut,
        alt: "Two photos side by side in a paddock at sunset, labelled Before and After: a long beard, then half of it gone",
        caption: null,
        needs: "The actual story behind it. The FbN caption is a first draft of a joke.",
      },
    ],
    questions: [
      "When and why did unschooling start?",
      "What does a normal week actually look like?",
      "A photo of home, or of the road, would do a lot of work here.",
    ],
  },
  {
    slug: "the-hard-chapter",
    title: "The hard chapter",
    period: null,
    status: "blank",
    body: [],
    photos: [],
    questions: [
      "How much of this do you want on a public page? Your call entirely.",
      "This overlaps with Kindred and with Now. One option is to keep it short here and point at the Kindred story for the detail.",
      "Show Sandra anything that is about her, before it is published.",
    ],
    note: "Deliberately left empty. Nothing here should be drafted for you.",
  },
  {
    slug: "where-i-am-now",
    title: "Where I am now",
    period: null,
    status: "blank",
    body: [],
    photos: [],
    questions: [
      "A short close, a paragraph at most, that hands the reader over to the Now page.",
      "What is the one thing you want someone to leave this page thinking?",
    ],
  },
];
