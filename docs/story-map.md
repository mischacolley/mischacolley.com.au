# Story map

Mirrored into all five repos. The canonical copy lives in
`mischacolley.com.au/docs/story-map.md`.

**Do not `cp` it outward.** Run `node scripts/sync-story-map.mjs` from the
personal site, which reports drift, and `--write` to apply. It refuses to
overwrite any copy that has been edited in its own repo.

That guard exists because a blind copy already destroyed another session's
work once: the Open Campus session recorded how it fixed the build, a sync
from here overwrote the file, and the only surviving record was the commit it
had already made. With several sessions running at once, assume a sibling
copy is ahead of this one until the script says otherwise. When it reports
drift, read their version, merge what is theirs into this file, then sync.

Last reviewed against working trees: **2026-10-16**.

Companion files in this same `docs/` folder:

- `copy-brief.md` — the decisions, page statuses and open questions.
- `copy-drafts.md` — the full draft copy for every page.

This file is the third thing: **what is actually in the code today, why we are
changing it, and what the change adds to the overall story.** The other two say
what the copy should be. This one says what it is, and why it moved.

---

## The one rule

There is one story. Each surface is a different-length cut of it, and
`/history` on the personal site is the full text everything else quotes from.

| Surface | The reader's question | Length | What it shows |
| --- | --- | --- | --- |
| `mischacolley.com.au/history` | Where has this person come from? | 1,500–2,500 w | Everything, in order. The source text. |
| `mischacolley.com.au/now` | What is he up to this month? | ~500 w | Dated, unfinished, honest. |
| `mischacolley.com.au/work` | Should I hire or collaborate with him? | ~400 w | Three roles, who he has worked with. |
| Fractional by Nature `/#about` | Can this person solve my problem? | ~490 w | Scan strip, the story that proves it, then what it means for them. |
| HelloMaker `/about` | Can I trust this person with my child? | ~250 w | Unschool dad, plus credentials. |
| Open Campus Project | What is this body of work? | ~250 w | The umbrella, and what sits under it. |
| Kindred `/stories` | Does this person understand my situation? | ~900 w | One family's separation, in full. |
| LinkedIn | Why does he do this work? | ~260 w | The problem and the response. No private detail. |

Anything longer than its cut belongs in `/history` and gets linked to, not
duplicated. If you find yourself writing biography on a site that is not the
personal site, that is the signal to stop and link instead.

---

## Repo state

Established by reading the working trees, not the docs. Correct as of the date
at the top; re-check `git status` before trusting it.

| Repo | Branch | Stack | Notes |
| --- | --- | --- | --- |
| `mischacolley.com.au` | `site-refresh` | Next 14.2, static export (`output: 'export'`), Tailwind 3 | The hub. README claims Next 15; it is 14.2. |
| `fractionalbynature` | `feat/launch-prep` | Vite + React 18 + shadcn, SPA, Vercel | Password-gated via `proxy.ts`. Gate comes off last, at launch. |
| `hellomaker` | `main` | Next 16.1, React 19, Tailwind 3 | `relaunch/merge-design` was merged and is identical; work on `main`. |
| `opencampus` | `main` | Next 15.5, React 19, contentlayer2, Tailwind 4 | Only one Open Campus repo exists. The `opencampus-new` question is closed. Build was unblocked and the stack brought up to upstream on 2026-10-16; see below. |
| `kindred-website` | `main` | Next, pnpm | Publishing blocked on Sandra and a solicitor, not on code. |

### Decisions settled by reading the code

These were open questions in `copy-brief.md`. The code answered them.

- **Fractional by Nature's domain is `fractionalbynature.com.au`.** Confirmed by
  Mischa. `fractionalbynature/src/lib/site.ts` still says `.com` and is wrong;
  so are the hardcoded copies in its `index.html`.
- **HelloMaker and Kindred are live and linkable.** Their cards in
  `src/lib/projects.ts` have hrefs now.
- **Only one Open Campus repo exists locally.** Use `opencampus`.
- **Open Campus Project is the umbrella.** Confirmed by Mischa. HelloMaker is
  the first thing under it; Learning Prompts and Spaces In-Between may
  follow. Kindred stands alone. All three surfaces now agree: the personal
  site's drawer nests it, HelloMaker's footer says so, and Open Campus lists
  it. This was the last "proposed, not confirmed" row in the brief's
  decision log.
- **Sub-brand logos are badges, not wordmarks.** Open Campus already is, and
  the others are heading that way. `src/lib/projects.ts` carries a
  `logoKind`; a badge gets its name rendered as text beside the mark,
  because the artwork does not say it.
- **The SDG block names focus areas, not numbered goals.** Confirmed by
  Mischa. The brief wanted three named goals each tied to a client as proof;
  a list of goal names with nothing behind it is what got them moved off
  LinkedIn in the first place, and only three case studies are published to
  link to anyway.
- **Naming clients is fine.** Confirmed by Mischa.
- **Son born 2014, AIME from 2016, mentoring from 2010.** Confirmed. The
  sites previously had the birth and the job in the same year.
- **The call to action is "Let's yarn", not "Let's Chat".** Confirmed by
  Mischa, and already how `ContactFab` and the chat widget read on the
  personal site. Use it on every surface.
- **The stale GitHub issue and PR on the personal site are not relevant.** A
  2020 todo list and a 2023 Dependabot bump for Gatsby, which the site no
  longer uses. Nothing to work around.

### Known hazards

- `opencampus/data/siteMetadata.js` — `siteUrl` is still
  `tailwind-nextjs-starter-blog.vercel.app` and `siteRepo` still points at the
  template author. Canonicals, sitemap, robots and every Open Graph tag derive
  from it. **Fix this before any other Open Campus work.**
- `opencampus` has no ESLint config file, so `yarn lint` drops into the
  interactive "how would you like to configure ESLint?" setup and never lints.
  Pre-existing, and it means lint has never run here.
- `opencampus` social icons size themselves with `h-${size} w-${size}` in
  `components/social-icons/index.tsx`. Tailwind has never been able to see
  classes built by string interpolation, so those utilities are only generated
  if the same ones happen to be used literally elsewhere. Pre-existing, and it
  predates the Tailwind 4 move.
- Kids' ages: fixed on `kindred-website`, which now has its own `lib/kids.ts`
  ported from the personal site. **`KIDS_BIRTHDATES` still needs setting in
  that Vercel project** — until it is, the copy reads "two kids" with no ages,
  which is true but less warm than intended.

---

## mischacolley.com.au

The hub. Answers "who is this person?" and should sound like Mischa talking.

### `/` — home

- **Now:** rebuilt around `RotatingTitle`, a typewriter cycling three phrases,
  with the kids' ages resolved server-side from `KIDS_BIRTHDATES`. A projects
  drawer (`SiteDrawer`) opens by default on desktop. Reads well; Mischa is
  happy with it.
- **Changing:** only a light touch. A line giving the page the character of
  rough thinking-out-loud rather than a finished statement, per the "this is
  where I think out loud" draft in `copy-drafts.md`.
- **Adds:** permission for the rest of the site to be unfinished. The Now page
  and History both depend on the reader arriving expecting work in progress.
- **Do not:** rewrite the rotating title. It is settled.
- **The drawer's project list is a hierarchy now.** Children live in a
  `children` array on the parent in `src/lib/projects.ts` and render indented
  behind a hairline rule, inside the parent's own list item. Adding a sibling
  under Open Campus is one entry in one place.

### `/now`

- **Now:** the copy doc's full draft, landed. Home, Me, Work, What I'm
  building, The bigger picture, Looking for, Away from the screen, then the
  big idea as a closing visual. The four typos and the
  `[insert related profession here]` placeholder are gone. Ages come from
  `KIDS_BIRTHDATES`, never typed. Stamped with a real last-updated date by a
  pre-commit hook.
- **The closing treatment** sets the three tensions as a `<dl>` of paired
  lines, so the shape of the idea reads before the words do, then the
  Fitzgerald line as a pull quote. "Maybe put it best" is dropped on purpose:
  the attribution does that job once the quote is styled.
- **Links are first-mention only**, or the page turns blue. Kindred is linked
  in Home and deliberately plain in What I'm building; the four day week line
  carries the link to `/work`.
- **Adds:** the honest, dated register the whole site leans on. The "Me"
  paragraph about being single is the piece that makes the rest credible.
- **Waiting on:** the two photos. The 4x4-as-office shot belongs between Me
  and Work, where it bridges the personal and the professional and says "four
  day week" without words; the camping shot closes Away from the screen.
  Neither file exists, so both are marked in place as comments with the
  `<Image>` to drop in. Also waiting on Today's URL — the studio is named in
  Work and is the only link in the plan with no address anywhere in the five
  repos, so it is plain text rather than a guess.
- **Decided, 18 October:** the triple threat stays, in the LinkedIn wording.
  `/now` also carries FbN's quote-band line word for word now
  ("...people doing their best work on projects that really matter, however
  long that lasts"), rather than the looser paraphrase it had.

### `/history` — new, behind the draft gate

- **Now:** scaffolded. Eight chapters in `src/content/history/chapters.ts`,
  rendered by `src/app/history/page.draft.tsx`. Five chapters carry Mischa's
  own prose, moved across from the FbN About; three are empty and carry only
  their interview questions. Three photos are placed, all three still needing
  real captions. **Not published** — see "The draft gate" below.
- **Changing:** fill it. Chapter by chapter, from Mischa's answers.
- **Adds:** the source text. Until it exists, the FbN About has nowhere to send
  a reader, Open Campus has nothing to point "more about me" at, and the long
  version keeps sprawling into pages that were never meant to carry it.
- **Waiting on:** the interview answers in each chapter's `questions` array,
  real photo captions, and how much of the relationship chapter Mischa wants.
  The page prints its own progress at the top, so run it to see where it is.
- **To publish:** rename `page.draft.tsx` to `page.tsx` and drop
  `draft: true` from its `NAV` entry in `src/components/SiteDrawer.tsx`. Both,
  or the link and the route disagree.

### `/work`

- **Now:** rewritten for a contributor or hire audience, in the copy plan's
  scan order rather than the order the copy was thought through. Hero, What I
  do as two cards, proof, How I work, Why, the arc, How we can work together,
  then Let's yarn. The three service cards, the "Can't justify a full-time
  CTO?" pitch and the Swiss Army knife line are gone — all three were
  client-facing and all three are on Fractional by Nature.
- **The move happened first, so nothing was lost.** FbN's `Services.tsx`
  already carried Fractional CTO, Digital Strategy and Development with the
  same arrow lists before this page was touched. Verified by reading it, not
  assumed.
- **Why the order is inverted.** The copy was written who-I-am, then why, then
  what. Someone scanning needs what, how I can help, proof, then why, so the
  arc that used to open the page now sits near the bottom as a scan strip of
  two runs: how the work was arranged, then what the job was called. Same
  progression as the FbN scan strip, so the two pages tell one story.
- **The client strip is a port, not a share.** `ClientLogoCarousel` is FbN's
  component with two deliberate differences: static imports rather than
  `/client-logos/*` public paths, so the files are fingerprinted here, and the
  edge fades painted in white rather than FbN's shadcn `bg-card` token, which
  this site does not have. `epic-pathways.png` was missing from this repo and
  has been copied across; the list is fourteen entries and expected to drift
  as FbN takes on new clients. Duplicated rather than shared because the two
  repos have no common package.
- **Adds:** separates "hire me as a person" from "engage my business", which is
  the distinction the whole two-site split exists to make.
- **Open, deliberately left as the plan has it:** `/work` says what I recommend
  "follows what fits the context, not what I happen to know" and FbN says
  "follows what fits your organisation, not what I happen to know". The plan
  calls that fine as an echo and offers a reword; no decision was taken, so the
  echo stands.
- **Still waiting on:** the share image. The plan wants the outdoor photo, but
  which photo becomes the share image is open, so `/work` keeps its existing
  card rather than pointing at a file that does not exist. Also Today's URL,
  as on `/now`.
- **One thing the plan got wrong about this page.** It says `/work` uses the
  site-wide default title and description, so the new ones would be an
  addition. It does not — the page has carried its own `metadata` block, its
  own description and its own share image all along, so this was an edit. The
  old title also contained an em dash, which the brief bans.

### `/posts` — behind the draft gate

- **Now:** six posts, all from the old site, none rewritten. Gated the same
  way as History: `page.draft.tsx` for both the index and `[slug]`, and the
  nav link filtered out. **No longer published.**
- **Changing:** rewrite, with new posts that connect to the History chapters.
- **Adds:** History is the story in order; posts are the thinking that comes
  out of it. Reworking them together is why both are gated at once.
- **Note:** this removed six live URLs. If any of them turn out to matter,
  they will need redirects when the section comes back.
- **Still undecided:** the brief calls the section *Writing*; the nav says
  *Posts*.

### Site-wide

- **Now:** `layout.tsx` carries the brief's home title and description, and
  `Person` JSON-LD with `sameAs`. "FED", "Tech Edu" and "purpose-driven
  business" are gone. No Elsewhere footer yet.
- **One title, one description.** They were three literals each, repeated
  across `metadata`, `openGraph` and `twitter`, and had gone stale together.
  Now single consts. Child pages set their own absolute titles rather than
  filling a `%s | Mischa Colley` template, because the plan's
  "Work | Mischa Colley, senior technologist" does not fit one.
- **`src/lib/identity.ts` is the one place the cross-site URLs live.** They
  were duplicated across `/now`, `/work`, `ContactFab` and `projects.ts` —
  four chances to update three and miss one. Plain strings, no environment
  read, so a client component can import it. `SITES.today` is deliberately
  `null`: the studio is named in the copy on both pages and its address
  appears nowhere in any of the five repos, so it stays plain text until the
  real URL turns up. Fill that one field and both pages pick it up.
- **The JSON-LD is honest about what it claims.** `sameAs` is profiles only
  (LinkedIn, GitHub, Instagram, all already in `ContactFab`). The project
  sites are organisations Mischa runs, not other identities of his, so they
  hang off `worksFor` and `affiliation` where they are actually true.
  Serialised with `JSON.stringify` from the object in `identity.ts`, so the
  markup cannot drift from it.
- **The chat widget greeting was carrying a near-miss of a shared line** —
  "people living their best lives doing things that really matter to them",
  against the quote band's "people doing their best work on projects that
  really matter, however long that lasts". Aligned, along with "barefeet",
  which `/now` no longer says either.
- **Adds:** the five sites read as one person to a search engine, not five
  strangers.
- **Still to do:** the Elsewhere footer.

### Done

| Date | Change | Why |
| --- | --- | --- |
| 2026-10-18 | Site-wide title and description, `Person` JSON-LD, and `src/lib/identity.ts` | The metadata was three copies of a stale literal in one file. The cross-site URLs were four copies across four files, which is the failure the five-sites-one-person goal cannot survive. Both are now single sources. The JSON-LD is the machine-readable half of the same idea. |
| 2026-10-18 | Landed the `/work` copy, ported FbN's client logo strip | The page was selling services to clients on a site whose reader is deciding whether to hire or collaborate with a person. The services already existed on FbN, so this was the safe half of the move. Inverting the order matters as much as the words: the arc was the first thing on the page and is the last thing a scanning reader needs. |
| 2026-10-18 | Landed the `/now` copy from the copy plan | The page had been carrying four typos and a `[insert related profession here]` placeholder in production while the draft sat in a doc. Landing it also settled two shared-line questions: the triple threat stays in the LinkedIn wording, and the relationships line is now FbN's exact words rather than a paraphrase that was close enough to look like a mistake. |
| 2026-10-16 | Yarn widget origin moved to `NEXT_PUBLIC_YARN_ORIGIN`, defaulting to the deployed Worker | A hand-edited `http://127.0.0.1:8787` literal had been committed. On an HTTPS page the browser blocks it as mixed content, so the widget would silently never have appeared. An env var means a local override cannot be committed. |
| 2026-10-16 | Stopped tracking `.DS_Store` | In `.gitignore` twice, but already in the index, so the ignore never applied. |
| 2026-10-16 | Dropped `netlify.toml`, retargeted docs at Vercel | The deploy moved. Two comments still told you to set `KIDS_BIRTHDATES` in Netlify. |
| 2026-10-16 | Gated `/posts` behind the same draft gate, and the nav links with it | The writing is all old and is being reworked alongside History. One flag now decides both which pages exist and which nav links render, so the two cannot disagree — a link to a route a static export never wrote is a 404 waiting to be crawled. |
| 2026-10-16 | `public/posts` is generated, not committed | It was a byte-for-byte duplicate of `src/posts`, images **and** `index.md`, and `public/` ships verbatim. Every post's full text was being served as raw markdown at `/posts/<slug>/index.md` whichever way the routes were set — a pre-existing bug that would have made the posts gate look like it worked when it had not. Now staged by `scripts/stage-draft-assets.mjs`, images only, drafts builds only. |
| 2026-10-16 | Scaffolded `/history` behind the draft gate; removed the live stub | The stub promised a page that did not exist. Verified both ways: a normal build emits no `/history` and no chapter prose anywhere in `out/`; `build:drafts` emits it with `noindex`. |

### The draft gate

The site is `output: 'export'`, so there is no runtime to hide a page behind.
The route has to not exist in the production build.

`next.config.js` registers `draft.tsx` as a page extension only when
`SHOW_DRAFTS=1`. A page named `page.draft.tsx` therefore resolves as a route in
`npm run dev:drafts` and `npm run build:drafts`, and not at all in a plain
build — no stub, no 404 entry, nothing in `out/`.

Three things have to move together, or the gate only looks like it works:

1. **The routes.** `page.draft.tsx`. Currently `/history`, `/posts` and
   `/posts/[slug]`.
2. **The nav.** `NAV` entries in `src/components/SiteDrawer.tsx` carry
   `draft: true` and are filtered out. The drawer is a client component and
   cannot read the environment, so `next.config.js` re-exports the flag
   through its `env` key; `src/lib/drafts.ts` is the one place the app reads
   it.
3. **`public/`.** Copied into the export verbatim and ungateable by any page
   extension, so anything draft-only has to be staged into it at build time
   rather than committed. See `scripts/stage-draft-assets.mjs`.

Verify a change to any of them by building both ways and grepping `out/` for
text that should not be there. A passing typecheck proves nothing here.

Chapters live in `src/content/history/` as data, each with a `status`. A
chapter marked `draft` renders its real heading and photos, then a visible
block listing what is still needed. The point is to see the shape and the
pacing before the prose exists.

---

## Fractional by Nature

The business site. The reader is a founder or leader asking "can this person
solve my problem, and what is different about them?"

### `/#about` — restructured

- **Now:** scan strip, then "Why I only work with who I do", then a shortened
  "How I got here", then "What that means for your organisation". The
  expander is gone. Placeholder captions are gone — a photo with no known
  caption renders none, per the brief's "real captions, or none".
- **Where the words went.** The page is longer than the 277 it was, because
  the biography was never the problem — the missing capability section was.
  Biography down 182 from 277; 194 words of new capability content; 116
  scannable rather than read.

| Section | Words |
| --- | --- |
| Headline and scan strip | 152 |
| Why I only work with who I do | 85 |
| How I got here | 182 |
| What that means for your organisation | 194 |

- **Adds:** a prospective client gets the answer from the strip in about ten
  seconds, and the story now ends by converting itself into something they
  can buy rather than changing the subject to a services list.
- **Reading order**, settled by Mischa. The scan strip is the whole
  always-visible page, 116 words. "Continue reading" starts immediately
  below it, and everything past it is opt-in depth in increasing order of
  how much the reader has to care: "Why I only work with who I do", "What
  that means for your organisation", then "How I got here" last. The closing
  line and the call to action sit outside the toggle so they show either
  way. `CollapsibleStory` holds the mechanics and takes a `contentClassName`
  for the section rhythm.
- **Open:** whether the biography should come down further still. 182 words
  is already the tightest version that keeps all three claims proved.

The test for keeping a line is whether it proves one of these three claims:

1. He came to technology through creative expression and social justice, not a
   career ladder.
2. He only works with organisations whose purpose he would be proud to explain
   to his kids.
3. This is a lifestyle business by design, so he favours sustainability and
   intentionality over constant connectivity.

**Stays** — Steiner school and protest music (claim 1); AIME, Web Wizard to CTO
of eleven across five time zones (proves he has led); the COVID redundancy and
what tangling purpose with identity taught him (judgement); "a lifestyle
business, on purpose" (claim 3); all three photos (the evidence).

**Moves to `/history`** — the Wild River birth and growing up in Byron
(chapter 1); the "passion for the Creative Arts" quote (chapter 2); Germany,
the Brisbane double degree, dropping out (chapter 3); open courseware
(chapter 3); mentoring with AIME in 2010 (chapter 4); freelancing and agencies
(chapter 4); remote from the 4WD and unschooling (chapter 6).

**Gets built** — the third beat barely exists. The About currently ends on
"whether you need a hands-on technology leader, a digital strategy ... I can
get you there", which is a services list, not a conclusion to a story. The
rewrite ends by converting each beat into a capability: leading eleven people
across five time zones means he can tell a founder whether their team structure
is the problem; watching entry-level work get automated means he has an opinion
about what to build in-house. That paragraph is what earns the story its place
on a business site at all.

**Structural note:** the "Continue reading" expander exists to manage a story
that is too long. If the cut works, delete it rather than keeping a collapsed
thing no longer long enough to need collapsing.

### Clients and case studies

- **Naming the clients is fine.** Confirmed by Mischa — the logo carousel
  and the case studies already do it. That question is closed.
- **But six of the nine case studies are lorem ipsum.** The launch audit
  found four; EPIC Pathways and Human Nature have been added since. It was
  not confined to the detail pages — `Portfolio.tsx` renders `impact` in the
  card hover overlay, so placeholder Latin was visible on the homepage.
- **Now:** each project in `src/data/projects.ts` carries a `status`. The
  grid reads `publishedProjects`, and `getProjectBySlug` resolves published
  entries only, so a draft slug behaves like one that does not exist. Three
  case studies are live: We Are Explorers, Rainbow Power Company, AIME
  Mentoring. Write the copy, flip the status, and the card returns.
- **Worth knowing:** the draft entries still import their images, so roughly
  **22.8 MB** of PNGs ship for case studies that are not shown — `fok.png`
  alone is 8.8 MB. That is the launch audit's P0 #8 image-weight item, now
  with a concrete number attached. Compressing or lazily importing those is
  separate work.
- **Also worth checking:** AIME sits in the client logo strip, but AIME was
  employment, not a client. Nobody has questioned it; flagging it as an
  accuracy question rather than a permission one.

### Services, home, contact

- **Now:** the three service cards live on the personal `/work` page, not here.
- **Changing:** move them across before the personal Work page is rewritten.
- **Adds:** nothing new — it is a move. But doing it in the wrong order loses
  the copy.

### Launch

`LAUNCH-TODO.md` in that repo is the authority and is detailed. The copy work
here does not replace it. The access gate (`proxy.ts`, the `proxy` key in
`vercel.json`, the `tsconfig.node.json` entry, the `@vercel/functions` dep, and
the two Vercel env vars) comes off **last**, once the copy work on
`feat/launch-prep` is finished.

---

## HelloMaker

The reader is a parent asking "can I trust this person with my child?" The
existing intro is the strongest copy in the set. Light touches only.

- **Now:** honest, specific, sounds like him. Already links back to the
  personal site via `authorSite` in `data/siteMetadata.js`. No mention of Open
  Campus anywhere.
- **Done:** the why sentence after the unschool dad line (left with a TODO —
  it has to sound like him, and it is the one sentence on the page that might
  not); "HelloMaker is early" opening the still-working-on list; the footer
  now says it is part of the Open Campus Project.
- **Adds:** places HelloMaker inside the larger body of work instead of
  leaving it as an orphan, and makes the "early" honesty a choice rather than
  something a reader has to infer.
- **Waiting on:** whether to publish the Working with Children Check number
  or offer it on request, and Mischa's pass on the why sentence.
- **Keep, do not touch:** the line about HelloMaker being an excuse to keep his
  own interest in technology alive; "I read everything that comes in myself";
  the credentials block.
- **Waiting on:** whether to publish the Working with Children Check number or
  offer it on request.

The canonical sentence, used wherever the product is described anywhere:

> HelloMaker helps young people, and their parents, build a confident,
> conscious relationship with technology, through a program, a mobile
> makerspace and resources for parents.

---

## Open Campus Project

The umbrella for the alternative learning work. The one place EdTech is
prominent.

- **Now:** warm copy that does not say what it is pushing against. The
  hierarchy disagrees with the personal site: the homepage lists Open Campus
  and HelloMaker as peers, this site treats HelloMaker as one of three
  offerings, and HelloMaker does not mention Open Campus at all.
- **Done:** `siteUrl` and `siteRepo` now point at Open Campus rather than the
  starter template; `language` and `locale` are en-AU; the scaffold's mastodon
  handle is gone; `siteLogo` no longer points at a file that never existed.
  The `for for those` typo went with the canonical HelloMaker sentence, which
  now reads identically here, on hellomaker.org and on the personal site. The
  podcast says launching soon, matching its own project page. A why paragraph
  was added: open courseware, and not knowing how the next generation learns a
  craft whose entry level is being automated away.
- **The stack now matches upstream `tailwind-nextjs-starter-blog` 2.4.0**:
  Next 15.5, React 19, Tailwind 4. Done in three staged commits so each one is
  revertable on its own. Next 15 needed the async-params codemod on the two
  dynamic blog routes. Tailwind 4 needed more: its config moved out of
  `tailwind.config.js` into `@theme` in `css/tailwind.css`, because the old
  config imported `tailwindcss/defaultTheme` and `tailwindcss/colors`, which
  v4 removed. `primary` is still sky and `gray` is still Tailwind's default.
  The two stylesheets stopped being `.scss` — neither contained any SCSS, and
  `sass` is gone with them. Checked by diffing the generated CSS against the
  Tailwind 3 build: no class used on any page lost its styling.
- **Not done:** "more about me" should point at the personal site's History
  page, but that is behind the draft gate, so linking it would 404. Noted in
  `app/Main.tsx`.
- **The build is fixed, so all of this can deploy.** `contentlayer@0.3.4`
  generated `import ... assert { type: 'json' }`, which Node 22 removed, and
  the site could not build on any Node version Vercel still offers. The fix
  was the maintained fork: `contentlayer2`/`next-contentlayer2` 0.5.8 and
  `pliny` 0.4.1, with the remark and rehype plugins moved up to the
  unified 11 generation that `contentlayer2` requires. Two knock-ons: the
  fork emits the modern `with { type: 'json' }`, which Next 13.4's compiler
  could not parse either, so Next went to 14.2.35; and `github-slugger` 2
  dropped the static `GithubSlugger.slug`, so both call sites use the named
  `slug` export. `scripts/rss.mjs` had its own `assert` import, unrelated
  to contentlayer, and would have broken the RSS build straight after.
  Verified on Node 24: build, type check, all 15 routes, RSS, sitemap and the
  kbar search index.
- **Adds:** one consistent shape across three sites, so a reader moving between
  them is not told three different things about how the work fits together.
- **The hierarchy**, pending confirmation: Open Campus Project is the umbrella
  (ideas, podcast, consulting); HelloMaker is the offering for families;
  Kindred sits outside it as its own project.
- **Waiting on:** whether the Learning In-between podcast has launched, and
  confirmation of the hierarchy.

---

## Kindred

The most personal copy in the set, and close to final. A separated parent
arrives, recognises the situation, and trusts the person behind it.

- **Now:** the story works nearly word for word. A privacy page and the stories
  section exist. No link back to the personal site.
- **Parked, may revisit:** the five unfinished comparison pages sit under
  `app/compare/_drafts/`, a Next private folder, so nothing under it becomes
  a route. Same intent as the draft gate on the personal site, but not the
  same capability: a private folder is invisible in dev too, so these cannot
  be previewed while being worked on. When these features get close to
  landing and need reading in situ, convert them to the `page.draft.tsx`
  mechanism instead. Left as is for now, deliberately.
- **Done:** the footer links back to the personal site, and the ages come
  from `lib/kids.ts` rather than being written into two files.
- **Already done by Mischa:** "Kindred is in active development" and the
  waitlist cover the where-it-is question.
- **Still to do:** one concrete AI example instead of "uses AI to help you
  communicate more clearly" — this needs Mischa to say what it actually does
  today, in two places (`components/story-section.tsx` and
  `app/stories/my-kindred-story/page.tsx`).
- **Adds:** the clearest evidence for the whole spine — the same story about
  relationships and separation, at the scale of one family.
- **Blocked on, before publishing:** Sandra has agreed to trial the app, which
  is not the same as agreeing to be written about. Show her the page,
  especially "we're not best mates (we're not)". Run the court process and the
  $80,000 figure past a solicitor in case the consent orders say anything.
- **Done, 2026-10-16:** the brand now has a portable lockup, mark plus the name,
  in `public/assets/`. It existed nowhere before, so anything referencing
  Kindred off the site showed only the abstract monogram, which says nothing to
  a reader who does not already know it. The projects list on the personal site
  was the case that forced it. Generated from `app/icon.svg` by
  `scripts/build-logo-lockup.py`, not drawn, so it cannot drift from the
  favicon. See the README's Brand assets section.
- **Done, 2026-10-16:** the header wordmark moved from DM Sans semibold in
  near-black to DM Serif Display in the mark's green, which is what the app's
  sign-in screen and the auth emails already use. The header was the only place
  in the brand setting the name in sans, and it was the odd one out on its own
  site, where every heading is already `font-serif`.

---

## Keeping this file honest

Update it in the same commit as the change it describes, not afterwards. Each
page entry answers four things and no more: what is there now, why it is
changing, what the change adds to the overall story, and what it is waiting on.

When a change ships, move it to that site's **Done** table with the date and
the reason. The reason is the part worth having in six months.
