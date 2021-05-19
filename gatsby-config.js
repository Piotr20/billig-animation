module.exports = {
  siteMetadata: {
    title: "Billig animation",
    description:
      "Company producing cheap and quality animations for all sorts of clients in Denmark and Europe",
    url: "http://billig-animation.piotrpospiech.com/",
    author: "Piotr Pospiech",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://wp.piotrpospiech.com/billig-animation/graphql",
        type: {
          BlockEditorContentNode: { exclude: true },
        },
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Quicksand\:400,600,700`, `Heebo:\:400,600,700`],
        display: "swap",
      },
    },
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
