import React from "react";
import SEO from "../components/Seo";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Footer from "../components/layout-elements/footer";
import Header from "../components/layout-elements/header";

// markup
const NotFoundPage = () => {
  // 404 page and it's imported components as well as metadata and static query
  const data = useStaticQuery(graphql`
    query Image404Query {
      allFile(filter: { name: { eq: "404" } }) {
        edges {
          node {
            id
            childImageSharp {
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
    <>
      <SEO
        title="404 not found"
        description="404 page not found billig animation"
        keywords="404 not found"
      />
      <main>
        <Header />
        <div className="flex flex-col container mt-20">
          <div className="w-full md:w-1/2 self-center">
            <Img
              style={{ height: "100%", width: "100%" }}
              imgStyle={{ objectPosition: "center center" }}
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
            />
          </div>
          <h2 className="text-center">Siden kunne desværre ikke findes</h2>
          <Link
            className="mx-auto py-2 md:py-4 text-xl md:text-3xl xl:text-5xl font-semibold text-black"
            to="/"
          >
            Til Forside
          </Link>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default NotFoundPage;
