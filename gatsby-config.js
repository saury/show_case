module.exports = {
  siteMetadata: {
    title: `Jin's Github Page`,
    siteUrl: `https://saury.github.io/show_case/`,
    description: `Build with Blazing fast modern site generator for React —— Gatsby`,
  },
  pathPrefix: `/show_case`,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-116200360-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
