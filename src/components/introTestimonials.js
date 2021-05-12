import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const IntroTextimonials = () => {
  const data = useStaticQuery(graphql`
    query IntroQuery {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { name: { eq: "intro-section" } } }
          }
        }
      ) {
        nodes {
          blocks {
            saveContent
          }
        }
      }
    }
  `);

  const introPost = data.allWpPost.nodes[0].blocks;

  return (
    <section className="container w-full mt-36 md:mt-44 flex flex-col-reverse md:flex-row md:justify-between md:items-center">
      <div className=" md:w-1/3 pr-12">
        <div
          className="py-2 md:py-4"
          dangerouslySetInnerHTML={{ __html: introPost[0].saveContent }}
        />
        <div dangerouslySetInnerHTML={{ __html: introPost[1].saveContent }} />
      </div>
      <div
        className="relative w-full md:w-3/5"
        dangerouslySetInnerHTML={{ __html: introPost[2].saveContent }}
      ></div>
    </section>
  );
};
export default IntroTextimonials;
