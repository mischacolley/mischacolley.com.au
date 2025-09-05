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
          I'm dad to a 8 and 10 year old. We live just north of Byron Bay in the beautiful Northern Rivers region of NSW, Australia. Bundjalung and Yugambeh country. My kids are unschooled and I co-parent with their mum so they are with me about 50% of the time.
        </p>

        <h2>
          Biger picture ...
        </h2>

        <p>
          Over the last few years as I've delivered projects for many of my NFP, Social Enterprises and B Corp clients I've been working on balancing my need to work with the life I want to live. Those that have worked with me will no that sometimes means I'm delivering projects from my 4WD and Starlink is only on while were working :) 
        </p>
        <p>
          I want to build fulfilling relationships with humans doing their best work on projects that really matter. 
        </p>
        <p>
          If you're one of those people, let's chat. And if you're a UX/UI Designer, Developer, Software Engineer, Technologists, [insert related profession here] I'd love to speak to you about getting together intentionally as a community within the for purpose space.
        </p>
        <p>
          When I'm not building websites or providing technical leadership and digital strategy you'll find me off-grid and as far away from screens and signals as my barefeet will take me and my kids.
        </p>
        <p>
          Somewhere in between you'll find me <a href="http://opencampusproject.com/" target="_blank">daydreaming about alternative learning models</a> and exploring how learning takes place outside of traditional educational institutions and how we might make that more sustainable for all involved. 
        </p>

      </article>

    </Layout>
  );
}