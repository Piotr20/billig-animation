module.exports = {
  siteMetadata: {
    title: "Billig animation",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://wp.piotrpospiech.com/billig-animation/graphql",
        type: {
          BlockEditorContentNode: { exclude: true },
          schema: {
            perPage: 20, // currently set to 100
            requestConcurrency: 5, // currently set to 15
            previewRequestConcurrency: 2, // currently set to 5
          },
        },
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
