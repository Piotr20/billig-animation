import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProductionSteps = () => {
  useEffect(() => {
    gsap.from(".gsap-anim-item-steps", {
      scrollTrigger: {
        trigger: ".gsap-conainer-steps",
        markers: false,
        start: "top 60%",
        end: "bottom top",
      },
      stagger: 0.15,
      duration: 0.3,
      y: 30,
      opacity: 0,
    });
  }, []);
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
    <section className="  mt-20 md:mt-20 py-8  gsap-conainer-steps md:py-24">
      <div className="container">
        <h2>Produktion proces</h2>
        <div className=" w-full relative my-8 md:my-24  flex flex-col justify-between">
          <div className="absolute h-full left-0 shadow-2xl md:left-1/2 tramsform -translate-x-1/2 w-2 bg-black rounded-2xl md:rounded-3xl flex flex-col items-center justify-around">
            <div className="py-2 md:py-4 bg-white rounded-full">
              <div className="text-2xl md:text-4xl xl:text-6xl font-semibold text-black shadow-lg rounded-full w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14  bg-yellow flex items-center justify-center border-white border-3 md:border-6">
                1
              </div>
            </div>
            <div className="py-2 md:py-4 bg-white rounded-full">
              <div className="text-2xl md:text-4xl xl:text-6xl font-semibold text-black shadow-lg rounded-full  w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14  bg-blue flex items-center justify-center border-white border-3 md:border-6">
                2
              </div>
            </div>
            <div className="py-2 md:py-4 bg-white rounded-full">
              <div className="text-2xl md:text-4xl xl:text-6xl font-semibold text-black shadow-lg rounded-full  w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 bg-red flex items-center justify-center border-white border-3 md:border-6">
                3
              </div>
            </div>
            <div className="py-2 md:py-4 bg-white rounded-full">
              <div className=" text-2xl md:text-4xl xl:text-6xl font-semibold text-black shadow-lg rounded-full  w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 bg-yellow flex items-center justify-center border-white border-3 md:border-6">
                4
              </div>
            </div>
            <div className="py-2 md:py-4 bg-white rounded-full">
              <div className=" text-2xl md:text-4xl xl:text-6xl font-semibold text-black shadow-lg rounded-full  w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 bg-blue flex items-center justify-center border-white border-3 md:border-6">
                5
              </div>
            </div>
          </div>
          {boxes.map((box, key) => {
            return (
              <div
                className={`rounded-xl md:rounded-2xl gsap-anim-item-steps shadow-lg p-4 md:p-6  w-4/5 my-4 md:my-0 md:w-1/3 ${
                  key === 1 || key === 3
                    ? `self-end mr-2  md:mr-0 md:self-end`
                    : `self-end mr-2 md:mr-0 md:self-start`
                } ${key === 0 || key === 3 ? ` bg-yellow` : ``}  ${
                  key === 1 || key === 4 ? ` bg-blue` : ``
                } ${key === 2 || key === 5 ? ` bg-red` : ``} `}
                key={key}
              >
                <h2 className={`py-2 md:py-3  `}>
                  {box.node.blocks[0].attributes.content}
                </h2>
                <p className={`py-2 md:py-3  `}>
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
