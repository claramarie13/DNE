module.exports = {
  siteMetadata: {
    title: 'DNE1',
    version: '1.0.0',
    date: 'April 08, 2018',
  },
  plugins: [
    'gatsby-image',
    'gatsby-link',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    //'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
  ],
}
