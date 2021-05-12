import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import ShapeGroup from "./shapeGroup";

const Contact = () => {
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
  console.log(contactContent);
  return (
    <section className="container py-8 md:py-16">
      <div className="flex flex-col items-center">
        <ShapeGroup className=" transform scale-125 md:scale-175 xl:scale-200" />
        <h2 className="text-center py-2">
          {contactContent[0].attributes.content}
        </h2>
        <p className="text-center pb-2 w-11/12 md:w-2/5">
          {contactContent[1].attributes.content}
        </p>
        <Link
          className="bg-black mt-4 text-lg md:text-xl xl:text-2xl self-center text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-2xl md:rounded-3xl xl:rounded-4xl py-1 px-5 md:py-2 md:px-7 shadow-custom"
          to="/contact"
        >
          Kontakt
        </Link>
      </div>
    </section>
  );
};
export default Contact;
