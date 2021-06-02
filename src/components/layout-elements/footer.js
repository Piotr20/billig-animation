import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import FooterNav from "./footerNav";
import ShapeGroup from "../shapeGroup";
import Logo from "../Logo";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = ({ footerClass }) => {
  //Footer content query
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
  //Footer component code
  return (
    <footer className={`bg-black ${footerClass} w-full`}>
      <div className="container relative text-white md:py-6 w-full">
        <Link
          className={`w-40 py-6 md:py-8 md:w-40 xl:w-56 inline-block`}
          to="/"
        >
          <Logo type="white" />
        </Link>
        <ShapeGroup className="absolute right-8 top-0 transform -translate-y-1/2 scale-150 md:scale-200 xl:scale-250" />
        <div className="w-full  md:flex md:justify-between">
          <div className=" text-white">
            <p className=" text-white max-w-short-text">
              {contentBlocks[0].attributes.content}
            </p>
            <div className="py-4 lg:py-8">
              <a
                className="hover:underline"
                href={`tel:${contentBlocks[1].attributes.content}`}
              >
                <p className="text-white">
                  {contentBlocks[1].attributes.content}
                </p>
              </a>
              <a
                className="hover:underline"
                href={`mailTo:${contentBlocks[2].attributes.content}`}
              >
                <p className="text-white">
                  {contentBlocks[2].attributes.content}
                </p>
              </a>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-col md:-mt-14 xl:-mt-16">
            <FooterNav />
            <div className="flex md:pt-4 xl:pt-8 ">
              <a
                className=""
                href="https://www.facebook.com/billiganimation.dk"
              >
                <FaFacebook className="w-10 h-10 md:w-14 md:h-14 xl:w-16 xl:h-16 mr-6 lg:mr-8 xl:mr-12" />
                Facebook
              </a>
              <a href="https://www.youtube.com/channel/UCy3csNLhlbNGqaPsy8GKX1w">
                <FaYoutube className="w-10 h-10 md:w-14 md:h-14 xl:w-16 xl:h-16" />
                Youtube
              </a>
            </div>
          </div>
          <div className="py-8 lg:py-0">
            <p className="text-white">{contentBlocks[3].attributes.content}</p>
            <p className="text-white">{contentBlocks[4].attributes.content}</p>
            <img
              className="pt-4 md:pt-3 "
              src={contentBlocks[5].attributes.url}
              alt={contentBlocks[5].attributes.alt}
            />
          </div>
        </div>
        <div className="w-full border-t-2 border-white md:mt-2 xl:mt-6 py-1 md:py-2 flex flex-col md:flex-row md:justify-between">
          <p className="text-white text-center md:text-left text-md md:text-lg xl:text-xl">
            Copyrights Billig Animation © 2021
          </p>
          <div className="flex justify-between pt-1 md:pt-0 text-md md:text-lg xl:text-xl">
            <Link className="md:pr-8 xl:pr-10" to="cookies">
              Cookies & Privatlivspolitik
            </Link>
            <Link to="terms">Handelsbetingelser</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
