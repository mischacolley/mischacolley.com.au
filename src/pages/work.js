import React from "react"
import tw, { css } from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import socialShare from '../assets/images/social-share-work.png'
import Header from "../components/header"

const paragraph = css`
  ${tw`text-xl mb-5`}
`

export default function Work() {
  return (
    <Layout>
      
      <SEO
        title="Tech Leader looking for work in the for purpose space"
        description="I specialise in frontend design & I'm an experienced remote worker and remote team lead in tech, design and code."
        image={socialShare}
      />
        
      <Header />

      <article css={css`${tw`px-8 sm:px-16 md:px-24 lg:px-48`}`}>

        <h1 css={css`${tw`text-3xl mb-5`}`}>
          I'm currently looking for work.
        </h1>

        <p css={[paragraph]}>
          Due to a COVID restructure my team was recently made redudant so I'll be moving on from my role as CTO at AIME Mentoring by September 30th.
        </p>

        <h2 css={css`${tw`text-3xl mb-5`}`} id="what">
          What I'm looking for
        </h2>

        <p css={[paragraph]}>
          I specialise in frontend design & I'm an experienced remote worker and remote team lead in tech, design and code.
        </p>

        <p css={[paragraph]}>
          I'm looking for opportunities as an in house technology leader (CTO, IT/Tech/Digital Director or equiv.) or external consultant. 
        </p>

        <p css={[paragraph]}>
          I'm preferably looking to work with organisations like B Corps, Social Enterprises or NFPs where I can continue to use my expertise applying the enabling power of web and digital technologies in for purpose settings.
        </p>

        <p css={[paragraph]}>
          I'm particularly interested in providing assistance with digital transformation, helping with the development and curation of remote team culture and applying a systems and design thinking framework to how you can better leverage the transformative power of design + technology.
        </p>

        <p css={[paragraph]}>
          I keen to do this in house with the right organisations AND I've just co-founded <a href="https://ulak.design" css={css`${tw`underline text-brand`}`}>ulak</a>, a small collective of designers, developers & technologist using our expertise in technology & UX design in balance with the needs of people, planet & profit. 
        </p>

      </article>

    </Layout>
  );
}