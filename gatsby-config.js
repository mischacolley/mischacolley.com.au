module.exports = {
  siteMetadata: {
    title: 'Mischa Colley',
    author: 'Mischa Colley',
    description: 'Hi, I\'m Mischa Colley. Believing in the enabling power of the web I lead people in design & code to make the world a better place.',
    siteUrl: 'https://mischacolley.com.au',
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `mischacolley`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: "gatsby-source-goodreads",
      options: {
        developerKey: "2K5NTIt6vqguFzaswiuR5w",
        goodReadsUserId: "4755105-mischa",
        userShelf: "read" //optional
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mischa Colley`,
        short_name: `MC`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#6699cc`,
        display: `minimal-ui`,
        icon: `src/assets/site-icon.png`,
        include_favicon: true,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}