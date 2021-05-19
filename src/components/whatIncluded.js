import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";

const WhatsIncluded = () => {
  useEffect(() => {
    const listImages = document.querySelectorAll(".what-included-list, li img");

    for (let img of listImages) {
      img.style.width = null;
    }
  }, []);
  const data = useStaticQuery(graphql`
    query WhatsIncludedQuery {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { name: { eq: "what-included" } } }
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
    <div className="w-full md:w-2/5 md:flex md:flex-col md:justify-between ">
      <div>
        <h2 className="gsap-anim-item-included">
          {content[0].attributes.content}
        </h2>
        <p className="py-2 gsap-anim-item-included">
          {content[1].attributes.content}
        </p>
      </div>
      <ul
        className="what-included-list gsap-anim-item-included opacity-60 py-2 md:pt-6 xl:pt-10 text-lg md:text-xl xl:text-2xl "
        dangerouslySetInnerHTML={{ __html: content[2].attributes.values }}
      />
    </div>
  );
};
export default WhatsIncluded;
