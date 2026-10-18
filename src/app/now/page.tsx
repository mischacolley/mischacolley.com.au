import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { EMAIL, SITES } from "@/lib/identity";
import { kidsAgeList } from "@/lib/kids";
import { lastUpdated } from "@/lib/lastUpdated";

const TITLE = "Now | Mischa Colley";
const DESCRIPTION =
  "What I'm up to now: unschooling dad of two on Bundjalung and Yugambeh Country, building a portfolio of small bets on a four day week.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://mischacolley.com.au/now",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

function Outbound({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-brand underline"
    >
      {children}
    </a>
  );
}

export default function Now() {
  const updated = lastUpdated("now");
  const ages = kidsAgeList();

  return (
    <>
      <Header />

      <article className="max-w-5xl mx-auto px-6 sm:px-16">
        <h1 className="font-sans font-bold text-3xl mb-2">Now</h1>

        {/* Stamped at commit time; absent rather than wrong if unstamped. */}
        {updated && (
          <p className="text-sm text-gray-500 mb-5">
            Last updated <time dateTime={updated.iso}>{updated.label}</time>
          </p>
        )}

        <p className="text-lg mb-5">
          If we hadn&rsquo;t caught up in a while, or I was just getting to know
          you, this is some of what I&rsquo;d tell you.
        </p>

        <p className="text-lg mb-5">
          {/* Ages are derived from KIDS_BIRTHDATES, never typed, so they cannot
              go stale between edits. Without the env var this reads "two kids",
              which is true but warmer with the numbers. */}
          <strong>Home.</strong> I&rsquo;m dad to two kids
          {ages && `, ${ages}`}. We live just north of Byron Bay in the Northern
          Rivers, on Bundjalung and Yugambeh Country. My kids are unschooled, so
          our days are pretty unconventional, finding what I like to think of as
          the{" "}
          {/* Links to the Learning In-between podcast once it is live. It is
              still "launching soon" on Open Campus, so there is nothing to
              point at yet. */}
          <em>
            spaces <strong>in-</strong>between
          </em>
          . I co-parent with their mum so they are with me a little less than
          half the time. Living the reality of my children having two homes is
          part of why I started building{" "}
          <Outbound href={SITES.kindred}>Kindred</Outbound>.
        </p>

        <p className="text-lg mb-5">
          <strong>Me.</strong> I&rsquo;m single. After 17 years with my
          kids&rsquo; mum, being single in my late 30s is hard. I never expected
          to be parenting on my own. I&rsquo;m very lucky to have supportive
          friends and family and my kids are being raised in a
          multi-generational home. Not quite the village I imagined but
          we&rsquo;re chipping away at it.
        </p>

        <p className="text-lg mb-5">
          The last couple of years have held some of my highest highs and lowest
          lows and have taught me a lot about myself, how I show up for the
          people I care about and what&rsquo;s important to me. I want an
          intimate partner I can share my life with but I&rsquo;m very
          intentionally not on any dating apps, because that&rsquo;s not the way
          I choose to make connections.
        </p>

        <p className="text-lg mb-5">
          {/* The middle clause is the shared line, word for word off the FbN
              quote band. It appears on /now, FbN and LinkedIn and has to stay
              identical in all three. */}
          I share this because it&rsquo;s part of why I want to build fulfilling
          relationships with people doing their best work on projects that
          really matter, however long that lasts. Life is short so I want
          authenticity with the people I choose to work with, and real
          connection with my kids, family, friends and place.
        </p>

        {/*
          PHOTO 1 — the front seat of the 4x4 as an office: laptop, dash, a view
          out the windscreen. It sits here on purpose, bridging the personal
          sections above and the work sections below, and says "four day week"
          without words.

          The file does not exist yet. Drop it in src/assets/images/ and
          replace this comment with:

            <Image
              src={officeFourByFour}
              alt="Laptop on the dash of my 4x4, looking out over ..."
              className="my-10 rounded"
              placeholder="blur"
            />
        */}

        <p className="text-lg mb-5">
          <strong>Work.</strong> I work a{" "}
          <Link className="text-brand underline" href="/work">
            4 day week
          </Link>
          . Through my own clients with{" "}
          <Outbound href={SITES.fractionalByNature}>
            Fractional by Nature
          </Outbound>{" "}
          and in strategic partnerships with studios like{" "}
          <Outbound href={SITES.inGoodCompany}>In Good Company</Outbound> and
          Today.
        </p>

        <p className="text-lg mb-5">
          I&rsquo;m well known for the front seat of my 4x4 being where I take
          meetings and I get some of my focused work done when I&rsquo;m on the
          road, optimising the time it takes to get out in nature and do things
          with my people.
        </p>

        <p className="text-lg mb-5">
          <strong>What I&rsquo;m building.</strong> I&rsquo;m building a
          portfolio of smallish bets, having made a commitment to advocate for
          and make incremental progress on my own business interests instead of
          getting caught up only helping build other people&rsquo;s ideas.
        </p>

        <p className="text-lg mb-5">
          Fractional by Nature is my consultancy, providing technology strategy
          and hands-on delivery for purpose-driven organisations.
        </p>

        <p className="text-lg mb-5">
          {/* Deliberately unlinked: Kindred is already linked on first mention
              up in Home, and the page turns blue if every mention is a link. */}
          I&rsquo;ve already mentioned Kindred, the co-parenting app for the
          whole journey. It started as an experiment and I&rsquo;m not sure
          where it&rsquo;s going to go, but I imagine it won&rsquo;t be the last
          thing I work on to try to make co-parenting easier.
        </p>

        <p className="text-lg mb-5">
          My other projects all sit under the{" "}
          <Outbound href={SITES.openCampus}>Open Campus Project</Outbound>{" "}
          umbrella where I&rsquo;ve been exploring alternative learning pathways
          and edu tech.
        </p>

        <p className="text-lg mb-5">
          {/* The canonical HelloMaker sentence, shortened. "technology", not
              "digital technology" — the shared wording has to match the full
              sentence used on HelloMaker and Open Campus. */}
          The element of that I&rsquo;m putting most energy into at the moment
          is <Outbound href={SITES.helloMaker}>HelloMaker</Outbound>. Looking to
          help kids and their parents build a confident, conscious relationship
          with technology.
        </p>

        <p className="text-lg mb-5">
          <strong>The bigger picture.</strong> I see three things as one triple
          threat. We&rsquo;ve grown apart, from each other and from nature, and
          it shows in how we feel. We&rsquo;re asking more of the planet than it
          can give. And AI is being built to serve growth first, even though I
          believe technology can do real good. They&rsquo;re why I unschool my
          kids, and where my next decade of work is going. It&rsquo;s also why
          I&rsquo;m trying to build a working life that fits around the life I
          want, not the other way around: enough income, but also enough time,
          and work my kids would be proud of.
        </p>

        <p className="text-lg mb-5">
          <strong>Looking for.</strong> I&rsquo;ve been remote for more than 10
          years and sometimes that can be really lonely. I&rsquo;d love more
          collaboration in my life, and more developers, designers and
          technologists in the for-purpose space getting together intentionally.
          In Good Company is part of that. I&rsquo;m always up for a{" "}
          {/* The invitation needs somewhere to go. ContactFab opens the Yarn
              widget and falls back to this same mailto, so the anchor is the
              honest version of the same destination. */}
          <a
            href={`mailto:${EMAIL}`}
            className="text-brand underline"
          >
            yarn
          </a>{" "}
          with values-aligned people over good beer and good food, and maybe a
          cool project if that&rsquo;s where the conversation goes.
        </p>

        <p className="text-lg mb-5">
          <strong>Away from the screen.</strong> When I&rsquo;m not working
          you&rsquo;ll find me barefoot, off-grid, and as far from screens and
          signals as my 4x4 will get me and my kids. My kids and I love camping
          and it still always amazes me how much more settled they are in
          nature, even in their own swags, when at home they don&rsquo;t want to
          sleep alone.
        </p>

        {/*
          PHOTO 2 — camping: swags, a fire. Kids from behind or at a distance,
          no faces. Closes the "away from the screen" section and sets up the
          quiet closing beat below.

          The file does not exist yet. Drop it in src/assets/images/ and
          replace this comment with an <Image> as described at PHOTO 1.
        */}

        {/* The closing visual moment. The three tensions are set as paired
            lines so the shape of the idea reads before the words do. */}
        <section className="my-12">
          <h2 className="font-sans font-bold text-2xl mb-5">
            The big idea I&rsquo;m wrestling with
          </h2>

          <p className="text-lg mb-8">
            The conflict of when two different things can be true at the same
            time.
          </p>

          <dl className="text-lg mb-8 space-y-4">
            <div>
              <dt>I care about the environment</dt>
              <dd className="pl-6 text-gray-600">
                and drive a diesel 4x4.
              </dd>
            </div>
            <div>
              <dt>I work towards sustainability</dt>
              <dd className="pl-6 text-gray-600">
                and build with AI every day.
              </dd>
            </div>
            <div>
              <dt>You can love someone</dt>
              <dd className="pl-6 text-gray-600">and be incompatible.</dd>
            </div>
          </dl>

          <p className="text-lg mb-8">
            I&rsquo;m learning to hold those tensions honestly, rather than
            pretend they have to resolve.
          </p>

          {/* "maybe put it best" is gone on purpose: the attribution does that
              job once the quote is styled as a pull quote. */}
          <blockquote className="border-l-4 border-brand pl-6">
            <p className="font-sans text-2xl leading-snug mb-2">
              The test of a first-rate intelligence is the ability to hold two
              opposed ideas in mind at the same time and still retain the
              ability to function.
            </p>
            <footer className="text-base text-gray-500">
              F. Scott Fitzgerald
            </footer>
          </blockquote>
        </section>

        <a
          className="bg-brand hover:bg-blue-700 text-white font-bold py-4 px-4 rounded mt-2 mb-5 inline-block"
          href={`mailto:${EMAIL}`}
        >
          Let&rsquo;s yarn
        </a>
      </article>
    </>
  );
}
