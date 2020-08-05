import React from "react"
import tw, { css } from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const paragraph = css`
  ${tw`text-xl mb-5`}
`

export default function History() {
  return (
    <Layout>

      <SEO
        title="Mischa Colley"
        description="Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech/design/code to make the world a better place."
      />

      <Header />

      <article css={css`${tw`px-8 sm:px-16 md:px-24 lg:px-48`}`}>

        <h1 css={css`${tw`text-3xl mb-5`}`}>
          History
        </h1>

        <p css={[paragraph]}>
          Coming soon ...
        </p>

      </article>

    </Layout>
  );
}