module.exports = {
  siteMetadata: {
    title: "Jiang Hulusi",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
