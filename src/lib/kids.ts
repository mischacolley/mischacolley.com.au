/**
 * Server-only. Derives my kids' ages from birthdates supplied via the
 * KIDS_BIRTHDATES environment variable so the dates themselves never land in
 * the repo or the client bundle — only the resulting ages are rendered.
 *
 * Format: comma-separated, youngest first, either "YYYY-MM-DD" or "YYYY-MM"
 * (day omitted is treated as the 1st, if you'd rather not store the exact day).
 * Month and day may be written with or without a leading zero.
 *   KIDS_BIRTHDATES="2016-07-14,2014-3-2"
 *
 * Set it in .env.local at the PROJECT ROOT for dev (Next.js only reads env
 * files from the root, not from src/) and in the Vercel project's env vars
 * for deploys. Do NOT prefix it with NEXT_PUBLIC_ — that would ship it to the
 * browser.
 */

const TIME_ZONE = "Australia/Sydney";

/** Today's date in my timezone, so a birthday doesn't flip a day early on a UTC build box. */
function todayLocalParts(): { year: number; month: number; day: number } {
  const [year, month, day] = new Intl.DateTimeFormat("en-CA", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(new Date())
    .split("-")
    .map(Number);

  return { year, month, day };
}

function ageFromBirthdate(birthdate: string): number | null {
  const match = /^(\d{4})-(\d{1,2})(?:-(\d{1,2}))?$/.exec(birthdate.trim());
  if (!match) return null;

  const [, birthYear, birthMonth, birthDay = "1"] = match;
  const today = todayLocalParts();

  let age = today.year - Number(birthYear);
  const hadBirthdayThisYear =
    today.month > Number(birthMonth) ||
    (today.month === Number(birthMonth) && today.day >= Number(birthDay));
  if (!hadBirthdayThisYear) age -= 1;

  return age >= 0 ? age : null;
}

export function kidsAges(): number[] {
  return (process.env.KIDS_BIRTHDATES ?? "")
    .split(",")
    .filter(Boolean)
    .map(ageFromBirthdate)
    .filter((age): age is number => age !== null);
}

/** "an" before 8, 11 and 18 (and 80s/1100s, which my kids are thankfully not). */
function article(n: number): string {
  return /^(8|11|18)/.test(String(n)) ? "an" : "a";
}

/** "9 and 11", or "" if KIDS_BIRTHDATES isn't set. */
export function kidsAgeList(): string {
  const ages = kidsAges();
  if (ages.length === 0) return "";

  return ages.length === 1
    ? String(ages[0])
    : `${ages.slice(0, -1).join(", ")} and ${ages[ages.length - 1]}`;
}

/**
 * "I'm dad to a 9 and 11 year old" — or a generic phrasing if KIDS_BIRTHDATES
 * isn't set, so a missing env var never renders a wrong age.
 */
export function kidsSentence(): string {
  const ages = kidsAges();
  if (ages.length === 0) return "I'm dad to two kids";

  return `I'm dad to ${article(ages[0])} ${kidsAgeList()} year old`;
}

/**
 * "a 9yo & 11yo" — the compact homepage phrasing. Falls back to a generic
 * wording if KIDS_BIRTHDATES isn't set, so a missing env var never renders a
 * wrong age.
 */
export function kidsShortSentence(): string {
  const ages = kidsAges();
  if (ages.length === 0) return "two kids";

  const list = ages.map((age) => `${age}yo`);
  const joined =
    list.length === 1
      ? list[0]
      : `${list.slice(0, -1).join(", ")} & ${list[list.length - 1]}`;

  return `${article(ages[0])} ${joined}`;
}
