import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PriceMatch = () => {
  useEffect(() => {
    gsap.from(".gsap-anim-item-price-match", {
      scrollTrigger: {
        trigger: ".gsap-container-price-match",
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
    query PriceMatchQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "price-match" } } } }
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
            ... on WpCoreImageBlock {
              attributes {
                ... on WpCoreImageBlockAttributes {
                  alt
                  url
                }
              }
            }
          }
          id
        }
      }
    }
  `);

  const content = data.allWpPost.nodes[0].blocks;
  console.log(content);
  return (
    <section className="container gsap-container-price-match py-8 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="w-full md:w-2/5">
        <h2 className="py-4 gsap-anim-item-price-match">
          {content[0].attributes.content}
        </h2>
        <p className="py-2 gsap-anim-item-price-match">
          {content[1].attributes.content}
        </p>
        <p className="py-2 gsap-anim-item-price-match">
          {content[2].attributes.content}
        </p>
      </div>
      <div className="w-full md:w-2/5">
        <img
          className="py-8 md:py-0 w-full gsap-anim-item-price-match"
          src={content[3].attributes.url}
          alt={content[3].attributes.alt}
        />
      </div>
    </section>
  );
};
export default PriceMatch;
