import React from "react"
import tw, { css } from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import socialShare from '../assets/images/social-share-work.png'
import ulak from '../assets/images/ulak.png'
import Header from "../components/header"

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

export default function Work() {
  return (
    <Layout>
      
      <SEO
        title="Creative Technologist helping purposeful orgs with digital technology"
        description="I specialise in frontend design & I'm an experienced remote worker and remote team leader in tech, design & code."
        image={socialShare}
      />
        
      <Header />

      <article css={[postStyles, css`${tw`px-8 sm:px-16 md:px-24 lg:px-48`}`]}>

        <h1 css={css`${tw`font-sans font-bold text-3xl mb-5`}`}>
          I help purposeful organisations with digital technology.
        </h1>

        <p>
          I’ve worked in digital for more than a decade, as both a front of the frontend Developer and CTO.
        </p>

        <p>
          Over the last few years I've been <s>freelancing</s> experementing with creating <em>not another digital agency</em>. Along with working with my own clients, i've compleated a series of collaborative projects with values aligned businesses like Today, Populares and most recently Digital Village.
        </p>

        <h2 id="what">
          Here are some of the things I can help you with:
        </h2>

        <ul>
          <li>A development project - Where I leverage my skills and expereince as a frontend developer and help you build/ update websites and apps. Either on my own, or as part of a team</li>
          <li>Technical leadership - Can't afford a full time CTO? On-demand I can help you translate the technical into something tangabile you can work with</li>
          <li>Digital strategy - Where I lead a discovery workshop that may become a digital transformation project capable of impacting your whole organisation</li>
        </ul>
  
        <p>
          Lets chat <a href="mailto:me@mischacolley.com.au">me@mischacolley.com.au</a> :) 
        </p>

      </article>

    </Layout>
  );
}