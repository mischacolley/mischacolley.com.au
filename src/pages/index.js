import React from "react"
import tw, { css } from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from '../assets/images/site-icon.png'

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="Mischa Colley | Creative Problem Solver" 
        description="Believing in the enabling power of the web and digital technologies I lead teams in tech, design & code to make the world a better place."
      />
      <div css={css`${tw`container mx-auto`}`}>
        <div css={css`${tw`p-10`}`}>
          <img
            src={logo}
            alt={`Mischa Colley`}
            css={css`${tw`w-16 mx-auto`}`}
          />
        </div>

        <article css={css`${tw`px-8 sm:px-16 md:px-24 lg:px-48`}`}>
          <p css={css`${tw`text-3xl mb-5`}`}>
            Hi, I'm <strong>Mischa Colley</strong>. Believing in the enabling power of the web and digital technologies I lead teams in tech, design & code to make the world a better place. 
          </p>
          <p css={css`${tw`text-xl mb-5`}`}>
            For me that work starts with being human-centred in everything I do. In my roles I serve as a bridge between atoms and bits and with my background as a front-end developer I’m able to connect the dots between disciplines and individuals and enable the teams I lead to deliver their best work.
          </p>
          <p css={css`${tw`text-xl mb-5`}`}>
            These days I find I code less and less. Where I deliver the most value is stepping back, looking strategically at the big picture, imagining new realities and working with different stakeholders to deliver business outcomes.
          </p>
          <p css={css`${tw`text-xl mb-5`}`}>
            I’m not a fan of job titles but the work I do in teams lies at the crossroads between design, engineering, IT and business. I pride myself on my ability to work collaboratively with designers to bring designs to life across mediums, engineers to apply design to the underlying functionality and logic that makes websites and apps do what they do, and IT and business to connect it all together.
          </p>
          <p css={css`${tw`text-xl mb-5`}`}>
            When it can add value I still love writing HTML and CSS and tinkering with all things web to build great user experiences. Especially those that can support and enable people all over the world, not just the wealthy western web. I’ve been building for the web since 2006 and in that time I’ve worked for a number of agencies and inhouse teams as well as my own clients across both the for profit and not for profit sector.
          </p>
          <p css={css`${tw`text-xl mb-5`}`}>
            I'm based in Byron Bay and not interested in relocating for work but I'm always looking for new opportunities to make connections with people doing inspiring things to help us move towards a fairer world. I’m especially interested in work in the education, climate and social justice space. With two young children looking to me as an example I need the work I do to have a positive and lasting effect on people's lives and help make this world a better place. 
          </p>
        </article>
      </div> 
    </Layout>
  );
}