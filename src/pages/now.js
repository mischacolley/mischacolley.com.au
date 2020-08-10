import React from "react"
import tw, { css } from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import { Link } from "gatsby"

const paragraph = css`
  ${tw`text-xl mb-5`}
`

export default function Now() {
  return (
    <Layout>

      <SEO
        title="Mischa Colley"
        description="Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech/design/code to make the world a better place."
      />

      <Header />

      <article css={css`${tw`px-8 sm:px-16 md:px-24 lg:px-48`}`}>

        <h1 css={css`${tw`font-sans font-bold text-3xl mb-5`}`}>
          Now
        </h1>

        <p css={[paragraph]}>
          I'm a partner and a dad to a 3 and 5 year old. We live just north of Byron Bay in the beautiful Northern Rivers region of NSW, Australia. We unschool our kids so they are part of our everyday lives in between our work and everything else we do. 
        </p>

        <h2 css={css`${tw`font-sans font-bold text-2xl mb-5`}`}>
          Work
        </h2>

        <p css={[paragraph]}>
          I’ve been working remotely from our home here for 5+ years and the last 4 have been with AIME Mentoring, where I grew things from just me as an Individule Contributer (IC) to leading a fully remote team of 11+ across 5 time zones and professional practices covering Design, Engineering, IT and Data. Due to a COVID restructure my team was recently made redudant so I'll be moving on from my role as CTO by September 30th.&nbsp;
          <Link css={css`${tw`text-brand underline`}`} to="/work#what">See what I'm looking for</Link>. 
        </p>

        <h2 css={css`${tw`font-sans font-bold text-2xl mb-5`}`}>
          More
        </h2>

        <p css={[paragraph]}>
          As I've been transitioning from an IC role as a Frontend Developer to that of a Tech leader I've been reading widely on things like business, leadership, mental models and Systems & Design Thinking. I'm also facinated about alternative learning models, B Corp and social enterprise business models and what a sustainable economic future could look like if we focus on supporting the next economy to meet the needs of all within the means of the planet.
        </p>

        <p css={[paragraph]}>
          Checkout my&nbsp;
          <Link css={css`${tw`text-brand underline`}`} to="/history">history</Link>.
        </p>


      </article>

    </Layout>
  );
}