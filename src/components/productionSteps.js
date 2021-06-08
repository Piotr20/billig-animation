import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductionVideo from "./productionVideo";
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
        <ProductionVideo className=" mt-4 md:mt-8 xl:mt-12" />
        <div className=" w-full relative my-8 md:mt-24  flex flex-col md:flex-row justify-between md:justify-around">
          <div className="absolute h-full md:w-full md:h-2 shadow-2xltramsform -translate-x-1/2 w-2 bg-black rounded-2xl md:rounded-3xl flex flex-col md:flex-row items-center justify-around">
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
            <div className="py-2 md:py-4 md:hidden bg-white rounded-full">
              <div className="text-2xl md:text-4xl xl:text-6xl font-semibold text-black shadow-lg rounded-full  w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 bg-yellow flex items-center justify-center border-white border-3 md:border-6">
                4
              </div>
            </div>
            <div className="py-2 md:py-4 md:hidden bg-white rounded-full">
              <div className="text-2xl md:text-4xl xl:text-6xl font-semibold text-black shadow-lg rounded-full  w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 bg-blue flex items-center justify-center border-white border-3 md:border-6">
                5
              </div>
            </div>
          </div>
          {boxes.map((box, key) => {
            return (
              <div
                className={`rounded-xl md:mt-12 md:mx-4 xl:mt-16 md:rounded-2xl gsap-anim-item-steps shadow-lg p-4 md:p-6  w-4/5 my-4 md:my-0 md:w-1/3 ${
                  key === 1 || key === 3
                    ? `self-end   md:self-start`
                    : `self-end md:self-start`
                } ${key === 0 || key === 3 ? ` bg-yellow` : ``}  ${
                  key === 1 || key === 4 ? ` xl:mx-12 bg-blue` : ``
                } ${key === 2 || key === 5 ? ` bg-red` : ``} ${
                  key > 2 ? `md:hidden` : ``
                } `}
                key={key}
              >
                <h3 className={` md:leading-tight`}>
                  {box.node.blocks[0].attributes.content}
                </h3>
                <p className={`py-2 md:py-3  `}>
                  {box.node.blocks[1].attributes.content}
                </p>
              </div>
            );
          })}
        </div>
        <div className=" w-full hidden md:flex relative my-8 md:mt-24   flex-col md:flex-row justify-between md:justify-around">
          <div className="absolute h-full md:w-full md:h-2 shadow-2xltramsform -translate-x-1/2 w-2 bg-black rounded-2xl md:rounded-3xl flex flex-col md:flex-row items-center justify-around">
            <div className="py-2 md:py-4 hidden md:block bg-white rounded-full">
              <div className="text-2xl md:text-4xl xl:text-6xl font-semibold text-black shadow-lg rounded-full  w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 bg-yellow flex items-center justify-center border-white border-3 md:border-6">
                4
              </div>
            </div>
            <div className="py-2 md:py-4 hidden md:block bg-white rounded-full">
              <div className="text-2xl md:text-4xl xl:text-6xl font-semibold text-black shadow-lg rounded-full  w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 bg-blue flex items-center justify-center border-white border-3 md:border-6">
                5
              </div>
            </div>
          </div>
          {boxes.map((box, key) => {
            return (
              <div
                className={`rounded-xl md:mt-12 xl:mt-16 md:rounded-2xl gsap-anim-item-steps shadow-lg p-4 md:p-6  w-4/5 my-4 md:my-0 md:w-1/3 ${
                  key === 1 || key === 3
                    ? `self-end   md:self-start`
                    : `self-end md:self-start`
                } ${key === 0 || key === 3 ? ` bg-yellow` : ``}  ${
                  key === 1 || key === 4 ? `md:mx-6 xl:mx-12 bg-blue` : ``
                } ${key === 2 || key === 5 ? ` bg-red` : ``} ${
                  key < 3 ? `md:hidden` : ``
                } `}
                key={key}
              >
                <h3 className={` md:leading-tight`}>
                  {box.node.blocks[0].attributes.content}
                </h3>
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
