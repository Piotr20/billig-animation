import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import OurHistoryImage from "./aboutBigImage";

const OurHistory = () => {
  const data = useStaticQuery(graphql`
    query BilligAnimationHistoryQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "our-history" } } } }
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
            }
          }
        }
      }
    }
  `);

  const content = data.allWpPost.edges[0].node.blocks;
  return (
    <section className="w-full bg-light-gray pt-8 md:pt-24 ">
      <div className="w-full container">
        <h2>{content[0].attributes.content}</h2>
        <div className=" md:flex md:justify-between">
          <p className="py-2 md:py-4 xl:py-8 md:w-2/5">
            {content[1].attributes.content}
          </p>
          <p className="py-2 md:py-4 xl:py-8 md:w-2/5">
            {content[2].attributes.content}
          </p>
        </div>{" "}
        <OurHistoryImage />
      </div>
    </section>
  );
};
export default OurHistory;
