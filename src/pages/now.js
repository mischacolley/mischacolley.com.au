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
          I spent the last half of 2022 working and traveling QLD with my family (I'm dad to a 5 and 8 year old) in a caravan. When not traveling we live just north of Byron Bay in the beautiful Northern Rivers region of NSW, Australia. Bundjalung and Yugambeh country. My kids are unschooled and I co-parent with their mum Sandra so they are part of our everyday lives in between work and everything else we do.
        </p>

        <h2>
          Biger picture ...
        </h2>

        <p>
          Over the last 2 years as I've delivered projects for many of my NFP, Social Enterprises and B Corp clients I've been experimenting with new ways of working together with other digital specialists. How to bring together purpose driven clients with values aligned with digital professionals in formats that feel less like a freelance/agency relationship and more like a cooperative. 
        </p>
        <p>
          While I don’t want to “freelance” forever, I don’t want to create just another digital agency, or necessarily build a product business (unless it’s the right thing).  
        </p>
        <p>
          I do want to build fulfilling relationships with humans doing their best work on projects that really matter. 
        </p>
        <p>
          If you're one of those people, let's chat. And if you're a UX/UI Designer, Developer, Software Engineer, Technologists, [insert related profession here] I'd love to speak to you about getting together intentionally as a community within the for purpose space.
        </p>
        <p>
          When I'm not building websites or providing technical leadership and digital strategy you'll find me barefoot and as far away from any screen or signal as I can get.
        </p>
        <p>
          Somewhere in between you might find me daydreaming about alternative learning models and exploring how learning takes place outside of traditional educational institutions and how we might make that sustainable for all involved. 
        </p>

      </article>

    </Layout>
  );
}