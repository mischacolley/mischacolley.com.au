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
        description="I work on web development projects, provide technical leadership (think fractional CTO) & digital strategy (both consulting & implementation)"
        image={socialShare}
      />
        
      <Header />

      <article css={[postStyles, css`${tw`px-8 sm:px-16 md:px-24 lg:px-48`}`]}>

        <h1 css={css`${tw`font-sans font-bold text-3xl mb-5`}`}>
          I help purposeful organisations with digital technology.
        </h1>

        <p>
          I've worked in digital for more than a decade, as both a Developer and CTO.
        </p>

        <p>
          Becoming a dad made it really clear to me that if I was to remain in tech then it would have to be exclusively working on purposeful projects. So that's what I do. My two kids (8 & 10), and the world I want for them, provide the filter for the type of projects I chose to work on.
        </p>

        <p>
          Over the last few years I've been working with my own NFP, Social Enterprises and B Corp clients, as well as collaborating on projects with values aligned businesses like Populares, Digital Village, StartSomeGood, Verve Super,Rainbow Power Company, We are Explorers and Today.  
        </p>

        <p>Recently someone referred to me as a Swiss Army knife — an adaptable, multi-skilled problem solver, ready for anything. Being a proud generalist I took it as the highest compliment :) </p>

        <h2 id="what">
          Here are some of the things I can help you with:
        </h2>

        <ul>
          <li><strong>A development project</strong> - Where I leverage my skills and experience as a developer and help you build/ update websites and apps. Either on my own, using my generalist developer skills, or as part of a team where I'll zero in on the frontend</li>
          <li><strong>Technical leadership</strong> - Can't afford a full time CTO? Hire me as a fractional CTO and I can help you translate the technical into something tangible and get what you need done</li>
          <li><strong>Digital strategy</strong> - Where I lead a discovery workshop that may become a digital transformation project capable of impacting your whole organisation. I'll consult AND I'll implement as well if I'm the right person for the job</li>
        </ul>

        <p>PS. I'm also just begining to consult in the <a href="http://opencampusproject.com/" target="_blank">EdTech</a> space as well.</p>
  
        <p>
          Lets chat <a href="mailto:me@mischacolley.com.au">me@mischacolley.com.au</a> :) 
        </p>

      </article>

    </Layout>
  );
}