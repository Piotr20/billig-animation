import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const Pricing = () => {
  const data = useStaticQuery(graphql`
    query PricingQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "price-box" } } } }
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

  const boxes = data.allWpPost.edges;

  return (
    <section className="container mt-24 md:mt-32 py-8  md:py-24 flex flex-col items-center">
      <div className="flex flex-col-reverse md:flex-row-reverse w-full md:justify-between">
        {boxes.map((box) => {
          return (
            <div
              className="relative md:w-3/10 rounded-xl min-h-80 md:rounded-2xl my-8 md:my-12 shadow-lg p-4 md:p-6 flex flex-col justify-center"
              key={box.node.id}
            >
              <div className="flex flex-col items-center ">
                <img
                  className="absolute w-1/6 md:w-1/4 top-0 left-8 transform -translate-y-1/2"
                  src={box.node.blocks[0].attributes.url}
                  alt={box.node.blocks[0].attributes.alt}
                />
                <h2 className="text-center py-4 md:py-12">
                  {box.node.blocks[1].attributes.content}
                </h2>
                <h2 className="text-center pt-2 pb-1 md:pt-4 md:pb-2">
                  {box.node.blocks[2].attributes.content}
                </h2>
                <p
                  className="text-center  pb-6 md:pb-20 xl:pb-24"
                  dangerouslySetInnerHTML={{
                    __html: box.node.blocks[3].attributes.content,
                  }}
                ></p>
              </div>
              <span className="text-left text-base md:text-lg xl:text-xl absolute bottom-4 md:bottom-2 w-10/12 xl:w-11/12">
                {box.node.blocks[4].attributes.content}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col">
        <h2 className="text-center">Er du interesseret?</h2>
        <Link
          className="bg-black mt-4 text-lg md:text-xl xl:text-2xl self-center  text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-2xl md:rounded-3xl xl:rounded-4xl py-1 px-5 md:py-2 md:px-7 shadow-custom"
          to="/contact"
        >
          Kontakt os
        </Link>
      </div>
    </section>
  );
};
export default Pricing;
