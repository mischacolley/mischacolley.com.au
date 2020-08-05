import React from "react"
import tw, { css } from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="Mischa Colley" 
        description="Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech/design/code to make the world a better place."
      />
      <div css={css`${tw`container mx-auto`}`}>

        <Header />

        <article css={css`${tw`px-8 sm:px-16 md:px-24 lg:px-48`}`}>
          <p css={css`${tw`text-3xl mb-5`}`}>
            Hi, I'm <strong>Mischa Colley</strong>. Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech/design/code to make the world a better place.
          </p>

          <nav css={css`${tw`text-3xl mb-5`}`}>
            <a href="mailto:me@mischacolley.com.au" css={css`${tw`underline text-blue-500`}`}>Get in touch</a>
            <Link to="/posts">Posts</Link>
            <Link to="/work">Work</Link>
          </nav>

          <p css={css`${tw`text-xl mb-5`}`}>
            For me that work starts with being human-centred in everything I do. In my roles I serve as a bridge between atoms and bits and building on my frontend experience I’m able to connect the dots between disciplines and individuals and enable the teams I lead to deliver their best work.
          </p>
          <p css={css`${tw`text-xl mb-5`}`}>
            Where I’ve delivered the most value recently is stepping back, looking strategically at the big picture, imagining new realities and working with different stakeholders to deliver results.
          </p>
          <p css={css`${tw`text-xl mb-5`}`}>
            The work I do in teams lies at the crossroads between design, engineering, IT and business. I pride myself on my ability to work collaboratively with designers to bring designs to life across mediums, engineers to apply design to the underlying functionality and logic that makes websites and apps do what they do, and IT and business to connect it all together.
          </p>
          <p css={css`${tw`text-xl mb-5`}`}>
            When it can add value I still love coding on the front of the front end and tinkering with all things web to build great user experiences. Especially those that can support and enable people all over the world, not just the wealthy western web. I’ve been building for the web since 2006 and in that time I’ve worked for a number of agencies and in-house teams as well as my own clients across both the for profit and not for profit sector.
          </p>
          <p css={css`${tw`text-xl mb-5`}`}>
            With two young children looking to me as an example, I need the work I do to have a positive and lasting effect on people's lives and help make this world a more equal place. 
          </p>
          <p css={css`${tw`text-xl mb-5`}`}>
            I'm based in Byron Bay and not interested in relocating for work but keen to work with a B Corp, social enterprise or NFP that is doing for purpose work. Work that falls within the UNs sustainable development goals and is contributing to a better world and future for my kids. I’m particularly passionate about learning/education, climate action, reducing inequalities and I’m also very interested in what a sustainable economic future could look like if we focus on supporting the next economy to meet the needs of all within the means of the planet. 
          </p>
        </article>
      </div> 
    </Layout>
  );
}