import React, { useEffect } from "react";
import ShapeGroup from "./shapeGroup";
import { graphql, useStaticQuery } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const IntroTextimonials = () => {
  useEffect(() => {
    gsap.from(".gsap-anim-item", {
      scrollTrigger: {
        trigger: ".gsap-conainer",
        markers: false,
        start: "top bottom",
        end: "bottom 50%",
      },

      duration: 0.3,
      y: 30,
      opacity: 0,
    });
  }, []);
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
    <section className="container gsap-container w-full mt-36 md:mt-44 flex flex-col-reverse md:flex-row md:justify-between md:items-center">
      <div className=" md:w-1/3 md:pr-12 py-6 ">
        <div
          className="py-2 md:py-4 px-4 md:px-0 gsap-anim-item"
          dangerouslySetInnerHTML={{ __html: introPost[0].saveContent }}
        />
        <div
          className="gsap-anim-item px-4 md:px-0 "
          dangerouslySetInnerHTML={{ __html: introPost[1].saveContent }}
        />
      </div>
      <div className="w-full md:w-3/5 relative">
        <div
          className="w-full gsap-anim-item  bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden p-4 md:p-6"
          dangerouslySetInnerHTML={{ __html: introPost[2].saveContent }}
        ></div>
        <ShapeGroup className="absolute right-0 xl:right-6 z-30 top-0 transform -translate-x-1/2 scale-150 md:scale-200 " />
      </div>
    </section>
  );
};
export default IntroTextimonials;
