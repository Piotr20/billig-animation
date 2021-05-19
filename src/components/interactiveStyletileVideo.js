import React, { useEffect, useRef, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { BiCheck } from "@react-icons/all-files/bi/BiCheck";
import ShapeGroup from "./shapeGroup";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const InteractiveVideo = () => {
  useEffect(() => {
    gsap.from(".gsap-anim-item-styletile", {
      scrollTrigger: {
        trigger: ".gsap-container-styletile",
        markers: false,
        start: "top 30%",
        end: "bottom top",
      },
      stagger: 0.15,
      duration: 0.3,
      y: 30,
      opacity: 0,
    });
  }, []);
  const [cartoonStyle, setCartoonStyle] = useState(false);
  const [cartoonStyleSpeak, setCartoonStyleSpeak] = useState(false);
  const [cartoonStyleSoundEffects, setCartoonStyleSoundEffects] =
    useState(false);
  const [cartoonStyleMusic, setCartoonStyleMusic] = useState(false);
  const [cartoonStyleCaptions, setCartoonStyleCaptions] = useState(false);
  const [cartoonStyleAll, setCartoonStyleAll] = useState(false);
  const [flatStyleAll, setFlatStyleAll] = useState(false);
  const [whiteboardStyleAll, setWhiteboardStyleAll] = useState(false);
  const cartoonStyleRef = useRef(null);
  const cartoonStyleSpeakRef = useRef(null);
  const cartoonStyleSoundEffectsRef = useRef(null);
  const cartoonStyleMusicRef = useRef(null);
  const cartoonStyleCaptionsRef = useRef(null);
  const cartoonStyleAllRef = useRef(null);
  const flatStyleAllRef = useRef(null);
  const whiteboardStyleAllRef = useRef(null);
  function videoPause() {
    cartoonStyleRef.current.pause();
    cartoonStyleSpeakRef.current.pause();
    cartoonStyleSoundEffectsRef.current.pause();
    cartoonStyleMusicRef.current.pause();
    cartoonStyleCaptionsRef.current.pause();
    cartoonStyleAllRef.current.pause();
    flatStyleAllRef.current.pause();
    whiteboardStyleAllRef.current.pause();
    setCartoonStyle(false);
    setCartoonStyleSpeak(false);
    setCartoonStyleSoundEffects(false);
    setCartoonStyleMusic(false);
    setCartoonStyleCaptions(false);
    setCartoonStyleAll(false);
    setFlatStyleAll(false);
    setWhiteboardStyleAll(false);
  }
  const data = useStaticQuery(graphql`
    query InteractiveVideoQuery {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { name: { eq: "interactive-video" } } }
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
              }
              ... on WpCoreHeadingBlock {
                attributes {
                  ... on WpCoreHeadingBlockAttributes {
                    content
                  }
                }
              }
              ... on WpCoreVideoBlock {
                attributes {
                  src
                }
              }
            }
          }
        }
      }
    }
  `);

  const videos = data.allWpPost.edges;

  return (
    <section className="container py-8 md:py-24 gsap-container-styletile">
      <h2 className="py-4 md:py-12 gsap-anim-item-styletile">
        {videos[0].node.blocks[0].attributes.content}
      </h2>
      <p className="pt-2 pb-1 md:pt-4 md:pb-2 gsap-anim-item-styletile">
        {videos[0].node.blocks[1].attributes.content}
      </p>
      <div className="md:flex gsap-anim-item-styletile md:flex-row-reverse md:justify-between md:items-center mt-4 md:mt-16">
        <div className="relative rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 md:w-7/10">
          <ShapeGroup className="absolute right-0 xl:right-6 z-30 top-0 transform -translate-x-1/2 scale-150 md:scale-200 " />
          <video
            controls={true}
            className={``}
            src={videos[0].node.blocks[3].attributes.src}
          >
            <track
              src=""
              kind="captions"
              srcLang="en"
              label="english_captions"
            ></track>
          </video>
          <video
            className={`absolute top-0 left-0 p-4 md:p-6 ${
              cartoonStyle === true ? `block` : `hidden`
            }`}
            ref={cartoonStyleRef}
            src={videos[0].node.blocks[4].attributes.src}
          >
            <track
              src=""
              kind="captions"
              srcLang="en"
              label="english_captions"
            ></track>
          </video>
          <video
            className={`absolute top-0 left-0 p-4 md:p-6 ${
              cartoonStyleSpeak === true ? `block` : `hidden`
            }`}
            ref={cartoonStyleSpeakRef}
            src={videos[0].node.blocks[5].attributes.src}
          >
            <track
              src=""
              kind="captions"
              srcLang="en"
              label="english_captions"
            ></track>
          </video>
          <video
            className={`absolute top-0 left-0 p-4 md:p-6 ${
              cartoonStyleSoundEffects === true ? `block` : `hidden`
            }`}
            ref={cartoonStyleSoundEffectsRef}
            src={videos[0].node.blocks[6].attributes.src}
          >
            <track
              src=""
              kind="captions"
              srcLang="en"
              label="english_captions"
            ></track>
          </video>
          <video
            className={`absolute top-0 left-0 p-4 md:p-6 ${
              cartoonStyleMusic === true ? `block` : `hidden`
            }`}
            ref={cartoonStyleMusicRef}
            src={videos[0].node.blocks[7].attributes.src}
          >
            <track
              src=""
              kind="captions"
              srcLang="en"
              label="english_captions"
            ></track>
          </video>
          <video
            className={`absolute top-0 left-0 p-4 md:p-6 ${
              cartoonStyleCaptions === true ? `block` : `hidden`
            }`}
            ref={cartoonStyleCaptionsRef}
            src={videos[0].node.blocks[8].attributes.src}
          >
            <track
              src=""
              kind="captions"
              srcLang="en"
              label="english_captions"
            ></track>
          </video>
          <video
            className={`absolute top-0 left-0 p-4 md:p-6 ${
              cartoonStyleAll === true ? `block` : `hidden`
            }`}
            ref={cartoonStyleAllRef}
            src={videos[0].node.blocks[9].attributes.src}
          >
            <track
              src=""
              kind="captions"
              srcLang="en"
              label="english_captions"
            ></track>
          </video>
          <video
            className={`absolute top-0 left-0 p-4 md:p-6 ${
              whiteboardStyleAll === true ? `block` : `hidden`
            }`}
            ref={whiteboardStyleAllRef}
            src={videos[0].node.blocks[11].attributes.src}
          >
            <track
              src=""
              kind="captions"
              srcLang="en"
              label="english_captions"
            ></track>
          </video>
          <video
            className={`absolute top-0 left-0 p-4 md:p-6 ${
              flatStyleAll === true ? `block` : `hidden`
            }`}
            ref={flatStyleAllRef}
            src={videos[0].node.blocks[13].attributes.src}
          >
            <track
              src=""
              kind="captions"
              srcLang="en"
              label="english_captions"
            ></track>
          </video>
        </div>
        <div className="mt-8 md:mt-0 flex flex-col">
          <label className="cursor-pointer font-semibold text-lg md:text-xl xl:text-2xl text-black flex items-center">
            <input
              checked={cartoonStyle}
              onChange={() => {
                videoPause();
                setCartoonStyle(!cartoonStyle);
                console.log(cartoonStyle);
                if (cartoonStyle === false) {
                  cartoonStyleRef.current.load();
                  cartoonStyleRef.current.play();
                } else if (cartoonStyle === true) {
                  cartoonStyleRef.current.pause();
                }
              }}
              className="mr-4 cursor-pointer relative checkbox"
              type="checkbox"
            />
            Cartoon
            <div className="absolute custom-checkbox bg-yellow flex items-center justify-center">
              <BiCheck className="w-full h-full" />
            </div>
          </label>
          <label className="cursor-pointer relative text-lg md:text-xl xl:text-2xl text-black flex items-center">
            <input
              checked={flatStyleAll}
              onChange={() => {
                videoPause();
                setFlatStyleAll(!flatStyleAll);

                if (flatStyleAll === false) {
                  flatStyleAllRef.current.load();
                  flatStyleAllRef.current.play();
                  setCartoonStyle(false);
                  setCartoonStyleSpeak(true);
                  setCartoonStyleSoundEffects(true);
                  setCartoonStyleMusic(true);
                  setCartoonStyleCaptions(true);
                  setCartoonStyleAll(true);
                } else if (flatStyleAll === true) {
                  flatStyleAllRef.current.pause();
                }
              }}
              className="mr-4 cursor-pointer checkbox"
              type="checkbox"
            />
            Flat{" "}
            <div className="absolute top-0 left-0 custom-checkbox bg-yellow flex items-center justify-center">
              <BiCheck className="w-full h-full" />
            </div>
          </label>
          <label className="cursor-pointer relative text-lg md:text-xl xl:text-2xl text-black flex items-center">
            <input
              checked={whiteboardStyleAll}
              onChange={() => {
                videoPause();
                setWhiteboardStyleAll(!whiteboardStyleAll);

                if (whiteboardStyleAll === false) {
                  whiteboardStyleAllRef.current.load();
                  whiteboardStyleAllRef.current.play();
                  setCartoonStyle(false);
                  setCartoonStyleSpeak(true);
                  setCartoonStyleSoundEffects(true);
                  setCartoonStyleMusic(true);
                  setCartoonStyleCaptions(true);
                  setCartoonStyleAll(true);
                } else if (whiteboardStyleAll === true) {
                  whiteboardStyleAllRef.current.pause();
                }
              }}
              className="mr-4 cursor-pointer relative checkbox"
              type="checkbox"
            />
            Whiteboard{" "}
            <div className="absolute top-0 left-0 custom-checkbox bg-yellow flex items-center justify-center">
              <BiCheck className="w-full h-full" />
            </div>
          </label>
          <label className="cursor-pointer relative text-lg md:text-xl xl:text-2xl text-black flex items-center">
            <input
              checked={cartoonStyleSpeak}
              onChange={() => {
                videoPause();
                setCartoonStyleSpeak(!cartoonStyleSpeak);
                console.log(cartoonStyleSpeak);
                if (cartoonStyleSpeak === false) {
                  cartoonStyleSpeakRef.current.load();
                  cartoonStyleSpeakRef.current.play();
                  setCartoonStyle(true);
                } else if (cartoonStyleSpeak === true) {
                  cartoonStyleSpeakRef.current.pause();
                }
              }}
              className="mr-4 cursor-pointer relative checkbox"
              type="checkbox"
            />
            Speak{" "}
            <div className="absolute top-0 left-0 custom-checkbox bg-yellow flex items-center justify-center">
              <BiCheck className="w-full h-full" />
            </div>
          </label>
          <label className="cursor-pointer relative text-lg md:text-xl xl:text-2xl text-black flex items-center">
            <input
              checked={cartoonStyleSoundEffects}
              onChange={() => {
                videoPause();
                setCartoonStyleSoundEffects(!cartoonStyleSoundEffects);
                console.log(cartoonStyleSoundEffects);
                if (cartoonStyleSoundEffects === false) {
                  cartoonStyleSoundEffectsRef.current.load();
                  cartoonStyleSoundEffectsRef.current.play();
                  setCartoonStyle(true);
                } else if (cartoonStyleSoundEffects === true) {
                  cartoonStyleSoundEffectsRef.current.pause();
                }
              }}
              className="mr-4 cursor-pointer relative checkbox"
              type="checkbox"
            />
            Sound effects{" "}
            <div className="absolute top-0 left-0 custom-checkbox bg-yellow flex items-center justify-center">
              <BiCheck className="w-full h-full" />
            </div>
          </label>
          <label className="cursor-pointer relative text-lg md:text-xl xl:text-2xl text-black flex items-center">
            <input
              checked={cartoonStyleMusic}
              onChange={() => {
                videoPause();
                setCartoonStyleMusic(!cartoonStyleMusic);

                if (cartoonStyleMusic === false) {
                  cartoonStyleMusicRef.current.load();
                  cartoonStyleMusicRef.current.play();
                  setCartoonStyle(true);
                } else if (cartoonStyleMusic === true) {
                  cartoonStyleMusicRef.current.pause();
                }
              }}
              className="mr-4 cursor-pointer  checkbox"
              type="checkbox"
            />
            Background music{" "}
            <div className="absolute top-0 left-0  custom-checkbox bg-yellow flex items-center justify-center">
              <BiCheck className="w-full h-full" />
            </div>
          </label>
          <label className="cursor-pointer relative text-lg md:text-xl xl:text-2xl text-black flex items-center">
            <input
              checked={cartoonStyleCaptions}
              onChange={() => {
                videoPause();
                setCartoonStyleCaptions(!cartoonStyleCaptions);

                if (cartoonStyleCaptions === false) {
                  cartoonStyleCaptionsRef.current.load();
                  cartoonStyleCaptionsRef.current.play();
                  setCartoonStyle(true);
                } else if (cartoonStyleCaptions === true) {
                  cartoonStyleCaptionsRef.current.pause();
                }
              }}
              className="mr-4 cursor-pointer relative checkbox"
              type="checkbox"
            />
            Captions{" "}
            <div className="absolute top-0 left-0 custom-checkbox bg-yellow flex items-center justify-center">
              <BiCheck className="w-full h-full" />
            </div>
          </label>
          <label className="cursor-pointer relative text-lg md:text-xl xl:text-2xl text-black flex items-center">
            <input
              checked={cartoonStyleAll}
              onChange={() => {
                videoPause();
                setCartoonStyleAll(!cartoonStyleAll);

                if (cartoonStyleAll === false) {
                  cartoonStyleAllRef.current.load();
                  cartoonStyleAllRef.current.play();
                  setCartoonStyle(true);
                  setCartoonStyleSpeak(true);
                  setCartoonStyleSoundEffects(true);
                  setCartoonStyleMusic(true);
                  setCartoonStyleCaptions(true);
                } else if (cartoonStyleAll === true) {
                  cartoonStyleAllRef.current.pause();
                }
              }}
              className="mr-4 cursor-pointer checkbox"
              type="checkbox"
            />
            All
            <div className="absolute top-0 left-0 custom-checkbox bg-yellow flex items-center justify-center">
              <BiCheck className="w-full h-full" />
            </div>
          </label>
        </div>
      </div>
    </section>
  );
};
export default InteractiveVideo;
