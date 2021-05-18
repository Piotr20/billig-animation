import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const ProductionSteps = () => {
  const data = useStaticQuery(graphql`
    query ProcessStepsQuery {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { name: { eq: "process-steps" } } }
          }
        }
      ) {
        edges {
          node {
            id
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
            }
          }
        }
      }
    }
  `);

  const boxes = data.allWpPost.edges;

  return (
    <section className=" bg-light-gray mt-20 md:mt-20 py-8  md:py-24">
      <div className="container">
        <h2>Produktion proces</h2>
        <div className="w-full relative my-8 md:my-24  flex flex-col justify-between">
          <div className="absolute h-full left-0 md:left-1/2 tramsform -translate-x-1/2 w-4 md:w-5 bg-black rounded-2xl md:rounded-3xl flex flex-col items-center justify-around">
            <div className="text-lg md:text-xl xl:text-2xl text-black rounded-full w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 bg-white flex items-center justify-center border-black border-2 md:border-4">
              1
            </div>
            <div className=" text-lg md:text-xl xl:text-2xl text-black rounded-full  w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 bg-white flex items-center justify-center border-black border-2 md:border-4">
              2
            </div>
            <div className=" text-lg md:text-xl xl:text-2xl text-black rounded-full  w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 bg-white flex items-center justify-center border-black border-2 md:border-4">
              3
            </div>
            <div className=" text-lg md:text-xl xl:text-2xl text-black rounded-full  w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 bg-white flex items-center justify-center border-black border-2 md:border-4">
              4
            </div>
          </div>
          {boxes.map((box, key) => {
            return (
              <div
                className={`rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 bg-white w-4/5 my-4 md:my-0 md:w-1/3 ${
                  key === 1 || key === 3
                    ? `self-end mr-2 md:mr-0 md:self-end`
                    : `self-end mr-2 md:mr-0 md:self-start`
                }`}
                key={key}
              >
                <h2 className="py2 md:py-3">
                  {box.node.blocks[0].attributes.content}
                </h2>
                <p className="py2 md:py-3">
                  {box.node.blocks[1].attributes.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ProductionSteps;
