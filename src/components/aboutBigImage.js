import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const OurHistoryImage = () => {
  const data = useStaticQuery(graphql`
    query OurHistoryImage {
      allFile(filter: { name: { eq: "billig-animation-team-picture" } }) {
        edges {
          node {
            id
            childImageSharp {
              id
              fluid(maxWidth: 2000, quality: 100) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className="w-full h-72 md:h-96 xl:h-112 mt-8 md:mt-24 gsap-anim-item-our-history flex justify-center">
      <Img
        style={{ height: "100%", width: "100%" }}
        imgStyle={{ objectPosition: "center center" }}
        fluid={data.allFile.edges[0].node.childImageSharp.fluid}
      />
    </div>
  );
};
export default OurHistoryImage;
