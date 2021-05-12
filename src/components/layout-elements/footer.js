import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import FooterNav from "./footerNav";
import ShapeGroup from "../shapeGroup";
import Logo from "../Logo";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const footerContentQuery = useStaticQuery(graphql`
    query FooterContentQuery {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { name: { eq: "footer-content" } } }
          }
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
              ... on WpCoreImageBlock {
                attributes {
                  ... on WpCoreImageBlockAttributes {
                    alt
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const contentBlocks = footerContentQuery.allWpPost.edges[0].node.blocks;
  console.log(contentBlocks);
  return (
    <footer className="bg-black mt-4 md:mt-12">
      <div className="container relative text-white">
        <Link
          className={`w-40 py-6 md:py-8 md:w-40 xl:w-56 inline-block`}
          to="/"
        >
          <Logo type="white" />
        </Link>
        <ShapeGroup className="absolute right-8 top-0 transform -translate-y-1/2 scale-150 md:scale-200 xl:scale-250" />
        <div className="w-full  md:flex md:justify-between">
          <div className="">
            <p className=" max-w-short-text">
              {contentBlocks[0].attributes.content}
            </p>
            <div className="py-4 lg:py-8">
              <a href={`tel:${contentBlocks[1].attributes.content}`}>
                <p>{contentBlocks[1].attributes.content}</p>
              </a>
              <a
                className=" underline"
                href={`mailTo:${contentBlocks[2].attributes.content}`}
              >
                <p>{contentBlocks[2].attributes.content}</p>
              </a>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-col">
            <FooterNav />
            <div className="flex md:pt-4 xl:pt-8">
              <a href="https://www.facebook.com/billiganimation.dk">
                <FaFacebook className="w-10 h-10 md:w-14 md:h-14 xl:w-16 xl:h-16 mr-6 lg:mr-8 xl:mr-12" />
              </a>
              <a href="https://www.youtube.com/channel/UCy3csNLhlbNGqaPsy8GKX1w">
                <FaYoutube className="w-10 h-10 md:w-14 md:h-14 xl:w-16 xl:h-16" />
              </a>
            </div>
          </div>
          <div className="py-8 lg:py-0">
            <p>{contentBlocks[3].attributes.content}</p>
            <p>{contentBlocks[4].attributes.content}</p>
            <img
              className="pt-4 md:pt-3 "
              src={contentBlocks[5].attributes.url}
              alt={contentBlocks[5].attributes.alt}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
