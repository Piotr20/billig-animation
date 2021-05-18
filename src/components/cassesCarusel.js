import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

const CasesShowcase = () => {
  const [searchTerm, setSeacrchTerm] = useState("");
  const data = useStaticQuery(graphql`
    query ShowcaseQuery {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { name: { eq: "showcase-video" } } }
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
              ... on WpCoreVideoBlock {
                saveContent
              }
            }
          }
        }
      }
    }
  `);

  const cases = data.allWpPost.edges;

  return (
    <section className=" mt-24 md:mt-32 py-8 md:py-24 ">
      <div className="w-full h-20 px-8 lg:px-10 2xl:px-24 flex items-center justify-center md:justify-start shadow-md bg-white">
        <input
          className="text-lg md:text-xl xl:text-2xl text-black w-11/12 md:w-1/3 xl:w-1/4 border-black border-2 xl:border-4  pl-4 md:pl-6 py-1 md:py-2 rounded-2xl md:rounded-3xl outline-none transition-all duration-150 focus:border-gray-300"
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSeacrchTerm(event.target.value);
          }}
        />
      </div>
      <div className=" w-full bg-light-gray py-8 md:py-24">
        <div className="container w-full md:grid md:grid-cols-3 md:gap-12 xl:gap-20">
          {cases
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.node.blocks[1].attributes.content
                  .toLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return val;
              }
            })
            .map((videoBox) => {
              return (
                <div
                  className="bg-white rounded-xl md:rounded-2xl mb-8 md:mb-0 shadow-lg p-4 md:p-6 "
                  key={videoBox.node.id}
                >
                  {console.log(videoBox)}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: videoBox.node.blocks[0].saveContent,
                    }}
                  />
                  <h3>{videoBox.node.blocks[1].attributes.content}</h3>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
export default CasesShowcase;