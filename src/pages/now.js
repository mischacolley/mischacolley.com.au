import React from "react"
import tw, { css } from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import { Link } from "gatsby"

const postStyles = css`

  h2 {
    ${tw`font-sans font-bold text-2xl mb-5`}
  }

  a {
    ${tw`text-brand underline`}
  }

  p,
  pre,
  ul {
    ${tw`text-lg mb-5`}
  }

  li {
    ${tw`list-disc list-inside`}
  }

  img {
    ${tw`mb-5`}
  }
`

export default function Now() {
  return (
    <Layout>

      <SEO
        title="Mischa Colley | Partner, Dad, Creative Technologist, Tech Leader, FED"
        description="I'm partner to Sandra and dad to a 3 and 5 year old. We live just north of Byron Bay in the beautiful Northern Rivers region of NSW, Australia. "
      />

      <Header />

      <article css={[postStyles, css`${tw`px-8 sm:px-16 md:px-24 lg:px-48`}`]}>

        <h1 css={css`${tw`font-sans font-bold text-3xl mb-5`}`}>
          Now
        </h1>

        <p>
          I'm partner to <a href="https://sandracolley.com.au" target="_blank">Sandra</a> and dad to a 3 and 5 year old. We live just north of Byron Bay in the beautiful Northern Rivers region of NSW, Australia. Bundjalung and Yugambeh country. We unschool our kids so they are part of our everyday lives in between work and everything else we do. 
        </p>

        <h2>
          Work
        </h2>

        <p>
          I’ve been working remotely from our home here for 5+ years and the last 4 have been with <a href="https://aimementoring.com" target="_blank">AIME Mentoring</a>. At AIME I grew things from just me to leading a fully remote team of 11+ across 5 time zones and professional practices covering Design, Engineering, IT and Data. Due to a COVID restructure I'll be moving on from my role as CTO by September 30th.&nbsp;
          <Link to="/work#what">See what I'm looking for</Link>. 
        </p>

        <p>
          Starting in September I’ll be taking part in a <a href="https://sbp.org.au/sourdough-startupnr/" target="_blank">pre-accelerator program</a> with a focus on embedding purpose, sustainability & circular economy principles in <a href="https://ulak.design/" target="_blank">ulak</a>, a digital collective I've recently co-founded.
        </p>

        <h2>
          More
        </h2>

        <p>
          As I've been transitioning from the Frontend role as an individule contributor to that of a Tech leader I've been reading widely on business, leadership, parenting, mental models and Systems & Design Thinking. I'm interested in the itersection of digital and living systems and I'm also facinated about alternative learning models, B Corp and social enterprise business models and what a sustainable economic future could look like if we focus on supporting the next economy to meet the needs of all within the means of the planet.
        </p>

        {/* <p>
          Checkout my&nbsp;
          <Link to="/history">history</Link>
          &nbsp;and my&nbsp;
          <Link to="/links">links</Link>.
        </p> */}

      </article>

    </Layout>
  );
}