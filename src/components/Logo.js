import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Logo = ({ type, className }) => {
  const data = useStaticQuery(graphql`
    query imageQuery {
      allFile(filter: { relativeDirectory: { eq: "logos" } }) {
        edges {
          node {
            id
            dir
            name
            publicURL
          }
        }
      }
    }
  `);

  const logoImages = data.allFile.edges;
  return (
    <div>
      {logoImages.map((image) => {
        return image.node.name === `billig-animation-logo-${type}` ? (
          <img
            key={image.node.id}
            className="h-full w-full"
            src={image.node.publicURL}
            alt="Billig animation logo"
          />
        ) : (
          ""
        );
      })}
    </div>
  );
};
export default Logo;
