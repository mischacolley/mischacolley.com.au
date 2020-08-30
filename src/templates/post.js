import React from "react"
import tw, { css } from "twin.macro"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import kebabCase from "lodash/kebabCase"

const postStyles = css`

  h2 {
    ${tw`font-sans font-bold text-2xl mb-5`}
  }

  a {
    ${tw`text-brand underline`}
  }

  p {
    ${tw`text-lg mb-5`}
  }

  pre,
  ul {
    ${tw`mb-5`}
  }

  li {
    ${tw`list-disc list-inside`}
  }
`
export default function BlogPost({ data }) {
  const post = data.markdownRemark

  const tags = post.frontmatter.tags
  const listTags = tags.map((tag) =>
    <li>
      <Link to={`/tags/${kebabCase(tag)}`}>
        {tag}
      </Link>
    </li>
  );

  

  return (
    <Layout>

      <SEO
        title="Mischa Colley"
        description="Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech/design/code to make the world a better place."
      />

      <Header />

      <article>
        <h1 css={css`${tw`font-sans font-bold text-3xl mb-5`}`}>{post.frontmatter.title}</h1>
        <div>
          <ul>
            {listTags}
          </ul>
        </div>
        <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
        <div css={[postStyles]} dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
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
`