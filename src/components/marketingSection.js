import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import ShapeGroup from "./shapeGroup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MarketingSection = () => {
  useEffect(() => {
    const listImages = document.querySelectorAll(".what-included-list, li img");

    for (let img of listImages) {
      img.style.width = null;
    }

    gsap.from(".gsap-anim-item-marketing-section", {
      scrollTrigger: {
        trigger: ".gsap-container-marketing-section",
        markers: false,
        start: "top 30%",
        end: "bottom top",
      },
      stagger: 0.15,
      duration: 0.3,
      y: 30,
      opacity: 0,
    });
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
    <section className="container py-8 md:py-24 ">
      <div className=" w-full md:flex  md:justify-between md:items-center gsap-container-marketing-section">
        <div className="relative gsap-anim-item-marketing-section md:w-1/3 rounded-xl md:rounded-2xl my-8 md:my-12 shadow-lg p-4 md:p-6 flex flex-col items-center">
          <h2 className="py-4 ">{content[0].attributes.content}</h2>
          <div className="py-8 pt-4 md:pt-8">
            <p className="text-center ">{content[1].attributes.content}</p>
            <h2 className="py-4 text-center ">
              {content[2].attributes.content}
            </h2>
            <p className="text-center">{content[3].attributes.content}</p>
          </div>

          <ShapeGroup className="absolute top-0 left-12 md:left-16 xl:left-20 transform -translate-y-1/2 scale-175 md:scale-200 xl:scale-225" />
        </div>
        <div className="hidden md:flex md:w-3/5 xl:w-1/2 p-4 md:p-6 flex-col justify-center items-start">
          <p className="py-2 md:w-2/3 gsap-anim-item-marketing-section">
            {content[4].attributes.content}
          </p>
          <ul
            className="marketing-list opacity-60 gsap-anim-item-marketing-section py-2 md:pt-6 text-lg md:text-xl xl:text-2xl font-semibold"
            dangerouslySetInnerHTML={{ __html: content[5].attributes.values }}
          />
        </div>
      </div>
    </section>
  );
};
export default MarketingSection;
