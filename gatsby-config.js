module.exports = {
  // seo head meta tags information used as a fallback data
  siteMetadata: {
    title: "Billig animation",
    description:
      "Company producing cheap and quality animations for all sorts of clients in Denmark and Europe",
    url: "https://billig-animation.piotrpospiech.com/",
    author: "Piotr Pospiech",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://wp.piotrpospiech.com/billig-animation/graphql", //WPGatsby endpoint link to the WordPress that the data is being fetched from
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
      // Fetching fonts from the google fonts
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
