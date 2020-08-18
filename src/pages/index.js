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
          Hi, I'm <strong>Mischa Colley</strong>. Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech, design & code to make the world a better place.
        </p>
{/* 
        <nav css={css`${tw`text-3xl mb-5 text-center`}`}>
          <Link css={[button]} to="/now">Now</Link>
          <Link css={[button]} to="/history">History</Link>
          <Link css={[button]} to="/posts">Posts</Link>
          <Link css={[button]} to="/links">Links</Link>
          <a css={[button]} href="mailto:me@mischacolley.com.au">Contact</a>
        </nav> */}

        <p css={[paragraph]}>
          See what I'm doing&nbsp;
          <Link css={css`${tw`text-brand underline`}`} to="/now">now</Link>.
          // FYI I'm currently looking for&nbsp;
          <Link css={css`${tw`text-brand underline`}`} to="/work">work</Link>.
        </p>

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