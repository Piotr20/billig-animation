import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import OurHistoryImage from "./aboutBigImage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const OurHistory = () => {
  useEffect(() => {
    gsap.from(".gsap-anim-item-our-history", {
      scrollTrigger: {
        trigger: ".gsap-container-our-history",
        markers: false,
        start: "top 60%",
        end: "bottom 50%",
      },
      stagger: 0.15,
      duration: 0.3,
      y: 30,
      opacity: 0,
    });
  }, []);
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
    <section className="w-full bg-light-gray pt-8 md:pt-24 gsap-container-our-history">
      <div className="w-full container">
        <h2 className="gsap-anim-item-our-history">
          {content[0].attributes.content}
        </h2>
        <div className=" md:flex md:justify-between">
          <div className=" md:w-2/5">
            <p className="py-2 md:py-4 xl:py-8 gsap-anim-item-our-history">
              {content[1].attributes.content}
            </p>
            <p className="py-4 italic font-semibold md:py-4 xl:py-8 gsap-anim-item-our-history">
              {content[2].attributes.content}
            </p>
          </div>

          <div className="md:w-2/5">
            <p className="py-2 md:py-4 xl:py-8 gsap-anim-item-our-history">
              {content[3].attributes.content}
            </p>
          </div>
        </div>
        <OurHistoryImage />
      </div>
    </section>
  );
};
export default OurHistory;
