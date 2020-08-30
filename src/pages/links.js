import React from "react"
import tw, { css } from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const paragraph = css`
  ${tw`text-xl mb-5`}
`

export default function Links({ data }) {

  return (
    <Layout>

      <SEO
        title="Mischa Colley"
        description="Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech/design/code to make the world a better place."
      />

      <Header />

      <section css={css`${tw`px-8 sm:px-16 md:px-24 lg:px-48`}`}>

        <h1 css={css`${tw`text-3xl mb-5`}`}>
          Links
        </h1>

        {data.allFile.edges.map(({ node }) => (
          <div>
            {
              node.childContentJson.links.map(links =>
                <article css={[paragraph]} key={links.id}>
                  <h1 css={css`${tw`font-sans font-bold text-3xl mb-1`}`}>
                    {links.itemTitle}
                  </h1>
                  <ul>
                    {
                      links.itemTags.map(tags =>
                        <li>{tags}</li> 
                      )
                    }
                  </ul>
                  <p>{links.itemDescription}</p>
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
    allFile(filter: {name: {eq: "links"}}) {
      edges {
        node {
          childContentJson {
            links {
              itemDescription
              itemEmbed
              itemImage
              itemLink
              itemTags
              itemTitle
              itemType
            }
          }
        }
      }
    }
  }
`

