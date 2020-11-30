const siteMetadata = {
  title: `Gatsbyjs Darkmode`,
  description: `Gatsbyjs example using darkmode(Without plugin), MDX, Styled Components and SCSS `,
  author: `@skippertak`,
}

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/pages`,
      },
    }
  ],
}
