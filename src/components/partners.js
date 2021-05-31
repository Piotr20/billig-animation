import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
  useEffect(() => {
    gsap.from(".gsap-anim-item-partners", {
      scrollTrigger: {
        trigger: ".gsap-conainer-partners",
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
    query PartnersQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "partners" } } } }
        }
      ) {
        nodes {
          blocks {
            ... on WpCoreImageBlock {
              attributes {
                ... on WpCoreImageBlockAttributes {
                  id
                  url
                  alt
                }
              }
            }
            order
            ... on WpCoreHeadingBlock {
              attributes {
                ... on WpCoreHeadingBlockAttributes {
                  content
                }
              }
            }
          }
          id
        }
      }
    }
  `);

  const partnersPost = data.allWpPost.nodes[0].blocks;
  const heading = data.allWpPost.nodes[0].blocks[0];
  partnersPost.shift();

  return (
    <section className="container py-8 pb-4 md:py-24 md:pb-12 gsap-conainer-partners">
      <h2 className=" py-2 md:py-4 gsap-anim-item-partners">
        {heading.attributes.content}
      </h2>
      <div className="grid grid-cols-2 gap-4 md:gap-12 md:grid-rows2 md:grid-cols-5 w-full justify-items-center items-center">
        {partnersPost.map((partner, key) => {
          return (
            <div
              className="w-1/2 md:w-2/3 gsap-anim-item-partners"
              key={partner.attributes.id}
            >
              <img
                className="w-full"
                src={partner.attributes.url}
                alt={partner.attributes.alt}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Partners;
