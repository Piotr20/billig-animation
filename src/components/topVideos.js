import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const TopVideos = () => {
  const data = useStaticQuery(graphql`
    query TopVideosQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "top-videos" } } } }
        }
      ) {
        edges {
          node {
            id
            blocks {
              ... on WpCoreParagraphBlock {
                dynamicContent
                originalContent
                attributes {
                  ... on WpCoreParagraphBlockAttributes {
                    content
                  }
                }
              }
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

  const videos = data.allWpPost.edges;
  return (
    <section className=" bg-light-gray my-8 md:my-24 py-4 md:py-12">
      <div className="container flex flex-col items-start">
        <h2 className="pt-4 pb-2 md:pt-6 md:pb-3">Vores cases</h2>
        <p>Her er nogle af de animationsfilm vi har lavet til firmaer.</p>
        <div className="w-full overflow-hidden py-8 md:py-12">
          <Carousel
            className="cursor-pointer"
            emulateTouch={true}
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
          >
            {videos.map((video, key) => {
              return (
                <div key={video.node.id} className="flex justify-center">
                  <div className="w-11/12 md:w-2/3 bg-white rounded-xl md:rounded-2xl overflow-hidden p-4 md:p-6">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: video.node.blocks[0].saveContent,
                      }}
                    ></div>
                    <div>
                      <h3 className="text-left">
                        {video.node.blocks[1].attributes.content}
                      </h3>
                      <p className="text-left">
                        {video.node.blocks[2].attributes.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <Link
          className="bg-black text-lg md:text-xl xl:text-2xl self-center text-white hover:bg-white hover:text-black transition-colors duration-300 rounded-2xl md:rounded-3xl xl:rounded-4xl py-1 px-5 md:py-2 md:px-7 shadow-custom"
          to="/cases"
        >
          Flere cases
        </Link>
      </div>
    </section>
  );
};
export default TopVideos;
