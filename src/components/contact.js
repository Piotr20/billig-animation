import React, { useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import ShapeGroup from "./shapeGroup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    gsap.from(".gsap-anim-item-contact", {
      scrollTrigger: {
        trigger: ".gsap-container-contact",
        markers: false,
        start: "top 45%",
        end: "bottom top",
      },
      stagger: 0.15,
      duration: 0.3,
      y: 30,
      opacity: 0,
    });
  }, []);
  const data = useStaticQuery(graphql`
    query ContactQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "contact" } } } }
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

  const contactContent = data.allWpPost.edges[0].node.blocks;

  return (
    <section className="container py-8 md:py-16 gsap-container-contact">
      <div className="flex flex-col items-center">
        <ShapeGroup className=" transform scale-125 md:scale-175 xl:scale-200 gsap-anim-item-contact" />
        <h2 className="text-center py-2 gsap-anim-item-contact">
          {contactContent[0].attributes.content}
        </h2>
        <p className="text-center pb-2 w-11/12 md:w-2/5 gsap-anim-item-contact">
          {contactContent[1].attributes.content}
        </p>
        <Link
          className="bg-black gsap-anim-item-contact mt-4 text-lg md:text-xl xl:text-2xl self-center text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-2xl md:rounded-3xl xl:rounded-4xl py-1 px-5 md:py-2 md:px-7 shadow-custom"
          to="/contact"
        >
          Kontakt
        </Link>
      </div>
    </section>
  );
};
export default Contact;
