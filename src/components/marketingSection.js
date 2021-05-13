import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import ShapeGroup from "./shapeGroup";

const MarketingSection = () => {
  useEffect(() => {
    const listImages = document.querySelectorAll(".what-included-list, li img");

    for (let img of listImages) {
      img.style.width = null;
    }
  }, []);
  const data = useStaticQuery(graphql`
    query MarketingQuery {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { name: { eq: "marketing-offer" } } }
          }
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
            ... on WpCoreListBlock {
              attributes {
                values
              }
            }
          }
          id
        }
      }
    }
  `);

  const content = data.allWpPost.nodes[0].blocks;
  return (
    <section className="container py-8 md:py-24">
      <div className=" w-full md:flex  md:justify-between ">
        <div className="relative md:w-2/5 rounded-xl md:rounded-2xl my-8 md:my-12 shadow-lg p-4 md:p-6 flex flex-col justify-center">
          <h2 className="py-4">{content[0].attributes.content}</h2>
          <ul
            className="marketing-list opacity-60 py-2 md:pt-6 text-lg md:text-xl xl:text-2xl font-semibold"
            dangerouslySetInnerHTML={{ __html: content[1].attributes.values }}
          />
          <p className="py-2 md:hidden">{content[2].attributes.content}</p>
          <p className="py-2  md:hidden">{content[3].attributes.content}</p>
          <ShapeGroup className="absolute top-0 left-12 md:left-16 xl:left-20 transform -translate-y-1/2 scale-175 md:scale-200 xl:scale-225" />
        </div>
        <div className="hidden md:flex md:w-3/5 xl:w-1/2 p-4 md:p-6 flex-col justify-center">
          <p className="py-2 ">{content[2].attributes.content}</p>
          <p className="py-2 ">{content[3].attributes.content}</p>
        </div>
      </div>
    </section>
  );
};
export default MarketingSection;
