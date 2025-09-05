import React from "react"
import tw, { css } from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import socialShare from '../assets/images/social-share.png'
import { Link } from "gatsby"

const article = css`
  ${tw`px-8 sm:px-16 md:px-24 lg:px-48`}
`
const lead = css`
  ${tw`text-3xl mb-5`}
`
const paragraph = css`
  ${tw`text-xl mb-5`}
`

const btn = css`
  ${tw`bg-brand hover:bg-blue-700 text-white font-bold py-4 px-4 rounded mt-2 inline-block`}
`

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="Mischa Colley | Creative Technologist, Tech Leader, FED" 
        description="Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech, design & code to make the world a better place."
        image={socialShare}
      />

      <Header />

      <article css={[article]}>
        <p css={[lead]}>
          Hi, I'm <strong>Mischa Colley</strong>. As a <em>Creative Technologist</em> I help purposeful organisations with digital technology. I’ve worked in digital for more than a decade, as both a Developer and CTO.
        </p>

{/* 
        <nav css={css`${tw`text-3xl mb-5 text-center`}`}>
          <Link css={[button]} to="/now">Now</Link>
          <Link css={[button]} to="/history">History</Link>
          <Link css={[button]} to="/posts">Posts</Link>
          <Link css={[button]} to="/links">Links</Link>
          <a css={[button]} href="mailto:mischacolley@gmail.com">Contact</a>
        </nav> */}

        <p css={[paragraph]}>Recently someone referred to me as a Swiss Army knife — an adaptable, multi-skilled problem solver, ready for anything. Being a proud generalist I took it as the highest compliment :)</p>

        <p css={[paragraph]}>
          See what I'm doing&nbsp;
          <Link css={css`${tw`text-brand underline`}`} to="/now">now</Link> and how we could <Link css={css`${tw`text-brand underline`}`} to="/work">work together</Link>.
        </p>

        <a css={[btn]} href="https://calendly.com/mischacolley/catchup" target="_blank">Book a chat</a>

        {/* <p css={[paragraph]}>
          Checkout my&nbsp; 
          <Link css={css`${tw`text-brand underline`}`} to="/history">history</Link>.
        </p>

        <p css={[paragraph]}>
          See my&nbsp;  
          <Link css={css`${tw`text-brand underline`}`} to="/posts">posts</Link>.
        </p> */}
        
      </article>

    </Layout>
  );
}