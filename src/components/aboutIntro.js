import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const AboutIntro = () => {
  const data = useStaticQuery(graphql`
    query AboutIntroQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "about-intro" } } } }
        }
      ) {
        edges {
          node {
            id
            blocks {
              ... on WpCoreParagraphBlock {
                attributes {
                  ... on WpCoreParagraphBlockAttributes {
                    content
                  }
                }
                name
              }
              ... on WpCoreHeadingBlock {
                attributes {
                  ... on WpCoreHeadingBlockAttributes {
                    content
                  }
                }
                name
              }
              ... on WpCoreImageBlock {
                attributes {
                  ... on WpCoreImageBlockAttributes {
                    id
                    alt
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const contactIntroContent = data.allWpPost.edges[0].node.blocks;
  return (
    <section className="container mt-24 md:mt-32 py-8 md:py-24 md:flex md:justify-between md:items-center">
      <div className="w-full  md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 xl:w-1/3">
          <h2>{contactIntroContent[0].attributes.content}</h2>
          <p className="py-2 md:py-4">
            {contactIntroContent[1].attributes.content}
          </p>
        </div>
        <div className="md:w-1/3 xl:w-2/5">
          <img
            className="py-2 md:py-4 "
            src={contactIntroContent[2].attributes.url}
            alt={contactIntroContent[2].attributes.alt}
          />
        </div>
      </div>
    </section>
  );
};
export default AboutIntro;
