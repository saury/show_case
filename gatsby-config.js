module.exports = {
  siteMetadata: {
    title: '厦门游',
  },
  pathPrefix: `/show_case`,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-116200360-1",
        // Puts tracking script in the head instead of the body
        head: false
      },
    },
  ],
};
