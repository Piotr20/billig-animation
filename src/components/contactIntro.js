import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ContactIntro = () => {
  useEffect(() => {
    gsap.from(".gsap-anim-item-contact-intro", {
      scrollTrigger: {
        trigger: ".gsap-container-contact-intro",
        markers: false,
        start: "-35% top",
        end: "bottom 50%",
      },
      stagger: 0.05,
      duration: 0.3,
      y: 30,
      opacity: 0,
    });
  }, []);
  const data = useStaticQuery(graphql`
    query ContactIntroQuery {
      allWpPost(
        filter: {
          categories: {
            nodes: { elemMatch: { name: { eq: "contact-intro" } } }
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
              ... on WpCoreHeadingBlock {
                attributes {
                  ... on WpCoreHeadingBlockAttributes {
                    content
                  }
                }
                name
              }
              ... on WpCoreImageBlock {
                attributes {
                  ... on WpCoreImageBlockAttributes {
                    id
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

  const contactIntroContent = data.allWpPost.edges[0].node.blocks;
  return (
    <section className="container gsap-container-contact-intro mt-24 md:mt-32 py-8  md:flex md:justify-between md:items-center">
      <div className="md:w-1/2 xl:w-1/3">
        <h2 className="gsap-anim-item-contact-intro">
          {contactIntroContent[0].attributes.content}
        </h2>
        <p className="gsap-anim-item-contact-intro py-2 md:py-4">
          {contactIntroContent[1].attributes.content}
        </p>
        <div className="gsap-anim-item-contact-intro">
          <a
            className="font-semibold hover:underline "
            href={`tel:${contactIntroContent[2].attributes.content}`}
          >
            <p className="pt-2 ">{contactIntroContent[2].attributes.content}</p>
          </a>
          <a
            className="font-semibold hover:underline "
            href={`mailTo:${contactIntroContent[3].attributes.content}`}
          >
            <p className="pb-2 ">{contactIntroContent[3].attributes.content}</p>
          </a>
        </div>
        <div className="flex pt-2 md:pt-4 xl:pt-8 gsap-anim-item-contact-intro">
          <a
            className=" font-semibold"
            href="https://www.facebook.com/billiganimation.dk"
          >
            <FaFacebook className=" w-10 h-10 md:w-14 md:h-14 xl:w-16 xl:h-16 mr-6 lg:mr-8 xl:mr-12" />
            Facebook
          </a>
          <a
            className=" font-semibold"
            href="https://www.youtube.com/channel/UCy3csNLhlbNGqaPsy8GKX1w"
          >
            <FaYoutube className=" w-10 h-10 md:w-14 md:h-14 xl:w-16 xl:h-16" />
            Youtube
          </a>
        </div>
      </div>
      <div className="py-4 gsap-anim-item-contact-intro md:w-1/3 xl:w-2/5">
        <img
          src={contactIntroContent[4].attributes.url}
          alt={contactIntroContent[4].attributes.alt}
        />
      </div>
    </section>
  );
};
export default ContactIntro;
