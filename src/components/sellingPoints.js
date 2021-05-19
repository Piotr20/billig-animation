import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SellingPoints = () => {
  useEffect(() => {
    gsap.from(".gsap-anim-item-selling-points", {
      scrollTrigger: {
        trigger: ".gsap-conainer-selling-points",
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
    query SellingPointsQuery {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { name: { eq: "selling-point" } } }
          }
        }
      ) {
        nodes {
          blocks {
            name
            order
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
                  id
                  alt
                  url
                  href
                }
              }
            }

            ... on WpCoreHeadingBlock {
              attributes {
                ... on WpCoreHeadingBlockAttributes {
                  content
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section className="container py-8 md:py-24 gsap-conainer-selling-points">
      <div className=" flex flex-col md:flex-row w-full md:justify-between">
        {data.allWpPost.nodes.map((box, key) => {
          return (
            <div
              className="relative w-full md:w-1/4 my-8 gsap-anim-item-selling-points"
              key={key}
            >
              <Link to={`/${box.blocks[2].attributes.href}`}>
                <div className="relative z-20 md:min-h-88 selling-point-box xl:min-h-72 flex  flex-col justify-between bg-white p-4 md:p-6">
                  <h2 className={`${key === 1 ? `md:py-6` : ``}`}>
                    {box.blocks[0].attributes.content}
                  </h2>
                  <p>{box.blocks[1].attributes.content}</p>
                </div>
              </Link>
              <div
                className={`absolute z-10 top-1/2 ${
                  key === 1 ? ` left-4/5 md:left-0` : ``
                }  transform -translate-x-1/2 -translate-y-1/2`}
              >
                <img
                  src={box.blocks[2].attributes.url}
                  alt={box.blocks[2].attributes.alt}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default SellingPoints;
