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
        title="Creative Technologist looking for work in the for purpose space"
        description="I specialise in frontend design & I'm an experienced remote worker and remote team leader in tech, design & code."
        image={socialShare}
      />
        
      <Header />

      <article css={[postStyles, css`${tw`px-8 sm:px-16 md:px-24 lg:px-48`}`]}>

        <h1 css={css`${tw`font-sans font-bold text-3xl mb-5`}`}>
          I'm a Creative Technologist looking for my next remote for purpose gig
        </h1>

        <p>
          I'm the outgoing CTO at <a href="https://aimementoring.com" target="_blank">AIME Mentoring</a>, where I grew the internal tech team from just me, to a fully remote team of 11+ across 5 time zones and professional practices, covering Design, Engineering, IT and Data. Due to a COVID restructure I'll be moving on by September 30th.
        </p>

        <h2 id="what">
          What I'm looking for
        </h2>

        <p>
          I specialise in <a href="https://bradfrost.com/blog/post/frontend-design/" target="_blank">frontend design</a> & I'm an experienced remote worker and remote team leader in tech, design and code.
        </p>

        <p>
          I'm looking for opportunities where I can continue to use my expertise applying the enabling power of web and digital technologies in for purpose settings.
        </p>

        <p>
          That might be as an in house technology leader (think CTO or digital director) or external consultant. Essentially the ideal gig is more strategy, problem solving, project and people management than necessarily writing code.
        </p>

        <p css={css`${tw`bg-gray-200 p-5`}`}>
          While I'm not actively searching for a frontend gig writing code for website & apps, I've been building for the web since 2010 and I'd be happy to discuss and pickup my tool belt if it was the right fit.
        </p>

        <p>
          I'm preferably looking to work with organisations like B Corps, Social Enterprises or NFPs and I'm particularly interested in working on:
        </p>

        <ul>
          <li>Digital transformation, particularly solving real problems that deliver measurable and lasting value</li>
          <li>The sustainable and human application of technology</li>
          <li>Developing and curating remote team culture</li>
          <li>Applying a systems and design thinking framework to help leverage the transformative power of design + technology</li>
        </ul>

        <p>
          I'm keen to do this in house with the right organisations OR I've just co-founded <a href="https://ulak.design" css={css`${tw`underline text-brand`}`} target="_blank">ulak</a>.
        </p>

        <a href="https://ulak.design" css={css`${tw`underline text-brand`}`} target="_blank">
          <img
            src={ulak}
            alt={`ulak`}
            css={css`${tw`mx-auto`}`}
          />
        </a>
        
        <p>
          We are a small collective of designers, developers & technologist and we are looking for clients where we can use our expertise in technology & UX design in balance with the needs of people, planet & profit. 
        </p>

        <p>
          Lets chat <a href="mailto:me@mischacolley.com.au">me@mischacolley.com.au</a> :) 
        </p>

        <p css={css`${tw`bg-gray-200 p-5`}`}>
          PS. I'm partner to <a href="https://sandracolley.com.au" target="_blank">Sandra</a> and dad to a 3 and 5 year old. We live just north of Byron Bay in the beautiful Northern Rivers region of NSW, Australia. Bundjalung and Yugambeh country. I’ve been working remotely from our home here for 5+ years and don't intend to relocate.
        </p>

      </article>

    </Layout>
  );
}