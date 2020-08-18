module.exports = {
  siteMetadata: {
    title: 'Mischa Colley | Creative Technologist, Tech Leader, FED',
    author: 'Mischa Colley',
    description: 'Believing in the enabling power of the web & digital tech I specialise in frontend design & lead teams in tech, design & code to make the world a better place.',
    siteUrl: 'https://mischacolley.com.au',
    image: "/images/social-share.png",
  },
  plugins: [
    `gatsby-plugin-svg-sprite`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `mischacolley`,
      },
    },
  ],
}