import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import tw, { css } from "twin.macro"
import Img from "gatsby-image"

// Components
import { Link, graphql } from "gatsby"

const paragraph = css`
  ${tw`text-lg mb-5`}
`

export default function Tags({ pageContext, data }) {

  Tags.propTypes = {
    pageContext: PropTypes.shape({
      tag: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        totalCount: PropTypes.number.isRequired,
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
              }),
              fields: PropTypes.shape({
                slug: PropTypes.string.isRequired,
              }),
            }),
          }).isRequired
        ),
      }),
    }),
  }

  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`

  return (
    <Layout>

      <SEO
        title="Mischa Colley"
        description="Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech/design/code to make the world a better place."
      />

      <Header />

      <section>

        <h1 css={css`${tw`font-sans font-bold text-3xl mb-5`}`}>
          {tagHeader}
        </h1>

        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (

            <article key={slug} >
              <Link
                to={slug}
              >
                <h1 css={css`${tw`font-sans font-bold text-2xl mb-1`}`}>
                  {title}{" "}
                </h1>
                <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
                <div css={css`${tw`font-sans text-base mb-3`}`}>
                  {node.frontmatter.date}
                </div>
                <p css={[paragraph]}>{node.excerpt}</p>
              </Link>
            </article>

          )
        })}

        <Link to="/tags">All tags</Link>
 
      </section>

    </Layout>
  )
}

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`