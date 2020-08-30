import React from "react"
import tw, { css } from "twin.macro"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const paragraph = css`
  ${tw`text-lg mb-5`}
`

export default function Posts({ data }) {

  // let post = data.markdownRemark

  // let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>

      <SEO
        title="Mischa Colley"
        description="Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech/design/code to make the world a better place."
      />

      <Header />

      <section>

        <h1 css={css`${tw`font-sans font-bold text-3xl mb-5`}`}>
          Posts
        </h1>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id} >
            <Link
              to={node.fields.slug}
            >
              <h1 css={css`${tw`font-sans font-bold text-2xl mb-1`}`}>
                {node.frontmatter.title}{" "}
              </h1>
              <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
              <div css={css`${tw`font-sans text-base mb-3`}`}>
                {node.frontmatter.date}
              </div>
              <p css={[paragraph]}>{node.excerpt}</p>
            </Link>
          </article>
        ))}

      </section>

    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
