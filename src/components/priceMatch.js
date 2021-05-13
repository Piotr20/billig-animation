import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const PriceMatch = () => {
  const data = useStaticQuery(graphql`
    query PriceMatchQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "price-match" } } } }
        }
      ) {
        nodes {
          blocks {
            ... on WpCoreHeadingBlock {
              attributes {
                ... on WpCoreHeadingBlockAttributes {
                  content
                }
              }
            }
            ... on WpCoreParagraphBlock {
              attributes {
                ... on WpCoreParagraphBlockAttributes {
                  content
                }
              }
            }
            ... on WpCoreImageBlock {
              attributes {
                ... on WpCoreImageBlockAttributes {
                  alt
                  url
                }
              }
            }
          }
          id
        }
      }
    }
  `);

  const content = data.allWpPost.nodes[0].blocks;
  console.log(content);
  return (
    <section className="container py-8 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="w-full md:w-2/5">
        <h2 className="py-4">{content[0].attributes.content}</h2>
        <p className="py-2">{content[1].attributes.content}</p>
        <p className="py-2">{content[2].attributes.content}</p>
      </div>
      <div className="w-full md:w-2/5">
        <img
          className="py-8 md:py-0 w-full"
          src={content[3].attributes.url}
          alt={content[3].attributes.alt}
        />
      </div>
    </section>
  );
};
export default PriceMatch;
