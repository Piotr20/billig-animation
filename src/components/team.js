import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  useEffect(() => {
    gsap.from(".gsap-anim-item-team", {
      scrollTrigger: {
        trigger: ".gsap-container-team",
        markers: false,
        start: "top 30%",
        end: "bottom 50%",
      },
      stagger: 0.15,
      duration: 0.3,
      y: 30,
      opacity: 0,
    });
  }, []);
  const data = useStaticQuery(graphql`
    query TeamQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "team-member" } } } }
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

  const teamMembers = data.allWpPost.edges;
  return (
    <section className="w-full container py-8 md:py-24 gsap-container-team">
      <h2>Vores team</h2>
      <div className=" md:mt-12 xl:mt-16 md:grid md:grid-cols-3 md:gap-8 xl:gap-16">
        {teamMembers.map((member) => {
          return (
            <div
              key={member.node.id}
              className="rounded-xl gsap-anim-item-team relative md:rounded-2xl my-8 md:my-0 shadow-lg p-4 md:p-6 flex flex-col justify-center"
            >
              <img
                className=""
                src={member.node.blocks[0].attributes.url}
                alt={member.node.blocks[0].attributes.alt}
              />
              <h3>{member.node.blocks[1].attributes.content}</h3>
              <p>{member.node.blocks[2].attributes.content}</p>
              <img
                className="absolute w-1/5 top-4 left-8 transform -translate-y-1/2"
                src={member.node.blocks[3].attributes.url}
                alt={member.node.blocks[3].attributes.alt}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Team;
