import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShapeGroup from "./shapeGroup";
gsap.registerPlugin(ScrollTrigger);

const ProductionVideo = ({ className }) => {
  useEffect(() => {
    gsap.from(".gsap-anim-production-video", {
      scrollTrigger: {
        trigger: ".gsap-conainer-production-video",
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
    query ProductionVideoQuery {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { name: { eq: "production-video" } } }
          }
        }
      ) {
        edges {
          node {
            id
            blocks {
              saveContent
            }
          }
        }
      }
    }
  `);

  return (
    <div
      className={`w-full relative gsap-conainer-production-video gsap-anim-production-video ${className}`}
    >
      <div
        className="w-full   bg-white rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl overflow-hidden p-4 md:p-6"
        dangerouslySetInnerHTML={{
          __html: data.allWpPost.edges[0].node.blocks[0].saveContent,
        }}
      ></div>
      <ShapeGroup className="absolute right-0 xl:right-6 z-30 top-0 transform -translate-x-1/2 scale-150 md:scale-200 " />
    </div>
  );
};
export default ProductionVideo;
