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
        title="Mischa Colley | Dad, Creative Technologist, Tech Leader, FED"
        description="I'm dad to a 5 and 8 year old. When we're not traveling we live just north of Byron Bay in the beautiful Northern Rivers region of NSW, Australia. "
      />

      <Header />

      <article css={[postStyles, css`${tw`px-8 sm:px-16 md:px-24 lg:px-48`}`]}>

        <h1 css={css`${tw`font-sans font-bold text-3xl mb-5`}`}>
          Now
        </h1>

        <p>
          I've spent the last 4 months working and traveling QLD with my family (I'm dad to a 5 and 8 year old) in a caravan. When were not traveling we live just north of Byron Bay in the beautiful Northern Rivers region of NSW, Australia. Bundjalung and Yugambeh country. My kids are unschooled so they are part of our everyday lives in between work and everything else we do. 
        </p>

        <h2>
          Biger picture ...
        </h2>

        <p>
          As I've been transitioning from the Frontend role as an individule contributor to that of a Tech leader I've been reading widely on business, leadership, parenting, mental models and Systems & Design Thinking. I'm interested in the itersection of digital and living systems and I'm also facinated about alternative learning models, B Corp and social enterprise business models and what a sustainable economic future could look like if we focus on supporting the next economy to meet the needs of all within the means of the planet.
        </p>

      </article>

    </Layout>
  );
}