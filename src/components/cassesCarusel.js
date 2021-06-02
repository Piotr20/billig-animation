import React, { useState, useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CasesShowcase = () => {
  useEffect(() => {
    gsap.from(".gsap-anim-item-cases", {
      scrollTrigger: {
        trigger: ".gsap-container-cases",
        markers: false,
        start: "top 60%",
        end: "bottom 50%",
      },
      stagger: 0.15,
      duration: 0.3,
      y: 30,
      opacity: 0,
    });
  }, []);
  const [searchTerm, setSeacrchTerm] = useState("");
  const [sliderValue, setSliderValue] = useState(30);
  const sliderRef = useRef(null);
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
    <section className=" mt-24 md:mt-16 py-8 md:py-24 gsap-container-cases">
      <h2 className="text-center mb-8 md:mb-16">Alle cases</h2>
      <div className="w-full h-20 px-8 lg:px-10 2xl:px-24 flex items-center justify-center md:justify-between shadow-md bg-white">
        <div className="container h-20 flex items-center justify-center md:justify-between ">
          <input
            className="text-lg md:text-xl xl:text-2xl text-black w-11/12 md:w-1/3 xl:w-3/10 border-black border-2 xl:border-4  pl-4 md:pl-6 py-1 md:py-2 rounded-2xl md:rounded-3xl outline-none transition-all duration-150 focus:border-gray-300"
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              //triggering the filter functions and assigning value to state
              setSeacrchTerm(event.target.value);
            }}
          />
          <div className="hidden md:flex items-center">
            <div className="mx-8 border-2 border-black py-1 px-5 rounded-xl flex items-center">
              <span className="text-lg mr-4 md:text-xl xl:text-2xl font-bold flex justify-center min-w-4-letters">
                {sliderValue}
              </span>
              <input
                ref={sliderRef}
                className="cases-slider"
                type="range"
                min={15}
                step={15}
                max={180}
                defaultValue="30"
                onChange={(event) => setSliderValue(event.target.value)}
              />
            </div>
            <select
              className="text-lg mx-8 md:text-xl xl:text-2xl font-bold outline-none border-2 border-black py-1 px-3 hidden md:block  rounded-xl"
              id="stilarter"
            >
              <option defaultValue="">Stilarter</option>
              <option value="cartoon">Cartoon</option>
              <option value="flat">Flat</option>
              <option value="whiteboard">Whiteboard</option>
              Audi
            </select>
          </div>
        </div>
      </div>
      <div className=" w-full bg-light-gray py-8 md:py-24">
        <div className="container w-full md:grid md:grid-cols-3 md:gap-12 xl:gap-16">
          {cases
            .filter((val) => {
              //filtering the data and conditionaly passing it to a map
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
              //mapping thriugh filtered data
              return (
                <div
                  className="bg-white rounded-xl md:rounded-2xl mb-8 md:mb-0 shadow-lg p-4 md:p-6 md:pb-0  gsap-anim-item-cases"
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
