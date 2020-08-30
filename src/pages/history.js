import React from "react"
import tw, { css } from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const paragraph = css`
  ${tw`text-xl mb-5`}
`

export default function History({ data }) {
  return (
    <Layout>

      <SEO
        title="Mischa Colley"
        description="Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech/design/code to make the world a better place."
      />

      <Header />

      <section css={css`${tw`px-8 sm:px-16 md:px-24 lg:px-48`}`}>

        <h1 css={css`${tw`text-3xl mb-5`}`}>
          History
        </h1>

        {data.allFile.edges.map(({ node }) => (
          <div>
            {
              node.childContentJson.history.map(history =>
                <article css={[paragraph]}>
                  <h1 css={css`${tw`font-sans font-bold text-3xl mb-1`}`}>
                    {history.itemTitle}
                  </h1>
                  <h2>
                    <span>{history.itemCompany}</span>
                    <span>{history.itemDates}</span>
                    <span>{history.itemLocation}</span>
                  </h2>
                  <p>{history.itemDescription}</p>
                </article>
              )
            }
          </div>
        ))}

      </section>

    </Layout>
  );
}

export const query = graphql`
  query {
    allFile(filter: {name: {eq: "history"}}) {
      edges {
        node {
          childContentJson {
            history {
              itemDescription
              itemCompany
              itemDates
              itemLocation
              itemTitle
            }
          }
        }
      }
    }
  }
`