// Initialize dotenv
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
});

module.exports = {
  siteMetadata: {
    title: 'Tourism',
    descrtiption: 'Explore awesome worlwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure',
    author:'@matichattellino',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sharp`, `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`
  ],
}
