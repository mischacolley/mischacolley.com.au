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

        <h1 css={css`${tw`text-3xl mb-5`}`}>
          Now
        </h1>

        <p css={[paragraph]}>
          I live just north of Byron Bay in the beautiful Northern Rivers region of NSW, Australia. 
        </p>

        <p css={[paragraph]}>
          Checkout my&nbsp;
          <Link css={css`${tw`text-blue-600 underline`}`} to="/history">history</Link>.
        </p>

        <h2 css={css`${tw`text-3xl mb-5`}`}>
          Work
        </h2>

        <p css={[paragraph]}>
          Due to a COVID restructure I'll be moving on from my current CTO gig at AIME Mentoring by September 30th.&nbsp;
          <Link css={css`${tw`text-blue-600 underline`}`} to="/work#what">See what I'm looking for</Link>. 
        </p>

        <h2 css={css`${tw`text-3xl mb-5`}`}>
          Other
        </h2>

      </article>

    </Layout>
  );
}