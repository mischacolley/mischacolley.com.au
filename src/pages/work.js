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
        title="Tech Leader looking for work in the for purpose space"
        description="I specialise in frontend design & I'm an experienced remote worker and remote team leader in tech, design & code."
        image={socialShare}
      />
        
      <Header />

      <article css={[postStyles, css`${tw`px-8 sm:px-16 md:px-24 lg:px-48`}`]}>

        <h1 css={css`${tw`font-sans font-bold text-3xl mb-5`}`}>
          I'm looking for remote work as a Tech Leader in the for purpose space
        </h1>

        <p>
          I'm the outgoing CTO at <a href="https://aimementoring.com" target="_blank">AIME Mentoring</a> where I grew the internal tech team there from just me to a fully remote team of 11+ across 5 time zones and professional practices covering Design, Engineering, IT and Data. Due to a COVID restructure I'll be moving on by September 30th.
        </p>

        <h2 id="what">
          What I'm looking for
        </h2>

        <p>
          I specialise in frontend design & I'm an experienced remote worker and remote team leader in tech, design and code.
        </p>

        <p>
          I'm looking for opportunities as an in house technology leader (CTO, IT/Tech/Digital Director or equiv.) or external consultant. 
        </p>

        <p>
          I'm preferably looking to work with organisations like B Corps, Social Enterprises or NFPs where I can continue to use my expertise applying the enabling power of web and digital technologies in for purpose settings.
        </p>

        <p css={css`${tw`bg-gray-200 p-5`}`}>
          While I'm not actively searching for frontend work as an individual contributor, I'd be happy to discuss and dust off my tool belt if it was the right fit.
        </p>

        <p>
          I'm particularly interested in providing assistance with:
        </p>

        <ul>
          <li>Digital transformation</li>
          <li>Developing and curating remote team culture</li>
          <li>Applying a systems and design thinking framework to help leverage the transformative power of design + technology</li>
        </ul>

        <p>
          I keen to do this in house with the right organisations AND I've just co-founded <a href="https://ulak.design" css={css`${tw`underline text-brand`}`} target="_blank">ulak</a>.
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

      </article>

    </Layout>
  );
}