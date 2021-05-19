import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, keywords, title, image }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description ||
          (data.site.siteMetadata && data.site.siteMetadata.description) ||
          "";
        const siteTitle =
          (data.site.siteMetadata && data.site.siteMetadata.title) || "";
        const siteAuthor =
          (data.site &&
            data.site.siteMetadata &&
            data.site.siteMetadata.author) ||
          "Piotr Pospiech";

        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={title === siteTitle ? "%s" : `%s | ${siteTitle}`}
            meta={[
              {
                name: "description",
                content: metaDescription,
              },
              {
                property: "og:title",
                content: title,
              },
              {
                property: "og:description",
                content: metaDescription,
              },
              {
                property: "og:author",
                content: siteAuthor,
              },
              {
                property: "og:type",
                content: "website",
              },
            ]
              .concat(
                keywords && keywords.length > 0
                  ? {
                      name: "keywords",
                      content: keywords,
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query defaultSEOQuery {
    site {
      id
      siteMetadata {
        description
        title
        author
        url
      }
    }
  }
`;
