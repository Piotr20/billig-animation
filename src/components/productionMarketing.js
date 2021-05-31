import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProductionMarketing = () => {
  useEffect(() => {
    gsap.from(".gsap-anim-item-production-marketing", {
      scrollTrigger: {
        trigger: ".gsap-container-production-marketing",
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
    query MarketingProductionQuery {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { name: { eq: "marketing-production" } } }
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
              ... on WpCoreImageBlock {
                attributes {
                  ... on WpCoreImageBlockAttributes {
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
    <section className="container py-8 md:py-24 gsap-container-production-marketing">
      <h2 className="gsap-anim-item-production-marketing">
        {boxes[0].node.blocks[0].attributes.content}
      </h2>
      <div className="md:grid md:grid-cols-2 md:gap-x-24 xl:gap-x-48">
        <div className="py-4 md:py-8 md:flex md:justify-between md:flex-col">
          <p className="gsap-anim-item-production-marketing">
            {boxes[0].node.blocks[1].attributes.content}
          </p>
          <img
            className="py-4 md:py-8 gsap-anim-item-production-marketing"
            src={boxes[0].node.blocks[2].attributes.url}
            alt={boxes[0].node.blocks[2].attributes.alt}
          />
        </div>
        <div className="py-4 md:py-8 gsap-anim-item-production-marketing md:flex md:justify-between md:flex-col">
          <p>{boxes[0].node.blocks[3].attributes.content}</p>
          <img
            className="py-4 md:py-8 gsap-anim-item-production-marketing"
            src={boxes[0].node.blocks[4].attributes.url}
            alt={boxes[0].node.blocks[4].attributes.alt}
          />
        </div>
      </div>
    </section>
  );
};
export default ProductionMarketing;
