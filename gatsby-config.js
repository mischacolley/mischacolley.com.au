module.exports = {
  siteMetadata: {
    title: 'Mischa Colley',
    author: 'Mischa Colley',
    description: 'Hi, I\'m Mischa Colley. Believing in the enabling power of the web I lead people in design & code to make the world a better place.',
    siteUrl: 'https://mischacolley.com.au',
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
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
    `gatsby-transformer-remark`,
  ],
}