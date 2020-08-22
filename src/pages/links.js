import React from "react"
import tw, { css } from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import JSONData from "../content/links.json"

const paragraph = css`
  ${tw`text-xl mb-5`}
`

export default function Links() {
  return (
    <Layout>

      <SEO
        title="Mischa Colley"
        description="Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech/design/code to make the world a better place."
      />

      <Header />

      <section css={css`${tw`px-8 sm:px-16 md:px-24 lg:px-48`}`}>

        <h1 css={css`${tw`text-3xl mb-5`}`}>
          {JSONData.title}
        </h1>

        <article css={[paragraph]}>
          {JSONData.content.map((data, index) => {

            const tags = data.itemTags
            const listTags = tags.map((tag) =>
              <li>{tag}</li>
            );

            return (
              <div>
                <h1 key={`content_item_${index}`}>{data.itemTitle}</h1>
                <ul>
                  {listTags}
                </ul>
                <img
                  src={data.itemImage}
                />
                <p>{data.itemDescription}</p>
                <a href="itemLink">View</a>
              </div>
            );
          })}
        </article>

      </section>

    </Layout>
  );
}