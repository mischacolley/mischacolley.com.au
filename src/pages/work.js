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
          I'm a Creative Technologist looking for work in the for purpose space
        </h1>

        <p>
          I'm the former CTO of <a href="https://aimementoring.com" target="_blank">AIME Mentoring</a>, where I grew the internal digital team from just me, to a fully remote team of 11+ across 5 time zones and professional practices, covering Design, Engineering, IT and Data. I wrapped up my role as CTO in Septmeber 2020. 
        </p>

        <h2 id="what">
          What I'm looking for
        </h2>

        <p>
          I specialise in <a href="https://bradfrost.com/blog/post/frontend-design/" target="_blank">frontend design</a> & I'm an experienced remote worker and remote team leader in tech, design and code.
        </p>

        <p>
          I'm looking for opportunities where I can continue to use my expertise applying the enabling power of web and digital technologies in for purpose settings. I'm spesifically looking to work with organisations like B Corps, Social Enterprises and NFPs.
        </p>

        <p><strong>That might be through <a href="https://ulak.design" css={css`${tw`underline text-brand`}`} target="_blank">ulak</a></strong></p>

        <p>I’m co-founder of a collective who create digital experiences that put people & planet first.</p>

        <a href="https://ulak.design" css={css`${tw`underline text-brand`}`} target="_blank">
          <img
            src={ulak}
            alt={`ulak`}
            css={css`${tw`mx-auto`}`}
          />
        </a>

        <p>What ulak, we just might have as UX, UI & Frontend Designers, Developers, Software Engineers, Creative Technologists & more …</p>

        <p>Chat with me about what you are trying to create or shoot a message through to <a href="mailto:team@ulak.design">team@ulak.design</a>.</p>

        <p><strong>Or just with me</strong></p>

        <p>While I’m working to establish ulak, I’m also interested in part-time contract positions where I’d be working as a creative technologist (business consultant) or frontend designer/developer, supporting things like:</p>

        <ul>
          <li>Designing & building Website & Apps</li>
          <li>Digital transformation, particularly solving real problems that deliver measurable and lasting value</li>
          <li>The sustainable and human application of technology</li>
          <li>Developing and curating remote team culture</li>
          <li>Applying a systems and design thinking framework to help leverage the transformative power of design + technology</li>
        </ul>
  
        <p>
          Lets chat <a href="mailto:me@mischacolley.com.au">me@mischacolley.com.au</a> :) 
        </p>

        <p css={css`${tw`bg-gray-200 p-5`}`}>
          PS. While I LOVE working in digital I also love to spend time in nature and get my hands dirty doing physical work with atoms not bits :) In 2021 I'm trying to find more balance away from the screen. That might be general labouring work, gardening or ...  
        </p>

        <p css={css`${tw`bg-gray-200 p-5`}`}>
          PPS. I'm partner to <a href="https://sandracolley.com.au" target="_blank">Sandra</a> and dad to a 3 and 6 year old. We live just north of Byron Bay in the beautiful Northern Rivers region of NSW, Australia. Bundjalung and Yugambeh country. I’ve been working remotely from our home here for 5+ years and don't intend to relocate.
        </p>

      </article>

    </Layout>
  );
}